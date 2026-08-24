import { siteConfig } from "./site";

export type ServicePage = {
  slug: string;
  serviceId: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  heroMedia?: ServiceEditorialMedia;
  benefits: string[];
  whenToConsider: string[];
  processSteps: string[];
  faq: Array<{
    question: string;
    answer: string;
  }>;
  whatsappMessage: string;
  relatedServices: string[];
  /**
   * Bloque opcional de caso real. Solo se declara cuando existe material
   * clínico entregado por el consultorio para ese servicio. Las fotografías
   * se muestran sin edición más allá del recorte y la compresión.
   */
  caseStudy?: ServiceCaseStudy;
};

export type ServiceEditorialMedia = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
};

export type ServiceCaseStudy = {
  /**
   * El bloque solo se renderiza con `enabled: true`. Se mantiene declarado y
   * desactivado mientras no exista autorización escrita de uso de imagen del
   * paciente (Ley 1581 de 2012).
   *
   * Mientras esté en `false`, las fotografías NO viven en public/: están en
   * private/client-clinical-pending/ (fuera del repositorio), así que las rutas
   * de abajo todavía no resuelven. Son metadata para reactivar el caso.
   *
   * Para publicar, una vez exista la autorización:
   *   1. regenerar con `dir: webDir` en scripts/process-client-photography.mjs;
   *   2. poner `enabled: true`.
   */
  enabled: boolean;
  title: string;
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  disclaimer: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "limpieza-dental-carepa",
    serviceId: "limpieza-dental",
    title: "Limpieza dental en Carepa | Profilaxis y cuidado preventivo",
    metaDescription:
      "Consulta por limpieza dental en Carepa, Antioquia. Agenda una valoración por WhatsApp y recibe indicaciones según tu salud oral.",
    h1: "Limpieza dental en Carepa",
    intro:
      "La limpieza dental ayuda a remover placa y manchas superficiales. Antes de realizarla, revisamos el estado de dientes y encías.",
    heroMedia: {
      src: "/images/client/web-v2/nataly-clinic-work.webp",
      alt: "Dra. Nataly Jiménez durante una atención odontológica",
      caption: "Atención en el consultorio.",
      position: "center 45%"
    },
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
      "Revisamos dientes y encías para definir qué limpieza necesitas."
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
      "Hola, quisiera información sobre limpieza dental. ¿Tienen disponibilidad para una valoración?",
    relatedServices: ["blanqueamiento-dental-carepa", "odontologia-familiar-carepa", "resinas-esteticas-carepa"]
  },
  {
    slug: "blanqueamiento-dental-carepa",
    serviceId: "blanqueamiento-dental",
    title: "Blanqueamiento dental en Carepa | Valoración estética responsable",
    metaDescription:
      "Consulta por blanqueamiento dental en Carepa. Revisa sensibilidad, tono y opciones según tu salud oral antes de iniciar.",
    h1: "Blanqueamiento dental en Carepa",
    intro:
      "El blanqueamiento puede aclarar el tono de los dientes. Antes de iniciarlo, hay que revisar sensibilidad, restauraciones y salud oral.",
    heroMedia: {
      src: "/images/client/web-v2/nataly-portrait.webp",
      alt: "Dra. Nataly Jiménez en el consultorio",
      caption: "Dra. Nataly Jiménez.",
      position: "center 24%"
    },
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
      "Revisamos el caso y te explicamos las opciones."
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
      "Hola, quisiera información sobre blanqueamiento dental. ¿Tienen disponibilidad para una valoración?",
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
    heroMedia: {
      src: "/images/client/web-v2/nataly-clinic-work.webp",
      alt: "Dra. Nataly Jiménez atendiendo a una paciente",
      caption: "Atención odontológica real.",
      position: "center 45%"
    },
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
      "Te explicamos las opciones, los cuidados y los límites del tratamiento."
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
      "Hola, quisiera información sobre resinas estéticas. ¿Tienen disponibilidad para una valoración?",
    relatedServices: ["diseno-de-sonrisa-carepa", "protesis-dentales-carepa", "limpieza-dental-carepa"]
  },
  {
    slug: "diseno-de-sonrisa-carepa",
    serviceId: "diseno-sonrisa",
    title: "Diseño de sonrisa en Carepa | Valoración estética dental",
    metaDescription:
      "Consulta por diseño de sonrisa en Carepa. Revisa opciones según tu salud oral, la forma de los dientes y lo que quieres cambiar.",
    h1: "Diseño de sonrisa en Carepa",
    intro:
      "Antes de planear un diseño de sonrisa, revisamos la salud oral, las encías, la mordida y los cambios que te gustaría hacer.",
    heroMedia: {
      src: "/images/client/web-v2/nataly-portrait.webp",
      alt: "Dra. Nataly Jiménez en el consultorio odontológico",
      caption: "Dra. Nataly Jiménez.",
      position: "center 24%"
    },
    benefits: [
      "Permite planear cambios de forma más ordenada.",
      "Ayuda a alinear expectativas con posibilidades reales.",
      "Integra salud oral, estética y función antes de decidir."
    ],
    whenToConsider: [
      "Quieres mejorar armonía, forma o color de tu sonrisa.",
      "No sabes si necesitas resinas, blanqueamiento u otro tratamiento.",
      "Quieres conocer las opciones antes de tomar una decisión estética."
    ],
    processSteps: [
      "Cuentas qué te gustaría mejorar.",
      "Se agenda valoración para revisar salud oral y expectativas.",
      "Te explicamos qué alternativas podrían corresponder."
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
          "Sí. Puedes escribir por WhatsApp y preguntar si conviene agendar una valoración."
      }
    ],
    whatsappMessage:
      "Hola, quisiera información sobre diseño de sonrisa. ¿Tienen disponibilidad para una valoración?",
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
      "La ortodoncia corrige la alineación de los dientes y la mordida. Antes de iniciar, revisamos el caso y si hay algo que deba tratarse primero.",
    heroMedia: {
      src: "/images/client/web-v2/nataly-vanesa-team.webp",
      alt: "Dra. Nataly Jiménez y Vanesa López en el consultorio",
      caption: "Equipo en el consultorio.",
      position: "center 26%"
    },
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
      "Revisamos el caso y te explicamos las opciones y los pasos necesarios."
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
      "Hola, quisiera información sobre ortodoncia. ¿Tienen disponibilidad para una valoración?",
    relatedServices: ["limpieza-dental-carepa", "odontologia-familiar-carepa", "diseno-de-sonrisa-carepa"]
  },
  {
    slug: "protesis-dentales-carepa",
    serviceId: "protesis-dentales",
    title: "Prótesis dentales en Carepa | Recuperar función y comodidad",
    metaDescription:
      "Consulta por prótesis dentales en Carepa. Conoce alternativas para reemplazar piezas y recuperar la función al masticar.",
    h1: "Prótesis dentales en Carepa",
    intro:
      "Las prótesis dentales sirven para reemplazar piezas ausentes y recuperar la función al masticar. La opción depende de la boca y las necesidades de cada persona.",
    heroMedia: {
      src: "/images/client/web-v2/clinic-chair-portrait.webp",
      alt: "Unidad odontológica del consultorio en Carepa",
      caption: "Consultorio en Carepa.",
      position: "center 44%"
    },
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
      "Te explicamos las alternativas y los pasos posibles."
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
      "Hola, quisiera información sobre prótesis dentales. ¿Tienen disponibilidad para una valoración?",
    relatedServices: ["resinas-esteticas-carepa", "odontologia-familiar-carepa", "limpieza-dental-carepa"],
    caseStudy: {
      // Pendiente: autorización de publicación del paciente.
      enabled: false,
      title: "Caso de rehabilitación con prótesis dental",
      before: {
        src: "/images/client/web/caso-protesis-antes.webp",
        alt: "Paciente antes de la rehabilitación con prótesis dental superior"
      },
      after: {
        src: "/images/client/web/caso-protesis-despues.webp",
        alt: "El mismo paciente después de la rehabilitación con prótesis dental superior"
      },
      disclaimer:
        "Cada caso requiere valoración individual. Los resultados y alternativas de tratamiento dependen de las condiciones de cada paciente."
    }
  },
  {
    slug: "endodoncia-carepa",
    serviceId: "endodoncia",
    title: "Endodoncia en Carepa | Valoración por dolor dental",
    metaDescription:
      "Consulta por endodoncia en Carepa. Agenda una valoración para revisar dolor, sensibilidad o molestias en un diente.",
    h1: "Endodoncia en Carepa",
    intro:
      "La endodoncia puede ser necesaria cuando hay dolor o sensibilidad persistente. Primero hay que revisar si la molestia viene del interior del diente.",
    heroMedia: {
      src: "/images/client/web-v2/clinic-chair-portrait.webp",
      alt: "Unidad odontológica del consultorio en Carepa",
      caption: "Consultorio en Carepa.",
      position: "center 44%"
    },
    benefits: [
      "Permite estudiar molestias que no mejoran o aparecen con frío, calor o presión.",
      "Ayuda a definir el manejo cuando el dolor viene del interior del diente.",
      "Evita asumir un tratamiento sin una revisión odontológica previa."
    ],
    whenToConsider: [
      "Tienes dolor dental persistente o sensibilidad fuerte.",
      "Sientes molestia al morder o presión en un diente específico.",
      "Te indicaron revisar si un diente requiere manejo especializado."
    ],
    processSteps: [
      "Escribes por WhatsApp y describes dolor, tiempo de evolución y zona afectada.",
      "Se agenda valoración según disponibilidad.",
      "La profesional revisa el caso y explica si conviene endodoncia u otra alternativa."
    ],
    faq: [
      {
        question: "¿Todo dolor dental requiere endodoncia?",
        answer:
          "No. El dolor puede tener diferentes causas. La valoración define si se requiere endodoncia, restauración, manejo periodontal u otro tratamiento."
      },
      {
        question: "¿Puedo consultar primero por WhatsApp?",
        answer:
          "Sí. Describe los síntomas para consultar disponibilidad y saber cómo empezar."
      }
    ],
    whatsappMessage:
      "Hola, quisiera información sobre endodoncia. ¿Tienen disponibilidad para una valoración?",
    relatedServices: ["urgencias-odontologicas-carepa", "resinas-esteticas-carepa", "limpieza-dental-carepa"]
  },
  {
    slug: "implantologia-carepa",
    serviceId: "implantologia",
    title: "Implantología en Carepa | Valoración para implantes dentales",
    metaDescription:
      "Consulta por implantología en Carepa. Valoración para revisar piezas ausentes, alternativas de rehabilitación oral y pasos según diagnóstico.",
    h1: "Implantología en Carepa",
    intro:
      "Los implantes dentales pueden reemplazar piezas ausentes. Antes de decidir, revisamos la salud oral y las alternativas de rehabilitación.",
    benefits: [
      "Ayuda a revisar alternativas ante la ausencia de una o varias piezas dentales.",
      "Permite entender pasos generales, criterios y necesidades antes de iniciar.",
      "Considera la función, la comodidad y la planificación del caso."
    ],
    whenToConsider: [
      "Te falta una pieza dental y quieres conocer opciones.",
      "Usas una prótesis y deseas revisar alternativas de rehabilitación.",
      "Quieres conocer las opciones antes de decidir sobre implantes."
    ],
    processSteps: [
      "Cuentas por WhatsApp qué pieza o zona quieres revisar.",
      "Se agenda valoración para examinar el caso y definir necesidades.",
      "Te explicamos las alternativas, los estudios o las remisiones que hagan falta."
    ],
    faq: [
      {
        question: "¿Los implantes son para todos los pacientes?",
        answer:
          "No siempre. La indicación depende de salud oral, hueso, hábitos, antecedentes y diagnóstico profesional."
      },
      {
        question: "¿La valoración define el tratamiento exacto?",
        answer:
          "La valoración inicial orienta el caso y puede indicar si se requieren estudios adicionales antes de definir un plan."
      }
    ],
    whatsappMessage:
      "Hola, quisiera información sobre implantes dentales. ¿Tienen disponibilidad para una valoración?",
    relatedServices: ["protesis-dentales-carepa", "limpieza-dental-carepa", "odontologia-familiar-carepa"]
  },
  {
    slug: "armonizacion-orofacial-carepa",
    serviceId: "armonizacion-orofacial",
    title: "Armonización orofacial en Carepa | Valoración estética responsable",
    metaDescription:
      "Consulta por armonización orofacial en Carepa. Revisa indicaciones, alternativas y disponibilidad por WhatsApp.",
    h1: "Armonización orofacial en Carepa",
    intro:
      "La armonización orofacial reúne procedimientos estéticos para el rostro. En consulta revisamos si la opción que tienes en mente corresponde a tu caso.",
    benefits: [
      "Permite conversar expectativas antes de decidir.",
      "Ayuda a revisar alternativas estéticas y sus límites.",
      "Evita iniciar procedimientos sin una valoración individual."
    ],
    whenToConsider: [
      "Quieres consultar sobre labios, perfil facial o procedimientos estéticos.",
      "Buscas entender opciones antes de tomar una decisión.",
      "Tienes dudas sobre indicaciones, cuidados o disponibilidad."
    ],
    processSteps: [
      "Escribes por WhatsApp contando qué procedimiento te interesa.",
      "Se agenda una valoración según disponibilidad.",
      "Revisamos expectativas, alternativas y cuidados."
    ],
    faq: [
      {
        question: "¿Se pueden prometer resultados exactos?",
        answer:
          "No. Cada caso responde de forma diferente. La valoración permite explicar posibilidades y límites de manera responsable."
      },
      {
        question: "¿Puedo consultar por varios procedimientos?",
        answer:
          "Sí. Escribe qué opciones te interesan y consulta disponibilidad."
      }
    ],
    whatsappMessage:
      "Hola, quisiera información sobre armonización orofacial. ¿Tienen disponibilidad para una valoración?",
    relatedServices: ["diseno-de-sonrisa-carepa", "blanqueamiento-dental-carepa", "odontologia-familiar-carepa"]
  },
  {
    slug: "extraccion-de-cordales-carepa",
    serviceId: "extraccion-cordales",
    title: "Extracción de cordales en Carepa | Valoración de terceros molares",
    metaDescription:
      "Consulta por extracción de cordales en Carepa. Valoración para revisar dolor, inflamación, posición de terceros molares y disponibilidad.",
    h1: "Extracción de cordales en Carepa",
    intro:
      "Las cordales pueden causar dolor o inflamación, pero no siempre hay que extraerlas. Primero revisamos los síntomas y la posición de los dientes.",
    heroMedia: {
      src: "/images/client/web-v2/clinic-chair-portrait.webp",
      alt: "Unidad odontológica del consultorio en Carepa",
      caption: "Consultorio en Carepa.",
      position: "center 44%"
    },
    benefits: [
      "Permite revisar si la molestia está relacionada con terceros molares.",
      "Ayuda a definir si se necesita manejo quirúrgico, control o remisión.",
      "Ordena la información necesaria antes de tomar una decisión."
    ],
    whenToConsider: [
      "Sientes dolor o inflamación en la zona posterior de la boca.",
      "Te indicaron revisar la posición de una cordal.",
      "Tienes molestias repetidas al morder o abrir la boca."
    ],
    processSteps: [
      "Escribes por WhatsApp indicando síntomas y zona afectada.",
      "Se revisa disponibilidad para valoración.",
      "Te indicamos si hace falta un estudio, tratamiento o remisión."
    ],
    faq: [
      {
        question: "¿Todas las cordales deben extraerse?",
        answer:
          "No. La decisión depende de síntomas, posición, salud oral y diagnóstico profesional."
      },
      {
        question: "¿Qué debo contar por WhatsApp?",
        answer:
          "Indica si hay dolor, inflamación, fiebre, dificultad para abrir la boca o cuánto tiempo llevas con la molestia."
      }
    ],
    whatsappMessage:
      "Hola, quisiera información sobre extracción de cordales. ¿Tienen disponibilidad para una valoración?",
    relatedServices: ["urgencias-odontologicas-carepa", "endodoncia-carepa", "limpieza-dental-carepa"]
  },
  {
    slug: "urgencias-odontologicas-carepa",
    serviceId: "urgencias-odontologicas",
    title: "Urgencias odontológicas en Carepa | Dolor dental e inflamación",
    metaDescription:
      "Consulta disponibilidad para urgencias odontológicas en Carepa por dolor, inflamación, fractura o una restauración caída.",
    h1: "Urgencias odontológicas en Carepa",
    intro:
      "Si tienes dolor, inflamación, un golpe o una restauración caída, escribe por WhatsApp para consultar disponibilidad. No hacemos diagnósticos por chat.",
    heroMedia: {
      src: "/images/client/web-v2/nataly-clinic-work.webp",
      alt: "Dra. Nataly Jiménez durante una atención odontológica",
      caption: "Atención en el consultorio.",
      position: "center 45%"
    },
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
      "Hola, tengo una urgencia odontológica. ¿Tienen disponibilidad para atenderme?",
    relatedServices: ["limpieza-dental-carepa", "resinas-esteticas-carepa", "odontologia-familiar-carepa"]
  },
  {
    slug: "odontologia-familiar-carepa",
    serviceId: "odontologia-familiar",
    title: "Odontología familiar en Carepa | Cuidado oral para la familia",
    metaDescription:
      "Agenda por WhatsApp una consulta de odontología familiar en Carepa. Atención preventiva y restaurativa para distintas edades.",
    h1: "Odontología familiar en Carepa",
    intro:
      "La odontología familiar incluye revisión, prevención y restauraciones para distintas edades. En consulta definimos qué conviene atender primero.",
    heroMedia: {
      src: "/images/client/web-v2/nataly-vanesa-team.webp",
      alt: "Dra. Nataly Jiménez y Vanesa López en el consultorio",
      caption: "Nataly y Vanesa.",
      position: "center 26%"
    },
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
      "Definimos el plan según lo que encontremos y lo que convenga atender primero."
    ],
    faq: [
      {
        question: "¿Puedo consultar por varios integrantes de la familia?",
        answer:
          "Sí. Escribe por WhatsApp cuántas personas necesitan una consulta."
      },
      {
        question: "¿La atención familiar incluye urgencias?",
        answer:
          "Si hay dolor, inflamación o trauma, se debe revisar disponibilidad como urgencia por WhatsApp."
      }
    ],
    whatsappMessage:
      "Hola, quisiera agendar una consulta de odontología familiar. ¿Tienen disponibilidad?",
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
