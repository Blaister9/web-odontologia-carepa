#!/usr/bin/env python3
"""Generate the editable launch-kit SVG masters and deterministic QR artwork.

Development-only requirement: OpenCV with QRCodeEncoder support. Nothing from
this script is imported by the Next.js application or shipped in its bundle.
"""

from __future__ import annotations

import csv
import html
import json
import textwrap
from datetime import date
from pathlib import Path
from urllib.parse import quote, urlencode, urlparse, parse_qs

try:
    import cv2
except ImportError as exc:  # pragma: no cover - developer guidance
    raise SystemExit(
        "OpenCV is required only to regenerate QR matrices. Install opencv-python "
        "in a development environment; do not add it to runtime dependencies."
    ) from exc


ROOT = Path(__file__).resolve().parents[1]
MARKETING = ROOT / "public" / "marketing"
QR_SVG = MARKETING / "qr" / "svg"
QR_PNG = MARKETING / "qr" / "png"
TEMPLATES = MARKETING / "templates"
PREVIEWS = MARKETING / "previews"

SITE_URL = "https://www.dranatalyjimenez.com"
DISPLAY_DOMAIN = "dranatalyjimenez.com"
WHATSAPP_NUMBER = "573128311449"

PALETTE = {
    "ink": "#153443",
    "inkSoft": "#48616D",
    "muted": "#6F838C",
    "teal": "#0D6B73",
    "tealSoft": "#E4F3EF",
    "mint": "#BFE2D8",
    "gold": "#C79B45",
    "goldSoft": "#F3DFB4",
    "ivory": "#FBF8F1",
    "white": "#FFFFFF",
    "border": "#DFE9E5",
    "danger": "#9A4D3C",
    "coral": "#B85F4B",
}

FORMATS = {
    "feed-square": {
        "label": "Instagram feed cuadrado",
        "width": 1080,
        "height": 1080,
        "safe": {"top": 80, "right": 80, "bottom": 80, "left": 80},
        "distribution": "digital",
    },
    "feed-portrait": {
        "label": "Instagram feed vertical",
        "width": 1080,
        "height": 1350,
        "safe": {"top": 90, "right": 80, "bottom": 110, "left": 80},
        "distribution": "digital",
    },
    "story": {
        "label": "Instagram Story / Estado de WhatsApp",
        "width": 1080,
        "height": 1920,
        "safe": {"top": 250, "right": 90, "bottom": 250, "left": 90},
        "distribution": "digital",
    },
    "meta-horizontal": {
        "label": "Facebook / Meta horizontal",
        "width": 1200,
        "height": 628,
        "safe": {"top": 58, "right": 64, "bottom": 58, "left": 64},
        "distribution": "digital",
    },
    "google-business": {
        "label": "Google Business Profile",
        "width": 1200,
        "height": 900,
        "safe": {"top": 72, "right": 72, "bottom": 72, "left": 72},
        "distribution": "digital",
    },
    "a5": {
        "label": "A5 imprimible",
        "width": 1748,
        "height": 2480,
        "safe": {"top": 142, "right": 142, "bottom": 142, "left": 142},
        "distribution": "print",
        "physicalSize": "148 x 210 mm",
        "dpi": 300,
    },
    "counter-card": {
        "label": "Tarjeta de mostrador",
        "width": 1181,
        "height": 1772,
        "safe": {"top": 96, "right": 96, "bottom": 96, "left": 96},
        "distribution": "print",
        "physicalSize": "100 x 150 mm",
        "dpi": 300,
    },
}

CAMPAIGNS = {
    "lanzamiento": {
        "label": "Lanzamiento del sitio",
        "eyebrow": "NUEVA EXPERIENCIA DIGITAL",
        "headline": "Tu salud oral empieza con una elección clara",
        "support": "Elige lo que necesitas y encuentra un recorrido breve antes de escribirnos.",
        "cta": "Explora tu recorrido",
        "path": "/",
        "destination": "web-general",
        "accent": PALETTE["teal"],
        "accentSoft": PALETTE["mint"],
        "concept": "Portal de recorridos",
    },
    "urgencias": {
        "label": "Urgencias odontológicas",
        "eyebrow": "ORIENTACIÓN INICIAL",
        "headline": "¿Dolor o una molestia dental?",
        "support": "Cuéntanos qué pasó y consulta disponibilidad para una valoración.",
        "cta": "Revisa el recorrido de urgencias",
        "path": "/c/urgencias",
        "destination": "urgencias",
        "accent": PALETTE["coral"],
        "accentSoft": "#F3DDD7",
        "concept": "Pulso y señal de atención",
    },
    "sonrisa": {
        "label": "Mejorar mi sonrisa",
        "eyebrow": "ESTÉTICA RESPONSABLE",
        "headline": "Tu sonrisa, con un punto de partida claro",
        "support": "Explora opciones estéticas con valoración previa y expectativas claras.",
        "cta": "Descubre tus opciones",
        "path": "/c/sonrisa",
        "destination": "sonrisa",
        "accent": PALETTE["gold"],
        "accentSoft": PALETTE["goldSoft"],
        "concept": "Arco de sonrisa y destellos",
    },
    "limpieza": {
        "label": "Limpieza y profilaxis",
        "eyebrow": "CUIDADO PREVENTIVO",
        "headline": "Cuidar hoy también es prevenir",
        "support": "Conoce si una limpieza o profilaxis puede ser tu siguiente paso.",
        "cta": "Explora limpieza y cuidado",
        "path": "/c/limpieza",
        "destination": "limpieza",
        "accent": PALETTE["teal"],
        "accentSoft": PALETTE["tealSoft"],
        "concept": "Anillos limpios y brillo",
    },
    "ortodoncia": {
        "label": "Ortodoncia",
        "eyebrow": "ALINEACIÓN Y MORDIDA",
        "headline": "Cada sonrisa merece una valoración propia",
        "support": "Conoce el recorrido de ortodoncia y resuelve tus primeras dudas.",
        "cta": "Explora ortodoncia",
        "path": "/c/ortodoncia",
        "destination": "ortodoncia",
        "accent": PALETTE["ink"],
        "accentSoft": PALETTE["mint"],
        "concept": "Sistema de alineación",
    },
    "valoracion": {
        "label": "Valoración general",
        "eyebrow": "EMPIEZA CON CLARIDAD",
        "headline": "No tienes que saber qué tratamiento necesitas",
        "support": "Una valoración general ayuda a revisar tu salud oral y definir prioridades.",
        "cta": "Empieza por una valoración",
        "path": "/c/valoracion",
        "destination": "valoracion",
        "accent": PALETTE["teal"],
        "accentSoft": PALETTE["goldSoft"],
        "concept": "Ruta clara de valoración",
    },
}


def campaign_url(path: str, campaign: str) -> str:
    query = urlencode(
        {
            "utm_source": "qr",
            "utm_medium": "offline",
            "utm_campaign": campaign,
            "utm_content": "qr_print",
        }
    )
    return f"{SITE_URL}{path}?{query}"


WHATSAPP_MESSAGE = (
    "Hola, vi el código QR del Consultorio Odontológico Dra. Nataly Jiménez y "
    "quiero recibir orientación para agendar una valoración. Estoy en Carepa o cerca."
)

QR_DESTINATIONS = {
    "web-general": {
        "label": "Web general",
        "target": campaign_url("/", "lanzamiento_sitio"),
        "campaign": "lanzamiento_sitio",
        "cta": "Escanea y elige tu recorrido",
    },
    "urgencias": {
        "label": "Urgencias",
        "target": campaign_url("/c/urgencias", "urgencias_carepa"),
        "campaign": "urgencias_carepa",
        "cta": "Escanea si tienes dolor o molestia",
    },
    "sonrisa": {
        "label": "Mejorar mi sonrisa",
        "target": campaign_url("/c/sonrisa", "sonrisa_carepa"),
        "campaign": "sonrisa_carepa",
        "cta": "Escanea y explora tu sonrisa",
    },
    "limpieza": {
        "label": "Limpieza y profilaxis",
        "target": campaign_url("/c/limpieza", "limpieza_carepa"),
        "campaign": "limpieza_carepa",
        "cta": "Escanea y explora limpieza",
    },
    "ortodoncia": {
        "label": "Ortodoncia",
        "target": campaign_url("/c/ortodoncia", "ortodoncia_carepa"),
        "campaign": "ortodoncia_carepa",
        "cta": "Escanea y explora ortodoncia",
    },
    "valoracion": {
        "label": "Valoración general",
        "target": campaign_url("/c/valoracion", "valoracion_carepa"),
        "campaign": "valoracion_carepa",
        "cta": "Escanea y empieza tu valoración",
    },
    "uraba": {
        "label": "Carepa, veredas y Urabá",
        "target": campaign_url("/c/uraba", "uraba_carepa"),
        "campaign": "uraba_carepa",
        "cta": "Escanea desde Carepa o Urabá",
    },
    "whatsapp-directo": {
        "label": "WhatsApp directo",
        "target": f"https://wa.me/{WHATSAPP_NUMBER}?{urlencode({'text': WHATSAPP_MESSAGE}, quote_via=quote)}",
        "campaign": None,
        "cta": "Escanea y escribe por WhatsApp",
        "note": "WhatsApp directo no admite UTM; el mensaje identifica el origen QR.",
    },
}

QR_VARIANTS = {
    "clean": {"label": "QR limpio", "foreground": PALETTE["ink"], "background": PALETTE["white"]},
    "framed-cta": {"label": "QR con marco y CTA", "foreground": "#000000", "background": PALETTE["white"]},
    "light": {"label": "QR para fondo claro", "foreground": PALETTE["teal"], "background": PALETTE["ivory"]},
    "mono": {"label": "QR monocromático", "foreground": "#000000", "background": "#FFFFFF"},
}


def esc(value: object) -> str:
    return html.escape(str(value), quote=True)


def ensure_directories() -> None:
    for directory in (QR_SVG, QR_PNG, TEMPLATES, PREVIEWS):
        directory.mkdir(parents=True, exist_ok=True)


def qr_matrix(target: str):
    params = cv2.QRCodeEncoder_Params()
    params.correction_level = cv2.QRCodeEncoder_CORRECT_LEVEL_Q
    params.mode = cv2.QRCodeEncoder_MODE_BYTE
    encoded = cv2.QRCodeEncoder_create(params).encode(target)
    if encoded is None or encoded.size == 0:
        raise RuntimeError(f"Could not encode QR target: {target}")
    return encoded


def qr_path(matrix) -> str:
    commands: list[str] = []
    height, width = matrix.shape
    for row in range(height):
        column = 0
        while column < width:
            if int(matrix[row, column]) != 0:
                column += 1
                continue
            start = column
            while column < width and int(matrix[row, column]) == 0:
                column += 1
            run = column - start
            commands.append(f"M{start} {row}h{run}v1h-{run}z")
    return "".join(commands)


def qr_svg(destination_id: str, destination: dict, variant_id: str, variant: dict, matrix) -> str:
    modules = int(matrix.shape[0])
    quiet = 4
    total = modules + quiet * 2
    path = qr_path(matrix)
    target = destination["target"]
    title = f"{destination['label']} — {variant['label']}"

    if variant_id != "framed-cta":
        px = total * 24
        return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{px}" height="{px}" viewBox="0 0 {total} {total}" shape-rendering="crispEdges" role="img" aria-labelledby="title desc" data-destination="{esc(destination_id)}" data-variant="{esc(variant_id)}">
  <title id="title">{esc(title)}</title>
  <desc id="desc">Código QR verificable. Destino: {esc(target)}</desc>
  <metadata>{esc(json.dumps({'destination': destination_id, 'variant': variant_id, 'target': target}, ensure_ascii=False, separators=(',', ':')))}</metadata>
  <rect width="{total}" height="{total}" fill="{variant['background']}"/>
  <path d="{path}" transform="translate({quiet} {quiet})" fill="{variant['foreground']}"/>
</svg>
'''

    module_size = 20
    qr_size = total * module_size
    width = qr_size + 144
    qr_top = 176
    height = qr_top + qr_size + 214
    left = 72
    brand_center = 78
    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc" data-destination="{esc(destination_id)}" data-variant="framed-cta">
  <title id="title">{esc(title)}</title>
  <desc id="desc">Código QR verificable con marco de llamada a la acción. Destino: {esc(target)}</desc>
  <metadata>{esc(json.dumps({'destination': destination_id, 'variant': variant_id, 'target': target}, ensure_ascii=False, separators=(',', ':')))}</metadata>
  <rect width="{width}" height="{height}" rx="32" fill="{PALETTE['teal']}"/>
  <circle cx="{brand_center}" cy="78" r="36" fill="{PALETTE['gold']}"/>
  <text x="{brand_center}" y="88" text-anchor="middle" fill="{PALETTE['ink']}" font-family="Inter,Arial,sans-serif" font-size="27" font-weight="800">NJ</text>
  <text x="132" y="70" fill="#FFFFFF" font-family="Inter,Arial,sans-serif" font-size="25" font-weight="800">DRA. NATALY JIMÉNEZ</text>
  <text x="132" y="103" fill="{PALETTE['goldSoft']}" font-family="Inter,Arial,sans-serif" font-size="19" font-weight="650">ODONTOLOGÍA · CAREPA</text>
  <rect x="{left}" y="{qr_top}" width="{qr_size}" height="{qr_size}" rx="16" fill="#FFFFFF"/>
  <g shape-rendering="crispEdges" aria-label="Matriz QR">
    <path d="{path}" transform="translate({left + quiet * module_size} {qr_top + quiet * module_size}) scale({module_size})" fill="#000000"/>
  </g>
  <text x="{width / 2:.1f}" y="{qr_top + qr_size + 80}" text-anchor="middle" fill="#FFFFFF" font-family="Inter,Arial,sans-serif" font-size="29" font-weight="800">{esc(destination['cta'])}</text>
  <text x="{width / 2:.1f}" y="{qr_top + qr_size + 126}" text-anchor="middle" fill="{PALETTE['goldSoft']}" font-family="Inter,Arial,sans-serif" font-size="22" font-weight="650">{DISPLAY_DOMAIN}</text>
</svg>
'''


def multiline_text(lines: list[str], x: float, y: float, size: float, line_height: float, fill: str, weight: int, css_class: str, anchor: str = "start") -> str:
    tspans = []
    for index, line in enumerate(lines):
        dy = 0 if index == 0 else line_height
        tspans.append(f'<tspan x="{x:.1f}" dy="{dy:.1f}">{esc(line)}</tspan>')
    return (
        f'<text class="{css_class}" x="{x:.1f}" y="{y:.1f}" text-anchor="{anchor}" '
        f'fill="{fill}" font-family="Inter,Arial,sans-serif" font-size="{size:.1f}" '
        f'font-weight="{weight}">' + "".join(tspans) + "</text>"
    )


def concept_art(campaign_id: str, accent: str, accent_soft: str, clip: tuple[float, float, float, float]) -> str:
    clip_x, clip_y, clip_width, clip_height = clip
    cx = clip_x + clip_width * 0.54
    cy = clip_y + clip_height * 0.52
    scale = min(clip_width, clip_height) / 620
    common = f'transform="translate({cx:.1f} {cy:.1f}) scale({scale:.4f})"'
    if campaign_id == "lanzamiento":
        art = f'''
    <path d="M-250 250V-30C-250-210-135-320 0-320S250-210 250-30V250" fill="none" stroke="{accent}" stroke-width="20" opacity=".24"/>
    <path d="M-165 250V-15C-165-130-95-210 0-210S165-130 165-15V250" fill="none" stroke="{accent}" stroke-width="10" opacity=".7"/>
    <circle cx="0" cy="-25" r="68" fill="{accent_soft}"/>
    <path d="M0-67V17M-42-25H42" stroke="{accent}" stroke-width="10" stroke-linecap="round"/>
'''
    elif campaign_id == "urgencias":
        art = f'''
    <path d="M-300 30h120l48-105 82 215 76-170 43 60h230" fill="none" stroke="{accent}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M-80-245c-92 0-137 85-122 168 14 77 56 105 62 215 4 72 30 115 62 115 40 0 36-94 78-94s38 94 78 94c32 0 58-43 62-115 6-110 48-138 62-215 15-83-30-168-122-168-35 0-54 19-80 19s-45-19-80-19z" fill="none" stroke="{accent}" stroke-width="10" opacity=".38"/>
    <circle cx="205" cy="-205" r="62" fill="{accent}"/>
    <path d="M205-235v42M205-168v2" stroke="#fff" stroke-width="13" stroke-linecap="round"/>
'''
    elif campaign_id == "sonrisa":
        art = f'''
    <path d="M-285-30C-215 185 215 185 285-30" fill="none" stroke="{accent}" stroke-width="18" stroke-linecap="round"/>
    <path d="M-230-8C-165 120 165 120 230-8" fill="none" stroke="{accent_soft}" stroke-width="52" stroke-linecap="round" opacity=".72"/>
    <path d="M-215-235v100M-265-185h100M195-155v72M159-119h72" stroke="{accent}" stroke-width="12" stroke-linecap="round"/>
    <circle cx="40" cy="-245" r="17" fill="{accent}"/>
'''
    elif campaign_id == "limpieza":
        art = f'''
    <circle cx="0" cy="0" r="265" fill="none" stroke="{accent_soft}" stroke-width="58" opacity=".72"/>
    <circle cx="0" cy="0" r="170" fill="none" stroke="{accent}" stroke-width="12" opacity=".65"/>
    <path d="M-45-115c-63 0-94 58-84 115 10 52 39 71 43 145 3 49 20 78 42 78 27 0 25-64 54-64 28 0 25 64 53 64 22 0 39-29 42-78 4-74 33-93 43-145 10-57-21-115-84-115-24 0-37 13-54 13-18 0-31-13-55-13z" fill="{PALETTE['ivory']}" stroke="{accent}" stroke-width="9"/>
    <path d="M210-240v92M164-194h92" stroke="{accent}" stroke-width="12" stroke-linecap="round"/>
'''
    elif campaign_id == "ortodoncia":
        brackets = []
        for row_y in (-55, 55):
            for col_x in (-210, -105, 0, 105, 210):
                brackets.append(
                    f'<rect x="{col_x - 31}" y="{row_y - 31}" width="62" height="62" rx="13" fill="none" stroke="{accent}" stroke-width="10"/>'
                )
        art = f'''
    <path d="M-275-55H275M-275 55H275" stroke="{accent_soft}" stroke-width="20" stroke-linecap="round"/>
    {''.join(brackets)}
    <path d="M-250 165C-160 280 160 280 250 165" fill="none" stroke="{accent}" stroke-width="14" stroke-linecap="round"/>
'''
    else:
        art = f'''
    <path d="M-245 210C-245 55-90 55-90-70S85-175 245-175" fill="none" stroke="{accent_soft}" stroke-width="46" stroke-linecap="round"/>
    <circle cx="-245" cy="210" r="42" fill="{accent}"/>
    <circle cx="-90" cy="-70" r="42" fill="{accent}"/>
    <circle cx="245" cy="-175" r="68" fill="{accent}"/>
    <path d="M214-175l23 24 43-51" fill="none" stroke="#fff" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
'''
    return f'<g id="visual-concept" clip-path="url(#concept-clip)"><g {common}>{art}</g></g>'


def template_qr_group(matrix, x: float, y: float, size: float) -> str:
    quiet = 4
    total = int(matrix.shape[0]) + quiet * 2
    scale = size / total
    path = qr_path(matrix)
    radius = max(8, size * 0.035)
    return f'''
  <g id="print-qr" data-role="qr" aria-label="Código QR de campaña">
    <rect x="{x:.1f}" y="{y:.1f}" width="{size:.1f}" height="{size:.1f}" rx="{radius:.1f}" fill="#FFFFFF"/>
    <path d="{path}" transform="translate({x + quiet * scale:.5f} {y + quiet * scale:.5f}) scale({scale:.7f})" fill="#000000" shape-rendering="crispEdges"/>
  </g>'''


def template_layout(campaign_id: str, format_id: str) -> str:
    campaign = CAMPAIGNS[campaign_id]
    fmt = FORMATS[format_id]
    width, height = int(fmt["width"]), int(fmt["height"])
    safe = fmt["safe"]
    left = float(safe["left"])
    right = float(safe["right"])
    top = float(safe["top"])
    bottom = float(safe["bottom"])
    horizontal = format_id == "meta-horizontal"
    print_format = fmt["distribution"] == "print"
    story = format_id == "story"
    accent, accent_soft = campaign["accent"], campaign["accentSoft"]

    if horizontal:
        brand_size, brand_y = 52, top
        eyebrow_y, headline_y = 176, 235
        headline_size, support_size = 53, 24
        max_head, max_support = 25, 47
        cta_y = height - bottom - 66
        content_width = width * 0.59
        concept_clip = (width * 0.65, top * 0.55, width * 0.32, height - top * 1.1)
    elif format_id == "feed-square":
        brand_size, brand_y = 58, top
        eyebrow_y, headline_y = 305, 370
        headline_size, support_size = 64, 30
        max_head, max_support = 22, 45
        cta_y = height - bottom - 74
        content_width = width - left - right
        concept_clip = (width * 0.45, top * 0.48, width * 0.50, eyebrow_y - top * 0.48 - 26)
    elif format_id == "feed-portrait":
        brand_size, brand_y = 58, top
        eyebrow_y, headline_y = 405, 478
        headline_size, support_size = 74, 31
        max_head, max_support = 22, 43
        cta_y = height - bottom - 76
        content_width = width - left - right
        concept_clip = (width * 0.45, top * 0.48, width * 0.50, eyebrow_y - top * 0.48 - 28)
    elif story:
        brand_size, brand_y = 58, top
        eyebrow_y, headline_y = 600, 688
        headline_size, support_size = 79, 34
        max_head, max_support = 22, 39
        cta_y = height - bottom - 92
        content_width = width - left - right
        concept_clip = (width * 0.45, top * 0.62, width * 0.50, eyebrow_y - top * 0.62 - 34)
    elif format_id == "google-business":
        brand_size, brand_y = 57, top
        eyebrow_y, headline_y = 300, 368
        headline_size, support_size = 66, 29
        max_head, max_support = 26, 47
        cta_y = height - bottom - 70
        content_width = width * 0.68
        concept_clip = (width * 0.64, top * 0.55, width * 0.32, height - top * 1.1)
    elif format_id == "a5":
        brand_size, brand_y = 88, top
        eyebrow_y, headline_y = 660, 770
        headline_size, support_size = 108, 49
        max_head, max_support = 21, 44
        cta_y = height - bottom - 150
        content_width = width - left - right
        concept_clip = (width * 0.45, top * 0.50, width * 0.50, eyebrow_y - top * 0.50 - 38)
    else:  # counter-card
        brand_size, brand_y = 66, top
        eyebrow_y, headline_y = 415, 500
        headline_size, support_size = 78, 35
        max_head, max_support = 21, 38
        cta_y = height - bottom - 116
        content_width = width - left - right
        concept_clip = (width * 0.45, top * 0.48, width * 0.50, eyebrow_y - top * 0.48 - 30)

    headline_lines = textwrap.wrap(campaign["headline"], width=max_head, break_long_words=False)
    support_lines = textwrap.wrap(campaign["support"], width=max_support, break_long_words=False)
    headline_lh = headline_size * 1.08
    support_y = headline_y + len(headline_lines) * headline_lh + headline_size * 0.46
    support_lh = support_size * 1.42

    mark = brand_size
    brand_group = f'''
  <g id="brand" transform="translate({left:.1f} {brand_y:.1f})">
    <rect width="{mark}" height="{mark}" rx="{mark / 2:.1f}" fill="{PALETTE['gold']}"/>
    <text x="{mark / 2:.1f}" y="{mark * .66:.1f}" text-anchor="middle" fill="{PALETTE['ink']}" font-family="Inter,Arial,sans-serif" font-size="{mark * .39:.1f}" font-weight="850">NJ</text>
    <text x="{mark + 20:.1f}" y="{mark * .38:.1f}" fill="{PALETTE['ink']}" font-family="Inter,Arial,sans-serif" font-size="{mark * .29:.1f}" font-weight="850" letter-spacing=".5">DRA. NATALY JIMÉNEZ</text>
    <text x="{mark + 20:.1f}" y="{mark * .73:.1f}" fill="{PALETTE['inkSoft']}" font-family="Inter,Arial,sans-serif" font-size="{mark * .20:.1f}" font-weight="650" letter-spacing="1.2">ODONTOLOGÍA · CAREPA</text>
  </g>'''

    eyebrow = f'<text id="eyebrow" x="{left:.1f}" y="{eyebrow_y:.1f}" fill="{accent}" font-family="Inter,Arial,sans-serif" font-size="{support_size * .72:.1f}" font-weight="850" letter-spacing="2.7">{esc(campaign["eyebrow"])}</text>'
    headline = multiline_text(headline_lines, left, headline_y, headline_size, headline_lh, PALETTE["ink"], 850, "headline")
    support = multiline_text(support_lines, left, support_y, support_size, support_lh, PALETTE["inkSoft"], 520, "supporting-line")

    cta_font = 22 if horizontal else (38 if format_id == "a5" else 27)
    cta_pad_x = 34 if horizontal else (56 if format_id == "a5" else 38)
    cta_width = min(content_width, max(310, len(campaign["cta"]) * cta_font * .57 + cta_pad_x * 2))
    cta_height = 64 if horizontal else (112 if format_id == "a5" else 82)
    cta_x = left
    cta_group = f'''
  <g id="cta" transform="translate({cta_x:.1f} {cta_y:.1f})">
    <rect width="{cta_width:.1f}" height="{cta_height}" rx="{cta_height / 2:.1f}" fill="{accent}"/>
    <text x="{cta_width / 2:.1f}" y="{cta_height * .64:.1f}" text-anchor="middle" fill="#FFFFFF" font-family="Inter,Arial,sans-serif" font-size="{cta_font}" font-weight="800">{esc(campaign['cta'])}</text>
  </g>'''

    short_url = f"{DISPLAY_DOMAIN}{campaign['path']}".rstrip("/") if campaign["path"] != "/" else DISPLAY_DOMAIN
    destination = QR_DESTINATIONS[campaign["destination"]]
    if print_format:
        matrix = qr_matrix(destination["target"])
        if format_id == "a5":
            qr_size = 450
            qr_x = width - right - qr_size
            qr_y = height - bottom - qr_size
            url_x, url_y = qr_x + qr_size / 2, qr_y - 50
            cta_y = height - bottom - 180
            cta_group = f'''
  <g id="cta" transform="translate({left:.1f} {cta_y:.1f})">
    <text x="0" y="0" fill="{accent}" font-family="Inter,Arial,sans-serif" font-size="38" font-weight="850">{esc(campaign['cta'])}</text>
    <text x="0" y="60" fill="{PALETTE['inkSoft']}" font-family="Inter,Arial,sans-serif" font-size="28" font-weight="650">Escanea con la cámara de tu celular</text>
  </g>'''
        else:
            qr_size = 360
            qr_x = width - right - qr_size
            qr_y = height - bottom - qr_size
            url_x, url_y = qr_x + qr_size / 2, qr_y - 40
            cta_y = height - bottom - 150
            cta_group = f'''
  <g id="cta" transform="translate({left:.1f} {cta_y:.1f})">
    <text x="0" y="0" fill="{accent}" font-family="Inter,Arial,sans-serif" font-size="30" font-weight="850">{esc(campaign['cta'])}</text>
    <text x="0" y="48" fill="{PALETTE['inkSoft']}" font-family="Inter,Arial,sans-serif" font-size="23" font-weight="650">Escanea con tu celular</text>
  </g>'''
        destination_block = template_qr_group(matrix, qr_x, qr_y, qr_size) + f'''
  <text id="short-url" x="{url_x:.1f}" y="{url_y:.1f}" text-anchor="middle" fill="{PALETTE['ink']}" font-family="Inter,Arial,sans-serif" font-size="{28 if format_id == 'a5' else 22}" font-weight="750">{esc(short_url)}</text>'''
    else:
        url_size = 19 if horizontal else (24 if story else 21)
        destination_block = f'''
  <text id="short-url" data-role="url" x="{width - right:.1f}" y="{height - bottom + url_size:.1f}" text-anchor="end" fill="{PALETTE['ink']}" font-family="Inter,Arial,sans-serif" font-size="{url_size}" font-weight="750">{esc(short_url)}</text>'''

    safe_zone = f'''
  <!-- Zona segura editable: cambia opacity a .35 para verla durante ajustes. -->
  <g id="safe-zone" opacity="0" pointer-events="none">
    <rect x="{left:.1f}" y="{top:.1f}" width="{width-left-right:.1f}" height="{height-top-bottom:.1f}" fill="none" stroke="#FF00AA" stroke-width="4" stroke-dasharray="20 14"/>
  </g>'''
    metadata = {
        "generator": "scripts/generate-marketing-assets.py",
        "campaign": campaign_id,
        "format": format_id,
        "dimensions": {"width": width, "height": height},
        "safeMargins": safe,
        "editableText": True,
        "fontStack": "Inter, Arial, sans-serif",
        "paletteSource": "src/styles/globals.css",
        "destination": destination["target"],
        "visualConcept": campaign["concept"],
    }

    background_art = f'''
  <defs>
    <linearGradient id="background-gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="{PALETTE['ivory']}"/>
      <stop offset="1" stop-color="{accent_soft}" stop-opacity=".82"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="50%" r="50%">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity=".88"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="concept-clip" clipPathUnits="userSpaceOnUse">
      <rect x="{concept_clip[0]:.1f}" y="{concept_clip[1]:.1f}" width="{concept_clip[2]:.1f}" height="{concept_clip[3]:.1f}"/>
    </clipPath>
  </defs>
  <rect width="{width}" height="{height}" fill="url(#background-gradient)"/>
  <circle cx="{width * .88:.1f}" cy="{height * .12:.1f}" r="{min(width,height)*.35:.1f}" fill="url(#glow)"/>
  <path d="M{-width*.08:.1f} {height*.88:.1f}C{width*.20:.1f} {height*.64:.1f} {width*.34:.1f} {height*1.04:.1f} {width*.66:.1f} {height*.84:.1f}S{width*1.05:.1f} {height*.73:.1f} {width*1.12:.1f} {height*.94:.1f}" fill="none" stroke="{accent}" stroke-width="{max(5,min(width,height)*.009):.1f}" opacity=".12"/>
'''

    return f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-labelledby="title desc" data-campaign="{campaign_id}" data-format="{format_id}">
  <title id="title">{esc(campaign['label'])} — {esc(fmt['label'])}</title>
  <desc id="desc">Plantilla SVG editable del Consultorio Odontológico Dra. Nataly Jiménez. {esc(campaign['support'])}</desc>
  <metadata>{esc(json.dumps(metadata, ensure_ascii=False, separators=(',', ':')))}</metadata>
{background_art}
{concept_art(campaign_id, accent, accent_soft, concept_clip)}
{brand_group}
  {eyebrow}
  {headline}
  {support}
{cta_group}
{destination_block}
{safe_zone}
</svg>
'''


def write_qr_assets() -> list[dict]:
    records: list[dict] = []
    for destination_id, destination in QR_DESTINATIONS.items():
        matrix = qr_matrix(destination["target"])
        variants = []
        for variant_id, variant in QR_VARIANTS.items():
            filename = f"{destination_id}-{variant_id}"
            svg_path = QR_SVG / f"{filename}.svg"
            svg_path.write_text(qr_svg(destination_id, destination, variant_id, variant, matrix), encoding="utf-8", newline="\n")
            variants.append(
                {
                    "id": variant_id,
                    "label": variant["label"],
                    "svg": f"/marketing/qr/svg/{filename}.svg",
                    "png": f"/marketing/qr/png/{filename}.png",
                }
            )
        parsed = urlparse(destination["target"])
        query = parse_qs(parsed.query)
        records.append(
            {
                "id": destination_id,
                "label": destination["label"],
                "target": destination["target"],
                "utm": {
                    "source": query.get("utm_source", [None])[0],
                    "medium": query.get("utm_medium", [None])[0],
                    "campaign": query.get("utm_campaign", [None])[0],
                    "content": query.get("utm_content", [None])[0],
                },
                "note": destination.get("note"),
                "variants": variants,
            }
        )
    return records


def write_qr_csv(records: list[dict]) -> None:
    path = MARKETING / "qr" / "manifest.csv"
    with path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(
            handle,
            fieldnames=["destination_id", "label", "target", "utm_source", "utm_medium", "utm_campaign", "utm_content", "note"],
        )
        writer.writeheader()
        for record in records:
            writer.writerow(
                {
                    "destination_id": record["id"],
                    "label": record["label"],
                    "target": record["target"],
                    "utm_source": record["utm"]["source"] or "",
                    "utm_medium": record["utm"]["medium"] or "",
                    "utm_campaign": record["utm"]["campaign"] or "",
                    "utm_content": record["utm"]["content"] or "",
                    "note": record.get("note") or "",
                }
            )


def write_templates() -> list[dict]:
    records: list[dict] = []
    for campaign_id, campaign in CAMPAIGNS.items():
        destination = QR_DESTINATIONS[campaign["destination"]]
        for format_id, fmt in FORMATS.items():
            filename = f"{campaign_id}-{format_id}"
            svg_path = TEMPLATES / f"{filename}.svg"
            svg_path.write_text(template_layout(campaign_id, format_id), encoding="utf-8", newline="\n")
            records.append(
                {
                    "campaign": campaign_id,
                    "campaignLabel": campaign["label"],
                    "visualConcept": campaign["concept"],
                    "format": format_id,
                    "formatLabel": fmt["label"],
                    "dimensions": {"width": fmt["width"], "height": fmt["height"]},
                    "safeMargins": fmt["safe"],
                    "distribution": fmt["distribution"],
                    "physicalSize": fmt.get("physicalSize"),
                    "dpi": fmt.get("dpi"),
                    "destinationId": campaign["destination"],
                    "destination": destination["target"],
                    "master": f"/marketing/templates/{filename}.svg",
                    "preview": f"/marketing/previews/{filename}.png",
                    "containsQr": fmt["distribution"] == "print",
                    "containsShortUrl": True,
                }
            )
    return records


def write_manifest(qr_records: list[dict], template_records: list[dict]) -> None:
    manifest = {
        "schemaVersion": 1,
        "generatedOn": date.today().isoformat(),
        "brand": {
            "name": "Consultorio Odontológico Dra. Nataly Jiménez",
            "mark": "NJ",
            "location": "Carepa, Antioquia",
            "domain": SITE_URL,
            "whatsapp": WHATSAPP_NUMBER,
            "fontStack": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
            "palette": PALETTE,
            "auditSources": ["src/styles/globals.css", "src/data/site.ts", "src/components/layout/Header.tsx"],
        },
        "formats": FORMATS,
        "counts": {
            "qrDestinations": len(qr_records),
            "qrVariantsPerDestination": len(QR_VARIANTS),
            "qrSvg": len(qr_records) * len(QR_VARIANTS),
            "qrPng": len(qr_records) * len(QR_VARIANTS),
            "visualLines": len(CAMPAIGNS),
            "formatsPerLine": len(FORMATS),
            "templateSvg": len(template_records),
            "previewPng": len(template_records),
        },
        "qrDestinations": qr_records,
        "templates": template_records,
        "pending": [
            "QR de reseñas de Google: pendiente hasta recibir el enlace oficial del perfil; no se generó uno provisional."
        ],
        "tooling": {
            "generate": "python scripts/generate-marketing-assets.py",
            "render": "node scripts/render-marketing-previews.mjs",
            "verify": "python scripts/verify-marketing-assets.py",
            "runtimeDependenciesAdded": False,
            "previewPolicy": "Los PNG de plantilla son vistas previas de hasta 900 px de ancho; el SVG es el máster editable.",
        },
    }
    (MARKETING / "manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8", newline="\n"
    )


def main() -> None:
    ensure_directories()
    qr_records = write_qr_assets()
    write_qr_csv(qr_records)
    template_records = write_templates()
    write_manifest(qr_records, template_records)
    print(
        f"Generated {len(qr_records) * len(QR_VARIANTS)} QR SVG files and "
        f"{len(template_records)} editable template SVG files in {MARKETING}."
    )


if __name__ == "__main__":
    main()
