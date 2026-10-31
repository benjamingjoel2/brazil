import type { Metadata } from "next";
import { brand } from "@/config/brand";
import { site } from "@/config/site";

export function pageMeta({
  title,
  description,
  path,
  image,
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} · ${brand.name}`,
      description,
      url: path,
      siteName: brand.name,
      type: "website",
      ...(image ? { images: [{ url: image, width: 1200, height: 630 }] } : {}),
    },
    twitter: { card: "summary_large_image", title: `${title} · ${brand.name}`, description },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: brand.name,
  slogan: brand.promise,
  description: brand.description,
  url: site.url,
  email: site.contact.email,
  areaServed: { "@type": "Country", name: "Brazil" },
  address: { "@type": "PostalAddress", ...site.contact.postalAddress },
};

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, trusted data built at compile time.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
