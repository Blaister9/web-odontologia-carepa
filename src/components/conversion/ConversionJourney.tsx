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

  return (
    <>
      <IntentGateway />
      <section className={`conversion-journey${journey ? " conversion-journey--active" : ""}`} id="recorrido-opciones" aria-live="polite">
        <div className="container">
          {!journey ? (
            <div className="conversion-journey__prompt"><span aria-hidden="true">↑</span><p>Selecciona una opción para ver el siguiente paso.</p></div>
          ) : (
            <div className="conversion-journey__panel" key={journey.id}>
              <div className="conversion-journey__header">
                <div><p className="eyebrow">Paso 2 de 2</p><h2>{journey.title}</h2><p>Elige la opción más cercana a tu necesidad.</p></div>
                <button type="button" className="text-action" onClick={reset}>Cambiar camino</button>
              </div>
              <div className="journey-options" aria-label={`Opciones para ${journey.title}`}>
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
      </section>
    </>
  );
}
