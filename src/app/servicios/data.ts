export interface ServiceFAQ {
  question: string;
  answer: string;
}

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
  faqs: ServiceFAQ[];
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
    faqs: [
      {
        question: "¿Para qué sirve la psicoterapia individual?",
        answer:
          "La psicoterapia individual te ayuda a entender mejor tus emociones, pensamientos y conductas, y a desarrollar herramientas para manejar el malestar psicológico. Es útil para la ansiedad, el estrés, la autoestima, los duelos, los vínculos y cualquier situación que te genere sufrimiento o te impida vivir como querés.",
      },
      {
        question: "¿Cuánto dura el proceso terapéutico?",
        answer:
          "Depende de cada persona y de los objetivos que traiga. Los cambios iniciales suelen sentirse en las primeras semanas, pero un proceso terapéutico de fondo lleva varios meses. Trabajamos a un ritmo que tiene sentido para vos, sin apuros ni plazos fijos.",
      },
      {
        question: "¿Qué es el enfoque cognitivo-conductual?",
        answer:
          "Es un enfoque basado en evidencia científica que trabaja la conexión entre pensamientos, emociones y conductas. Se orienta a identificar patrones que generan malestar y a construir formas más funcionales de ver y actuar en el mundo. Es práctico, colaborativo y orientado a resultados concretos.",
      },
      {
        question: "¿Las consultas son presenciales u online?",
        answer:
          "Ofrezco las dos modalidades. Las consultas presenciales son en mi consultorio en Pocitos, Montevideo. Las consultas online son por videollamada y están disponibles para personas en cualquier lugar de Uruguay y el exterior. Ambas modalidades tienen la misma calidad terapéutica.",
      },
      {
        question: "¿Cómo es la primera sesión?",
        answer:
          "La primera sesión es una consulta de conocimiento mutuo. Te cuento cómo trabajo, me contás qué te trae, y evaluamos juntos si hay match para seguir trabajando. No hay compromiso. Al final de la sesión tendrás una devolución clara y una propuesta de trabajo.",
      },
    ],
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
    faqs: [
      {
        question: "¿Cuándo conviene ir a terapia de pareja?",
        answer:
          "Cuando sienten que tienen los mismos conflictos una y otra vez sin resolverlos, cuando hay distancia emocional o sexual que no saben cómo cerrar, cuando atravesaron una crisis (infidelidad, pérdida, cambio vital) y no saben cómo seguir, o simplemente cuando quieren mejorar su comunicación antes de que los problemas escalen.",
      },
      {
        question: "¿Los dos tienen que estar de acuerdo para ir?",
        answer:
          "Lo ideal es que ambos quieran el proceso. Si uno de los dos va a regañadientes, el trabajo es más difícil pero no imposible. A veces empezar con una sola sesión de exploración ayuda a que la parte más reacia se convenza. También ofrezco sesiones individuales previas si lo necesitan.",
      },
      {
        question: "¿La terapeuta toma partido por alguno?",
        answer:
          "No. Mi rol es el de una árbitro neutral que ayuda a ambos a comunicarse mejor y entenderse. No tengo interés en 'ganar' para ninguno de los dos. Mi objetivo es que puedan tomar juntos las mejores decisiones para el vínculo — sea seguir, transformar la relación, o separarse con menos daño.",
      },
      {
        question: "¿Cuánto dura el proceso de terapia de pareja?",
        answer:
          "Un proceso típico va de 3 a 6 meses con sesiones semanales o quincenales de 50 minutos. La duración real depende de la complejidad del caso y los objetivos. Algunas parejas sienten cambios significativos en pocas semanas; otras prefieren trabajar más en profundidad durante más tiempo.",
      },
      {
        question: "¿La terapia de pareja sirve también para decidir si separarse?",
        answer:
          "Sí. La terapia de pareja no tiene como objetivo único 'salvar' la relación. A veces el proceso más sano es una separación consciente y ordenada. El trabajo terapéutico ayuda a tomar esa decisión con claridad y a transitar el cierre con el menor daño posible para ambos y para los hijos, si los hay.",
      },
    ],
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
    faqs: [
      {
        question: "¿Qué es la terapia sexual o sexología clínica?",
        answer:
          "La sexología clínica es una especialidad que trata dificultades en la vida sexual desde un enfoque científico y humanista. Trabaja sobre el deseo, la respuesta sexual, el dolor, la identidad y cualquier aspecto de la sexualidad que genere malestar o que no funcione como la persona quisiera. Es una disciplina seria, con base en evidencia, sin tabúes.",
      },
      {
        question: "¿Qué problemas trata la terapia sexual?",
        answer:
          "Trato dificultades como el vaginismo y la dispareunia (dolor en las relaciones sexuales), la disfunción eréctil y la eyaculación precoz, la falta o el exceso de deseo sexual, la anorgasmia (dificultad para llegar al orgasmo), la compulsividad sexual, preguntas sobre identidad sexual o de género, y la sexualidad en el contexto de enfermedades o cambios vitales.",
      },
      {
        question: "¿Las sesiones de terapia sexual incluyen contacto físico?",
        answer:
          "No. La terapia sexual es una modalidad de psicoterapia: se trabaja exclusivamente a través de la conversación, técnicas cognitivo-conductuales y, en algunos casos, ejercicios prácticos que la persona realiza en su vida privada entre sesiones. Las sesiones son verbales, en consultorio o por videollamada.",
      },
      {
        question: "¿Cuántas sesiones se necesitan para la terapia sexual?",
        answer:
          "Depende del problema y de la persona. Algunas dificultades como la eyaculación precoz o la anorgasmia pueden mejorar notablemente en pocas semanas con un trabajo enfocado. Otras, como el vaginismo o los problemas relacionados con trauma, requieren un proceso más gradual. En la primera consulta hacemos una evaluación y te doy un estimado realista.",
      },
      {
        question: "¿Se puede hacer terapia sexual online?",
        answer:
          "Sí. La terapia sexual online funciona igual de bien que la presencial para la mayoría de los casos. Las sesiones son por videollamada, confidenciales y en un espacio privado. Esta modalidad está disponible para personas en Uruguay y el exterior.",
      },
    ],
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
    faqs: [
      {
        question: "¿Qué es la terapia perinatal?",
        answer:
          "La terapia perinatal es un acompañamiento psicológico especializado para las etapas del embarazo, el parto y el posparto. Trabaja los cambios emocionales, la identidad, el vínculo con el bebé y las dificultades que pueden surgir en este período de transformación profunda. Se apoya en evidencia científica y en una comprensión empática del proceso reproductivo.",
      },
      {
        question: "¿Desde cuándo se puede empezar la terapia perinatal?",
        answer:
          "En cualquier momento del proceso: antes de quedar embarazada (si hay miedo, historia de pérdidas o decisiones que procesar), durante el embarazo, en el posparto inmediato o tardío, e incluso años después de un nacimiento o una pérdida si el duelo no fue procesado. No hay un momento 'correcto': es cuando lo necesitás.",
      },
      {
        question: "¿La terapia perinatal solo es para madres?",
        answer:
          "No. También trabajo con padres no gestantes, con personas que traversaron pérdidas gestacionales, con familias diversas (familias homoparentales, monoparentales, etc.) y con personas que están procesando la decisión de si tener o no hijos. El período perinatal afecta a toda la unidad familiar.",
      },
      {
        question: "¿Qué es la depresión posparto y cómo se trata?",
        answer:
          "La depresión posparto es un trastorno del estado del ánimo que aparece en las semanas o meses posteriores al nacimiento. Puede incluir tristeza persistente, ansiedad intensa, dificultad para vincularse con el bebé, pensamientos intrusivos y agotamiento emocional que va más allá del cansancio normal. Se trata con psicoterapia y, en algunos casos, con apoyo farmacológico coordinado con un psiquiatra. Con tratamiento adecuado, la recuperación es posible.",
      },
      {
        question: "¿También atiende pérdidas gestacionales y duelo perinatal?",
        answer:
          "Sí. El duelo perinatal — por abortos espontáneos, muerte gestacional, muerte neonatal o incluso interrupciones voluntarias del embarazo — es un proceso que muchas personas atraviesan en soledad porque la cultura no le da el espacio que merece. Ofrezco un acompañamiento específico para este tipo de pérdida, en un espacio libre de juicio.",
      },
    ],
  },
];
