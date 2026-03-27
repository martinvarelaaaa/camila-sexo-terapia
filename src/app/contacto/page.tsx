import type { Metadata } from "next";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Agendar consulta con Camila Jurfest",
  description:
    "Agendá una consulta con Camila Jurfest, psicóloga y sexóloga clínica en Montevideo. Atención presencial en Pocitos y online. Respondemos a la brevedad.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto — Camila Jurfest",
    description: "Agendá tu consulta — presencial en Pocitos o online.",
    url: "https://www.camilajurfest.com/contacto",
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{
          background: "linear-gradient(135deg, var(--lavender-light), var(--sage-light))",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className="text-sm font-medium tracking-widest uppercase mb-4"
            style={{ color: "var(--lavender-dark)" }}
          >
            Contacto
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--charcoal)",
            }}
          >
            Hablemos.
          </h1>
          <p
            className="text-lg leading-relaxed"
            style={{ color: "var(--warm-gray)" }}
          >
            No tenés que saber exactamente qué decir ni qué servicio necesitás.
            Contame lo que te pasa y lo vemos juntas.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-16" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2
                className="text-2xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--charcoal)",
                }}
              >
                Enviar mensaje
              </h2>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <h2
                className="text-2xl font-bold mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--charcoal)",
                }}
              >
                Otros canales
              </h2>

              {/* WhatsApp */}
              <a
                href="https://wa.me/59899000000?text=Hola%20Camila%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 rounded-2xl transition-all hover:shadow-md group"
                style={{ backgroundColor: "var(--sage-light)" }}
              >
                <div className="text-3xl">💬</div>
                <div>
                  <p
                    className="font-bold text-lg mb-1 group-hover:underline"
                    style={{ color: "var(--sage-dark)" }}
                  >
                    WhatsApp
                  </p>
                  <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
                    La forma más rápida de agendar. Respondemos a la brevedad,
                    en horario de atención.
                  </p>
                  <p
                    className="text-sm font-medium mt-2"
                    style={{ color: "var(--sage-dark)" }}
                  >
                    Escribir ahora →
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hola@camilajurfest.com"
                className="flex items-start gap-4 p-6 rounded-2xl transition-all hover:shadow-md group"
                style={{ backgroundColor: "var(--lavender-light)" }}
              >
                <div className="text-3xl">✉️</div>
                <div>
                  <p
                    className="font-bold text-lg mb-1 group-hover:underline"
                    style={{ color: "var(--lavender-dark)" }}
                  >
                    Email
                  </p>
                  <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
                    hola@camilajurfest.com
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--warm-gray)" }}
                  >
                    Para consultas con más detalle.
                  </p>
                </div>
              </a>

              {/* Location */}
              <div
                className="flex items-start gap-4 p-6 rounded-2xl"
                style={{ backgroundColor: "var(--warm-white)" }}
              >
                <div className="text-3xl">📍</div>
                <div>
                  <p
                    className="font-bold text-lg mb-1"
                    style={{ color: "var(--charcoal)" }}
                  >
                    Consultorio
                  </p>
                  <p className="text-sm" style={{ color: "var(--warm-gray)" }}>
                    Pocitos, Montevideo, Uruguay
                    <br />
                    Atención presencial y online
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--warm-white)" }}
              >
                <p
                  className="font-bold text-base mb-3"
                  style={{ color: "var(--charcoal)" }}
                >
                  Horario de atención
                </p>
                <div className="space-y-1 text-sm" style={{ color: "var(--warm-gray)" }}>
                  <div className="flex justify-between">
                    <span>Lunes a Viernes</span>
                    <span>9:00 — 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábados</span>
                    <span>Consultar disponibilidad</span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div
                className="p-6 rounded-2xl"
                style={{ backgroundColor: "var(--warm-white)" }}
              >
                <p
                  className="font-bold text-base mb-3"
                  style={{ color: "var(--charcoal)" }}
                >
                  Redes sociales
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/camilajurfest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-80"
                    style={{
                      backgroundColor: "var(--lavender-light)",
                      color: "var(--lavender-dark)",
                    }}
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.tiktok.com/@camilajurfest"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-80"
                    style={{
                      backgroundColor: "var(--charcoal)",
                      color: "white",
                    }}
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
