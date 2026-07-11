import {
  conversionJourneys,
  getJourney,
  JourneyIntentId
} from "@/data/conversionJourneys";

export type CampaignSlug =
  | "lanzamiento"
  | "urgencias"
  | "sonrisa"
  | "limpieza"
  | "ortodoncia"
  | "valoracion"
  | "uraba";

export type CampaignConfig = {
  slug: CampaignSlug;
  name: string;
  objective: string;
  audience: string;
  utmCampaign: string;
  journeyId: JourneyIntentId;
  optionId?: string;
  landingPath: string;
  whatsappMessage: string;
  primaryCopy: string;
  shortCopy: string;
  headline: string;
  supportingLine: string;
  cta: string;
  visualConcept: string;
  enabled: boolean;
};

export const campaigns: readonly CampaignConfig[] = [
  {
    slug: "lanzamiento",
    name: "Lanzamiento del sitio",
    objective:
      "Dar a conocer el nuevo recorrido web y convertir el interés general en una conversación de valoración por WhatsApp.",
    audience:
      "Personas de Carepa y municipios cercanos que buscan orientación odontológica y aún no saben qué servicio necesitan.",
    utmCampaign: "lanzamiento_sitio",
    journeyId: "care",
    landingPath: "/",
    whatsappMessage:
      "Hola, conocí el nuevo sitio de la Dra. Nataly Jiménez y quiero recibir orientación para una valoración odontológica. ¿Me ayudan con disponibilidad?",
    primaryCopy:
      "Ahora puedes contarnos qué necesitas desde un recorrido corto y claro. Elige tu motivo de consulta, revisa la orientación inicial y decide cuándo escribirnos.",
    shortCopy: "Elige tu necesidad y encuentra un punto de partida claro.",
    headline: "Una forma más clara de empezar a cuidar tu sonrisa",
    supportingLine:
      "No necesitas conocer el nombre del tratamiento. Elige el motivo más cercano a lo que buscas y revisa el siguiente paso.",
    cta: "Elegir mi necesidad",
    visualConcept:
      "Composición luminosa con arcos de marca, tres caminos visuales y una interfaz móvil simplificada, sin fotografías añadidas.",
    enabled: true
  },
  {
    slug: "urgencias",
    name: "Urgencias odontológicas",
    objective:
      "Ayudar a personas con dolor, inflamación, fracturas u otras molestias a identificar su motivo y consultar disponibilidad.",
    audience:
      "Personas de Carepa y la región de Urabá con una molestia odontológica que requiere orientación oportuna.",
    utmCampaign: "urgencias_carepa",
    journeyId: "urgency",
    landingPath: "/c/urgencias",
    whatsappMessage:
      "Hola, tengo una urgencia odontológica y quiero consultar disponibilidad para una valoración. Estoy en Carepa o cerca.",
    primaryCopy:
      "¿Tienes dolor, inflamación o se fracturó un diente? Elige lo que ocurrió y consulta disponibilidad de atención por WhatsApp.",
    shortCopy: "Elige tu molestia y consulta disponibilidad.",
    headline: "Si algo te duele o se dañó, empieza por aquí",
    supportingLine:
      "Selecciona la situación más cercana a la tuya para recibir una orientación breve antes de escribirnos.",
    cta: "Revisar mi urgencia",
    visualConcept:
      "Señal de orientación en coral sobrio, icono dental lineal y ruta corta hacia las opciones de urgencia.",
    enabled: true
  },
  {
    slug: "sonrisa",
    name: "Mejorar mi sonrisa",
    objective:
      "Conectar el interés estético con una alternativa responsable y una valoración previa.",
    audience:
      "Personas interesadas en mejorar color, forma o armonía de su sonrisa sin tener decidido un tratamiento.",
    utmCampaign: "sonrisa_carepa",
    journeyId: "aesthetic",
    landingPath: "/c/sonrisa",
    whatsappMessage:
      "Hola, quiero mejorar mi sonrisa, pero deseo recibir orientación antes de elegir un tratamiento. ¿Me ayudan con disponibilidad para una valoración?",
    primaryCopy:
      "Blanqueamiento, resinas, diseño de sonrisa u otras alternativas: explora el camino más cercano a lo que quieres mejorar.",
    shortCopy: "Explora opciones para mejorar tu sonrisa.",
    headline: "Tu idea de sonrisa comienza con una valoración",
    supportingLine:
      "Cuéntanos qué te gustaría mejorar y conoce opciones que siempre deben revisarse según tu salud oral y tus expectativas.",
    cta: "Explorar opciones",
    visualConcept:
      "Arco de sonrisa abstracto, destellos dorados discretos y tarjetas que representan alternativas estéticas.",
    enabled: true
  },
  {
    slug: "limpieza",
    name: "Limpieza y profilaxis",
    objective:
      "Facilitar consultas preventivas de limpieza o profilaxis y llevarlas al paso de valoración y agenda.",
    audience:
      "Personas que desean retomar el cuidado preventivo de dientes y encías en Carepa.",
    utmCampaign: "limpieza_carepa",
    journeyId: "care",
    optionId: "cleaning",
    landingPath: "/c/limpieza",
    whatsappMessage:
      "Hola, quiero agendar una limpieza o profilaxis dental. ¿Me ayudan con disponibilidad?",
    primaryCopy:
      "Si estás pensando en una limpieza dental, aquí puedes revisar por qué la valoración ayuda a orientar el cuidado de dientes y encías.",
    shortCopy: "Empieza tu cuidado preventivo con una valoración.",
    headline: "¿Estás pensando en una limpieza dental?",
    supportingLine:
      "La opción de limpieza o profilaxis ya está seleccionada para que revises la orientación y decidas si deseas escribirnos.",
    cta: "Ver orientación de limpieza",
    visualConcept:
      "Formas limpias en verde agua, brillo puntual y un icono de profilaxis con lectura clara en pantalla móvil.",
    enabled: true
  },
  {
    slug: "ortodoncia",
    name: "Ortodoncia",
    objective:
      "Convertir el interés por alineación y mordida en solicitudes informadas de valoración para ortodoncia.",
    audience:
      "Jóvenes y adultos de Carepa y Urabá que desean consultar alternativas de ortodoncia.",
    utmCampaign: "ortodoncia_carepa",
    journeyId: "aesthetic",
    optionId: "orthodontics",
    landingPath: "/c/ortodoncia",
    whatsappMessage:
      "Hola, quiero consultar una valoración para ortodoncia. ¿Me ayudan con disponibilidad en Carepa?",
    primaryCopy:
      "Si quieres revisar alineación dental o mordida, una valoración es el punto de partida para conocer alternativas aplicables a tu caso.",
    shortCopy: "Conoce el punto de partida para ortodoncia.",
    headline: "La ortodoncia empieza por entender tu caso",
    supportingLine:
      "La opción de ortodoncia ya está seleccionada. Revisa la orientación y consulta disponibilidad cuando quieras continuar.",
    cta: "Ver orientación de ortodoncia",
    visualConcept:
      "Secuencia modular de arcos alineados, acentos dorados y trazos clínicos simples, sin promesas de resultado.",
    enabled: true
  },
  {
    slug: "valoracion",
    name: "Valoración general",
    objective:
      "Dar un punto de entrada sencillo a quienes tienen dudas de salud oral o no saben qué tratamiento necesitan.",
    audience:
      "Personas que quieren revisar su salud oral, resolver dudas o retomar atención odontológica.",
    utmCampaign: "valoracion_carepa",
    journeyId: "care",
    optionId: "general-assessment",
    landingPath: "/c/valoracion",
    whatsappMessage:
      "Hola, quiero agendar una valoración odontológica general. Estoy en Carepa o cerca. ¿Me ayudan con disponibilidad?",
    primaryCopy:
      "No necesitas llegar con un tratamiento elegido. Una valoración permite revisar tu salud oral y conversar sobre prioridades de cuidado.",
    shortCopy: "Empieza con una valoración general.",
    headline: "Cuando no sabes por dónde empezar, empieza por valorar",
    supportingLine:
      "La valoración general ya está seleccionada para que conozcas el siguiente paso sin formularios ni decisiones apresuradas.",
    cta: "Ver orientación de valoración",
    visualConcept:
      "Ruta central con lista de revisión, formas redondeadas en teal y una jerarquía tranquila orientada a claridad.",
    enabled: true
  },
  {
    slug: "uraba",
    name: "Carepa, veredas y Urabá",
    objective:
      "Acercar el consultorio a pacientes de Carepa, veredas cercanas y otros municipios de Urabá con un recorrido general.",
    audience:
      "Personas de Carepa, veredas cercanas y la región de Urabá que buscan orientación odontológica local.",
    utmCampaign: "uraba_carepa",
    journeyId: "care",
    landingPath: "/c/uraba",
    whatsappMessage:
      "Hola, estoy en Carepa, una vereda cercana o la región de Urabá y quiero consultar disponibilidad para una valoración odontológica. ¿Me orientan?",
    primaryCopy:
      "Si estás en Carepa, una vereda cercana o en Urabá, puedes comenzar el recorrido en línea y consultar disponibilidad antes de desplazarte.",
    shortCopy: "Orientación odontológica para Carepa y Urabá.",
    headline: "Un punto de partida cercano para Carepa y Urabá",
    supportingLine:
      "Elige tu necesidad, revisa una orientación breve y confirma por WhatsApp la información de tu cita antes de desplazarte.",
    cta: "Elegir mi necesidad",
    visualConcept:
      "Mapa abstracto de conexión regional, ondas teal y nodos que representan Carepa, veredas y municipios de Urabá.",
    enabled: true
  }
];

export const preservedUtmKeys = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "utm_id"
] as const;

export type CampaignQuery = Record<string, string | string[] | undefined>;

export type CampaignRequest = {
  campaignSlug: CampaignSlug | null;
  initialJourney: {
    intentId: JourneyIntentId;
    optionId: string | null;
  } | null;
};

function firstQueryValue(value: string | string[] | undefined): string | null {
  if (Array.isArray(value)) {
    return value[0] ?? null;
  }

  return typeof value === "string" ? value : null;
}

function getAllowedJourneyId(value: string | null): JourneyIntentId | null {
  if (!value) return null;

  return conversionJourneys.find((journey) => journey.id === value)?.id ?? null;
}

function getAllowedOptionId(
  journeyId: JourneyIntentId,
  value: string | null | undefined
): string | null {
  if (!value) return null;

  return getJourney(journeyId)?.options.find((option) => option.id === value)?.id ?? null;
}

export function getCampaignBySlug(slug: string | null | undefined): CampaignConfig | null {
  if (!slug) return null;

  return campaigns.find((campaign) => campaign.slug === slug) ?? null;
}

export function getEnabledCampaignBySlug(
  slug: string | null | undefined
): CampaignConfig | null {
  const campaign = getCampaignBySlug(slug);
  return campaign?.enabled ? campaign : null;
}

export function getCampaignByLandingPath(path: string): CampaignConfig | null {
  return (
    campaigns.find(
      (campaign) => campaign.enabled && campaign.landingPath !== "/" && campaign.landingPath === path
    ) ?? null
  );
}

export function resolveCampaignRequest(query: CampaignQuery): CampaignRequest {
  const campaign = getEnabledCampaignBySlug(firstQueryValue(query.campaign));
  const requestedJourneyId = getAllowedJourneyId(firstQueryValue(query.journey));
  const intentId = campaign?.journeyId ?? requestedJourneyId;

  if (!intentId) {
    return { campaignSlug: campaign?.slug ?? null, initialJourney: null };
  }

  const configuredOptionId = campaign?.optionId
    ? getAllowedOptionId(intentId, campaign.optionId)
    : null;
  const requestedOptionId = getAllowedOptionId(intentId, firstQueryValue(query.option));

  return {
    campaignSlug: campaign?.slug ?? null,
    initialJourney: {
      intentId,
      optionId: configuredOptionId ?? requestedOptionId
    }
  };
}

export function buildCampaignDestination(
  campaign: CampaignConfig,
  query: CampaignQuery
): string {
  const destinationQuery = new URLSearchParams({
    campaign: campaign.slug,
    journey: campaign.journeyId
  });

  if (campaign.optionId) {
    destinationQuery.set("option", campaign.optionId);
  }

  for (const key of preservedUtmKeys) {
    const value = firstQueryValue(query[key]);
    if (value) destinationQuery.set(key, value);
  }

  return `/?${destinationQuery.toString()}#campaign-entry`;
}
