import Link from "next/link";

import { MediaPair } from "@/components/media/MediaPair";

export function ClinicStory() {
  return (
    <section className="section home-clinic-story" aria-labelledby="home-clinic-story-title">
      <div className="container home-clinic-story__inner">
        <div className="home-clinic-story__copy">
          <p className="eyebrow">En el consultorio</p>
          <h2 id="home-clinic-story-title">Atención real en Carepa</h2>
          <p>Nataly atiende con el apoyo de Vanesa en el consultorio.</p>
          <Link href="/consultorio">
            Conocer el consultorio <span aria-hidden="true">→</span>
          </Link>
        </div>

        <MediaPair
          primary={{
            src: "/images/client/web-v2/nataly-clinic-work.webp",
            alt: "Dra. Nataly Jiménez atendiendo a una paciente en el consultorio",
            caption: "Atención en el consultorio.",
            position: "center 46%"
          }}
          secondary={{
            src: "/images/client/web-v2/nataly-vanesa-team.webp",
            alt: "Dra. Nataly Jiménez y Vanesa López en el consultorio",
            position: "center 28%"
          }}
        />
      </div>
    </section>
  );
}
