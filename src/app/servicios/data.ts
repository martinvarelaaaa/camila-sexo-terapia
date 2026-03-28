export interface Service {
  id: string;
  slug: string;
  emoji: string;
  title: string;
  subtitle: string;
  keywordSlug: string;
  description: string;
  whatWeWork: string[];
  cta: string;
  seoTitle: string;
  seoDescription: string;
}

export const services: Service[] = [
  {
    id: "individual",
    slug: "psicoterapia-individual",
    emoji: "🌱",
    title: "Psicoterapia Individual",
    subtitle: "Para entenderte mejor",
    keywordSlug: "psicoterapia individual Montevideo",
    description: `Un espacio propio, confidencial y sin juicio. La terapia individual es para vos si sentís que algo no está bien y no sabés muy bien qué es, si ciertas situaciones te desbordan, si querés trabajar tu autoestima, tu historia, tus vínculos.

No hace falta tener un "problema grave". Hace falta querer conocerte mejor y tener herramientas para vivir con más bienestar.`,
    whatWeWork: [
      "Ansiedad y estrés",
      "Autoestima y autoconocimiento",
      "Duelos y pérdidas",
      "Identidad y orientación sexual",
      "Relaciones y vínculos",
      "Trauma y experiencias difíciles",
      "Transiciones vitales",
    ],
    cta: "Quiero una consulta individual",
    seoTitle: "Psicóloga Individual en Montevideo, Pocitos - Camila Jurfest",
    seoDescription:
      "Psicóloga en Montevideo especializada en ansiedad, estrés y bienestar emocional. Enfoque cognitivo-conductual. Consultas presenciales en Pocitos y online.",
  },
  {
    id: "pareja",
    slug: "terapia-de-pareja",
    emoji: "🤝",
    title: "Terapia de Pareja",
    subtitle: "Para reconectarse",
    keywordSlug: "terapia de pareja Montevideo",
    description: `La terapia de pareja no es solo para cuando todo está roto. Es para cuando algo no fluye y quieren entender qué pasa — antes de que sea tarde, o cuando ya están en crisis y quieren saber si hay camino.

Trabajo con parejas de todo tipo: heterosexuales, diversas, convivientes o no, con o sin hijos. Sin prejuicios y sin tomar partido.`,
    whatWeWork: [
      "Comunicación y conflicto crónico",
      "Distancia emocional y/o sexual",
      "Infidelidades y reconstrucción",
      "Diferencias en el deseo sexual",
      "Convivencia y roles",
      "Decisiones de vida (hijos, separación)",
      "Reconexión y vitalidad",
    ],
    cta: "Quiero una consulta de pareja",
    seoTitle: "Terapia de Pareja en Montevideo - Camila Jurfest | Psicóloga",
    seoDescription:
      "Terapia de pareja en Montevideo con enfoque cognitivo-conductual. Trabajamos comunicación, crisis e intimidad. Presencial en Pocitos u online. Primera sesión disponible.",
  },
  {
    id: "sexual",
    slug: "terapia-sexual",
    emoji: "💜",
    title: "Terapia Sexual",
    subtitle: "Sin tabúes",
    keywordSlug: "terapeuta sexual Montevideo",
    description: `La sexología clínica trata dificultades sexuales desde un abordaje científico, humano y sin juicio. Si algo en tu vida sexual no te cierra — duele, no funciona como querés, hay algo que evitás o que te preocupa — tiene nombre y tiene solución.

No tenés que saber exactamente qué te pasa para consultar. Eso lo vemos juntas.`,
    whatWeWork: [
      "Dolor en las relaciones sexuales (dispareunia, vaginismo)",
      "Disfunción eréctil y eyaculación precoz",
      "Falta o exceso de deseo sexual",
      "Dificultad para llegar al orgasmo",
      "Identidad sexual y de género",
      "Compulsividad sexual",
      "Sexualidad en el contexto de una enfermedad",
    ],
    cta: "Quiero una consulta sexual",
    seoTitle: "Terapeuta Sexual en Montevideo - Camila Jurfest | Sexóloga",
    seoDescription:
      "Sexóloga clínica en Montevideo. Trabajo problemas de deseo, orgasmo, dolor sexual y exploración. Atención presencial en Pocitos y online para todo Uruguay. Agendá hoy.",
  },
  {
    id: "perinatal",
    slug: "terapia-perinatal",
    emoji: "🌸",
    title: "Terapia Perinatal",
    subtitle: "Durante y después del embarazo",
    keywordSlug: "terapia perinatal Montevideo",
    description: `El embarazo y el posparto son etapas de transformación enorme — y no siempre son lo que la cultura promete. La terapia perinatal acompaña a personas gestantes y no gestantes en el proceso de convertirse en madres/padres, con todo lo que eso trae.

Trabajo con ansiedad en el embarazo, duelos perinatales, posparto difícil, identidad materna/paterna, y más.`,
    whatWeWork: [
      "Ansiedad prenatal y miedo al parto",
      "Depresión y ansiedad posparto",
      "Duelo perinatal (pérdidas gestacionales)",
      "Identidad materna/paterna y 'matrescence'",
      "Lactancia y vínculo temprano",
      "Pareja en el contexto perinatal",
      "Retorno al trabajo posparto",
    ],
    cta: "Quiero una consulta perinatal",
    seoTitle: "Terapia Perinatal Montevideo - Camila Jurfest | Psicóloga",
    seoDescription:
      "Acompañamiento psicológico en embarazo, posparto y crianza. Psicóloga perinatal en Montevideo — Camila Jurfest. Atención presencial y online.",
  },
];
