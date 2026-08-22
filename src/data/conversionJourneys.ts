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
    support: "Elige lo que más se parece a tu caso.",
    iconKey: "tooth-alert",
    accent: "coral",
    options: [
      {
        id: "dental-pain",
        label: "Dolor dental",
        iconKey: "pain",
        shortGuidance: "Es necesario revisar el diente para saber qué está causando el dolor.",
        whatsappMessage: "Hola, tengo dolor dental. ¿Tienen disponibilidad para valorarme?",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      },
      {
        id: "swelling",
        label: "Inflamación",
        iconKey: "swelling",
        shortGuidance: "La inflamación necesita revisión. Consulta disponibilidad y evita automedicarte.",
        whatsappMessage: "Hola, tengo inflamación en la boca o la encía. ¿Tienen disponibilidad para valorarme?",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      },
      {
        id: "broken-tooth",
        label: "Diente fracturado",
        iconKey: "broken-tooth",
        shortGuidance: "Hay que revisar la fractura para saber si el diente puede protegerse o restaurarse.",
        whatsappMessage: "Hola, tengo un diente fracturado. ¿Tienen disponibilidad para valorarme?",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      },
      {
        id: "lost-restoration",
        label: "Restauración o corona caída",
        iconKey: "restoration",
        shortGuidance: "Conviene revisar pronto la pieza para evitar más daño y definir si puede restaurarse.",
        whatsappMessage: "Hola, se me cayó una restauración o una corona. ¿Tienen disponibilidad para valorarme?",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      },
      {
        id: "other-emergency",
        label: "Otra urgencia",
        iconKey: "alert",
        shortGuidance: "Escribe por WhatsApp qué pasó para consultar disponibilidad.",
        whatsappMessage: "Hola, tengo una urgencia odontológica. ¿Tienen disponibilidad para atenderme?",
        serviceUrl: "/servicios/urgencias-odontologicas-carepa",
        urgencyLevel: "high"
      }
    ]
  },
  {
    id: "aesthetic",
    title: "Quiero mejorar mi sonrisa",
    support: "Mira las opciones y elige una.",
    iconKey: "smile",
    accent: "gold",
    options: [
      {
        id: "whitening",
        label: "Blanqueamiento",
        iconKey: "sparkle",
        shortGuidance: "Primero se revisan la salud oral, el tono de los dientes y la sensibilidad.",
        whatsappMessage: "Hola, quisiera información sobre blanqueamiento dental. ¿Tienen disponibilidad para una valoración?",
        serviceUrl: "/servicios/blanqueamiento-dental-carepa"
      },
      {
        id: "smile-design",
        label: "Diseño o microdiseño de sonrisa",
        iconKey: "smile",
        shortGuidance: "La consulta permite revisar tu salud oral y lo que te gustaría cambiar.",
        whatsappMessage: "Hola, quisiera información sobre diseño o microdiseño de sonrisa. ¿Tienen disponibilidad para una valoración?",
        serviceUrl: "/servicios/diseno-de-sonrisa-carepa"
      },
      {
        id: "aesthetic-resins",
        label: "Resinas estéticas",
        iconKey: "tooth",
        shortGuidance: "Antes de recomendar una resina se revisan la forma, el color y la función del diente.",
        whatsappMessage: "Hola, quisiera información sobre resinas estéticas. ¿Tienen disponibilidad para una valoración?",
        serviceUrl: "/servicios/resinas-esteticas-carepa"
      },
      {
        id: "orthodontics",
        label: "Ortodoncia",
        iconKey: "braces",
        shortGuidance: "Se revisan la alineación y la mordida para saber qué alternativas corresponden.",
        whatsappMessage: "Hola, quisiera información sobre ortodoncia. ¿Tienen disponibilidad para una valoración?",
        serviceUrl: "/servicios/ortodoncia-carepa"
      },
      {
        id: "orofacial",
        label: "Armonización orofacial",
        iconKey: "profile",
        shortGuidance: "La consulta sirve para revisar qué quieres cambiar y cuáles son las alternativas.",
        whatsappMessage: "Hola, quisiera información sobre armonización orofacial. ¿Tienen disponibilidad para una valoración?",
        serviceUrl: "/servicios/armonizacion-orofacial-carepa"
      },
      {
        id: "aesthetic-unsure",
        label: "No sé cuál necesito",
        iconKey: "question",
        shortGuidance: "No tienes que elegir el tratamiento. Cuéntanos qué te gustaría cambiar.",
        whatsappMessage: "Hola, quiero mejorar mi sonrisa, pero no sé qué tratamiento necesito. ¿Tienen disponibilidad para una valoración?"
      }
    ]
  },
  {
    id: "care",
    title: "Quiero una revisión o limpieza",
    support: "Puedes empezar por una consulta general, limpieza o atención familiar.",
    iconKey: "shield-tooth",
    accent: "teal",
    options: [
      {
        id: "general-assessment",
        label: "Valoración general",
        iconKey: "clipboard",
        shortGuidance: "La consulta general permite revisar tu salud oral y definir qué atender primero.",
        whatsappMessage: "Hola, quisiera agendar una valoración general. ¿Tienen disponibilidad?"
      },
      {
        id: "cleaning",
        label: "Limpieza o profilaxis",
        iconKey: "sparkle",
        shortGuidance: "En la consulta se confirma si necesitas profilaxis y cómo cuidar dientes y encías.",
        whatsappMessage: "Hola, quisiera agendar una limpieza o profilaxis dental. ¿Tienen disponibilidad?",
        serviceUrl: "/servicios/limpieza-dental-carepa"
      },
      {
        id: "child-consultation",
        label: "Consulta para un niño",
        iconKey: "family",
        shortGuidance: "La consulta permite revisar el desarrollo, la prevención y cualquier molestia.",
        whatsappMessage: "Hola, quisiera agendar una consulta odontológica para un niño. ¿Tienen disponibilidad?",
        serviceUrl: "/servicios/odontologia-familiar-carepa"
      },
      {
        id: "missing-tooth",
        label: "Diente perdido o rehabilitación",
        iconKey: "tooth",
        shortGuidance: "La revisión permite conocer las opciones para reemplazar el diente o rehabilitar la boca.",
        whatsappMessage: "Hola, quisiera consultar por un diente perdido o por rehabilitación oral. ¿Tienen disponibilidad?",
        serviceUrl: "/servicios/protesis-dentales-carepa"
      },
      {
        id: "specialist",
        label: "Consulta especializada",
        iconKey: "specialist",
        shortGuidance: "Cuéntanos el motivo de consulta para saber qué profesional debe revisar el caso.",
        whatsappMessage: "Hola, necesito una consulta odontológica especializada. ¿Tienen disponibilidad?"
      },
      {
        id: "care-unsure",
        label: "No sé qué tratamiento necesito",
        iconKey: "question",
        shortGuidance: "No tienes que saberlo. La consulta general sirve para identificar qué necesitas.",
        whatsappMessage: "Hola, quisiera agendar una valoración, pero no sé qué tratamiento necesito. ¿Tienen disponibilidad?"
      }
    ]
  }
];

export function getJourney(id: JourneyIntentId | null) {
  return conversionJourneys.find((journey) => journey.id === id) ?? null;
}
