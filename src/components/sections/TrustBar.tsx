import { siteConfig } from "@/data/site";

export function TrustBar() {
  return (
    <section className="trust-bar" aria-label="Beneficios de la atención">
      <div className="container trust-bar__grid">
        {siteConfig.trustItems.map((item) => (
          <article className="trust-item" key={item.title}>
            <span className="trust-item__marker" aria-hidden="true" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
