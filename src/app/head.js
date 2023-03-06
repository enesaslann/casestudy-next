import Script from "next/script";
import React from "react";

function RootHead() {
  const structuredData = {
    "@context": "http://schema.org",
    "@type": "Organization",
    email: "info@enuygun.com",
    name: "ENUYGUN",
    legalName: "ENUYGUN",
    telephone: "+90 850 333 95 95",
    image:
      "https://cdn.enuygun.com/v-53380/bundles/enuygunwebui/img/favicon.ico",
    logo: "https://cdn.enuygun.com/v-53380/bundles/enuygunwebui/img/favicon.ico",
    url: "https://www.enuygun.com/",
    dissolutionDate: "2008",
    foundingDate: "2008",
    founder: "Caglar Erol",
    foundingLocation: "Istanbul",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        " Küçükbakkalköy Mah. Kayışdağı Cd. Allianz Tower 1/16 34750 Ataşehir İstanbul",
      addressLocality: "Istanbul",
      postalCode: "34000",
      addressCountry: "Turkey",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.8,
      reviewCount: 1037,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90 850 333 95 95",
      contactType: "sales",
      areaServed: "TR",
      availableLanguage: ["English", "Turkish"],
    },
    sameAs: [
      "https://www.facebook.com/enuygun",
      "https://www.instagram.com/enuygun/",
      "https://www.youtube.com/enuyguncom",
      "https://www.linkedin.com/company/wingieenuygungroup/",
      "https://twitter.com/enuygun",
    ],
    brand: "ENUYGUN",
    description:
      "ENUYGUN'da en avantajlı uçak bileti, otobüs bileti ve otel rezervasyon fiyatlarını karşılaştırarak tüm seyahatlerinizde en uygun fiyatı bulmanızı sağlıyoruz.",
  };
  return (
    <>
      <title>ENUYGUN Çalışan</title>
      <Script
        async
        type="application/ld+json"
        id={231}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
}

export default RootHead;
