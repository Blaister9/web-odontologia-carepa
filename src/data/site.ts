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
};

export type Service = {
  id: string;
  title: string;
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
      title: "Atención personalizada",
      description: "Valoraciones claras, sin presiones y con explicaciones fáciles de entender."
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
      title: "Acompañamiento claro",
      description: "Desde la valoración conoces opciones, tiempos y pasos del tratamiento."
    }
  ],
  services: [
    {
      id: "limpieza-dental",
      title: "Limpieza dental",
      description:
        "Profilaxis y cuidado preventivo para mantener en buen estado tus dientes y encía.",
      image: "/images/servicios/limpieza-dental.png",
      alt: "Imagen referencial de limpieza dental en consultorio odontológico",
      whatsappMessage:
        "Hola, quiero consultar por una limpieza dental en Carepa. Me gustaría conocer disponibilidad."
    },
    {
      id: "blanqueamiento-dental",
      title: "Blanqueamiento dental",
      description:
        "Opciones de aclaramiento dental evaluadas según tu caso y sensibilidad.",
      image: "/images/servicios/blanqueamiento-dental.png",
      alt: "Imagen referencial de blanqueamiento dental",
      whatsappMessage:
        "Hola, quiero consultar por blanqueamiento dental en Carepa. Me gustaría recibir orientación."
    },
    {
      id: "resinas-esteticas",
      title: "Resinas estéticas",
      description:
        "Restauraciones del color del diente para mejorar forma, función y apariencia.",
      image: "/images/servicios/resinas-esteticas.png",
      alt: "Imagen referencial de resinas estéticas dentales",
      whatsappMessage:
        "Hola, quiero consultar por resinas estéticas. Me gustaría agendar una valoración."
    },
    {
      id: "diseno-sonrisa",
      title: "Diseño de sonrisa",
      description:
        "Valoración estética responsable para planear cambios armónicos y realistas.",
      image: "/images/servicios/diseno-sonrisa.png",
      alt: "Imagen referencial de diseño de sonrisa",
      whatsappMessage:
        "Hola, quiero consultar por diseño de sonrisa en Carepa. Me gustaría saber qué opciones tengo."
    },
    {
      id: "ortodoncia",
      title: "Ortodoncia",
      description:
        "Acompañamiento para alinear dientes y mordida según diagnóstico profesional.",
      image: "/images/servicios/ortodoncia.png",
      alt: "Imagen referencial de ortodoncia",
      whatsappMessage:
        "Hola, quiero consultar por ortodoncia en Carepa. Me gustaría conocer disponibilidad para valoración."
    },
    {
      id: "protesis-dentales",
      title: "Prótesis dentales",
      description:
        "Alternativas para recuperar piezas dentales, función masticatoria y seguridad al sonreír.",
      image: "/images/servicios/protesis-dentales.png",
      alt: "Imagen referencial de prótesis dentales",
      whatsappMessage:
        "Hola, quiero consultar por prótesis dentales. Me gustaría recibir información para una valoración."
    },
    {
      id: "urgencias-odontologicas",
      title: "Urgencias odontológicas",
      description:
        "Orientación para dolor, inflamación, fracturas o restauraciones caídas.",
      image: "/images/servicios/urgencias-odontologicas.png",
      alt: "Imagen referencial de urgencias odontológicas",
      whatsappMessage:
        "Hola, tengo una urgencia odontológica en Carepa. Quiero revisar disponibilidad de atención."
    },
    {
      id: "odontologia-familiar",
      title: "Odontología familiar",
      description:
        "Atención preventiva y restaurativa para diferentes etapas de la familia.",
      image: "/images/servicios/odontologia-familiar.png",
      alt: "Imagen referencial de odontología familiar",
      whatsappMessage:
        "Hola, quiero consultar por odontología familiar en Carepa. Me gustaría agendar una cita."
    }
  ],
  firstVisitSteps: [
    {
      title: "Escribes por WhatsApp",
      description:
        "Cuéntales qué necesitas, si tienes dolor o si buscas un tratamiento estético o preventivo."
    },
    {
      title: "Agendamos tu valoración",
      description:
        "Revisamos disponibilidad y te indicamos la información necesaria para asistir."
    },
    {
      title: "Recibes diagnóstico y plan",
      description:
        "Después de la revisión conoces hallazgos, opciones y siguientes pasos."
    }
  ],
  emergencyReasons: [
    "Dolor dental intenso",
    "Inflamación o absceso",
    "Fractura dental",
    "Sangrado o trauma oral",
    "Corona o restauración caída"
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
