import { notFound } from "next/navigation";
import Image from "next/image";
import Script from "next/script";

const SITE = "https://fastwheellimo.com";

type Service = {
  title: string;
  description: string;
  keywords: string[];
  image: string;
};

type ServiceKey = keyof typeof SERVICES;

const SERVICES: Record<string, Service> = {
  airport: {
    title: "Airport Car Service",
    description:
      "Reliable airport limo with meet & greet and real-time flight tracking.",
    keywords: ["airport car service", "airport limo", "meet and greet", "flight tracking"],
    image: "/img/services/airport.jpg",
  },
  wedding: {
    title: "Wedding Limo",
    description: "Elegant bridal car and wedding transportation services.",
    keywords: ["wedding limo", "bridal car", "wedding transportation"],
    image: "/img/services/wedding.jpg",
  },
  nightout: {
    title: "Night Out Ride",
    description: "Luxury limo and car service for your night out.",
    keywords: ["night out ride limousine", "limo", "car service"],
    image: "/img/services/nightout.jpg",
  },
  // Add more services as needed
};

export function generateStaticParams(): { slug: ServiceKey }[] {
  return Object.keys(SERVICES).map((slug) => ({
    slug: slug as ServiceKey,
  }));
}

export function generateMetadata({ params }: { params: { slug: ServiceKey } }) {
  const svc = SERVICES[params.slug];
  if (!svc) return {};

  const url = `${SITE}/services/${params.slug}`;

  return {
    title: `${svc.title} | FastWheel Limo`,
    description: svc.description,
    other: { keywords: svc.keywords }, // ✅ replaced "keywords"
    alternates: { canonical: url },
    openGraph: {
      title: `${svc.title} | FastWheel Limo`,
      description: svc.description,
      url,
      images: [{ url: svc.image }],
      siteName: "FastWheel Limo",
      type: "website",
    },
  };
}

export default function ServicePage({ params }: { params: { slug: ServiceKey } }) {
  const svc = SERVICES[params.slug];
  if (!svc) return notFound();

  return (
    <div className="relative">
      <Image
        src={svc.image}
        alt={svc.title}
        fill
        sizes="100vw" // ✅ required when using fill
        className="object-cover brightness-50"
      />
      <div className="relative z-10 p-12 text-white">
        <h1 className="text-4xl font-bold">{svc.title}</h1>
        <p className="mt-4 max-w-2xl">{svc.description}</p>
      </div>
      <JsonLd params={params} />
    </div>
  );
}

function JsonLd({ params }: { params: { slug: ServiceKey } }) {
  const svc = SERVICES[params.slug];
  if (!svc) return null;

  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.description,
    areaServed: "United States",
    provider: {
      "@type": "LocalBusiness",
      name: "FastWheel Limo",
    },
    url: `${SITE}/services/${params.slug}`,
  };

  return (
    <Script
      id={`jsonld-${params.slug}`}
      type="application/ld+json"
      strategy="afterInteractive"
    >
      {JSON.stringify(data)}
    </Script>
  );
}
