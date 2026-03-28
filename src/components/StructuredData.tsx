import type { Service } from "@/app/servicios/data";
import type { BlogPostMeta } from "@/app/blog/posts";

export function LocalBusinessStructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.camilajurfest.com/#business",
        name: "Camila Jurfest — Psicóloga y Sexóloga Clínica",
        description:
          "Psicóloga y sexóloga clínica en Montevideo. Terapia individual, de pareja, sexual y perinatal. Atención presencial en Pocitos y online.",
        url: "https://www.camilajurfest.com",
        telephone: "+598992277590",
        email: "camila.sexoyterapia@gmail.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Pocitos",
          addressLocality: "Montevideo",
          addressRegion: "Montevideo",
          addressCountry: "UY",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -34.9011,
          longitude: -56.1645,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "19:00",
          },
        ],
        priceRange: "$$",
        currenciesAccepted: "UYU, USD",
        paymentAccepted: "Cash, Bank Transfer",
        areaServed: [
          { "@type": "City", name: "Montevideo" },
          { "@type": "Country", name: "Uruguay" },
        ],
        hasMap: "https://maps.google.com/?q=Pocitos,Montevideo,Uruguay",
        sameAs: [
          "https://www.instagram.com/camila.sexoyterapia",
          "https://www.tiktok.com/@camila.sexoyterapia",
        ],
        image: "https://www.camilajurfest.com/og-image",
      },
      {
        "@type": "Person",
        "@id": "https://www.camilajurfest.com/#person",
        name: "Camila Jurfest",
        jobTitle: "Psicóloga y Sexóloga Clínica",
        description:
          "Psicóloga clínica y sexóloga con formación en UCU, SUS Uruguay y UBA. Especializada en terapia sexual, de pareja y perinatal en Montevideo.",
        url: "https://www.camilajurfest.com",
        image: "https://www.camilajurfest.com/og-image",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Montevideo",
          addressCountry: "UY",
        },
        alumniOf: [
          { "@type": "EducationalOrganization", name: "UCU" },
          { "@type": "EducationalOrganization", name: "SUS Uruguay" },
          { "@type": "EducationalOrganization", name: "UBA" },
        ],
        knowsAbout: [
          "Psicología Clínica",
          "Sexología Clínica",
          "Terapia de Pareja",
          "Terapia Perinatal",
          "Salud Sexual",
        ],
        worksFor: {
          "@id": "https://www.camilajurfest.com/#business",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const SERVICE_BASE_URL = "https://www.camilajurfest.com";

export function ServiceStructuredData({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SERVICE_BASE_URL}/${service.slug}#service`,
    name: service.title,
    description: service.seoDescription,
    url: `${SERVICE_BASE_URL}/${service.slug}`,
    provider: {
      "@id": `${SERVICE_BASE_URL}/#business`,
    },
    serviceType: service.title,
    areaServed: [
      { "@type": "City", name: "Montevideo" },
      { "@type": "Country", name: "Uruguay" },
    ],
    availableChannel: [
      {
        "@type": "ServiceChannel",
        serviceUrl: `${SERVICE_BASE_URL}/contacto`,
        serviceLocation: {
          "@type": "Place",
          name: "Pocitos, Montevideo",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Montevideo",
            addressRegion: "Montevideo",
            addressCountry: "UY",
          },
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ArticleStructuredData({ post }: { post: BlogPostMeta }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://www.camilajurfest.com/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: {
      "@type": "Person",
      "@id": "https://www.camilajurfest.com/#person",
      name: "Camila Jurfest",
      url: "https://www.camilajurfest.com/sobre-mi",
    },
    publisher: {
      "@id": "https://www.camilajurfest.com/#business",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.camilajurfest.com/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    inLanguage: "es-UY",
    about: {
      "@type": "MedicalWebPage",
      name: post.title,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export function FAQStructuredData({ faqs }: { faqs: ServiceFAQ[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
