import type { Metadata } from "next";
import Link from "next/link";
import { services } from "./data";

export const metadata: Metadata = {
  title: "Servicios — Terapia Individual, de Pareja, Sexual y Perinatal | Camila Jurfest",
  description:
    "Psicoterapia individual, terapia de pareja, terapia sexual y terapia perinatal en Montevideo. Atención presencial en Pocitos y online para todo Uruguay. Camila Jurfest, psicóloga y sexóloga clínica.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios — Camila Jurfest | Psicóloga y Sexóloga Clínica Montevideo",
    description:
      "Terapia individual, de pareja, sexual y perinatal en Montevideo. Sin tabúes, con enfoque humano y científico.",
    url: "https://www.camilajurfest.com/servicios",
  },
};

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
