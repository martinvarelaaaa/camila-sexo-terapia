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
