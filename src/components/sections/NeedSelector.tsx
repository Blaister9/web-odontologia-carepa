import { ReactNode, useMemo, useState } from "react";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { WhatsAppIcon } from "../ui/WhatsAppIcon";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  focusable: "false",
  "aria-hidden": true
} as const;

const needIcons: Record<string, ReactNode> = {
  "dolor-dental": (
    <svg {...iconProps}>
      <path d="M12 4.2c-1.8 0-2.4-1-4.2-1C5.2 3.2 3.8 5.4 3.8 7.6c0 4.6 2.3 12.8 4.1 12.8 1.5 0 1.4-5.4 4.1-5.4s2.6 5.4 4.1 5.4c1.8 0 4.1-8.2 4.1-12.8 0-2.2-1.4-4.4-4-4.4-1.8 0-2.4 1-4.2 1Z" />
      <path d="M13 8.4 11.2 11h3l-1.8 2.6" />
    </svg>
  ),
  "mejorar-sonrisa": (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M8 13.4c1 1.6 2.4 2.5 4 2.5s3-.9 4-2.5" />
      <path d="M9 9.2h.01M15 9.2h.01" />
    </svg>
  ),
  limpieza: (
    <svg {...iconProps}>
      <path d="M11 4.6 12.3 8l3.4 1.3-3.4 1.3L11 14l-1.3-3.4L6.3 9.3 9.7 8Z" />
      <path d="M17.4 14.2l.7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7Z" />
    </svg>
  ),
  ortodoncia: (
    <svg {...iconProps}>
      <rect x="3.6" y="9" width="5" height="6" rx="1.4" />
      <rect x="15.4" y="9" width="5" height="6" rx="1.4" />
      <path d="M8.6 12h6.8" />
    </svg>
  ),
  urgencia: (
    <svg {...iconProps}>
      <path d="M12 4 20.6 19H3.4Z" />
      <path d="M12 10.4v3.6" />
      <path d="M12 16.8h.01" />
    </svg>
  ),
  precios: (
    <svg {...iconProps}>
      <path d="M4 4h7.2l8.8 8.8-7.2 7.2L4 11.2Z" />
      <circle cx="8.6" cy="8.6" r="1.3" />
    </svg>
  ),
  "no-se": (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M9.6 9.2a2.5 2.5 0 0 1 4.9.7c0 1.7-2.5 2-2.5 3.4" />
      <path d="M12 16.8h.01" />
    </svg>
  )
};

export function NeedSelector() {
  const [selectedId, setSelectedId] = useState(siteConfig.needOptions[0]?.id ?? "");
  const selectedNeed = useMemo(
    () =>
      siteConfig.needOptions.find((option) => option.id === selectedId) ??
      siteConfig.needOptions[0],
    [selectedId]
  );

  if (!selectedNeed) {
    return null;
  }

  const whatsappUrl = getWhatsAppUrl(siteConfig.whatsappNumber, selectedNeed.whatsappMessage);

  return (
    <section className="section need-selector" id="que-necesitas">
      <div className="container need-selector__grid">
        <div data-reveal>
          <SectionHeading
            eyebrow="Motivo de consulta"
            title="¿Qué necesitas hoy?"
            description="Elige la opción que más se parece a tu situación. Te ayudamos a escribir un mensaje claro por WhatsApp, sin diagnosticarte por internet."
          />
          <p className="need-selector__note">
            Esto no es un diagnóstico. La valoración define el tratamiento.
          </p>
        </div>

        <div className="need-selector__panel" data-reveal>
          <div className="need-selector__options" aria-label="Motivos de consulta">
            {siteConfig.needOptions.map((option) => (
              <button
                className={`need-option ${option.id === selectedNeed.id ? "need-option--active" : ""}`}
                type="button"
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                aria-pressed={option.id === selectedNeed.id}
              >
                <span className="need-option__icon" aria-hidden="true">
                  {needIcons[option.id] ?? needIcons["no-se"]}
                </span>
                <span className="need-option__label">{option.label}</span>
              </button>
            ))}
          </div>

          <div aria-live="polite">
            <article className="need-result" key={selectedNeed.id}>
              <span>Motivo seleccionado</span>
              <h3>{selectedNeed.label}</h3>
              <p>{selectedNeed.summary}</p>
              <p>{selectedNeed.guidance}</p>
              <Button
                href={whatsappUrl}
                target="_blank"
                size="lg"
                fullWidth
                className="button--whatsapp-glow"
              >
                <WhatsAppIcon className="button__icon" />
                Enviar este mensaje por WhatsApp
              </Button>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
