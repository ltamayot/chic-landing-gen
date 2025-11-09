// SEO Metadata centralizada para todos los posts del blog
// Incluye keywords, FAQs, y metadata optimizada según estrategia SEO

export interface BlogPostSEO {
  slug: string;
  title: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  publishDate: string;
  modifiedDate?: string;
  readingTime: string;
  author: string;
  faqs: Array<{ question: string; answer: string }>;
}

export const blogPostsSEO: Record<string, BlogPostSEO> = {
  "cuidado-madre-postnatal-medicina-china-funcional": {
    slug: "cuidado-madre-postnatal-medicina-china-funcional",
    title: "Cuidado Postnatal: Medicina China y Funcional para Madres | SAORI",
    metaDescription: "Descubre el arte del cuidado postnatal con Medicina China y Funcional. Recuperación integral para madres en Bogotá. Primera consulta disponible.",
    keywords: [
      "cuidado postnatal",
      "medicina china postnatal",
      "medicina funcional postparto",
      "zuo yue zi",
      "cuarentena postparto",
      "recuperación después del parto",
      "medicina integrativa bogotá",
      "lactancia materna medicina china",
      "depresión postparto tratamiento natural"
    ],
    category: "Medicina Integrativa",
    publishDate: "2024-11-05T08:00:00-05:00",
    modifiedDate: "2024-11-05T08:00:00-05:00",
    readingTime: "PT8M",
    author: "Dra. Sara Tamayo",
    faqs: [
      {
        question: "¿Qué es el Zuo Yue Zi en la Medicina China?",
        answer: "Zuo Yue Zi (坐月子) significa 'sentarse durante un mes' y es una práctica tradicional china de cuarentena postparto donde la madre recibe cuidado constante para restaurar su energía Qi y nutrir su sangre Xue después del parto."
      },
      {
        question: "¿Cuánto tiempo dura la recuperación postnatal según la Medicina China?",
        answer: "La Medicina Tradicional China recomienda un periodo de al menos 40 días (cuarentena) para permitir que el cuerpo cierre los canales energéticos abiertos durante el parto y reconstruya el Qi, la Sangre y el Yang."
      },
      {
        question: "¿Qué alimentos se recomiendan en el postparto según la Medicina China?",
        answer: "Se priorizan alimentos cocidos y calientes como caldos de huesos, sopas de pollo, raíces, jengibre, dátiles rojos y sésamo negro. Estos nutren la sangre, fortalecen el bazo y ayudan a producir leche materna de calidad."
      },
      {
        question: "¿La acupuntura es segura durante el postparto y lactancia?",
        answer: "Sí, la acupuntura postnatal es segura y beneficiosa. Ayuda a equilibrar el Qi, mejorar el estado emocional, favorecer la lactancia y acelerar la recuperación física de la madre."
      }
    ]
  },
  "vitamina-d-hormona-sol-energia-vital": {
    slug: "vitamina-d-hormona-sol-energia-vital",
    title: "Vitamina D: Hormona del Sol y Energía Vital | SAORI",
    metaDescription: "¿Deficiencia de vitamina D? Descubre su papel en la energía, inmunidad y salud hormonal. Medicina Funcional en Bogotá. Consulta disponible.",
    keywords: [
      "vitamina d deficiencia",
      "vitamina d hormona",
      "vitamina d energia",
      "suplementos vitamina d colombia",
      "vitamina d medicina funcional",
      "déficit vitamina d síntomas",
      "vitamina d sistema inmune",
      "vitamina d bogotá",
      "exámenes vitamina d"
    ],
    category: "Medicina Funcional",
    publishDate: "2024-10-30T08:00:00-05:00",
    modifiedDate: "2024-10-30T08:00:00-05:00",
    readingTime: "PT7M",
    author: "Dra. Sara Tamayo",
    faqs: [
      {
        question: "¿Cuáles son los síntomas de deficiencia de vitamina D?",
        answer: "Los síntomas incluyen fatiga crónica, debilidad muscular, dolor óseo, depresión, dificultad para concentrarse, infecciones frecuentes y cambios en el estado de ánimo. Muchas personas con deficiencia no presentan síntomas evidentes."
      },
      {
        question: "¿Cuánta vitamina D debo tomar al día?",
        answer: "La dosis depende de tus niveles actuales en sangre. Generalmente se recomienda entre 1000-4000 UI diarias para mantenimiento, pero puede ser mayor si hay deficiencia. Es importante hacer análisis de sangre y consultar con un médico funcional para dosis personalizadas."
      },
      {
        question: "¿Cuánto sol necesito para producir vitamina D suficiente?",
        answer: "Se recomienda exposición de 15-30 minutos diarios al sol en brazos y piernas, sin protector solar, preferiblemente entre 10am-3pm. Sin embargo, en Bogotá debido a la altitud y clima, a menudo es necesaria la suplementación."
      },
      {
        question: "¿La vitamina D ayuda con la fatiga crónica?",
        answer: "Sí, niveles adecuados de vitamina D son esenciales para la producción de energía celular. La deficiencia se asocia con fatiga persistente, debilidad muscular y bajo rendimiento físico."
      }
    ]
  },
  "emociones-medicina-china-cuerpo-alma": {
    slug: "emociones-medicina-china-cuerpo-alma",
    title: "Emociones y Medicina China: Cuando el Cuerpo Habla | SAORI",
    metaDescription: "Las emociones afectan tus órganos. Descubre cómo la Medicina China trata el estrés, ansiedad y emociones desde la raíz. Consulta en Bogotá.",
    keywords: [
      "emociones medicina china",
      "medicina tradicional china emociones",
      "ansiedad medicina china",
      "estres medicina tradicional china",
      "órganos y emociones",
      "hígado emociones medicina china",
      "corazón medicina china",
      "tratamiento emocional integrativo",
      "acupuntura emocional bogotá"
    ],
    category: "Medicina Tradicional China",
    publishDate: "2024-10-25T08:00:00-05:00",
    modifiedDate: "2024-10-25T08:00:00-05:00",
    readingTime: "PT9M",
    author: "Dra. Sara Tamayo",
    faqs: [
      {
        question: "¿Cómo se relacionan las emociones con los órganos en Medicina China?",
        answer: "En Medicina Tradicional China, cada órgano almacena una emoción específica: el hígado la ira, el corazón la alegría excesiva, el bazo la preocupación, los pulmones la tristeza y los riñones el miedo. Un desequilibrio emocional afecta el órgano correspondiente y viceversa."
      },
      {
        question: "¿La acupuntura puede ayudar con la ansiedad y el estrés?",
        answer: "Sí, la acupuntura es muy efectiva para regular el sistema nervioso y equilibrar las emociones. Ayuda a calmar el Shen (espíritu), regular el Qi del hígado y armonizar el corazón, reduciendo síntomas de ansiedad y estrés."
      },
      {
        question: "¿Por qué el hígado se relaciona con la ira en Medicina China?",
        answer: "El hígado en MTC gobierna el flujo libre del Qi. Cuando hay estancamiento de Qi de hígado por estrés o frustración, se manifiesta como irritabilidad, ira, tensión muscular y dolores de cabeza."
      },
      {
        question: "¿Qué tratamientos ofrece la Medicina China para problemas emocionales?",
        answer: "Se utilizan acupuntura, hierbas chinas, moxibustión, alimentación terapéutica y recomendaciones de estilo de vida para armonizar las emociones y fortalecer los órganos afectados."
      }
    ]
  },
  "fatiga-cronica-tratamiento-medicina-funcional-china": {
    slug: "fatiga-cronica-tratamiento-medicina-funcional-china",
    title: "Fatiga Crónica: Tratamiento Integrativo con Medicina Funcional | SAORI",
    metaDescription: "¿Siempre cansado? Descubre las causas de la fatiga crónica y su tratamiento con Medicina Funcional y China en Bogotá. Primera consulta.",
    keywords: [
      "fatiga crónica tratamiento",
      "fatiga crónica medicina funcional",
      "fatiga crónica medicina china",
      "síndrome fatiga crónica",
      "cansancio constante causas",
      "tratamiento fatiga bogotá",
      "cansancio crónico sin causa",
      "medicina integrativa fatiga",
      "acupuntura fatiga crónica"
    ],
    category: "Medicina Integrativa",
    publishDate: "2024-10-20T08:00:00-05:00",
    modifiedDate: "2024-10-20T08:00:00-05:00",
    readingTime: "PT10M",
    author: "Dra. Sara Tamayo",
    faqs: [
      {
        question: "¿Qué es el síndrome de fatiga crónica?",
        answer: "Es un estado de agotamiento persistente que no mejora con el descanso y puede durar meses o años. Se caracteriza por cansancio extremo, dificultad para concentrarse, dolor muscular y malestar post-esfuerzo."
      },
      {
        question: "¿Cuáles son las causas de la fatiga crónica según la Medicina Funcional?",
        answer: "Puede deberse a múltiples factores: disfunción tiroidea, deficiencias nutricionales (hierro, B12, vitamina D), desequilibrios hormonales, disbiosis intestinal, infecciones crónicas, estrés crónico y trastornos del sueño."
      },
      {
        question: "¿Qué exámenes se necesitan para diagnosticar fatiga crónica?",
        answer: "Se recomienda un panel completo que incluya: función tiroidea (TSH, T3, T4), niveles de vitamina D, B12, hierro y ferritina, cortisol, glucosa, función hepática y renal, y marcadores de inflamación."
      },
      {
        question: "¿Cómo trata la Medicina China la fatiga crónica?",
        answer: "La MTC ve la fatiga como deficiencia de Qi (energía vital) y puede involucrar deficiencia de Bazo, Riñones o Sangre. El tratamiento incluye acupuntura, hierbas tonificantes, moxibustión y recomendaciones dietéticas para restaurar la energía."
      },
      {
        question: "¿Cuánto tiempo toma recuperarse de fatiga crónica?",
        answer: "El tiempo varía según la causa y severidad. Con tratamiento integrativo adecuado, muchas personas ven mejorías en 2-3 meses, pero la recuperación completa puede tomar 6-12 meses o más."
      }
    ]
  },
  "acne-medicina-tradicional-china-mirada-integral": {
    slug: "acne-medicina-tradicional-china-mirada-integral",
    title: "Acné y Medicina Tradicional China: Tratamiento Integral | SAORI",
    metaDescription: "¿Acné hormonal o persistente? Descubre el tratamiento del acné con Medicina China desde la causa raíz. Consulta en Bogotá disponible.",
    keywords: [
      "acné medicina tradicional china",
      "tratamiento acné medicina china",
      "acné hormonal medicina natural",
      "acupuntura para acné",
      "acné tratamiento integrativo",
      "acné causas medicina china",
      "tratamiento acné bogotá",
      "acné adultos medicina china",
      "acné y alimentación medicina china"
    ],
    category: "Medicina Tradicional China",
    publishDate: "2024-10-15T08:00:00-05:00",
    modifiedDate: "2024-10-15T08:00:00-05:00",
    readingTime: "PT8M",
    author: "Dra. Sara Tamayo",
    faqs: [
      {
        question: "¿Cómo ve la Medicina China el acné?",
        answer: "La MTC considera el acné como una manifestación externa de desequilibrios internos, principalmente calor en la sangre, humedad-calor, estancamiento de Qi de hígado o deficiencia de Yin. La piel refleja el estado de los órganos internos."
      },
      {
        question: "¿La acupuntura es efectiva para el acné?",
        answer: "Sí, la acupuntura ayuda a regular el sistema endocrino, reducir la inflamación, equilibrar las hormonas y mejorar la circulación sanguínea en la piel. Se enfoca en tratar la causa raíz del desequilibrio."
      },
      {
        question: "¿Qué alimentos empeoran el acné según la Medicina China?",
        answer: "Alimentos que generan calor y humedad: lácteos, azúcares refinados, alimentos fritos, grasas saturadas, alcohol, comida picante excesiva y alimentos procesados. Se recomienda evitarlos durante el tratamiento."
      },
      {
        question: "¿Cuánto tiempo tarda en mejorar el acné con Medicina China?",
        answer: "Los resultados varían según la severidad y causa. Generalmente se observan mejorías en 4-8 semanas de tratamiento constante con acupuntura, hierbas y cambios alimenticios. El tratamiento completo puede tomar 3-6 meses."
      },
      {
        question: "¿El acné hormonal se puede tratar con Medicina China?",
        answer: "Sí, la MTC es muy efectiva para acné hormonal ya que trabaja equilibrando el sistema endocrino, regulando el ciclo menstrual y armonizando el Qi del hígado, que gobierna el flujo hormonal."
      }
    ]
  }
};
