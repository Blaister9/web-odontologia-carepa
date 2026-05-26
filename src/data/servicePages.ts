import { siteConfig } from "./site";

export type ServicePage = {
  slug: string;
  serviceId: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  benefits: string[];
  whenToConsider: string[];
  processSteps: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  whatsappMessage: string;
  relatedServices: string[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "limpieza-dental-carepa",
    serviceId: "limpieza-dental",
    title: "Limpieza dental en Carepa | Profilaxis y cuidado preventivo",
    metaDescription:
      "Agenda por WhatsApp una valoración para limpieza dental en Carepa, Antioquia. Cuidado preventivo, orientación clara y recomendaciones según tu caso.",
    h1: "Limpieza dental en Carepa",
    intro:
      "La limpieza dental ayuda a mantener una buena higiene oral y permite revisar el estado de encías, dientes y hábitos de cuidado. En Carepa, puedes agendar una valoración para recibir orientación profesional antes de decidir el siguiente paso.",
    benefits: [
      "Ayuda a controlar acumulación de placa y manchas superficiales.",
      "Permite recibir recomendaciones de higiene según tus hábitos.",
      "Facilita detectar señales que requieren revisión profesional."
    ],
    whenToConsider: [
      "Sientes acumulación de placa o sarro.",
      "Tus encías sangran al cepillarte.",
      "Quieres iniciar un control preventivo antes de otro tratamiento."
    ],
    processSteps: [
      "Escribes por WhatsApp y cuentas qué necesitas.",
      "Se agenda una valoración según disponibilidad.",
      "La profesional revisa tu caso y define el manejo adecuado."
    ],
    faq: [
      {
        question: "¿Cada cuánto se recomienda una limpieza dental?",
        answer:
          "Depende de tus hábitos, antecedentes y salud de encías. La frecuencia debe definirse en valoración profesional."
      },
      {
        question: "¿La limpieza dental reemplaza una valoración?",
        answer:
          "No. La valoración permite revisar el estado oral y confirmar qué tipo de limpieza o cuidado necesitas."
      }
    ],
    whatsappMessage:
      "Hola, estoy en Carepa y quiero consultar por limpieza dental. ¿Me pueden orientar con disponibilidad para una valoración?",
    relatedServices: ["blanqueamiento-dental-carepa", "odontologia-familiar-carepa", "resinas-esteticas-carepa"]
  },
  {
    slug: "blanqueamiento-dental-carepa",
    serviceId: "blanqueamiento-dental",
    title: "Blanqueamiento dental en Carepa | Valoración estética responsable",
    metaDescription:
      "Consulta por blanqueamiento dental en Carepa. Valoración estética responsable para revisar sensibilidad, expectativas y opciones según tu salud oral.",
    h1: "Blanqueamiento dental en Carepa",
    intro:
      "El blanqueamiento dental puede ayudar a aclarar el tono de los dientes, pero debe valorarse según sensibilidad, restauraciones existentes y estado general de la boca. La orientación profesional evita expectativas poco realistas.",
    benefits: [
      "Permite revisar si eres candidato antes de iniciar.",
      "Ayuda a aclarar expectativas sobre tono, sensibilidad y cuidados.",
      "Puede complementar un plan estético cuando la salud oral está controlada."
    ],
    whenToConsider: [
      "Quieres mejorar el tono de tus dientes.",
      "Tienes manchas externas o cambios de color que deseas revisar.",
      "Buscas una opción estética sin iniciar tratamientos invasivos sin valoración."
    ],
    processSteps: [
      "Cuentas por WhatsApp qué cambio te gustaría lograr.",
      "Se revisa disponibilidad para valoración.",
      "La profesional evalúa tu caso y explica opciones responsables."
    ],
    faq: [
      {
        question: "¿El blanqueamiento sirve para todos los casos?",
        answer:
          "No siempre. Depende del origen del color, restauraciones, sensibilidad y salud oral."
      },
      {
        question: "¿Puede generar sensibilidad?",
        answer:
          "Puede presentarse sensibilidad en algunos casos. Por eso conviene revisar antecedentes antes de iniciar."
      }
    ],
    whatsappMessage:
      "Hola, estoy en Carepa y quiero consultar por blanqueamiento dental. ¿Me pueden orientar con disponibilidad para una valoración?",
    relatedServices: ["limpieza-dental-carepa", "diseno-de-sonrisa-carepa", "resinas-esteticas-carepa"]
  },
  {
    slug: "resinas-esteticas-carepa",
    serviceId: "resinas-esteticas",
    title: "Resinas estéticas en Carepa | Restauraciones dentales",
    metaDescription:
      "Consulta por resinas estéticas en Carepa. Valoración para revisar forma, color, función y alternativas restaurativas según diagnóstico.",
    h1: "Resinas estéticas en Carepa",
    intro:
      "Las resinas estéticas pueden ayudar a restaurar dientes con desgaste, fracturas pequeñas o cambios de forma, siempre que el diagnóstico indique que son una opción adecuada.",
    benefits: [
      "Pueden mejorar forma y función de dientes específicos.",
      "Se adaptan al color dental cuando el caso lo permite.",
      "Ayudan a recuperar zonas afectadas por desgaste o restauraciones antiguas."
    ],
    whenToConsider: [
      "Tienes una restauración antigua que quieres revisar.",
      "Notas una fractura pequeña o desgaste.",
      "Quieres mejorar la forma de uno o varios dientes con una opción conservadora."
    ],
    processSteps: [
      "Envías tu motivo de consulta por WhatsApp.",
      "Se agenda una valoración para revisar el diente o zona afectada.",
      "Recibes explicación de opciones, cuidados y limitaciones del tratamiento."
    ],
    faq: [
      {
        question: "¿Las resinas duran para siempre?",
        answer:
          "No. Su duración depende de hábitos, mordida, higiene y cuidados. Deben controlarse periódicamente."
      },
      {
        question: "¿Una resina sirve para cualquier fractura?",
        answer:
          "No necesariamente. Algunas fracturas requieren otro manejo, por eso se debe valorar el caso."
      }
    ],
    whatsappMessage:
      "Hola, estoy en Carepa y quiero consultar por resinas estéticas. ¿Me pueden orientar con disponibilidad para una valoración?",
    relatedServices: ["diseno-de-sonrisa-carepa", "protesis-dentales-carepa", "limpieza-dental-carepa"]
  },
  {
    slug: "diseno-de-sonrisa-carepa",
    serviceId: "diseno-sonrisa",
    title: "Diseño de sonrisa en Carepa | Valoración estética dental",
    metaDescription:
      "Consulta por diseño de sonrisa en Carepa. Valoración estética responsable para revisar opciones reales según salud oral, forma dental y expectativas.",
    h1: "Diseño de sonrisa en Carepa",
    intro:
      "El diseño de sonrisa debe iniciar con una valoración responsable. Antes de hablar de materiales o cambios estéticos, conviene revisar salud oral, encías, mordida, color y expectativas.",
    benefits: [
      "Permite planear cambios de forma más ordenada.",
      "Ayuda a alinear expectativas con posibilidades reales.",
      "Integra salud oral, estética y función antes de decidir."
    ],
    whenToConsider: [
      "Quieres mejorar armonía, forma o color de tu sonrisa.",
      "No sabes si necesitas resinas, blanqueamiento u otro tratamiento.",
      "Buscas orientación antes de tomar una decisión estética."
    ],
    processSteps: [
      "Cuentas qué te gustaría mejorar.",
      "Se agenda valoración para revisar salud oral y expectativas.",
      "Recibes alternativas explicadas de forma clara y responsable."
    ],
    faq: [
      {
        question: "¿El diseño de sonrisa es igual para todos?",
        answer:
          "No. Cada plan depende de la salud oral, forma dental, mordida, presupuesto y expectativas."
      },
      {
        question: "¿Puedo preguntar antes de agendar?",
        answer:
          "Sí. Puedes escribir por WhatsApp para recibir orientación inicial y saber si conviene una valoración."
      }
    ],
    whatsappMessage:
      "Hola, estoy en Carepa y quiero consultar por diseño de sonrisa. ¿Me pueden orientar con disponibilidad para una valoración?",
    relatedServices: ["blanqueamiento-dental-carepa", "resinas-esteticas-carepa", "limpieza-dental-carepa"]
  },
  {
    slug: "ortodoncia-carepa",
    serviceId: "ortodoncia",
    title: "Ortodoncia en Carepa | Valoración de alineación y mordida",
    metaDescription:
      "Consulta por ortodoncia en Carepa. Agenda valoración para revisar alineación dental, mordida y alternativas según diagnóstico profesional.",
    h1: "Ortodoncia en Carepa",
    intro:
      "La ortodoncia busca revisar alineación dental y mordida. Antes de iniciar, es importante una valoración que permita entender el caso y definir si hay condiciones previas por tratar.",
    benefits: [
      "Ayuda a revisar alineación y mordida de forma integral.",
      "Permite conocer alternativas y pasos generales del proceso.",
      "Aporta claridad sobre controles, tiempos y cuidados esperados."
    ],
    whenToConsider: [
      "Notas dientes desalineados o espacios que quieres revisar.",
      "Sientes incomodidad al morder o cerrar la boca.",
      "Quieres saber si eres candidato para tratamiento de ortodoncia."
    ],
    processSteps: [
      "Escribes por WhatsApp indicando que te interesa ortodoncia.",
      "Se agenda una valoración inicial según disponibilidad.",
      "La profesional revisa tu caso y explica opciones o pasos necesarios."
    ],
    faq: [
      {
        question: "¿Necesito exámenes antes de iniciar ortodoncia?",
        answer:
          "Puede ser necesario según el caso. La valoración define qué información adicional se requiere."
      },
      {
        question: "¿Todos los casos toman el mismo tiempo?",
        answer:
          "No. Los tiempos dependen de diagnóstico, objetivos, respuesta biológica y controles."
      }
    ],
    whatsappMessage:
      "Hola, estoy en Carepa y quiero consultar por ortodoncia. ¿Me pueden orientar con disponibilidad para una valoración?",
    relatedServices: ["limpieza-dental-carepa", "odontologia-familiar-carepa", "diseno-de-sonrisa-carepa"]
  },
  {
    slug: "protesis-dentales-carepa",
    serviceId: "protesis-dentales",
    title: "Prótesis dentales en Carepa | Recuperar función y comodidad",
    metaDescription:
      "Consulta por prótesis dentales en Carepa. Valoración para revisar alternativas orientadas a recuperar piezas, función masticatoria y comodidad.",
    h1: "Prótesis dentales en Carepa",
    intro:
      "Las prótesis dentales pueden ser una alternativa para recuperar piezas ausentes y mejorar función masticatoria. La opción adecuada depende de la valoración clínica y de las condiciones de cada paciente.",
    benefits: [
      "Ayudan a revisar alternativas para piezas ausentes.",
      "Buscan recuperar función y comodidad al comer.",
      "Permiten planear un manejo acorde con necesidades y posibilidades."
    ],
    whenToConsider: [
      "Te falta una o varias piezas dentales.",
      "Tienes una prótesis antigua que ya no se siente cómoda.",
      "Quieres conocer opciones antes de decidir."
    ],
    processSteps: [
      "Cuentas tu caso por WhatsApp.",
      "Se agenda valoración para revisar piezas presentes, encías y función.",
      "Recibes orientación sobre alternativas y pasos posibles."
    ],
    faq: [
      {
        question: "¿Qué tipo de prótesis necesito?",
        answer:
          "Depende de piezas ausentes, encías, mordida y expectativas. Debe definirse en valoración."
      },
      {
        question: "¿Puedo consultar si mi prótesis actual molesta?",
        answer:
          "Sí. Puedes escribir por WhatsApp y explicar qué incomodidad tienes para revisar disponibilidad."
      }
    ],
    whatsappMessage:
      "Hola, estoy en Carepa y quiero consultar por prótesis dentales. ¿Me pueden orientar con disponibilidad para una valoración?",
    relatedServices: ["resinas-esteticas-carepa", "odontologia-familiar-carepa", "limpieza-dental-carepa"]
  },
  {
    slug: "urgencias-odontologicas-carepa",
    serviceId: "urgencias-odontologicas",
    title: "Urgencias odontológicas en Carepa | Dolor dental e inflamación",
    metaDescription:
      "Consulta disponibilidad para urgencias odontológicas en Carepa por dolor dental, inflamación, fractura o restauración caída. Orientación por WhatsApp.",
    h1: "Urgencias odontológicas en Carepa",
    intro:
      "Si tienes dolor dental, inflamación, trauma o una restauración caída, puedes escribir por WhatsApp para revisar disponibilidad. La orientación inicial no reemplaza una valoración profesional.",
    benefits: [
      "Ayuda a definir si debes buscar atención odontológica cuanto antes.",
      "Permite comunicar síntomas importantes desde el primer mensaje.",
      "Facilita revisar disponibilidad sin prometer atención inmediata no confirmada."
    ],
    whenToConsider: [
      "Dolor dental fuerte o persistente.",
      "Inflamación, absceso o sangrado.",
      "Fractura dental, trauma o restauración caída."
    ],
    processSteps: [
      "Escribes por WhatsApp indicando síntomas y tiempo de evolución.",
      "Se revisa disponibilidad de atención.",
      "En valoración se define el manejo adecuado según diagnóstico."
    ],
    faq: [
      {
        question: "¿Atienden 24/7?",
        answer:
          "No se promete atención 24/7. La disponibilidad debe confirmarse por WhatsApp."
      },
      {
        question: "¿Qué debo escribir si tengo dolor?",
        answer:
          "Indica dónde duele, desde cuándo, intensidad, inflamación, fiebre o si hubo trauma."
      }
    ],
    whatsappMessage:
      "Hola, estoy en Carepa y tengo una urgencia odontológica. ¿Me pueden orientar con disponibilidad de atención?",
    relatedServices: ["limpieza-dental-carepa", "resinas-esteticas-carepa", "odontologia-familiar-carepa"]
  },
  {
    slug: "odontologia-familiar-carepa",
    serviceId: "odontologia-familiar",
    title: "Odontología familiar en Carepa | Cuidado oral para la familia",
    metaDescription:
      "Agenda por WhatsApp valoración de odontología familiar en Carepa. Atención preventiva y restaurativa con orientación clara para diferentes etapas.",
    h1: "Odontología familiar en Carepa",
    intro:
      "La odontología familiar reúne cuidado preventivo y restaurativo para diferentes etapas de la vida. La valoración ayuda a definir prioridades y hábitos de cuidado oral en casa.",
    benefits: [
      "Permite revisar necesidades preventivas y restaurativas.",
      "Ayuda a ordenar prioridades de atención para la familia.",
      "Facilita recibir recomendaciones claras de higiene y seguimiento."
    ],
    whenToConsider: [
      "Quieres una revisión general de salud oral.",
      "Buscas atención preventiva para varios integrantes de la familia.",
      "Tienes dudas sobre hábitos, molestias o tratamientos pendientes."
    ],
    processSteps: [
      "Escribes por WhatsApp contando quién necesita la valoración.",
      "Se revisa disponibilidad y datos básicos de la cita.",
      "La profesional orienta el plan según hallazgos y prioridades."
    ],
    faq: [
      {
        question: "¿Puedo consultar por varios integrantes de la familia?",
        answer:
          "Sí. Puedes escribir por WhatsApp y contar cuántas personas necesitan orientación o valoración."
      },
      {
        question: "¿La atención familiar incluye urgencias?",
        answer:
          "Si hay dolor, inflamación o trauma, se debe revisar disponibilidad como urgencia por WhatsApp."
      }
    ],
    whatsappMessage:
      "Hola, estoy en Carepa y quiero consultar por odontología familiar. ¿Me pueden orientar con disponibilidad para una valoración?",
    relatedServices: ["limpieza-dental-carepa", "ortodoncia-carepa", "urgencias-odontologicas-carepa"]
  }
];

export function getServicePageBySlug(slug: string): ServicePage | undefined {
  return servicePages.find((servicePage) => servicePage.slug === slug);
}

export function getServiceBySlug(slug: string) {
  const servicePage = getServicePageBySlug(slug);
  return siteConfig.services.find((service) => service.id === servicePage?.serviceId);
}
