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
  `Hola, estoy en Carepa y quiero consultar por ${serviceName}. ¿Me pueden orientar con disponibilidad para una valoración?`;

export const serviceCatalog: ServiceCategory[] = [
  {
    title: "Odontología general y preventiva",
    description: "Revisión, prevención y restauraciones básicas según valoración profesional.",
    services: [
      {
        name: "Consulta o valoración por odontología general",
        slug: "odontologia-familiar-carepa",
        summary: "Primer paso para revisar salud oral, molestias o dudas de tratamiento.",
        whatsappMessage: defaultMessage("una valoración por odontología general")
      },
      {
        name: "Limpieza dental",
        slug: "limpieza-dental-carepa",
        summary: "Cuidado preventivo para placa, encías y recomendaciones de higiene.",
        whatsappMessage: defaultMessage("limpieza dental")
      },
      {
        name: "Profilaxis",
        slug: "limpieza-dental-carepa",
        summary: "Orientación preventiva y control de higiene oral según cada caso.",
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
        summary: "Revisión de restauraciones antiguas y alternativas estéticas responsables.",
        whatsappMessage: defaultMessage("cambio de amalgamas por resinas estéticas")
      },
      {
        name: "Extracciones simples",
        summary: "Valoración para definir si una extracción simple es necesaria y viable.",
        whatsappMessage: defaultMessage("extracciones simples")
      }
    ]
  },
  {
    title: "Odontología estética",
    description: "Opciones estéticas explicadas con expectativas realistas y valoración previa.",
    services: [
      {
        name: "Odontología estética",
        slug: "diseno-de-sonrisa-carepa",
        summary: "Orientación para revisar forma, color, armonía y salud oral.",
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
        summary: "Planeación estética responsable según salud oral y expectativas.",
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
        summary: "Restauraciones estéticas para casos definidos en valoración.",
        whatsappMessage: defaultMessage("resinas estéticas")
      },
      {
        name: "Coronas dentales",
        slug: "protesis-dentales-carepa",
        summary: "Alternativa restaurativa que requiere diagnóstico y planificación.",
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
        summary: "Orientación para casos que requieren valoración del desarrollo maxilar.",
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
    description: "Orientación para dolor, cordales, casos especializados y remisiones.",
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
        summary: "Valoración de terceros molares, molestias, inflamación o indicación quirúrgica.",
        whatsappMessage: defaultMessage("extracción de cordales")
      },
      {
        name: "Consulta por odontología especializada",
        summary: "Orientación para definir el profesional o manejo adecuado.",
        whatsappMessage: defaultMessage("consulta por odontología especializada")
      },
      {
        name: "Remisión a periodoncia",
        summary: "Orientación cuando se identifican necesidades relacionadas con encías o soporte dental.",
        whatsappMessage: defaultMessage("remisión a periodoncia")
      },
      {
        name: "Remisión a odontopediatría",
        summary: "Orientación para casos infantiles que requieren valoración especializada.",
        whatsappMessage: defaultMessage("remisión a odontopediatría")
      }
    ]
  },
  {
    title: "Atención infantil",
    description: "Orientación prudente para necesidades odontológicas en niños.",
    services: [
      {
        name: "Remisión a odontopediatría",
        summary: "Apoyo para dirigir casos infantiles hacia valoración especializada cuando aplica.",
        whatsappMessage: defaultMessage("remisión a odontopediatría")
      },
      {
        name: "Exodoncias simples para niños",
        summary: "Valoración previa para definir si el manejo corresponde y es oportuno.",
        whatsappMessage: defaultMessage("exodoncias simples para niños")
      }
    ]
  },
  {
    title: "Armonización orofacial",
    description: "Procedimientos estéticos que requieren valoración, criterio profesional y expectativas claras.",
    services: [
      {
        name: "Perfilación y aumento de labios",
        slug: "armonizacion-orofacial-carepa",
        summary: "Orientación estética responsable según valoración individual.",
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
        summary: "Valoración para orientación estética o funcional según necesidad.",
        whatsappMessage: defaultMessage("botox estético y para bruxismo")
      },
      {
        name: "Hilos tensores",
        slug: "armonizacion-orofacial-carepa",
        summary: "Orientación profesional antes de considerar el procedimiento.",
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
        summary: "Valoración estética previa antes de definir cualquier manejo.",
        whatsappMessage: defaultMessage("lipopapada")
      },
      {
        name: "Dermapen",
        slug: "armonizacion-orofacial-carepa",
        summary: "Orientación para cuidado estético según valoración profesional.",
        whatsappMessage: defaultMessage("dermapen")
      }
    ]
  },
  {
    title: "Urgencias odontológicas",
    description: "Orientación por WhatsApp para revisar disponibilidad según el motivo de urgencia.",
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
        summary: "Orientación si hay inflamación, absceso o molestia progresiva.",
        whatsappMessage: defaultMessage("inflamación dental")
      },
      {
        name: "Fracturas",
        slug: "urgencias-odontologicas-carepa",
        summary: "Revisión de disponibilidad ante fractura dental o trauma.",
        whatsappMessage: defaultMessage("fractura dental")
      },
      {
        name: "Molestias dentales",
        slug: "urgencias-odontologicas-carepa",
        summary: "Orientación inicial para definir el siguiente paso responsable.",
        whatsappMessage: defaultMessage("molestias dentales")
      },
      {
        name: "Urgencias odontológicas",
        slug: "urgencias-odontologicas-carepa",
        summary: "Consulta disponibilidad para dolor, inflamación, fractura o emergencia dental.",
        whatsappMessage:
          "Hola, tengo una urgencia odontológica y estoy en Carepa o cerca. ¿Me pueden ayudar con disponibilidad?"
      }
    ]
  }
];
