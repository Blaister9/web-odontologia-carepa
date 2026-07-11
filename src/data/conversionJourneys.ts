export type JourneyIntentId = "urgency" | "aesthetic" | "care";

export type ConversionOption = {
  id: string;
  label: string;
  iconKey: string;
  shortGuidance: string;
  whatsappMessage: string;
  serviceUrl?: string;
  urgencyLevel?: "high" | "standard";
  accent?: string;
};

export type ConversionJourney = {
  id: JourneyIntentId;
  title: string;
  support: string;
  iconKey: string;
  accent: string;
  options: ConversionOption[];
};

export const conversionJourneys: ConversionJourney[] = [
  {
    id: "urgency",
    title: "Tengo dolor o una molestia",
    support: "Cuéntanos qué pasó y consulta disponibilidad.",
    iconKey: "tooth-alert",
    accent: "coral",
    options: [
      {
        id: "dental-pain",
        label: "Dolor dental",
        iconKey: "pain",
        shortGuidance: "El dolor dental requiere valoración para identificar la causa y definir el manejo adecuado.",
        whatsappMessage: "Hola, tengo dolor dental y quiero consultar disponibilidad para una valoración. Estoy en Carepa o cerca.",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      },
      {
        id: "swelling",
        label: "Inflamación",
        iconKey: "swelling",
        shortGuidance: "La inflamación debe revisarse profesionalmente. Consulta disponibilidad y evita automedicarte.",
        whatsappMessage: "Hola, tengo inflamación en la boca o encía y quiero consultar disponibilidad para una valoración. Estoy en Carepa o cerca.",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      },
      {
        id: "broken-tooth",
        label: "Diente fracturado",
        iconKey: "broken-tooth",
        shortGuidance: "Una revisión permite valorar la fractura y las alternativas para proteger o restaurar el diente.",
        whatsappMessage: "Hola, tengo un diente fracturado y quiero consultar disponibilidad para una valoración. Estoy en Carepa o cerca.",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      },
      {
        id: "lost-restoration",
        label: "Restauración o corona caída",
        iconKey: "restoration",
        shortGuidance: "Conviene revisar pronto la pieza para evitar más daño y definir si puede restaurarse.",
        whatsappMessage: "Hola, se me cayó una restauración o corona y quiero consultar disponibilidad para una valoración en Carepa.",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      },
      {
        id: "other-emergency",
        label: "Otra urgencia",
        iconKey: "alert",
        shortGuidance: "Describe brevemente tu molestia por WhatsApp para consultar disponibilidad de valoración.",
        whatsappMessage: "Hola, tengo una urgencia odontológica y quiero consultar disponibilidad para una valoración. Estoy en Carepa o cerca.",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      }
    ]
  },
  {
    id: "aesthetic",
    title: "Quiero mejorar mi sonrisa",
    support: "Explora opciones estéticas con valoración previa.",
    iconKey: "smile",
    accent: "gold",
    options: [
      {
        id: "whitening",
        label: "Blanqueamiento",
        iconKey: "sparkle",
        shortGuidance: "Primero se revisan tu salud oral, tono dental y sensibilidad para orientar una opción responsable.",
        whatsappMessage: "Hola, quiero aclarar el tono de mis dientes y deseo consultar una valoración para blanqueamiento. ¿Me ayudan con disponibilidad?",
        serviceUrl: "/servicios/blanqueamiento-dental-carepa"
      },
      {
        id: "smile-design",
        label: "Diseño o microdiseño de sonrisa",
        iconKey: "smile",
        shortGuidance: "Se revisan tu salud oral, expectativas y sonrisa para definir alternativas adecuadas.",
        whatsappMessage: "Hola, quiero mejorar mi sonrisa y deseo consultar una valoración para diseño o microdiseño. ¿Me ayudan con disponibilidad?",
        serviceUrl: "/servicios/diseno-de-sonrisa-carepa"
      },
      {
        id: "aesthetic-resins",
        label: "Resinas estéticas",
        iconKey: "tooth",
        shortGuidance: "La valoración permite revisar forma, color y función antes de recomendar una restauración estética.",
        whatsappMessage: "Hola, quiero consultar una valoración para resinas estéticas. ¿Me ayudan con disponibilidad?",
        serviceUrl: "/servicios/resinas-esteticas-carepa"
      },
      {
        id: "orthodontics",
        label: "Ortodoncia",
        iconKey: "braces",
        shortGuidance: "Se revisan alineación y mordida para explicarte las alternativas que podrían aplicar a tu caso.",
        whatsappMessage: "Hola, quiero consultar una valoración para ortodoncia. ¿Me ayudan con disponibilidad en Carepa?",
        serviceUrl: "/servicios/ortodoncia-carepa"
      },
      {
        id: "orofacial",
        label: "Armonización orofacial",
        iconKey: "profile",
        shortGuidance: "Una consulta profesional permite revisar expectativas y alternativas con un enfoque responsable.",
        whatsappMessage: "Hola, quiero consultar una valoración para armonización orofacial. ¿Me ayudan con disponibilidad?",
        serviceUrl: "/servicios/armonizacion-orofacial-carepa"
      },
      {
        id: "aesthetic-unsure",
        label: "No sé cuál necesito",
        iconKey: "question",
        shortGuidance: "No necesitas elegir un tratamiento antes de la valoración; basta con contar qué te gustaría mejorar.",
        whatsappMessage: "Hola, quiero mejorar mi sonrisa, pero no sé qué tratamiento necesito. ¿Me ayudan con disponibilidad para una valoración?"
      }
    ]
  },
  {
    id: "care",
    title: "Quiero cuidar mi salud oral",
    support: "Encuentra el punto de partida más sencillo.",
    iconKey: "shield-tooth",
    accent: "teal",
    options: [
      {
        id: "general-assessment",
        label: "Valoración general",
        iconKey: "clipboard",
        shortGuidance: "Una valoración general permite revisar tu salud oral y definir prioridades de cuidado.",
        whatsappMessage: "Hola, quiero agendar una valoración odontológica general. Estoy en Carepa o cerca. ¿Me ayudan con disponibilidad?"
      },
      {
        id: "cleaning",
        label: "Limpieza o profilaxis",
        iconKey: "sparkle",
        shortGuidance: "La revisión permite confirmar si necesitas profilaxis y orientar el cuidado de dientes y encías.",
        whatsappMessage: "Hola, quiero agendar una limpieza o profilaxis dental. ¿Me ayudan con disponibilidad?",
        serviceUrl: "/servicios/limpieza-dental-carepa"
      },
      {
        id: "child-consultation",
        label: "Consulta para un niño",
        iconKey: "family",
        shortGuidance: "La consulta ayuda a revisar desarrollo, prevención y cualquier molestia con un enfoque cercano.",
        whatsappMessage: "Hola, quiero consultar disponibilidad para una valoración odontológica para un niño en Carepa.",
        serviceUrl: "/servicios/odontologia-familiar-carepa"
      },
      {
        id: "missing-tooth",
        label: "Diente perdido o rehabilitación",
        iconKey: "tooth",
        shortGuidance: "Una valoración permite revisar las alternativas para recuperar función y comodidad al sonreír.",
        whatsappMessage: "Hola, quiero consultar una valoración por un diente perdido o rehabilitación oral. ¿Me ayudan con disponibilidad?",
        serviceUrl: "/servicios/protesis-dentales-carepa"
      },
      {
        id: "specialist",
        label: "Consulta especializada",
        iconKey: "specialist",
        shortGuidance: "Cuéntanos el motivo de consulta para orientarte sobre la valoración y el profesional adecuado.",
        whatsappMessage: "Hola, quiero consultar disponibilidad para una valoración odontológica especializada en Carepa."
      },
      {
        id: "care-unsure",
        label: "No sé qué tratamiento necesito",
        iconKey: "question",
        shortGuidance: "Es normal no saberlo. Una valoración general permite identificar necesidades y explicar los siguientes pasos.",
        whatsappMessage: "Hola, quiero agendar una valoración, pero no sé qué tratamiento necesito. ¿Me ayudan con disponibilidad?"
      }
    ]
  }
];

export function getJourney(id: JourneyIntentId | null) {
  return conversionJourneys.find((journey) => journey.id === id) ?? null;
}
