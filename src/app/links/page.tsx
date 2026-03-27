import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Links — Camila Jurfest",
  description: "Todos los links de Camila Jurfest: agendar consulta, Instagram, TikTok y más.",
  robots: { index: false, follow: false },
};

const links = [
  {
    label: "🗓️ Agendar consulta",
    href: "/contacto",
    highlight: true,
  },
  {
    label: "💬 WhatsApp",
    href: "https://wa.me/59899000000?text=Hola%20Camila%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta.",
    external: true,
  },
  {
    label: "📸 Instagram",
    href: "https://www.instagram.com/camilajurfest",
    external: true,
  },
  {
    label: "🎵 TikTok",
    href: "https://www.tiktok.com/@camilajurfest",
    external: true,
  },
  {
    label: "🌱 Psicoterapia Individual",
    href: "/servicios#individual",
  },
  {
    label: "🤝 Terapia de Pareja",
    href: "/servicios#pareja",
  },
  {
    label: "💜 Terapia Sexual",
    href: "/servicios#sexual",
  },
  {
    label: "🌸 Terapia Perinatal",
    href: "/servicios#perinatal",
  },
  {
    label: "👩‍⚕️ Sobre mí",
    href: "/sobre-mi",
  },
];

export default function LinksPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center py-16 px-4"
      style={{
        background: "linear-gradient(135deg, var(--lavender-light), var(--cream), var(--sage-light))",
      }}
    >
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="text-center mb-8">
          <div
            className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl"
            style={{ backgroundColor: "var(--lavender)" }}
          >
            👩‍⚕️
          </div>
          <h1
            className="text-2xl font-bold"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--charcoal)",
            }}
          >
            Camila Jurfest
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--warm-gray)" }}>
            Psicóloga &amp; Sexóloga Clínica · Montevideo
          </p>
        </div>

        {/* Links */}
        <div className="space-y-3">
          {links.map((link) => {
            const isExternal = link.external;
            const className = `block w-full py-4 px-6 rounded-2xl text-center font-semibold text-base transition-all hover:shadow-md hover:-translate-y-0.5`;

            const style = link.highlight
              ? {
                  backgroundColor: "var(--lavender-dark)",
                  color: "white",
                }
              : {
                  backgroundColor: "white",
                  color: "var(--charcoal)",
                };

            if (isExternal) {
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                  style={style}
                >
                  {link.label}
                </a>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={className}
                style={style}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <p className="text-center text-xs mt-8" style={{ color: "var(--warm-gray)" }}>
          camilajurfest.com
        </p>
      </div>
    </div>
  );
}
