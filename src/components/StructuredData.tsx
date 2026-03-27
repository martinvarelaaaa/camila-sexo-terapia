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
        telephone: "+598-99-000-000",
        email: "hola@camilajurfest.com",
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
          "https://www.instagram.com/camilajurfest",
          "https://www.tiktok.com/@camilajurfest",
        ],
        image: "https://www.camilajurfest.com/og-image.jpg",
      },
      {
        "@type": "Person",
        "@id": "https://www.camilajurfest.com/#person",
        name: "Camila Jurfest",
        jobTitle: "Psicóloga y Sexóloga Clínica",
        description:
          "Psicóloga clínica y sexóloga con formación en UCU, SUS Uruguay y UBA. Especializada en terapia sexual, de pareja y perinatal en Montevideo.",
        url: "https://www.camilajurfest.com",
        image: "https://www.camilajurfest.com/og-image.jpg",
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
