import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "./posts";

export const metadata: Metadata = {
  title: "Blog de Salud Sexual y Psicología | Camila Jurfest",
  description:
    "Artículos sobre salud sexual, terapia de pareja, sexología y bienestar emocional escritos por Camila Jurfest, psicóloga y sexóloga clínica en Montevideo.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Camila Jurfest | Psicóloga y Sexóloga Clínica",
    description:
      "Información confiable sobre salud sexual, relaciones y bienestar emocional.",
    url: "https://www.camilajurfest.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12 text-center">
          <p
            className="text-xs tracking-widest uppercase mb-3"
            style={{ color: "var(--lavender-dark)" }}
          >
            Recursos
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "var(--charcoal)",
            }}
          >
            Blog
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--warm-gray)" }}
          >
            Artículos sobre salud sexual, relaciones y bienestar emocional.
            Sin tabúes, con base científica.
          </p>
        </header>

        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="group rounded-2xl p-8 transition-shadow hover:shadow-md"
              style={{ backgroundColor: "var(--lavender-light)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{
                    backgroundColor: "var(--lavender-dark)",
                    color: "white",
                  }}
                >
                  {post.category}
                </span>
                <time
                  className="text-xs"
                  style={{ color: "var(--warm-gray)" }}
                  dateTime={post.publishedAt}
                >
                  {new Date(post.publishedAt).toLocaleDateString("es-UY", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-xs" style={{ color: "var(--warm-gray)" }}>
                  · {post.readingTime} min de lectura
                </span>
              </div>
              <h2
                className="text-2xl font-bold mb-3 group-hover:underline"
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  color: "var(--charcoal)",
                }}
              >
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="mb-4" style={{ color: "var(--warm-gray)" }}>
                {post.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium inline-flex items-center gap-1 transition-colors"
                style={{ color: "var(--lavender-dark)" }}
              >
                Leer artículo →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
