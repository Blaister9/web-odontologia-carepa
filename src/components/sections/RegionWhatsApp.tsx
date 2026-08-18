const coverageChips = ["Carepa", "Veredas cercanas", "Región de Urabá"];

export function RegionWhatsApp() {
  return (
    <section className="region-whatsapp">
      <div className="container region-whatsapp__inner">
        <div data-reveal>
          <p className="eyebrow eyebrow--light">Carepa y Urabá</p>
          <h2>Escribe desde tu ubicación y revisamos disponibilidad.</h2>
          <p>
            Atendemos pacientes de Carepa, veredas cercanas y la región de Urabá con cita previa.
          </p>
          <div className="region-whatsapp__chips" aria-label="Zonas de cobertura por WhatsApp">
            {coverageChips.map((chip) => (
              <span key={chip}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M12 21s-6.6-5.4-6.6-10.4a6.6 6.6 0 1 1 13.2 0C18.6 15.6 12 21 12 21Z" />
                  <circle cx="12" cy="10.4" r="2.4" />
                </svg>
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="region-whatsapp__note" data-reveal>
          <span>Atención con cita previa</span>
          <strong>La ubicación exacta y la disponibilidad se confirman al agendar.</strong>
        </div>
      </div>
    </section>
  );
}
