import { useMemo, useState } from "react";

import { siteConfig } from "@/data/site";
import { getWhatsAppUrl } from "@/utils/whatsapp";

import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";

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
        <div>
          <SectionHeading
            eyebrow="Orientación inicial"
            title="¿Qué necesitas hoy?"
            description="Elige la opción que más se parece a tu situación. Te ayudamos a escribir un mensaje claro por WhatsApp, sin diagnosticarte por internet."
          />
          <p className="need-selector__note">
            Esta guía reduce la fricción del primer mensaje. La valoración profesional define el
            diagnóstico y el plan adecuado.
          </p>
        </div>

        <div className="need-selector__panel">
          <div className="need-selector__options" role="list" aria-label="Motivos de consulta">
            {siteConfig.needOptions.map((option) => (
              <button
                className={`need-option ${option.id === selectedNeed.id ? "need-option--active" : ""}`}
                type="button"
                key={option.id}
                onClick={() => setSelectedId(option.id)}
                aria-pressed={option.id === selectedNeed.id}
              >
                {option.label}
              </button>
            ))}
          </div>

          <article className="need-result" aria-live="polite">
            <span>Motivo seleccionado</span>
            <h3>{selectedNeed.label}</h3>
            <p>{selectedNeed.summary}</p>
            <p>{selectedNeed.guidance}</p>
            <Button href={whatsappUrl} target="_blank" size="lg" fullWidth>
              Enviar este mensaje por WhatsApp
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
