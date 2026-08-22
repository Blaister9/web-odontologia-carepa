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
      "Personas de Carepa y municipios próximos que aún no saben qué servicio necesitan.",
    utmCampaign: "lanzamiento_sitio",
    journeyId: "care",
    landingPath: "/",
    whatsappMessage:
      "Hola, quisiera agendar una valoración odontológica. ¿Tienen disponibilidad?",
    primaryCopy:
      "Elige tu motivo de consulta y encuentra la información que necesitas para empezar.",
    shortCopy: "Elige tu motivo de consulta.",
    headline: "¿Qué necesitas consultar?",
    supportingLine:
      "No tienes que saber el nombre del tratamiento. Elige lo más parecido a tu caso.",
    cta: "Elegir una opción",
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
      "Personas de Carepa y Urabá con dolor u otra molestia odontológica.",
    utmCampaign: "urgencias_carepa",
    journeyId: "urgency",
    landingPath: "/c/urgencias",
    whatsappMessage:
      "Hola, tengo una urgencia odontológica. ¿Tienen disponibilidad para atenderme?",
    primaryCopy:
      "¿Tienes dolor, inflamación o se fracturó un diente? Elige lo que ocurrió y consulta disponibilidad de atención por WhatsApp.",
    shortCopy: "Elige tu molestia y consulta disponibilidad.",
    headline: "Si algo te duele o se dañó, empieza por aquí",
    supportingLine:
      "Elige lo que más se parece a tu caso y consulta disponibilidad.",
    cta: "Elegir la molestia",
    visualConcept:
      "Señal coral sobria, icono dental lineal y ruta corta hacia las opciones de urgencia.",
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
      "Hola, quiero mejorar mi sonrisa. ¿Tienen disponibilidad para una valoración?",
    primaryCopy:
      "Blanqueamiento, resinas, diseño de sonrisa u otras alternativas: elige lo que quieres mejorar.",
    shortCopy: "Explora opciones para mejorar tu sonrisa.",
    headline: "¿Qué te gustaría cambiar de tu sonrisa?",
    supportingLine:
      "Elige una opción. La valoración permite saber qué corresponde según tu salud oral.",
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
      "Hola, quisiera agendar una limpieza o profilaxis dental. ¿Tienen disponibilidad?",
    primaryCopy:
      "Antes de una limpieza revisamos el estado de los dientes y las encías.",
    shortCopy: "Consulta por limpieza o profilaxis.",
    headline: "¿Estás pensando en una limpieza dental?",
    supportingLine:
      "Ya seleccionamos la opción de limpieza para que puedas ver la información y consultar disponibilidad.",
    cta: "Ver información",
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
      "Hola, quisiera información sobre ortodoncia. ¿Tienen disponibilidad para una valoración?",
    primaryCopy:
      "Si quieres revisar alineación dental o mordida, una valoración es el punto de partida para conocer alternativas aplicables a tu caso.",
    shortCopy: "Conoce el punto de partida para ortodoncia.",
    headline: "La ortodoncia empieza por entender tu caso",
    supportingLine:
      "Ya seleccionamos ortodoncia para que puedas ver la información y consultar disponibilidad.",
    cta: "Ver información",
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
      "Hola, quisiera agendar una valoración general. ¿Tienen disponibilidad?",
    primaryCopy:
      "No necesitas llegar con un tratamiento elegido. Una valoración permite revisar tu salud oral y conversar sobre prioridades de cuidado.",
    shortCopy: "Empieza con una valoración general.",
    headline: "Puedes empezar por una valoración general",
    supportingLine:
      "Ya seleccionamos la valoración general para que puedas ver cómo empezar.",
    cta: "Ver información",
    visualConcept:
      "Ruta central con lista de revisión, formas redondeadas en teal y una jerarquía tranquila orientada a claridad.",
    enabled: true
  },
  {
    slug: "uraba",
    name: "Carepa, veredas y Urabá",
    objective:
      "Presentar el consultorio a pacientes de Carepa, veredas próximas y otros municipios de Urabá.",
    audience:
      "Personas de Carepa, veredas próximas y otros municipios de Urabá que buscan consulta odontológica.",
    utmCampaign: "uraba_carepa",
    journeyId: "care",
    landingPath: "/c/uraba",
    whatsappMessage:
      "Hola, estoy en Carepa o en otro municipio de Urabá. ¿Tienen disponibilidad para una valoración?",
    primaryCopy:
      "Si estás en Carepa, una vereda próxima u otro municipio de Urabá, consulta disponibilidad antes de desplazarte.",
    shortCopy: "Consultas odontológicas para Carepa y Urabá.",
    headline: "Atención odontológica en Carepa",
    supportingLine:
      "Elige tu motivo y confirma por WhatsApp la cita y la ubicación antes de desplazarte.",
    cta: "Elegir una opción",
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
