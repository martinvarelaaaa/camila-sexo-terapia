import type { Metadata } from "next";
import Link from "next/link";
import { LocalBusinessStructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Camila Jurfest | Psicóloga y Sexóloga Clínica en Montevideo",
  description:
    "Camila Jurfest, psicóloga y sexóloga clínica en Pocitos, Montevideo. Terapia sexual, de pareja y psicoterapia individual. Atención online para todo Uruguay. Reservá tu sesión.",
  alternates: { canonical: "/" },
};

const services = [
  {
    id: "individual",
    icon: "🌱",
    title: "Psicoterapia Individual",
    description:
      "Un espacio tuyo, para entenderte mejor. Trabajamos juntas lo que te pesa: ansiedad, autoestima, vínculos, identidad.",
    href: "/psicoterapia-individual",
  },
  {
    id: "pareja",
    icon: "🤝",
    title: "Terapia de Pareja",
    description:
      "Para las parejas que quieren reconectarse. Herramientas concretas para comunicarse, entenderse y volver a elegirse.",
    href: "/terapia-de-pareja",
  },
  {
    id: "sexual",
    icon: "💜",
    title: "Terapia Sexual",
    description:
      "Sin tabúes y con base científica. Si algo en tu vida sexual no te cierra, tiene nombre y tiene solución.",
    href: "/terapia-sexual",
  },
  {
    id: "perinatal",
    icon: "🌸",
    title: "Terapia Perinatal",
    description:
      "Acompañamiento en el embarazo y posparto. Porque la maternidad no siempre es lo que nos prometieron.",
    href: "/terapia-perinatal",
  },
];

const testimonials = [
  {
    text: "Encontré en Camila un espacio sin juicio donde pude hablar de cosas que nunca había podido decir en voz alta. Cambió mi vida.",
    name: "V., 34 años",
    service: "Terapia Sexual",
  },
  {
    text: "Vinimos como pareja en crisis y salimos con herramientas reales. No nos salvó el amor solo — nos salvó el trabajo que hicimos con Camila.",
    name: "M. & S., Montevideo",
    service: "Terapia de Pareja",
  },
  {
    text: "El posparto me desbordó. Camila me ayudó a entender que lo que sentía era válido y que tenía salida. No estaba sola.",
    name: "A., mamá de 7 meses",
    service: "Terapia Perinatal",
  },
];

export default function HomePage() {
  return (
    <>
      <LocalBusinessStructuredData />

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{
          background:
            "linear-gradient(135deg, var(--lavender-light) 0%, var(--cream) 50%, var(--sage-light) 100%)",
        }}
      >
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--lavender)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 left-10 w-48 h-48 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ backgroundColor: "var(--sage)" }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--lavender-dark)" }}
          >
            Psicóloga · Sexóloga Clínica · Montevideo
          </p>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--charcoal)",
            }}
          >
            Hablemos de lo que
            <br />
            <span style={{ color: "var(--lavender-dark)" }}>
              no se suele hablar.
            </span>
          </h1>

          <p
            className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--warm-gray)" }}
          >
            Acompaño a personas y parejas a entender lo que les pasa,
            trabajarlo desde la ciencia, y recuperar el bienestar.
            Porque la salud sexual y emocional van juntas — y hablar de
            ellas no debería dar vergüenza.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contacto"
              className="px-8 py-4 rounded-full text-white font-semibold text-base transition-all hover:opacity-90 hover:shadow-lg w-full sm:w-auto"
              style={{ backgroundColor: "var(--lavender-dark)" }}
            >
              Agendar consulta
            </Link>
            <Link
              href="/servicios"
              className="px-8 py-4 rounded-full font-semibold text-base border-2 transition-all hover:shadow-md w-full sm:w-auto"
              style={{
                borderColor: "var(--lavender-dark)",
                color: "var(--lavender-dark)",
              }}
            >
              Ver servicios
            </Link>
          </div>

          <p
            className="mt-6 text-sm"
            style={{ color: "var(--warm-gray)" }}
          >
            Presencial en Pocitos · Online para todo Uruguay y el exterior
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg
            className="w-6 h-6"
            style={{ color: "var(--lavender-dark)" }}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="aspect-[4/5] rounded-3xl overflow-hidden relative flex items-center justify-center"
                style={{
                  background: "linear-gradient(160deg, var(--lavender-light), var(--sage-light))",
                }}
              >
                <div className="text-center p-8">
                  <div
                    className="w-28 h-28 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl"
                    style={{ backgroundColor: "var(--lavender)" }}
                  >
                    👩‍⚕️
                  </div>
                  <p
                    className="text-xl font-semibold"
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      color: "var(--charcoal)",
                    }}
                  >
                    Camila Jurfest
                  </p>
                  <p className="text-sm mt-1" style={{ color: "var(--warm-gray)" }}>
                    Psicóloga &amp; Sexóloga Clínica
                  </p>
                </div>
              </div>
            </div>

            <div>
              <p
                className="text-sm font-medium tracking-widest uppercase mb-4"
                style={{ color: "var(--sage-dark)" }}
              >
                Sobre mí
              </p>
              <h2
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--charcoal)",
                }}
              >
                Como una amiga que
                <br />resulta ser experta.
              </h2>
              <p
                className="text-base md:text-lg mb-6 leading-relaxed"
                style={{ color: "var(--warm-gray)" }}
              >
                Soy psicóloga clínica y sexóloga formada en UCU, SUS Uruguay y
                UBA. Trabajo con un enfoque humano, cercano y basado en
                evidencia — porque creo que la ciencia y la empatía van de la mano.
              </p>
              <p
                className="text-base md:text-lg mb-8 leading-relaxed"
                style={{ color: "var(--warm-gray)" }}
              >
                En consulta no hay preguntas incómodas ni temas prohibidos.
                Mi trabajo es acompañarte a entender lo que te pasa
                y encontrar el camino.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["UCU", "SUS Uruguay", "UBA", "Oceano FM"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: "var(--lavender-light)",
                      color: "var(--lavender-dark)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href="/sobre-mi"
                className="inline-flex items-center gap-2 font-semibold transition-colors hover:gap-3"
                style={{ color: "var(--lavender-dark)" }}
              >
                Conocer más sobre mí
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: "var(--lavender-dark)" }}
            >
              Lo que ofrezco
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--charcoal)",
              }}
            >
              Servicios
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ backgroundColor: "var(--cream)" }}
              >
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3
                  className="font-bold text-lg mb-2"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--charcoal)",
                  }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                  {service.description}
                </p>
                <p
                  className="mt-4 text-sm font-medium flex items-center gap-1"
                  style={{ color: "var(--lavender-dark)" }}
                >
                  Saber más
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p
              className="text-sm font-medium tracking-widest uppercase mb-3"
              style={{ color: "var(--sage-dark)" }}
            >
              Testimonios
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--charcoal)",
              }}
            >
              Lo que dicen mis pacientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl"
                style={{ backgroundColor: "var(--lavender-light)" }}
              >
                <div
                  className="text-5xl font-serif leading-none mb-4 opacity-30"
                  style={{ color: "var(--lavender-dark)" }}
                  aria-hidden="true"
                >
                  &ldquo;
                </div>
                <p
                  className="text-base leading-relaxed mb-6 italic"
                  style={{ color: "var(--charcoal)" }}
                >
                  {t.text}
                </p>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--charcoal)" }}>
                    — {t.name}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--lavender-dark)" }}>
                    {t.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, var(--lavender-dark) 0%, var(--sage-dark) 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            ¿Algo de esto resuena?
          </h2>
          <p className="text-lg mb-10 text-white/80">
            No tenés que saber exactamente qué decir. Escribime y lo
            hablamos. Primera consulta sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl"
              style={{
                backgroundColor: "var(--cream)",
                color: "var(--lavender-dark)",
              }}
            >
              Agendar consulta
            </Link>
            <a
              href="https://wa.me/59899227759"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full font-semibold text-base border-2 border-white text-white transition-all hover:bg-white/10"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
