import { conversionJourneys } from "@/data/conversionJourneys";

import { useJourney } from "../conversion/JourneyContext";
import { JourneyIcon } from "../conversion/JourneyIcon";

export function IntentGateway() {
  const { intentId, selectIntent } = useJourney();

  return (
    <section className="intent-gateway" id="elige-tu-camino" aria-labelledby="intent-title">
      <div className="container">
        <div className="intent-gateway__heading">
          <p className="eyebrow">¿Qué necesitas hoy?</p>
          <h2 id="intent-title">Elige cómo podemos orientarte</h2>
        </div>
        <div className="intent-gateway__grid" aria-label="Motivos principales de consulta">
          {conversionJourneys.map((journey) => {
            const active = intentId === journey.id;
            return (
              <button
                key={journey.id}
                type="button"
                className={`intent-card intent-card--${journey.accent}${active ? " intent-card--active" : ""}`}
                onClick={() => selectIntent(journey.id)}
                aria-pressed={active}
                aria-controls="recorrido-opciones"
              >
                <span className="intent-card__icon"><JourneyIcon iconKey={journey.iconKey} /></span>
                <span className="intent-card__copy">
                  <strong>{journey.title}</strong>
                  <small>{journey.support}</small>
                </span>
                <span className="intent-card__arrow" aria-hidden="true">→</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
