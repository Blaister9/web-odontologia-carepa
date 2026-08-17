export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  /**
   * `true` solo cuando `image` es una fotografía confirmada de esta persona.
   * Mientras sea `false` se muestra una imagen referencial y el alt lo declara.
   */
  hasRealPhoto: boolean;
  /**
   * Ruta reservada para el retrato individual pendiente de entrega.
   * Al recibir la foto: generar el .webp en esa ruta, moverla a `image` y
   * poner `hasRealPhoto: true`. Ver docs/photography/missing-photo-shotlist.md.
   */
  pendingPhoto?: string;
  featured: boolean;
  profileComplete: boolean;
};

const referencePhoto = "/images/equipo/odontologia-profesional-carepa.png";

export const teamMembers: TeamMember[] = [
  {
    name: "Dra. Nataly Jiménez",
    role: "Odontóloga General y Estética.",
    description:
      "Acompaña valoraciones odontológicas con enfoque claro, humano y responsable para pacientes de Carepa y la región de Urabá.",
    image: "/images/client/web/nataly-clinica-portrait.webp",
    hasRealPhoto: true,
    pendingPhoto: "/images/equipo/nataly-jimenez.webp",
    featured: true,
    profileComplete: true
  },
  {
    name: "Dra. Clara Parra",
    role: "Especialista en Ortodoncia y Ortopedia Maxilar.",
    description:
      "Apoya la valoración y orientación de casos relacionados con alineación dental, mordida y desarrollo maxilar.",
    image: referencePhoto,
    hasRealPhoto: false,
    pendingPhoto: "/images/equipo/clara-parra.webp",
    featured: true,
    profileComplete: true
  },
  {
    name: "Dr. Adalberto Atencia",
    role: "Cirujano Maxilofacial e Implantólogo.",
    description:
      "Profesional de apoyo para casos que requieren orientación especializada en cirugía maxilofacial e implantología.",
    image: referencePhoto,
    hasRealPhoto: false,
    pendingPhoto: "/images/equipo/adalberto-atencia.webp",
    featured: true,
    profileComplete: false
  },
  {
    name: "Vanesa López",
    role: "Auxiliar e Higienista Oral.",
    description:
      "Acompaña la atención al paciente, la orientación inicial y el proceso de agendamiento por WhatsApp.",
    image: referencePhoto,
    hasRealPhoto: false,
    pendingPhoto: "/images/equipo/vanesa-lopez.webp",
    featured: true,
    profileComplete: true
  }
];

/**
 * Foto grupal pendiente de entrega: `/images/equipo/equipo-completo.webp`.
 * Mientras llega, `/equipo` abre con la banda fotográfica recortada de la
 * pieza entregada por la clienta (sin textos publicitarios) y sin atribuir
 * identidades individuales.
 */
export const teamGroupPhoto = {
  current: "/images/client/web/equipo-preview.webp",
  pending: "/images/equipo/equipo-completo.webp"
} as const;
