export type SiteConfig = {
  brandInitials: string;
  clinicName: string;
  doctorName: string;
  specialty: string;
  city: string;
  department: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  address: string;
  schedule: {
    weekdays: string;
    saturday: string;
    emergencies: string;
  };
  instagramUrl?: string;
  facebookUrl?: string;
  mapUrl: string;
  siteUrl: string;
  ogImage: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  doctorProfile: DoctorProfile;
  services: Service[];
  faqs: FAQItem[];
  trustItems: TrustItem[];
  firstVisitSteps: FirstVisitStep[];
  emergencyReasons: string[];
  needOptions: NeedOption[];
  localTrustPillars: LocalTrustPillar[];
  beforeBookingItems: BeforeBookingItem[];
  careExperienceItems: CareExperienceItem[];
  experiencePrinciples: ExperiencePrinciple[];
  regionCities: string[];
};

export type Service = {
  id: string;
  title: string;
  badge: string;
  slug: string;
  featuredSummary: string;
  description: string;
  image: string;
  alt: string;
  whatsappMessage: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type TrustItem = {
  title: string;
  description: string;
};

export type FirstVisitStep = {
  title: string;
  description: string;
  reassurance: string;
};

export type NeedOption = {
  id: string;
  label: string;
  summary: string;
  guidance: string;
  whatsappMessage: string;
};

export type LocalTrustPillar = {
  title: string;
  description: string;
};

export type BeforeBookingItem = {
  title: string;
  answer: string;
};

export type CareExperienceItem = {
  title: string;
  description: string;
};

export type ExperiencePrinciple = {
  title: string;
  description: string;
};

export type DoctorApproachItem = {
  title: string;
  description: string;
};

export type DoctorProfile = {
  name: string;
  title: string;
  intro: string;
  quote: string;
  image: string;
  highlights: string[];
  approach: DoctorApproachItem[];
};

export const siteConfig: SiteConfig = {
  brandInitials: "NJ",
  clinicName: "CONSULTORIO ODONTÓLOGICO DRA NATALY JIMÉNEZ",
  doctorName: "Dra. Nataly Jiménez",
  specialty: "Odontología general, estética y especializada.",
  city: "Carepa",
  department: "Antioquia",
  whatsappNumber: "573128311449",
  whatsappDisplay: "+57 312 831 1449",
  address: "Confirma la dirección exacta al agendar tu cita.",
  schedule: {
    weekdays: "Agenda sujeta a disponibilidad.",
    saturday: "Citas según disponibilidad confirmada por WhatsApp.",
    emergencies: "Urgencias odontológicas: consultar disponibilidad por WhatsApp."
  },
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Carepa%2C%20Antioquia%2C%20Colombia",
  siteUrl: "https://web-odontologia-carepa.vercel.app",
  ogImage: "/images/hero/consultorio-odontologico-carepa.png",
  seoTitle: "Odontología en Carepa | Valoración odontológica y salud oral",
  seoDescription:
    "Agenda tu valoración odontológica en Carepa. Atención con cita previa, orientación clara y servicios de salud oral para pacientes locales.",
  seoKeywords: [
    "Consultorio Odontológico Dra Nataly Jiménez",
    "Dra Nataly Jiménez",
    "odontología en Carepa",
    "odontóloga en Carepa",
    "odontología en Carepa Antioquia",
    "diseño de sonrisa Carepa",
    "urgencias odontológicas Carepa",
    "blanqueamiento dental Carepa",
    "limpieza dental Carepa",
    "ortodoncia Carepa",
    "odontología estética Carepa",
    "odontología en Urabá"
  ],
  doctorProfile: {
    name: "Dra. Nataly Jiménez",
    title: "Odontología general, estética y especializada.",
    intro:
      "Atención odontológica con enfoque claro, humano y responsable para pacientes de Carepa y la región de Urabá.",
    quote:
      "Antes de iniciar cualquier tratamiento, lo más importante es entender qué necesitas y explicarte las opciones con claridad.",
    image: "/images/equipo/odontologia-profesional-carepa.png",
    highlights: [
      "Atención cercana y personalizada",
      "Valoración antes de definir el tratamiento",
      "Comunicación clara desde la primera cita",
      "Enfoque estético, funcional y preventivo"
    ],
    approach: [
      {
        title: "Escuchar primero",
        description:
          "Cada atención inicia entendiendo tu motivo de consulta, tus dudas y lo que esperas mejorar."
      },
      {
        title: "Explicar con claridad",
        description:
          "El plan se conversa de forma sencilla, sin presiones y según lo que se observe en la valoración."
      },
      {
        title: "Cuidar con responsabilidad",
        description:
          "Las recomendaciones dependen de una revisión profesional y de las necesidades reales de cada paciente."
      }
    ]
  },
  trustItems: [
    {
      title: "Atención clara",
      description: "Valoraciones sin presiones, con explicaciones fáciles de entender."
    },
    {
      title: "Bioseguridad",
      description: "Protocolos de higiene y cuidado pensados para una atención responsable."
    },
    {
      title: "Estética y función",
      description: "Tratamientos orientados a salud oral, armonía dental y comodidad diaria."
    },
    {
      title: "Acompañamiento",
      description: "Desde la valoración conoces opciones, tiempos y pasos del tratamiento."
    }
  ],
  services: [
    {
      id: "limpieza-dental",
      title: "Limpieza dental",
      badge: "Preventivo",
      slug: "limpieza-dental-carepa",
      featuredSummary: "Cuidado preventivo para revisar placa, encías y hábitos de higiene.",
      description:
        "Profilaxis y cuidado preventivo para mantener en buen estado tus dientes y encía.",
      image: "/images/servicios/limpieza-dental.png",
      alt: "Imagen referencial de limpieza dental en consultorio odontológico",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero consultar por una limpieza dental. ¿Me pueden orientar con disponibilidad para una valoración?"
    },
    {
      id: "blanqueamiento-dental",
      title: "Blanqueamiento dental",
      badge: "Estético",
      slug: "blanqueamiento-dental-carepa",
      featuredSummary: "Orientación estética para aclarar el tono dental de forma responsable.",
      description:
        "Opciones de aclaramiento dental evaluadas según tu caso y sensibilidad.",
      image: "/images/servicios/blanqueamiento-dental.png",
      alt: "Imagen referencial de blanqueamiento dental",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero consultar por blanqueamiento dental. ¿Me pueden orientar con disponibilidad para una valoración?"
    },
    {
      id: "resinas-esteticas",
      title: "Resinas estéticas",
      badge: "Restaurativo",
      slug: "resinas-esteticas-carepa",
      featuredSummary: "Restauraciones del color del diente para mejorar forma y función.",
      description:
        "Restauraciones del color del diente para mejorar forma, función y apariencia.",
      image: "/images/servicios/resinas-esteticas.png",
      alt: "Imagen referencial de resinas estéticas dentales",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero consultar por resinas estéticas. ¿Me pueden orientar con disponibilidad para una valoración?"
    },
    {
      id: "diseno-sonrisa",
      title: "Diseño de sonrisa",
      badge: "Estético",
      slug: "diseno-de-sonrisa-carepa",
      featuredSummary: "Valoración estética para planear cambios armónicos y realistas.",
      description:
        "Valoración estética responsable para planear cambios armónicos y realistas.",
      image: "/images/servicios/diseno-sonrisa.png",
      alt: "Imagen referencial de diseño de sonrisa",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero consultar por diseño de sonrisa. ¿Me pueden orientar con disponibilidad para una valoración?"
    },
    {
      id: "ortodoncia",
      title: "Ortodoncia",
      badge: "Funcional",
      slug: "ortodoncia-carepa",
      featuredSummary: "Revisión de alineación dental, mordida y alternativas de manejo.",
      description:
        "Acompañamiento para alinear dientes y mordida según diagnóstico profesional.",
      image: "/images/servicios/ortodoncia.png",
      alt: "Imagen referencial de ortodoncia",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero consultar por ortodoncia. ¿Me pueden orientar con disponibilidad para una valoración?"
    },
    {
      id: "protesis-dentales",
      title: "Prótesis dentales",
      badge: "Restaurativo",
      slug: "protesis-dentales-carepa",
      featuredSummary: "Alternativas para recuperar piezas dentales y comodidad al masticar.",
      description:
        "Alternativas para recuperar piezas dentales, función masticatoria y seguridad al sonreír.",
      image: "/images/servicios/protesis-dentales.png",
      alt: "Imagen referencial de prótesis dentales",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero consultar por prótesis dentales. ¿Me pueden orientar con disponibilidad para una valoración?"
    },
    {
      id: "urgencias-odontologicas",
      title: "Urgencias odontológicas",
      badge: "Urgencia",
      slug: "urgencias-odontologicas-carepa",
      featuredSummary: "Orientación para dolor, inflamación, fracturas o restauraciones caídas.",
      description:
        "Orientación para dolor, inflamación, fracturas o restauraciones caídas.",
      image: "/images/servicios/urgencias-odontologicas.png",
      alt: "Imagen referencial de urgencias odontológicas",
      whatsappMessage:
        "Hola, estoy en Carepa y tengo una urgencia odontológica. ¿Me pueden orientar con disponibilidad de atención?"
    },
    {
      id: "odontologia-familiar",
      title: "Odontología familiar",
      badge: "Familiar",
      slug: "odontologia-familiar-carepa",
      featuredSummary: "Atención preventiva y restaurativa para diferentes etapas de la familia.",
      description:
        "Atención preventiva y restaurativa para diferentes etapas de la familia.",
      image: "/images/servicios/odontologia-familiar.png",
      alt: "Imagen referencial de odontología familiar",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero consultar por odontología familiar. ¿Me pueden orientar con disponibilidad para una cita?"
    }
  ],
  firstVisitSteps: [
    {
      title: "Escribes por WhatsApp",
      description:
        "Cuéntanos qué sientes, qué te preocupa o qué cambio te gustaría revisar.",
      reassurance: "No necesitas saber el nombre del tratamiento."
    },
    {
      title: "Agendamos tu valoración",
      description:
        "Revisamos disponibilidad y te indicamos la información necesaria para asistir.",
      reassurance: "Puedes escribir primero y decidir con calma."
    },
    {
      title: "Recibes diagnóstico y plan",
      description:
        "Después de la revisión conoces hallazgos, opciones y siguientes pasos.",
      reassurance: "La valoración define el camino adecuado."
    }
  ],
  emergencyReasons: [
    "Dolor dental intenso",
    "Inflamación o absceso",
    "Fractura dental",
    "Sangrado o trauma oral",
    "Corona o restauración caída"
  ],
  needOptions: [
    {
      id: "dolor-dental",
      label: "Tengo dolor dental",
      summary: "Te conviene escribir describiendo intensidad, zona y desde cuándo inició.",
      guidance:
        "No reemplaza una valoración. Con esa información pueden orientarte sobre disponibilidad y el siguiente paso responsable.",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero agendar una valoración. Mi motivo de consulta es: tengo dolor dental. ¿Me pueden orientar con disponibilidad?"
    },
    {
      id: "mejorar-sonrisa",
      label: "Quiero mejorar mi sonrisa",
      summary: "Puedes iniciar con una valoración estética para revisar opciones realistas.",
      guidance:
        "La recomendación depende de tu salud oral, expectativas, color, forma dental y diagnóstico profesional.",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero agendar una valoración. Mi motivo de consulta es: quiero mejorar mi sonrisa. ¿Me pueden orientar con disponibilidad?"
    },
    {
      id: "limpieza",
      label: "Necesito una limpieza",
      summary: "Es una consulta frecuente para prevención, control de placa y cuidado de encías.",
      guidance:
        "La profesional definirá si basta con profilaxis o si necesitas otro manejo según la valoración.",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero agendar una valoración. Mi motivo de consulta es: necesito una limpieza dental. ¿Me pueden orientar con disponibilidad?"
    },
    {
      id: "ortodoncia",
      label: "Me interesa ortodoncia",
      summary: "Puedes pedir una valoración para revisar alineación, mordida y alternativas.",
      guidance:
        "No todos los casos requieren el mismo plan. La valoración ayuda a definir opciones, tiempos y pasos.",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero agendar una valoración. Mi motivo de consulta es: me interesa ortodoncia. ¿Me pueden orientar con disponibilidad?"
    },
    {
      id: "urgencia",
      label: "Tengo una urgencia",
      summary: "Si hay dolor fuerte, inflamación, trauma o restauración caída, escribe cuanto antes.",
      guidance:
        "El equipo revisará disponibilidad. No se promete atención inmediata si no está confirmada.",
      whatsappMessage:
        "Hola, estoy en Carepa y tengo una urgencia odontológica. ¿Me pueden orientar con disponibilidad de atención?"
    },
    {
      id: "precios",
      label: "Quiero consultar precios",
      summary: "Puedes preguntar primero, pero el valor final depende del diagnóstico.",
      guidance:
        "Para evitar información incompleta, lo ideal es revisar tu caso y explicar opciones antes de decidir.",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero consultar precios de atención odontológica. ¿Me pueden orientar y contarme si debo agendar valoración?"
    },
    {
      id: "no-se",
      label: "No sé qué tratamiento necesito",
      summary: "Es normal no tener claro el nombre del tratamiento antes de una revisión.",
      guidance:
        "Puedes escribir contando lo que notas o lo que te incomoda. La valoración ayuda a definir el camino adecuado.",
      whatsappMessage:
        "Hola, estoy en Carepa y quiero agendar una valoración. No sé qué tratamiento necesito, pero quiero recibir orientación. ¿Me pueden ayudar con disponibilidad?"
    }
  ],
  localTrustPillars: [
    {
      title: "Cercanía",
      description: "Agenda directa por WhatsApp, sin formularios largos ni procesos confusos."
    },
    {
      title: "Claridad",
      description: "Explicación del diagnóstico, opciones y próximos pasos antes de iniciar."
    },
    {
      title: "Responsabilidad",
      description: "Cada plan depende de una valoración profesional y de tus necesidades reales."
    }
  ],
  beforeBookingItems: [
    {
      title: "No sé cuánto cuesta",
      answer:
        "Puedes preguntar primero. El valor final depende de la valoración, el diagnóstico y el plan que realmente necesites."
    },
    {
      title: "No sé si necesito valoración",
      answer:
        "Si tienes dolor, dudas estéticas o molestias repetidas, la valoración ayuda a decidir con información clara."
    },
    {
      title: "Me da nervios ir al odontólogo",
      answer:
        "Puedes contarlo desde el primer mensaje. La atención busca ser clara, tranquila y sin presión."
    },
    {
      title: "Solo quiero preguntar primero",
      answer:
        "Está bien. Escribe tu duda por WhatsApp y agenda después cuando tengas más claridad."
    }
  ],
  careExperienceItems: [
    {
      title: "Escucha inicial",
      description: "El primer contacto busca entender qué te pasa, qué te preocupa y qué esperas resolver."
    },
    {
      title: "Valoración",
      description: "La revisión clínica permite identificar necesidades reales antes de recomendar un plan."
    },
    {
      title: "Explicación clara",
      description: "Conoces hallazgos, alternativas y próximos pasos con lenguaje sencillo."
    },
    {
      title: "Plan responsable",
      description: "Cada decisión se toma según diagnóstico profesional, prioridades y disponibilidad."
    }
  ],
  experiencePrinciples: [
    {
      title: "Decidir con tranquilidad",
      description:
        "Buscamos que el paciente entienda sus opciones antes de iniciar cualquier tratamiento."
    },
    {
      title: "Cuidado sin presión",
      description:
        "La conversación por WhatsApp y la valoración están pensadas para resolver dudas con calma."
    },
    {
      title: "Expectativas realistas",
      description:
        "Los tratamientos se explican de forma responsable, con expectativas claras y prudentes."
    }
  ],
  regionCities: ["Carepa", "Apartadó", "Chigorodó", "Turbo", "Urabá"],
  faqs: [
    {
      question: "¿Dónde está ubicada la atención?",
      answer:
        "La atención es en Carepa, Antioquia. La dirección exacta se confirma al agendar por WhatsApp."
    },
    {
      question: "¿Puedo agendar por WhatsApp?",
      answer:
        "Sí. Puedes escribir por WhatsApp para revisar disponibilidad, motivo de consulta y datos básicos de la cita."
    },
    {
      question: "¿Atienden urgencias?",
      answer:
        "Puedes escribir por WhatsApp si tienes dolor, inflamación, fractura o una restauración caída. El equipo revisará disponibilidad de atención."
    },
    {
      question: "¿La valoración tiene costo?",
      answer:
        "Puedes consultar el valor de la valoración directamente por WhatsApp antes de agendar."
    },
    {
      question: "¿Qué tratamientos ofrecen?",
      answer:
        "La página presenta servicios como limpieza dental, blanqueamiento, resinas, diseño de sonrisa, ortodoncia, prótesis, urgencias y odontología familiar."
    },
    {
      question: "¿Puedo consultar antes de agendar?",
      answer:
        "Sí. Puedes enviar tu duda por WhatsApp para recibir orientación inicial y saber si conviene programar una valoración."
    }
  ]
};
