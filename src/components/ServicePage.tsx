import Link from "next/link";
import type { Service } from "@/app/servicios/data";

const howItWorks = [
  { icon: "📍", title: "Presencial", description: "Consultorio en Pocitos, Montevideo. Ambiente cálido y privado." },
  { icon: "💻", title: "Online", description: "Videollamada para toda persona en Uruguay y el exterior." },
  { icon: "🕐", title: "Duración", description: "Sesiones de 50 minutos. Frecuencia semanal o quincenal." },
  { icon: "💬", title: "Primera consulta", description: "Sin compromiso. Nos conocemos y vemos si tenemos match." },
];

export function ServicePage({ service }: { service: Service }) {
  return (
    <>
      {/* Header */}
      <section
        className="pt-32 pb-16"
        style={{
          background: "linear-gradient(135deg, var(--lavender-light), var(--cream))",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors"
            style={{ color: "var(--lavender-dark)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Todos los servicios
          </Link>
          <div className="text-5xl mb-4">{service.emoji}</div>
          <p
            className="text-xs font-medium tracking-widest uppercase mb-3"
            style={{ color: "var(--lavender-dark)" }}
          >
            {service.keywordSlug}
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--charcoal)",
            }}
          >
            {service.title}
          </h1>
          <p className="text-lg font-medium" style={{ color: "var(--sage-dark)" }}>
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16" style={{ backgroundColor: "var(--cream)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Description */}
            <div>
              <div className="space-y-4 mb-8">
                {service.description.split("\n\n").map((para, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: "var(--warm-gray)" }}>
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
            <div className="rounded-2xl p-8" style={{ backgroundColor: "var(--lavender-light)" }}>
              <h2
                className="font-bold text-lg mb-6"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--charcoal)",
                }}
              >
                Temas frecuentes
              </h2>
              <ul className="space-y-3">
                {service.whatWeWork.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-xs"
                      style={{ backgroundColor: "var(--lavender)", color: "white" }}
                    >
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "var(--charcoal)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl font-bold mb-8 text-center"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif", color: "var(--charcoal)" }}
          >
            ¿Cómo funciona?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {howItWorks.map((item) => (
              <div key={item.title} className="p-5 rounded-2xl" style={{ backgroundColor: "var(--cream)" }}>
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: "var(--charcoal)" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "var(--warm-gray)" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, var(--lavender-dark), var(--sage-dark))" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            ¿Algo de esto resuena?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            No tenés que tener todo claro. Escribime y lo hablamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/contacto?servicio=${service.id}`}
              className="px-8 py-4 rounded-full font-semibold text-base transition-all hover:shadow-xl"
              style={{ backgroundColor: "var(--cream)", color: "var(--lavender-dark)" }}
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
