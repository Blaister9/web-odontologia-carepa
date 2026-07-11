export const googleTrust = {
  enabled: false,
  profileUrl: "",
  reviewCount: null as number | null,
  rating: null as number | null
};

export function GoogleTrustPreview() {
  if (!googleTrust.enabled || !googleTrust.profileUrl || googleTrust.rating === null) return null;

  return (
    <section className="section google-trust" aria-label="Opiniones verificadas en Google">
      <div className="container">
        <p>{googleTrust.rating} de 5 en Google · {googleTrust.reviewCount ?? 0} opiniones</p>
        <a href={googleTrust.profileUrl} target="_blank" rel="noreferrer">Ver perfil en Google</a>
      </div>
    </section>
  );
}
