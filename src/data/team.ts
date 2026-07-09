export type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
  featured: boolean;
  profileComplete: boolean;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Dra. Nataly Jiménez",
    role: "Odontóloga General y Estética.",
    description:
      "Acompaña valoraciones odontológicas con enfoque claro, humano y responsable para pacientes de Carepa y la región de Urabá.",
    image: "/images/equipo/odontologia-profesional-carepa.png",
    featured: true,
    profileComplete: true
  },
  {
    name: "Dra. Clara Parra",
    role: "Especialista en Ortodoncia y Ortopedia Maxilar.",
    description:
      "Apoya la valoración y orientación de casos relacionados con alineación dental, mordida y desarrollo maxilar.",
    image: "/images/equipo/odontologia-profesional-carepa.png",
    featured: true,
    profileComplete: true
  },
  {
    name: "Dr. Adalberto Atencia",
    role: "Cirujano Maxilofacial e Implantólogo.",
    description:
      "Profesional de apoyo para casos que requieren orientación especializada en cirugía maxilofacial e implantología.",
    image: "/images/equipo/odontologia-profesional-carepa.png",
    featured: true,
    profileComplete: false
  },
  {
    name: "Vanesa López",
    role: "Auxiliar e Higienista Oral.",
    description:
      "Acompaña la atención al paciente, la orientación inicial y el proceso de agendamiento por WhatsApp.",
    image: "/images/equipo/odontologia-profesional-carepa.png",
    featured: true,
    profileComplete: true
  }
];
