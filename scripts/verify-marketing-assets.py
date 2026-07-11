#!/usr/bin/env python3
"""Verify asset inventory, UTM targets, QR decoding and SVG requirements."""

from __future__ import annotations

import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import parse_qs, urlparse
from xml.etree import ElementTree as ET

try:
    import cv2
except ImportError as exc:  # pragma: no cover - developer guidance
    raise SystemExit(
        "OpenCV is required only for QR QA. Install opencv-python in a development environment."
    ) from exc


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
MARKETING = PUBLIC / "marketing"
MANIFEST_PATH = MARKETING / "manifest.json"
EXPECTED_DOMAIN = "www.dranatalyjimenez.com"
EXPECTED_WHATSAPP = "573128311449"
EXPECTED_QR_DESTINATIONS = 8
EXPECTED_QR_VARIANTS = 4
EXPECTED_LINES = 6
EXPECTED_FORMATS = 7


def asset_path(web_path: str) -> Path:
    return PUBLIC / web_path.lstrip("/")


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(65536), b""):
            digest.update(chunk)
    return digest.hexdigest()


def require(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


def parse_dimension(value: str | None) -> int:
    require(value is not None, "SVG is missing width or height")
    return int(round(float(value)))


def validate_target(destination: dict) -> None:
    parsed = urlparse(destination["target"])
    if destination["id"] == "whatsapp-directo":
        require(parsed.netloc == "wa.me", "Direct WhatsApp QR must use wa.me")
        require(parsed.path == f"/{EXPECTED_WHATSAPP}", "Direct WhatsApp QR uses the wrong number")
        query = parse_qs(parsed.query)
        require(bool(query.get("text", [""])[0].strip()), "Direct WhatsApp QR needs a prefilled message")
        require(not any(key.startswith("utm_") for key in query), "WhatsApp direct QR must not pretend to support UTM")
        return

    require(parsed.scheme == "https", f"Campaign target must use HTTPS: {destination['target']}")
    require(parsed.netloc == EXPECTED_DOMAIN, f"Campaign target must use canonical www domain: {destination['target']}")
    query = parse_qs(parsed.query)
    require(query.get("utm_source") == ["qr"], f"utm_source mismatch: {destination['id']}")
    require(query.get("utm_medium") == ["offline"], f"utm_medium mismatch: {destination['id']}")
    require(query.get("utm_content") == ["qr_print"], f"utm_content mismatch: {destination['id']}")
    require(len(query.get("utm_campaign", [])) == 1, f"utm_campaign missing: {destination['id']}")


def validate_qr_png(path: Path, expected: str) -> dict:
    image = cv2.imread(str(path), cv2.IMREAD_COLOR)
    require(image is not None, f"Could not read QR PNG: {path}")
    decoded, points, _ = cv2.QRCodeDetector().detectAndDecode(image)
    require(points is not None, f"QR was not detected: {path}")
    require(decoded == expected, f"QR target mismatch in {path.name}: {decoded!r} != {expected!r}")
    height, width = image.shape[:2]
    require(min(width, height) >= 700, f"QR PNG is too small for reliable print use: {path.name}")
    return {"path": str(path.relative_to(ROOT)).replace("\\", "/"), "width": width, "height": height, "sha256": sha256(path)}


def validate_template(template: dict) -> tuple[dict, dict]:
    svg_path = asset_path(template["master"])
    png_path = asset_path(template["preview"])
    require(svg_path.exists(), f"Missing template SVG: {svg_path}")
    require(png_path.exists(), f"Missing template preview: {png_path}")

    tree = ET.parse(svg_path)
    root = tree.getroot()
    expected = template["dimensions"]
    require(parse_dimension(root.get("width")) == int(expected["width"]), f"Wrong SVG width: {svg_path.name}")
    require(parse_dimension(root.get("height")) == int(expected["height"]), f"Wrong SVG height: {svg_path.name}")
    require(root.get("data-campaign") == template["campaign"], f"Missing campaign metadata: {svg_path.name}")
    require(root.get("data-format") == template["format"], f"Missing format metadata: {svg_path.name}")

    source = svg_path.read_text(encoding="utf-8")
    require('id="safe-zone"' in source, f"Safe-zone layer missing: {svg_path.name}")
    require('id="brand"' in source, f"Brand layer missing: {svg_path.name}")
    require('id="cta"' in source, f"CTA layer missing: {svg_path.name}")
    require('class="headline"' in source, f"Editable headline missing: {svg_path.name}")
    require('id="short-url"' in source, f"Short URL missing: {svg_path.name}")
    if template["distribution"] == "print":
        require('data-role="qr"' in source, f"Print template QR missing: {svg_path.name}")
    else:
        require('data-role="url"' in source, f"Digital template URL marker missing: {svg_path.name}")

    preview = cv2.imread(str(png_path), cv2.IMREAD_COLOR)
    require(preview is not None, f"Could not read preview PNG: {png_path}")
    preview_height, preview_width = preview.shape[:2]
    expected_ratio = float(expected["width"]) / float(expected["height"])
    actual_ratio = preview_width / preview_height
    require(abs(expected_ratio - actual_ratio) < 0.01, f"Preview ratio mismatch: {png_path.name}")
    require(preview_width <= 900, f"Preview exceeds repository-friendly width: {png_path.name}")
    require(preview_width >= 600 or int(expected["width"]) < 600, f"Preview is too small: {png_path.name}")

    embedded_qr_decoded = False
    if template["distribution"] == "print":
        decoded, points, _ = cv2.QRCodeDetector().detectAndDecode(preview)
        require(points is not None, f"Embedded print QR was not detected: {png_path.name}")
        require(decoded == template["destination"], f"Embedded print QR target mismatch: {png_path.name}")
        embedded_qr_decoded = True

    return (
        {"path": str(svg_path.relative_to(ROOT)).replace("\\", "/"), "sha256": sha256(svg_path)},
        {
            "path": str(png_path.relative_to(ROOT)).replace("\\", "/"),
            "width": preview_width,
            "height": preview_height,
            "sha256": sha256(png_path),
            "embeddedQrDecoded": embedded_qr_decoded,
        },
    )


def main() -> None:
    require(MANIFEST_PATH.exists(), "public/marketing/manifest.json is missing")
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    qr_destinations = manifest["qrDestinations"]
    templates = manifest["templates"]

    require(len(qr_destinations) == EXPECTED_QR_DESTINATIONS, "Expected eight QR destinations")
    require(len(templates) == EXPECTED_LINES * EXPECTED_FORMATS, "Expected 42 editable templates")
    require({item["campaign"] for item in templates} == {"lanzamiento", "urgencias", "sonrisa", "limpieza", "ortodoncia", "valoracion"}, "Visual line inventory mismatch")
    require(len({item["format"] for item in templates}) == EXPECTED_FORMATS, "Format inventory mismatch")
    require(all("reviews" not in item["id"] and "resena" not in item["id"] for item in qr_destinations), "Google review QR must remain pending")

    qr_png_report: list[dict] = []
    qr_svg_report: list[dict] = []
    for destination in qr_destinations:
        validate_target(destination)
        require(len(destination["variants"]) == EXPECTED_QR_VARIANTS, f"Expected four variants: {destination['id']}")
        require({variant["id"] for variant in destination["variants"]} == {"clean", "framed-cta", "light", "mono"}, f"Variant set mismatch: {destination['id']}")
        for variant in destination["variants"]:
            svg_path = asset_path(variant["svg"])
            png_path = asset_path(variant["png"])
            require(svg_path.exists(), f"Missing QR SVG: {svg_path}")
            require(png_path.exists(), f"Missing QR PNG: {png_path}")
            svg_source = svg_path.read_text(encoding="utf-8")
            require(destination["target"].replace("&", "&amp;") in svg_source, f"QR SVG metadata target mismatch: {svg_path.name}")
            ET.parse(svg_path)
            qr_svg_report.append({"path": str(svg_path.relative_to(ROOT)).replace("\\", "/"), "sha256": sha256(svg_path)})
            qr_png_report.append(validate_qr_png(png_path, destination["target"]))

    template_svg_report: list[dict] = []
    preview_report: list[dict] = []
    for template in templates:
        svg_record, preview_record = validate_template(template)
        template_svg_report.append(svg_record)
        preview_report.append(preview_record)

    require(len(list((MARKETING / "qr" / "svg").glob("*.svg"))) == EXPECTED_QR_DESTINATIONS * EXPECTED_QR_VARIANTS, "Unexpected QR SVG count")
    require(len(list((MARKETING / "qr" / "png").glob("*.png"))) == EXPECTED_QR_DESTINATIONS * EXPECTED_QR_VARIANTS, "Unexpected QR PNG count")
    require(len(list((MARKETING / "templates").glob("*.svg"))) == EXPECTED_LINES * EXPECTED_FORMATS, "Unexpected template SVG count")
    require(len(list((MARKETING / "previews").glob("*.png"))) == EXPECTED_LINES * EXPECTED_FORMATS, "Unexpected preview PNG count")

    report = {
        "status": "passed",
        "verifiedAt": datetime.now(timezone.utc).isoformat(),
        "checks": {
            "canonicalDomain": EXPECTED_DOMAIN,
            "whatsappNumber": EXPECTED_WHATSAPP,
            "utmConvention": {"source": "qr", "medium": "offline", "content": "qr_print"},
            "qrDecoder": f"OpenCV {cv2.__version__}",
            "googleReviewsQr": "pending-official-url",
            "runtimeDependenciesAdded": False,
        },
        "counts": {
            "qrDestinations": len(qr_destinations),
            "qrSvgVerified": len(qr_svg_report),
            "qrPngDecoded": len(qr_png_report),
            "visualLines": len({item["campaign"] for item in templates}),
            "formats": len({item["format"] for item in templates}),
            "templateSvgVerified": len(template_svg_report),
            "previewPngVerified": len(preview_report),
            "embeddedTemplateQrDecoded": sum(1 for item in preview_report if item["embeddedQrDecoded"]),
        },
        "assets": {
            "qrSvg": qr_svg_report,
            "qrPng": qr_png_report,
            "templateSvg": template_svg_report,
            "previews": preview_report,
        },
    }
    (MARKETING / "qa-report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n"
    )
    print(
        "Marketing asset QA passed: "
        f"{len(qr_png_report)} QR PNG decoded, {len(template_svg_report)} SVG masters and "
        f"{len(preview_report)} previews verified."
    )


if __name__ == "__main__":
    main()
