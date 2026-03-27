import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí — Camila Jurfest, Psicóloga y Sexóloga Clínica",
  description:
    "Conocé a Camila Jurfest: psicóloga clínica y sexóloga formada en UCU, SUS Uruguay y UBA. Trabajo en Pocitos, Montevideo, de forma presencial y online. Enfoque humano, sin tabúes.",
  alternates: { canonical: "/sobre-mi" },
  openGraph: {
    title: "Sobre mí — Camila Jurfest",
    description:
      "Psicóloga clínica y sexóloga en Montevideo. Formación en UCU, SUS Uruguay y UBA. Cara a la comunidad en Oceano FM.",
    url: "https://www.camilajurfest.com/sobre-mi",
  },
};

const credentials = [
  {
    institution: "UCU",
    full: "Universidad Católica del Uruguay",
    description: "Licenciatura en Psicología",
  },
  {
    institution: "SUS Uruguay",
    full: "Sociedad Uruguaya de Sexología",
    description: "Especialización en Sexología Clínica",
  },
  {
    institution: "UBA",
    full: "Universidad de Buenos Aires",
    description: "Formación de posgrado en psicología clínica",
  },
];

const approach = [
  {
    title: "Científico, no frío",
    description:
      "Trabajo con evidencia — técnicas que funcionan, marcos teóricos sólidos. Pero la ciencia no reemplaza la empatía. Cada persona es una historia única.",
  },
  {
    title: "Sin tabúes",
    description:
      "La sexualidad es parte de la salud. En consulta podés hablar de cualquier cosa sin vergüenza. No hay preguntas raras, no hay juicio.",
  },
  {
    title: "En tu idioma",
    description:
      "Nada de jerga clínica sin traducción. Si usamos un término técnico, lo explicamos en lenguaje que entiende cualquiera.",
  },
  {
    title: "A tu ritmo",
    description:
      "No hay un timeline. Cada proceso es distinto. Vamos a la velocidad que necesitás, con los objetivos que vos definís.",
  },
];

export default function SobreMiPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{
          background: "linear-gradient(135deg, var(--sage-light), var(--cream))",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo placeholder */}
            <div
              className="aspect-[3/4] rounded-3xl overflow-hidden relative flex items-center justify-center"
              style={{
                background: "linear-gradient(160deg, var(--lavender-light), var(--sage-light))",
              }}
            >
              <div className="text-center p-8">
                <div
                  className="w-36 h-36 rounded-full mx-auto mb-6 flex items-center justify-center text-6xl"
                  style={{ backgroundColor: "var(--lavender)" }}
                >
                  👩‍⚕️
                </div>
                <p
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--charcoal)",
                  }}
                >
                  Camila Jurfest
                </p>
                <p className="text-sm mt-2" style={{ color: "var(--warm-gray)" }}>
                  Psicóloga &amp; Sexóloga Clínica
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--lavender-dark)" }}>
                  Pocitos, Montevideo
                </p>
              </div>
            </div>

            <div>
              <p
                className="text-sm font-medium tracking-widest uppercase mb-4"
                style={{ color: "var(--sage-dark)" }}
              >
                Sobre mí
              </p>
              <h1
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--charcoal)",
                }}
              >
                Soy Camila.
                <br />
                <span style={{ color: "var(--lavender-dark)" }}>
                  Hablo de lo que no se habla.
                </span>
              </h1>
              <p
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{ color: "var(--warm-gray)" }}
              >
                Soy psicóloga clínica y sexóloga clínica con consultorio en
                Pocitos, Montevideo. Me especializo en salud sexual y
                emocional — porque creo que son dos caras de la misma moneda
                y que hablar de ellas no debería dar vergüenza.
              </p>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--warm-gray)" }}
              >
                Mi trabajo no es darte respuestas hechas. Es acompañarte a
                encontrar las tuyas — con herramientas, con ciencia y con
                la honestidad de alguien que se tomó en serio formarse para
                esto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom space-y-6">
            <h2
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--charcoal)",
              }}
            >
              Por qué elegí este camino
            </h2>
            {[
              "Desde chica me interesó entender a las personas: por qué hacemos lo que hacemos, por qué nos duele lo que nos duele, por qué ciertas cosas que deberían ser naturales se vuelven difíciles de hablar.",
              "Cuando descubrí la sexología clínica, se armó algo en mí. Acá estaba la intersección de todo lo que me apasionaba: el bienestar emocional, el cuerpo, los vínculos, la identidad. Y un campo donde el tabú sigue siendo tan grande que las personas sufren en silencio cosas que tienen solución.",
              "Estudié psicología en la UCU y luego me especialicé en sexología clínica en la SUS Uruguay. Complementé mi formación con posgrado en la UBA. No paré de formarme porque este campo cambia, crece, y porque cada persona que llega al consultorio me enseña algo nuevo.",
              "Hoy atiendo en Pocitos de forma presencial y online, y también tengo espacio en medios — una columna en Oceano FM y Ola Stream donde hablo de salud sexual en lenguaje accesible. Creo que parte de mi trabajo es sacar estas conversaciones del consultorio y llevarlas a donde están las personas.",
            ].map((para, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--warm-gray)" }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--charcoal)",
            }}
          >
            Formación académica
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {credentials.map((c) => (
              <div
                key={c.institution}
                className="p-6 rounded-2xl text-center"
                style={{ backgroundColor: "var(--lavender-light)" }}
              >
                <div
                  className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: "var(--lavender-dark)",
                    color: "white",
                  }}
                >
                  {c.institution}
                </div>
                <h3
                  className="font-bold text-base mb-1"
                  style={{ color: "var(--charcoal)" }}
                >
                  {c.full}
                </h3>
                <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--charcoal)",
              }}
            >
              Cómo trabajo
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {approach.map((item) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border-l-4"
                style={{
                  backgroundColor: "var(--warm-white)",
                  borderColor: "var(--lavender-dark)",
                }}
              >
                <h3
                  className="font-bold text-xl mb-3"
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    color: "var(--charcoal)",
                  }}
                >
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="py-16" style={{ backgroundColor: "var(--lavender-light)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--charcoal)",
            }}
          >
            En medios
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                name: "Oceano FM",
                description: "Columna semanal de salud sexual",
                icon: "🎙️",
              },
              {
                name: "Ola Stream",
                description: "Presencia en plataforma digital",
                icon: "📻",
              },
            ].map((media) => (
              <div
                key={media.name}
                className="p-6 rounded-2xl flex items-center gap-4"
                style={{ backgroundColor: "white" }}
              >
                <div className="text-3xl">{media.icon}</div>
                <div>
                  <p
                    className="font-bold"
                    style={{ color: "var(--charcoal)" }}
                  >
                    {media.name}
                  </p>
                  <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
                    {media.description}
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
          background: "linear-gradient(135deg, var(--lavender-dark), var(--sage-dark))",
        }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            ¿Querés que trabajemos juntas?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Escribime. No hace falta tener todo claro — eso lo armamos juntas.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl"
            style={{
              backgroundColor: "var(--cream)",
              color: "var(--lavender-dark)",
            }}
          >
            Contactarme
          </Link>
        </div>
      </section>
    </>
  );
}
