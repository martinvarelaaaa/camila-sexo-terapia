import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t mt-auto"
      style={{
        backgroundColor: "var(--charcoal)",
        borderColor: "rgba(255,255,255,0.1)",
        color: "rgba(255,255,255,0.8)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3
              className="text-xl font-bold text-white mb-2"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Camila Jurfest
            </h3>
            <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
              Psicóloga y Sexóloga Clínica
              <br />
              Montevideo, Uruguay
            </p>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              UCU · SUS Uruguay · UBA
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Servicios
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <li>
                <Link href="/servicios#individual" className="hover:text-white transition-colors">
                  Psicoterapia Individual
                </Link>
              </li>
              <li>
                <Link href="/servicios#pareja" className="hover:text-white transition-colors">
                  Terapia de Pareja
                </Link>
              </li>
              <li>
                <Link href="/servicios#sexual" className="hover:text-white transition-colors">
                  Terapia Sexual
                </Link>
              </li>
              <li>
                <Link href="/servicios#perinatal" className="hover:text-white transition-colors">
                  Terapia Perinatal
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 tracking-wide uppercase">
              Contacto
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <li>
                <a
                  href="https://wa.me/59899000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@camilajurfest.com"
                  className="hover:text-white transition-colors"
                >
                  hola@camilajurfest.com
                </a>
              </li>
              <li className="mt-1">Pocitos, Montevideo</li>
              <li>Atención presencial y online</li>
            </ul>
          </div>
        </div>

        <div
          className="pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-4 text-xs"
          style={{
            borderColor: "rgba(255,255,255,0.1)",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          <p>© {new Date().getFullYear()} Camila Jurfest. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/sobre-mi" className="hover:text-white transition-colors">
              Sobre mí
            </Link>
            <Link href="/contacto" className="hover:text-white transition-colors">
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
