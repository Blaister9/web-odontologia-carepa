import Link from "next/link";

export function AestheticFunctionalCare() {
  return (
    <section className="section aesthetic-care">
      <div className="container aesthetic-care__grid">
        <div className="aesthetic-care__panel">
          <p className="eyebrow">Estética con criterio clínico</p>
          <h2>Cuidado oral con enfoque estético y funcional</h2>
          <p>
            Una sonrisa se ve mejor cuando también funciona bien. Por eso, antes de pensar en
            cambios estéticos, conviene revisar encías, mordida, restauraciones, hábitos y salud
            general de la boca.
          </p>
          <p>
            La intención no es vender un tratamiento único, sino ayudarte a entender qué opciones
            pueden tener sentido para tu caso.
          </p>
          <Link className="button button--primary button--md" href="/#servicios">
            Ver servicios
          </Link>
        </div>
        <div className="aesthetic-care__visual" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
