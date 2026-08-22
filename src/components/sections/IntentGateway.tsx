import { conversionJourneys } from "@/data/conversionJourneys";

import { useJourney } from "../conversion/JourneyContext";

export function IntentGateway() {
  const { intentId, selectIntent } = useJourney();

  return (
    <div className="intent-gateway" id="elige-tu-camino" aria-labelledby="intent-title">
      <div className="container">
        <div className="intent-gateway__heading">
          <p className="eyebrow">Paso 1 de 2</p>
          <h2 id="intent-title">¿Qué necesitas hoy?</h2>
        </div>
        <div className="intent-gateway__grid" aria-label="Motivos principales de consulta">
          {conversionJourneys.map((journey, index) => {
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
                <span className="intent-card__number" aria-hidden="true">0{index + 1}</span>
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
    </div>
  );
}
