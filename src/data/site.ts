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
  clinicName: "CONSULTORIO ODONTOLÓGICO DRA NATALY JIMÉNEZ",
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
  siteUrl: "https://www.dranatalyjimenez.com",
  ogImage: "/og-luz-de-uraba.webp",
  seoTitle: "Odontología en Carepa | Valoración odontológica y salud oral",
  seoDescription:
    "Consulta servicios de odontología en Carepa y agenda una valoración por WhatsApp con la Dra. Nataly Jiménez.",
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
      "Nataly atiende odontología general y estética en Carepa.",
    quote:
      "Primero revisamos qué necesitas. Después hablamos de las opciones.",
    image: "/images/client/web/nataly-clinica-avatar.webp",
    highlights: [
      "Consulta según tu motivo",
      "Valoración antes de definir el tratamiento",
      "Explicación de las opciones",
      "Odontología general y estética"
    ],
    approach: [
      {
        title: "Escuchar primero",
        description:
          "La consulta comienza por lo que sientes, lo que te preocupa o lo que quieres cambiar."
      },
      {
        title: "Explicar con claridad",
        description:
          "Te contamos qué encontramos y qué alternativas corresponden a tu caso."
      },
      {
      title: "Definir el siguiente paso",
      description:
          "El tratamiento solo se define después de revisar tu salud oral."
      }
    ]
  },
  trustItems: [
    {
      title: "Atención clara",
      description: "Te explicamos qué encontramos y cuáles son las opciones."
    },
    {
      title: "Cita previa",
      description: "La disponibilidad y los datos de la cita se confirman por WhatsApp."
    },
    {
      title: "Estética y función",
      description: "Opciones que consideran la salud oral, la forma y la función."
    },
    {
      title: "Siguiente paso",
      description: "Después de la valoración conoces las opciones y los pasos del tratamiento."
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
        "Hola, quisiera información sobre limpieza dental. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "blanqueamiento-dental",
      title: "Blanqueamiento dental",
      badge: "Estético",
      slug: "blanqueamiento-dental-carepa",
      featuredSummary: "Opciones para aclarar el tono de los dientes, según tu salud oral.",
      description:
        "Opciones de aclaramiento dental evaluadas según tu caso y sensibilidad.",
      image: "/images/servicios/blanqueamiento-dental.png",
      alt: "Imagen referencial de blanqueamiento dental",
      whatsappMessage:
        "Hola, quisiera información sobre blanqueamiento dental. ¿Tienen disponibilidad para una valoración?"
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
        "Hola, quisiera información sobre resinas estéticas. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "diseno-sonrisa",
      title: "Diseño de sonrisa",
      badge: "Estético",
      slug: "diseno-de-sonrisa-carepa",
      featuredSummary: "Revisión de la sonrisa para conocer qué cambios son posibles.",
      description:
        "Revisión de la salud oral y de los cambios que te gustaría hacer.",
      image: "/images/servicios/diseno-sonrisa.png",
      alt: "Imagen referencial de diseño de sonrisa",
      whatsappMessage:
        "Hola, quisiera información sobre diseño de sonrisa. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "ortodoncia",
      title: "Ortodoncia",
      badge: "Funcional",
      slug: "ortodoncia-carepa",
      featuredSummary: "Revisión de alineación dental, mordida y alternativas de manejo.",
      description:
        "Opciones para alinear los dientes y corregir la mordida, según el diagnóstico.",
      image: "/images/servicios/ortodoncia.png",
      alt: "Imagen referencial de ortodoncia",
      whatsappMessage:
        "Hola, quisiera información sobre ortodoncia. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "protesis-dentales",
      title: "Prótesis dentales",
      badge: "Restaurativo",
      slug: "protesis-dentales-carepa",
      featuredSummary: "Alternativas para recuperar piezas dentales y comodidad al masticar.",
      description:
        "Alternativas para reemplazar piezas dentales y recuperar la función al masticar.",
      image: "/images/servicios/protesis-dentales.png",
      alt: "Imagen referencial de prótesis dentales",
      whatsappMessage:
        "Hola, quisiera información sobre prótesis dentales. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "endodoncia",
      title: "Endodoncia",
      badge: "Especializado",
      slug: "endodoncia-carepa",
      featuredSummary: "Revisión de dolor, sensibilidad o molestias internas del diente.",
      description:
        "Consulta para saber si una molestia necesita tratamiento de conducto.",
      image: "/images/servicios/odontologia-familiar.png",
      alt: "Imagen referencial de valoración odontológica especializada",
      whatsappMessage:
        "Hola, quisiera información sobre endodoncia. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "implantologia",
      title: "Implantología",
      badge: "Rehabilitación",
      slug: "implantologia-carepa",
      featuredSummary: "Consulta sobre implantes para reemplazar piezas dentales ausentes.",
      description:
        "Valoración para revisar si los implantes dentales son una alternativa según tu caso.",
      image: "/images/servicios/protesis-dentales.png",
      alt: "Imagen referencial de rehabilitación oral e implantología",
      whatsappMessage:
        "Hola, quisiera información sobre implantes dentales. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "armonizacion-orofacial",
      title: "Armonización orofacial",
      badge: "Estético",
      slug: "armonizacion-orofacial-carepa",
      featuredSummary: "Consulta para revisar cambios estéticos en el rostro.",
      description:
        "Procedimientos de armonización orofacial definidos después de la valoración.",
      image: "/images/servicios/diseno-sonrisa.png",
      alt: "Imagen referencial de atención estética odontológica",
      whatsappMessage:
        "Hola, quisiera información sobre armonización orofacial. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "extraccion-cordales",
      title: "Extracción de cordales",
      badge: "Cirugía",
      slug: "extraccion-de-cordales-carepa",
      featuredSummary: "Revisión de cordales cuando hay molestia, inflamación o indicación de extracción.",
      description:
        "Revisión de los terceros molares para definir si requieren extracción.",
      image: "/images/servicios/urgencias-odontologicas.png",
      alt: "Imagen referencial de valoración para extracción de cordales",
      whatsappMessage:
        "Hola, quisiera información sobre extracción de cordales. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "urgencias-odontologicas",
      title: "Urgencias odontológicas",
      badge: "Urgencia",
      slug: "urgencias-odontologicas-carepa",
      featuredSummary: "Atención de dolor, inflamación, fracturas o restauraciones caídas.",
      description:
        "Consulta por dolor, inflamación, fracturas o restauraciones caídas.",
      image: "/images/servicios/urgencias-odontologicas.png",
      alt: "Imagen referencial de urgencias odontológicas",
      whatsappMessage:
        "Hola, tengo una urgencia odontológica. ¿Tienen disponibilidad para atenderme?"
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
        "Hola, quisiera agendar una consulta de odontología familiar. ¿Tienen disponibilidad?"
    }
  ],
  firstVisitSteps: [
    {
      title: "Escribes por WhatsApp",
      description:
        "Cuéntanos qué sientes, qué te preocupa o qué cambio te gustaría revisar.",
      reassurance: "No tienes que saber el nombre del tratamiento."
    },
    {
      title: "Agendamos tu valoración",
      description:
        "Revisamos disponibilidad y te enviamos los datos de la cita.",
      reassurance: "Puedes preguntar antes de agendar."
    },
    {
      title: "Recibes diagnóstico y plan",
      description:
        "Después de la revisión conoces hallazgos, opciones y siguientes pasos.",
      reassurance: "La revisión define el siguiente paso."
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
        "Con esa información podemos entender mejor el caso antes de confirmar la cita.",
      whatsappMessage:
        "Hola, tengo dolor dental. ¿Tienen disponibilidad para valorarme?"
    },
    {
      id: "mejorar-sonrisa",
      label: "Quiero mejorar mi sonrisa",
      summary: "Puedes iniciar con una valoración estética para revisar opciones realistas.",
      guidance:
        "La recomendación depende de tu salud oral y de lo que quieras cambiar.",
      whatsappMessage:
        "Hola, quiero mejorar mi sonrisa. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "limpieza",
      label: "Necesito una limpieza",
      summary: "Es una consulta frecuente para prevención, control de placa y cuidado de encías.",
      guidance:
        "En la consulta se confirma si necesitas profilaxis u otro manejo para las encías.",
      whatsappMessage:
        "Hola, quisiera agendar una limpieza dental. ¿Tienen disponibilidad?"
    },
    {
      id: "ortodoncia",
      label: "Me interesa ortodoncia",
      summary: "Puedes pedir una valoración para revisar alineación, mordida y alternativas.",
      guidance:
        "No todos los casos usan el mismo plan. La revisión permite conocer las opciones.",
      whatsappMessage:
        "Hola, quisiera información sobre ortodoncia. ¿Tienen disponibilidad para una valoración?"
    },
    {
      id: "urgencia",
      label: "Tengo una urgencia",
      summary: "Si hay dolor fuerte, inflamación, trauma o restauración caída, escribe cuanto antes.",
      guidance:
        "Escribe qué pasó. Confirmaremos si hay disponibilidad para atenderte.",
      whatsappMessage:
        "Hola, tengo una urgencia odontológica. ¿Tienen disponibilidad para atenderme?"
    },
    {
      id: "precios",
      label: "Quiero consultar precios",
      summary: "Puedes preguntar primero, pero el valor final depende del diagnóstico.",
      guidance:
        "Algunos valores solo pueden definirse después de revisar el caso.",
      whatsappMessage:
        "Hola, quisiera consultar precios. ¿Necesito agendar una valoración?"
    },
    {
      id: "no-se",
      label: "No sé qué tratamiento necesito",
      summary: "Es normal no tener claro el nombre del tratamiento antes de una revisión.",
      guidance:
        "Escribe qué notas o qué te incomoda. La consulta ayudará a definir el siguiente paso.",
      whatsappMessage:
        "Hola, no sé qué tratamiento necesito. ¿Tienen disponibilidad para una valoración?"
    }
  ],
  localTrustPillars: [
    {
      title: "Agenda por WhatsApp",
      description: "Pregunta por disponibilidad sin llenar formularios."
    },
    {
      title: "Claridad",
      description: "Te contamos qué encontramos y qué opciones hay antes de iniciar."
    },
    {
      title: "Valoración previa",
      description: "El tratamiento se define después de revisar el caso."
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
        "Si tienes dolor, una duda estética o una molestia repetida, conviene revisar el caso."
    },
    {
      title: "Me da nervios ir al odontólogo",
      answer:
        "Puedes decirlo desde el primer mensaje para tenerlo en cuenta durante la cita."
    },
    {
      title: "Solo quiero preguntar primero",
      answer:
        "Escribe tu duda por WhatsApp y decide después si quieres agendar."
    }
  ],
  careExperienceItems: [
    {
      title: "Motivo de consulta",
      description: "Cuéntanos qué te pasa, qué te preocupa o qué quieres cambiar."
    },
    {
      title: "Valoración",
      description: "La revisión clínica permite saber qué necesitas antes de recomendar un plan."
    },
    {
      title: "Explicación clara",
      description: "Te contamos qué encontramos, las alternativas y el siguiente paso."
    },
    {
      title: "Plan de tratamiento",
      description: "Se define según el diagnóstico y lo que conviene atender primero."
    }
  ],
  experiencePrinciples: [
    {
      title: "Entender antes de decidir",
      description:
        "Buscamos que el paciente entienda sus opciones antes de iniciar cualquier tratamiento."
    },
    {
      title: "Preguntar antes de agendar",
      description:
        "Puedes escribir por WhatsApp si quieres resolver una duda primero."
    },
    {
      title: "Resultados sin promesas",
      description:
        "La respuesta al tratamiento cambia según cada caso."
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
        "Sí. Envía tu duda por WhatsApp y te diremos si conviene programar una valoración."
    }
  ]
};
