export type SiteConfig = {
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
  instagramUrl: string;
  facebookUrl?: string;
  mapUrl: string;
  siteUrl: string;
  ogImage: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  services: Service[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  trustItems: TrustItem[];
  firstVisitSteps: FirstVisitStep[];
  emergencyReasons: string[];
  needOptions: NeedOption[];
  localTrustPillars: LocalTrustPillar[];
  beforeBookingItems: BeforeBookingItem[];
};

export type Service = {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  alt: string;
  whatsappMessage: string;
};

export type Testimonial = {
  name: string;
  label: string;
  quote: string;
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

export const siteConfig: SiteConfig = {
  clinicName: "Odontología Carepa",
  doctorName: "Dra. Nombre por confirmar",
  specialty: "Odontología estética y familiar",
  city: "Carepa",
  department: "Antioquia",
  whatsappNumber: "573000000000",
  whatsappDisplay: "+57 300 000 0000",
  address: "Dirección pendiente por confirmar, Carepa, Antioquia",
  schedule: {
    weekdays: "Lunes a viernes: horario pendiente por confirmar",
    saturday: "Sábados: con cita previa",
    emergencies: "Urgencias odontológicas: consultar disponibilidad por WhatsApp"
  },
  instagramUrl: "https://www.instagram.com/",
  facebookUrl: "https://www.facebook.com/",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=Carepa%2C%20Antioquia%2C%20Colombia",
  siteUrl: "",
  ogImage: "/images/hero/consultorio-odontologico-carepa.png",
  seoTitle: "Odontóloga en Carepa, Antioquia | Odontología estética y familiar",
  seoDescription:
    "Atención odontológica moderna, clara y cercana en Carepa, Antioquia. Agenda por WhatsApp servicios de limpieza dental, blanqueamiento, resinas, ortodoncia, urgencias y odontología familiar.",
  seoKeywords: [
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
  // Reemplazar estos textos por testimonios reales autorizados antes de publicar campañas.
  testimonials: [
    {
      name: "Paciente verificado",
      label: "Tratamiento preventivo",
      quote:
        "Recibí una explicación clara del tratamiento y pude resolver mis dudas antes de agendar."
    },
    {
      name: "Paciente verificado",
      label: "Atención estética",
      quote:
        "La atención fue ordenada, puntual y con recomendaciones fáciles de seguir en casa."
    },
    {
      name: "Paciente verificado",
      label: "Consulta familiar",
      quote:
        "Me gustó que el proceso fuera cercano y que explicaran las opciones con tranquilidad."
    }
  ],
  faqs: [
    {
      question: "¿Dónde está ubicada la atención?",
      answer:
        "La atención es en Carepa, Antioquia. La dirección exacta debe confirmarse en la configuración del sitio antes de publicar."
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
        "El costo de la valoración está pendiente por confirmar. Puedes consultarlo directamente antes de agendar."
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
