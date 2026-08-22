export type CatalogService = {
  name: string;
  slug?: string;
  summary: string;
  whatsappMessage: string;
};

export type ServiceCategory = {
  title: string;
  description: string;
  services: CatalogService[];
};

const defaultMessage = (serviceName: string) =>
  `Hola, quisiera información sobre ${serviceName}. ¿Tienen disponibilidad para una valoración?`;

export const serviceCatalog: ServiceCategory[] = [
  {
    title: "Odontología general y preventiva",
    description: "Consultas, prevención y restauraciones básicas.",
    services: [
      {
        name: "Consulta o valoración por odontología general",
        slug: "odontologia-familiar-carepa",
        summary: "Revisión de la salud oral, molestias o dudas de tratamiento.",
        whatsappMessage: defaultMessage("una valoración por odontología general")
      },
      {
        name: "Limpieza dental",
        slug: "limpieza-dental-carepa",
        summary: "Remoción de placa y revisión del cuidado de las encías.",
        whatsappMessage: defaultMessage("limpieza dental")
      },
      {
        name: "Profilaxis",
        slug: "limpieza-dental-carepa",
        summary: "Limpieza y recomendaciones de higiene oral.",
        whatsappMessage: defaultMessage("profilaxis")
      },
      {
        name: "Calzas en resina",
        slug: "resinas-esteticas-carepa",
        summary: "Restauraciones del color del diente cuando el diagnóstico lo permite.",
        whatsappMessage: defaultMessage("calzas en resina")
      },
      {
        name: "Cambio de amalgamas por resinas estéticas",
        slug: "resinas-esteticas-carepa",
        summary: "Revisión de restauraciones antiguas y opciones de reemplazo.",
        whatsappMessage: defaultMessage("cambio de amalgamas por resinas estéticas")
      },
      {
        name: "Extracciones simples",
        summary: "Revisión para saber si es necesario extraer el diente.",
        whatsappMessage: defaultMessage("extracciones simples")
      }
    ]
  },
  {
    title: "Odontología estética",
    description: "Opciones para cambiar el color, la forma o la apariencia de los dientes.",
    services: [
      {
        name: "Odontología estética",
        slug: "diseno-de-sonrisa-carepa",
        summary: "Revisión de forma, color y salud oral.",
        whatsappMessage: defaultMessage("odontología estética")
      },
      {
        name: "Blanqueamiento dental",
        slug: "blanqueamiento-dental-carepa",
        summary: "Evaluación de tono, sensibilidad y cuidados antes de iniciar.",
        whatsappMessage: defaultMessage("blanqueamiento dental")
      },
      {
        name: "Diseño de sonrisa",
        slug: "diseno-de-sonrisa-carepa",
        summary: "Planeación de cambios según la salud oral y lo que quieres mejorar.",
        whatsappMessage: defaultMessage("diseño de sonrisa")
      },
      {
        name: "Microdiseño de sonrisa",
        slug: "diseno-de-sonrisa-carepa",
        summary: "Revisión de ajustes conservadores de forma, color o proporción.",
        whatsappMessage: defaultMessage("microdiseño de sonrisa")
      },
      {
        name: "Resinas estéticas",
        slug: "resinas-esteticas-carepa",
        summary: "Restauraciones del color del diente para mejorar forma y función.",
        whatsappMessage: defaultMessage("resinas estéticas")
      },
      {
        name: "Coronas dentales",
        slug: "protesis-dentales-carepa",
        summary: "Restauración para cubrir y proteger un diente cuando corresponde.",
        whatsappMessage: defaultMessage("coronas dentales")
      }
    ]
  },
  {
    title: "Ortodoncia y desarrollo maxilar",
    description: "Valoración de alineación dental, mordida y desarrollo maxilar.",
    services: [
      {
        name: "Ortodoncia",
        slug: "ortodoncia-carepa",
        summary: "Revisión de alineación, mordida y alternativas de manejo.",
        whatsappMessage: defaultMessage("ortodoncia")
      },
      {
        name: "Ortopedia maxilar",
        slug: "ortodoncia-carepa",
        summary: "Revisión del crecimiento y desarrollo de los maxilares.",
        whatsappMessage: defaultMessage("ortopedia maxilar")
      }
    ]
  },
  {
    title: "Rehabilitación oral",
    description: "Opciones para recuperar función, comodidad y piezas dentales ausentes.",
    services: [
      {
        name: "Prótesis dentales",
        slug: "protesis-dentales-carepa",
        summary: "Alternativas para recuperar función masticatoria y comodidad.",
        whatsappMessage: defaultMessage("prótesis dentales")
      },
      {
        name: "Implantología",
        slug: "implantologia-carepa",
        summary: "Valoración para revisar si los implantes son una opción en tu caso.",
        whatsappMessage: defaultMessage("implantología")
      },
      {
        name: "Coronas dentales",
        slug: "protesis-dentales-carepa",
        summary: "Restauración planificada según estructura dental y diagnóstico.",
        whatsappMessage: defaultMessage("coronas dentales")
      }
    ]
  },
  {
    title: "Endodoncia, cirugía y especialidades",
    description: "Consultas por dolor, cordales y casos que necesitan especialista.",
    services: [
      {
        name: "Endodoncia",
        slug: "endodoncia-carepa",
        summary: "Revisión de dolor, sensibilidad o señales que puedan requerir manejo interno del diente.",
        whatsappMessage: defaultMessage("endodoncia")
      },
      {
        name: "Extracción de cordales",
        slug: "extraccion-de-cordales-carepa",
        summary: "Revisión de cordales por molestia, inflamación o posible extracción.",
        whatsappMessage: defaultMessage("extracción de cordales")
      },
      {
        name: "Consulta por odontología especializada",
        summary: "Revisión para saber qué profesional debe atender el caso.",
        whatsappMessage: defaultMessage("consulta por odontología especializada")
      },
      {
        name: "Remisión a periodoncia",
        summary: "Remisión para casos relacionados con encías o soporte dental.",
        whatsappMessage: defaultMessage("remisión a periodoncia")
      },
      {
        name: "Remisión a odontopediatría",
        summary: "Remisión de casos infantiles que necesitan especialista.",
        whatsappMessage: defaultMessage("remisión a odontopediatría")
      }
    ]
  },
  {
    title: "Atención infantil",
    description: "Consultas y remisiones odontológicas para niños.",
    services: [
      {
        name: "Remisión a odontopediatría",
        summary: "Remisión a especialista cuando el caso lo requiere.",
        whatsappMessage: defaultMessage("remisión a odontopediatría")
      },
      {
        name: "Exodoncias simples para niños",
        summary: "Revisión previa para saber si corresponde extraer el diente.",
        whatsappMessage: defaultMessage("exodoncias simples para niños")
      }
    ]
  },
  {
    title: "Armonización orofacial",
    description: "Procedimientos estéticos para el rostro, definidos después de una consulta.",
    services: [
      {
        name: "Perfilación y aumento de labios",
        slug: "armonizacion-orofacial-carepa",
        summary: "Consulta sobre forma, volumen y opciones para los labios.",
        whatsappMessage: defaultMessage("perfilación y aumento de labios")
      },
      {
        name: "Rinomodelación con ácido hialurónico",
        slug: "armonizacion-orofacial-carepa",
        summary: "Consulta para revisar si este procedimiento es adecuado en tu caso.",
        whatsappMessage: defaultMessage("rinomodelación con ácido hialurónico")
      },
      {
        name: "Botox estético y para bruxismo",
        slug: "armonizacion-orofacial-carepa",
        summary: "Consulta por motivos estéticos o relacionados con bruxismo.",
        whatsappMessage: defaultMessage("botox estético y para bruxismo")
      },
      {
        name: "Hilos tensores",
        slug: "armonizacion-orofacial-carepa",
        summary: "Consulta para revisar indicación y alternativas.",
        whatsappMessage: defaultMessage("hilos tensores")
      },
      {
        name: "Bichectomía",
        slug: "armonizacion-orofacial-carepa",
        summary: "Consulta para revisar indicación, expectativas y alternativas.",
        whatsappMessage: defaultMessage("bichectomía")
      },
      {
        name: "Lipopapada",
        slug: "armonizacion-orofacial-carepa",
        summary: "Consulta estética para revisar indicación y opciones.",
        whatsappMessage: defaultMessage("lipopapada")
      },
      {
        name: "Dermapen",
        slug: "armonizacion-orofacial-carepa",
        summary: "Consulta sobre este procedimiento para el cuidado de la piel.",
        whatsappMessage: defaultMessage("dermapen")
      }
    ]
  },
  {
    title: "Urgencias odontológicas",
    description: "Consulta disponibilidad por WhatsApp si tienes dolor, inflamación o una fractura.",
    services: [
      {
        name: "Dolor dental",
        slug: "urgencias-odontologicas-carepa",
        summary: "Consulta disponibilidad si el dolor es fuerte, persistente o aumenta.",
        whatsappMessage: defaultMessage("dolor dental")
      },
      {
        name: "Inflamación",
        slug: "urgencias-odontologicas-carepa",
        summary: "Consulta si hay inflamación, absceso o una molestia que aumenta.",
        whatsappMessage: defaultMessage("inflamación dental")
      },
      {
        name: "Fracturas",
        slug: "urgencias-odontologicas-carepa",
        summary: "Consulta disponibilidad ante una fractura dental o un golpe.",
        whatsappMessage: defaultMessage("fractura dental")
      },
      {
        name: "Molestias dentales",
        slug: "urgencias-odontologicas-carepa",
        summary: "Describe la molestia para consultar disponibilidad.",
        whatsappMessage: defaultMessage("molestias dentales")
      },
      {
        name: "Urgencias odontológicas",
        slug: "urgencias-odontologicas-carepa",
        summary: "Consulta disponibilidad para dolor, inflamación, fractura o emergencia dental.",
        whatsappMessage:
          "Hola, tengo una urgencia odontológica. ¿Tienen disponibilidad para atenderme?"
      }
    ]
  }
];
