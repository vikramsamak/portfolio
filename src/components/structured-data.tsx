import Script from "next/script";
import { DATA } from "@/data/resume";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: DATA.avatarUrl,
    jobTitle: DATA.jobTitle,
    worksFor: {
      "@type": "Organization",
      name: DATA.company,
    },
    sameAs: [DATA.contact.social.GitHub.url],
  };

  return (
    <Script
      id="person-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
