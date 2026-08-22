export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image?: string;
  /**
   * `true` solo cuando `image` es una fotografía confirmada de esta persona.
   * Mientras sea `false` se muestra una imagen referencial y el alt lo declara.
   */
  hasRealPhoto: boolean;
  /**
   * `true` mientras siga pendiente el retrato profesional 4:5 descrito en
   * docs/photography/missing-photo-shotlist.md. Las fotos actuales de Nataly y
   * Vanesa son recortes de material de redes: sirven, pero no fueron tomadas
   * con encuadre ni resolución pensados para web.
   */
  awaitingProfessionalPhoto: boolean;
  featured: boolean;
  profileComplete: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dra. Nataly Jiménez",
    role: "Odontóloga General y Estética.",
    description:
      "Realiza la valoración inicial y atiende casos de odontología general y estética.",
    image: "/images/client/web/nataly-promo-portrait.webp",
    hasRealPhoto: true,
    awaitingProfessionalPhoto: true,
    featured: true,
    profileComplete: true
  },
  {
    name: "Dra. Clara Parra",
    role: "Especialista en Ortodoncia y Ortopedia Maxilar.",
    description:
      "Valora casos de alineación dental, mordida y desarrollo maxilar.",
    hasRealPhoto: false,
    awaitingProfessionalPhoto: true,
    featured: true,
    profileComplete: true
  },
  {
    name: "Dr. Adalberto Atencia",
    role: "Cirujano Maxilofacial e Implantólogo.",
    description:
      "Atiende los casos que requieren cirugía maxilofacial o valoración para implantes.",
    hasRealPhoto: false,
    awaitingProfessionalPhoto: true,
    featured: true,
    profileComplete: false
  },
  {
    name: "Vanesa López",
    role: "Auxiliar e Higienista Oral.",
    description:
      "Apoya la atención en el consultorio y coordina citas por WhatsApp.",
    image: "/images/equipo/vanesa-lopez.webp",
    hasRealPhoto: true,
    awaitingProfessionalPhoto: true,
    featured: true,
    profileComplete: true
  }
];

/**
 * Apertura de `/equipo`. Nueva fotografía real entregada el 2026-08-22;
 * identidades confirmadas por la clienta: Dra. Nataly Jiménez y Vanesa López.
 * Complementa las tarjetas individuales, no las reemplaza.
 *
 * Sigue pendiente la foto grupal de las cuatro personas
 * (`/images/equipo/equipo-completo.webp`, toma 5 de la shot list).
 */
export const teamGroupPhoto = {
  current: "/images/client/web-v2/nataly-vanesa-team.webp",
  pending: "/images/equipo/equipo-completo.webp",
  alt: "Dra. Nataly Jiménez y Vanesa López, auxiliar e higienista oral",
  caption: "Dra. Nataly Jiménez y Vanesa López"
} as const;
