export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  category: string;
  keywords: string[];
  readingTime: number; // minutes
  faqs: { question: string; answer: string }[];
}

export const blogPosts: BlogPostMeta[] = [
  {
    slug: "vaginismo-causas-sintomas-tratamiento-uruguay",
    title: "Vaginismo: Causas, Síntomas y Tratamiento — Guía de una Sexóloga Clínica",
    description:
      "El vaginismo tiene cura. Camila Jurfest, sexóloga clínica en Montevideo, explica qué es el vaginismo, sus causas, síntomas y cómo es el tratamiento cognitivo-conductual en Uruguay.",
    publishedAt: "2026-03-28",
    author: "Camila Jurfest",
    category: "Terapia Sexual",
    keywords: [
      "vaginismo tratamiento",
      "vaginismo síntomas",
      "vaginismo causas",
      "vaginismo cómo superar",
      "terapeuta sexual vaginismo montevideo",
      "sexóloga para vaginismo uruguay",
      "vaginismo primario secundario",
      "terapia sexual vaginismo",
    ],
    readingTime: 9,
    faqs: [
      {
        question: "¿El vaginismo tiene cura?",
        answer:
          "Sí. El vaginismo es una condición tratable con muy alta tasa de éxito. Con un enfoque terapéutico adecuado —que combine trabajo cognitivo, corporal y gradual exposición— la gran mayoría de personas logra superar el vaginismo y tener relaciones sexuales sin dolor.",
      },
      {
        question: "¿Cuánto tiempo lleva tratar el vaginismo?",
        answer:
          "Depende de cada persona, pero en promedio el proceso terapéutico lleva entre 3 y 6 meses con sesiones quincenales o mensuales. Hay casos que avanzan más rápido y otros que requieren más tiempo, especialmente cuando hay trauma o factores emocionales profundos involucrados.",
      },
      {
        question: "¿El vaginismo es psicológico o físico?",
        answer:
          "Es ambos. El vaginismo implica una contracción muscular involuntaria real (física), pero esa contracción es desencadenada por señales del sistema nervioso vinculadas a ansiedad, miedo o experiencias previas (psicológico). Por eso el tratamiento más efectivo aborda ambas dimensiones.",
      },
      {
        question: "¿Puedo quedar embarazada si tengo vaginismo?",
        answer:
          "En los casos más severos donde la penetración es imposible, el embarazo espontáneo no es viable. Sin embargo, el vaginismo tiene tratamiento y muchas personas superan la condición antes o durante el proceso de búsqueda de embarazo. Si este es tu caso, consultá con una sexóloga lo antes posible.",
      },
      {
        question: "¿El vaginismo afecta también la excitación y el deseo?",
        answer:
          "No necesariamente. Muchas personas con vaginismo sienten deseo sexual y excitación con normalidad, pero el miedo a la penetración puede ir generando evitación, lo que eventualmente puede afectar el deseo. El tratamiento aborda también esta dimensión para que la sexualidad no quede reducida a la penetración.",
      },
      {
        question: "¿Qué diferencia hay entre vaginismo y dispareunia?",
        answer:
          "La dispareunia es dolor durante la penetración que puede tener causas físicas (infecciones, endometriosis, vulvodinia). El vaginismo es específicamente la contracción muscular involuntaria que impide o dificulta la penetración. Pueden coexistir, y por eso es importante un diagnóstico diferencial con profesional de salud.",
      },
    ],
  },
  {
    slug: "uso-de-preservativos-uruguay",
    title: "Uso de Preservativos en Uruguay: Guía Completa 2024",
    description:
      "VIH, sífilis y HPV están en aumento en Uruguay. Camila Jurfest, sexóloga clínica en Montevideo, explica cómo usar el preservativo correctamente, cómo elegirlo y cómo hablar de él con tu pareja.",
    publishedAt: "2026-03-28",
    author: "Camila Jurfest",
    category: "Salud Sexual",
    keywords: [
      "uso de preservativos Uruguay",
      "cómo usar preservativo correctamente",
      "estadísticas VIH Uruguay 2024",
      "HPV cáncer Uruguay",
      "sexóloga Uruguay",
      "salud sexual Uruguay",
      "condón Uruguay",
      "ITS Uruguay",
    ],
    readingTime: 8,
    faqs: [
      {
        question: "¿Cuántos casos de VIH hay en Uruguay en 2024?",
        answer:
          "En 2024 se registraron 842 nuevos casos de VIH en Uruguay. La epidemia no está controlada y el preservativo sigue siendo el método más eficaz de prevención, junto con el tratamiento antirretroviral y la PrEP.",
      },
      {
        question: "¿El preservativo reduce la sensibilidad?",
        answer:
          "Los preservativos ultrafinos actuales (0.04–0.05 mm) transmiten el calor corporal casi sin diferencia perceptible. La percepción de menor sensibilidad suele ser más psicológica que física. Probar distintas marcas y tamaños ayuda a encontrar el que mejor se adapta.",
      },
      {
        question: "¿El preservativo femenino protege igual que el masculino?",
        answer:
          "Sí. El preservativo femenino (interno) tiene una eficacia del 95% cuando se usa correctamente y cubre los labios mayores, ofreciendo incluso protección adicional para infecciones de transmisión cutánea como el herpes.",
      },
      {
        question: "¿Se puede usar preservativo en el sexo anal?",
        answer:
          "Sí, y es aún más importante. La mucosa rectal es más delgada y permeable, lo que aumenta el riesgo de transmisión de VIH y otras ITS. Se recomienda usar preservativos más resistentes (no ultrafinos) y lubricante a base de agua o silicona en abundancia.",
      },
      {
        question: "¿Qué ITS NO previene el preservativo?",
        answer:
          "El preservativo reduce significativamente el riesgo de la mayoría de ITS, pero no cubre toda la piel genital. El herpes y el VPH/HPV pueden transmitirse por zonas no cubiertas. La vacuna contra el HPV complementa la protección del preservativo.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
