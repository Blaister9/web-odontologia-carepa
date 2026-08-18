import { useEffect, useRef } from "react";
import Link from "next/link";

import { getJourney } from "@/data/conversionJourneys";

import { IntentGateway } from "../sections/IntentGateway";
import { DynamicWhatsAppCTA } from "../ui/DynamicWhatsAppCTA";
import { useJourney } from "./JourneyContext";
import { JourneyIcon } from "./JourneyIcon";

export function ConversionJourney() {
  const { intentId, selectedOption, selectOption, reset } = useJourney();
  const journey = getJourney(intentId);
  const ctaLabel = selectedOption
    ? selectedOption.id === "smile-design"
      ? "Consultar diseño de sonrisa"
      : selectedOption.urgencyLevel === "high"
        ? "Consultar disponibilidad"
        : `Consultar ${selectedOption.label.toLocaleLowerCase("es")}`
    : "";
  const responseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!journey) return;

    const frame = window.requestAnimationFrame(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      responseRef.current?.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "nearest"
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [journey, selectedOption]);

  return (
    <section className="journey-experience" id="que-necesitas" aria-label="Orientación por necesidad">
      <IntentGateway />
      <div className={`conversion-journey${journey ? " conversion-journey--active" : ""}`} id="recorrido-opciones" aria-live="polite" ref={responseRef}>
        <div className="container">
          {!journey ? (
            <p className="conversion-journey__prompt">Selecciona una opción para recibir una orientación breve, sin formularios.</p>
          ) : (
            <div className="conversion-journey__panel" key={journey.id}>
              <div className="conversion-journey__header">
                <div><p className="eyebrow">Paso 2 de 2 · Tu orientación</p><h2>{journey.title}</h2><p>Elige una opción o escribe directamente. No necesitas acertar el nombre del tratamiento.</p></div>
                <button type="button" className="text-action" onClick={reset}>Cambiar camino</button>
              </div>
              <div className={`journey-options${selectedOption ? " journey-options--selected" : ""}`} aria-label={`Opciones para ${journey.title}`}>
                {journey.options.map((option) => {
                  const active = selectedOption?.id === option.id;
                  return (
                    <button type="button" key={option.id} className={`journey-option${active ? " journey-option--active" : ""}`} onClick={() => selectOption(option)} aria-pressed={active}>
                      <span className="journey-option__icon"><JourneyIcon iconKey={option.iconKey} /></span>
                      <span>{option.label}</span><span aria-hidden="true">{active ? "✓" : "→"}</span>
                    </button>
                  );
                })}
              </div>
              {selectedOption ? (
                <article className="journey-result" key={selectedOption.id}>
                  <div className="journey-result__copy"><span>Tu orientación</span><h3>{selectedOption.label}</h3><p>{selectedOption.shortGuidance}</p></div>
                  <div className="journey-result__actions">
                    <DynamicWhatsAppCTA label={ctaLabel} message={selectedOption.whatsappMessage} ctaLocation="conversion_journey" variant={selectedOption.urgencyLevel === "high" ? "emergency" : "primary"} serviceSlug={selectedOption.serviceUrl?.split("/").pop()} fullWidth />
                    {selectedOption.serviceUrl ? <Link href={selectedOption.serviceUrl}>Ver información</Link> : null}
                    <button type="button" className="text-action" onClick={() => selectOption(null)}>Cambiar opción</button>
                  </div>
                </article>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
