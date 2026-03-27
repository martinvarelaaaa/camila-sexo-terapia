"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/contacto", label: "Contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none">
            <span
              className="text-xl md:text-2xl font-bold"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "var(--lavender-dark)",
              }}
            >
              Camila Jurfest
            </span>
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--warm-gray)" }}>
              Psicóloga · Sexóloga Clínica
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-lavender-dark ${
                  pathname === link.href
                    ? "border-b-2"
                    : "text-warm-gray"
                }`}
                style={
                  pathname === link.href
                    ? { color: "var(--lavender-dark)", borderColor: "var(--lavender-dark)" }
                    : {}
                }
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90 hover:shadow-md"
              style={{ backgroundColor: "var(--lavender-dark)" }}
            >
              Agendar consulta
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
                style={{ color: "var(--charcoal)" }}
              />
              <span
                className={`block h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
                style={{ backgroundColor: "var(--charcoal)" }}
              />
              <span
                className={`block h-0.5 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
                style={{ backgroundColor: "var(--charcoal)" }}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="md:hidden pb-6 pt-2 border-t"
            style={{ borderColor: "var(--lavender-light)" }}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium py-1"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--lavender-dark)"
                        : "var(--charcoal)",
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contacto"
                className="mt-2 px-5 py-3 rounded-full text-sm font-medium text-white text-center transition-all"
                style={{ backgroundColor: "var(--lavender-dark)" }}
              >
                Agendar consulta
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
