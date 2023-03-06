import React from "react";
import Script from "next/script";

function SchemaScript({ logo, keyId }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    author: "enuygun.com",
    contentUrl: logo,
  };
  return (
    <Script
      async
      id={keyId}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}

export default SchemaScript;
