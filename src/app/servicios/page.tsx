import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios — Terapia Individual, de Pareja, Sexual y Perinatal",
  description:
    "Psicoterapia individual, terapia de pareja, terapia sexual y terapia perinatal en Montevideo. Atención presencial en Pocitos y online. Camila Jurfest, psicóloga y sexóloga clínica.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios — Camila Jurfest",
    description:
      "Terapia individual, de pareja, sexual y perinatal en Montevideo. Sin tabúes, con enfoque humano y científico.",
    url: "https://www.camilajurfest.com/servicios",
  },
};

const services = [
  {
    id: "individual",
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
  },
  {
    id: "pareja",
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
  },
  {
    id: "sexual",
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
  },
  {
    id: "perinatal",
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
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{
          background: "linear-gradient(135deg, var(--lavender-light), var(--cream))",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--lavender-dark)" }}
          >
            Servicios
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--charcoal)",
            }}
          >
            ¿En qué puedo ayudarte?
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--warm-gray)" }}
          >
            Ofrezco un espacio seguro, sin juicio y con base científica
            para trabajar lo que te pesa — solo o en pareja,
            presencial en Pocitos o de manera online.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid md:grid-cols-2 gap-12 items-start ${
                  i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content card */}
                <div>
                  <div className="text-4xl mb-4">{service.emoji}</div>
                  <p
                    className="text-xs font-medium tracking-widest uppercase mb-2"
                    style={{ color: "var(--lavender-dark)" }}
                  >
                    {service.keywordSlug}
                  </p>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-2"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "var(--charcoal)",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="text-base font-medium mb-6"
                    style={{ color: "var(--sage-dark)" }}
                  >
                    {service.subtitle}
                  </p>
                  <div className="space-y-4 mb-8">
                    {service.description.split("\n\n").map((para, j) => (
                      <p
                        key={j}
                        className="text-base leading-relaxed"
                        style={{ color: "var(--warm-gray)" }}
                      >
                        {para}
                      </p>
                    ))}
                  </div>
                  <Link
                    href={`/contacto?servicio=${service.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold text-sm transition-all hover:opacity-90 hover:shadow-md"
                    style={{ backgroundColor: "var(--lavender-dark)" }}
                  >
                    {service.cta}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* What we work on */}
                <div
                  className="rounded-2xl p-8"
                  style={{ backgroundColor: "var(--lavender-light)" }}
                >
                  <h3
                    className="font-bold text-lg mb-6"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "var(--charcoal)",
                    }}
                  >
                    Temas frecuentes
                  </h3>
                  <ul className="space-y-3">
                    {service.whatWeWork.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                          style={{
                            backgroundColor: "var(--lavender)",
                            color: "white",
                          }}
                        >
                          ✓
                        </span>
                        <span
                          className="text-sm leading-relaxed"
                          style={{ color: "var(--charcoal)" }}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Format info */}
      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl font-bold"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--charcoal)",
              }}
            >
              ¿Cómo funciona?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📍",
                title: "Presencial",
                description: "Consultorio en Pocitos, Montevideo. Ambiente cálido y privado.",
              },
              {
                icon: "💻",
                title: "Online",
                description: "Videollamada para toda persona en Uruguay y el exterior. Misma calidad de atención.",
              },
              {
                icon: "🕐",
                title: "Duración",
                description: "Sesiones de 50 minutos. Frecuencia semanal o quincenal según tu proceso.",
              },
              {
                icon: "💬",
                title: "Primera consulta",
                description: "Sin compromiso. Nos conocemos, contás lo que te pasa, y vemos si tenemos match.",
              },
              {
                icon: "🔒",
                title: "Confidencialidad",
                description: "Todo lo que hablamos queda entre nosotras. Absoluta confidencialidad.",
              },
              {
                icon: "💳",
                title: "Honorarios",
                description: "Honorarios en pesos uruguayos. Consultá disponibilidad y aranceles por WhatsApp.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--cream)" }}
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3
                  className="font-bold text-base mb-2"
                  style={{ color: "var(--charcoal)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, var(--lavender-dark), var(--sage-dark))",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            No tenés que tener todo claro para consultar.
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Escribime y vemos juntas por dónde empezar.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl"
            style={{
              backgroundColor: "var(--cream)",
              color: "var(--lavender-dark)",
            }}
          >
            Escribir a Camila
          </Link>
        </div>
      </section>
    </>
  );
}
