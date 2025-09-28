import Image from 'next/image'
import Link from 'next/link'
import ServiceLeadForm from '../../../components/ServiceLeadForm'
import FAQs from '../../../components/FAQs'
import type { Metadata } from 'next'

const SITE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

const SERVICES = {
  "airport-limousine": {
    "title": "Airport Transfers",
    "description": "On-time airport pickups with flight tracking, meet & greet, and fixed all-inclusive rates.",
    "image": "/services/airport-limousine.jpg",
    "keywords": [
      "airport car service",
      "airport limo",
      "meet and greet",
      "flight tracking"
    ],
    "about": "We monitor your flight in real-time, adjust for delays, and meet you at the curb or inside with a name sign. Pricing is upfront and includes tolls, taxes, and wait time buffers.",
    "features": [
      "Flight tracking & real-time adjustments",
      "Curbside or Meet & Greet pickup",
      "Child seats available on request",
      "Fixed, all-inclusive pricing"
    ],
    "faqs": [
      {
        "q": "Do you track flights?",
        "a": "Yes, we monitor your flight number and adjust pickup time for delays or early arrivals."
      },
      {
        "q": "Where do I meet the driver?",
        "a": "Choose curbside or Meet & Greet at baggage claim. Your confirmation email includes exact details."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Airport / Address*",
        "required": true
      },
      {
        "name": "flight",
        "label": "Flight Number"
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "luggage",
        "label": "Luggage",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "wedding-limousine": {
    "title": "Wedding Limousine",
    "description": "Elegant wedding transportation with immaculate vehicles and professional chauffeurs.",
    "image": "/services/wedding-limousine.jpg",
    "keywords": [
      "wedding limo",
      "bridal car",
      "wedding transportation"
    ],
    "about": "We coordinate with your planner, photographer, and venues to keep the day seamless\u2014from first look to grand exit.",
    "features": [
      "Immaculate vehicles & ribbons on request",
      "Pro chauffeurs with event experience",
      "Photo-stop friendly routing",
      "Flexible hours & extra stops"
    ],
    "faqs": [
      {
        "q": "Can you decorate the car?",
        "a": "Yes\u2014ribbons and basic decor can be arranged in advance."
      },
      {
        "q": "Do you allow photo stops?",
        "a": "Absolutely. Share your plan in the notes and we\u2019ll schedule them in."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "date",
        "label": "Event Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Pickup Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "ceremony",
        "label": "Ceremony Location"
      },
      {
        "name": "reception",
        "label": "Reception Location"
      },
      {
        "name": "partySize",
        "label": "Bridal Party Size",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "night-out-ride-limousine": {
    "title": "Night Out Ride Limousine",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/night-out-ride-limousine.jpg",
    "keywords": [
      "night out ride limousine",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "prom-limousine": {
    "title": "Prom Limousine",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/prom-limousine.jpg",
    "keywords": [
      "prom limousine",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "corporate-travel": {
    "title": "Corporate Travel",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/corporate-travel.jpg",
    "keywords": [
      "corporate travel",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "point-to-point": {
    "title": "Point To Point",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/point-to-point.jpg",
    "keywords": [
      "point to point",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "hourly-chauffeur": {
    "title": "Hourly Chauffeur",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/hourly-chauffeur.jpg",
    "keywords": [
      "hourly chauffeur",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "city-to-city": {
    "title": "City To City",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/city-to-city.jpg",
    "keywords": [
      "city to city",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "roadshows": {
    "title": "Roadshows",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/roadshows.jpg",
    "keywords": [
      "roadshows",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "events": {
    "title": "Events",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/events.jpg",
    "keywords": [
      "events",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "business-van": {
    "title": "Business Van",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/business-van.jpg",
    "keywords": [
      "business van",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "casino-limousine": {
    "title": "Casino Limousine",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/casino-limousine.jpg",
    "keywords": [
      "casino limousine",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  },
  "bachelor-parties-limousine": {
    "title": "Bachelor Parties Limousine",
    "description": "Premium private chauffeur service tailored to your itinerary.",
    "image": "/services/bachelor-parties-limousine.jpg",
    "keywords": [
      "bachelor parties limousine",
      "limo",
      "car service"
    ],
    "about": "Expect punctual pickups, professional chauffeurs, and clean late\u2011model vehicles. Transparent pricing with no hidden fees.",
    "features": [
      "Professional chauffeurs",
      "On-time guarantee",
      "All-inclusive pricing",
      "24/7 support"
    ],
    "faqs": [
      {
        "q": "How far in advance should I book?",
        "a": "We recommend at least 24 hours, but same-day service is often available."
      },
      {
        "q": "Can I make multiple stops?",
        "a": "Yes. Add details in the notes and we\u2019ll confirm the schedule and pricing."
      }
    ],
    "fields": [
      {
        "name": "name",
        "label": "Full Name*",
        "required": true
      },
      {
        "name": "email",
        "label": "Email*",
        "required": true,
        "type": "email"
      },
      {
        "name": "phone",
        "label": "Phone*",
        "required": true
      },
      {
        "name": "pickup",
        "label": "Pickup Address*",
        "required": true
      },
      {
        "name": "date",
        "label": "Date*",
        "required": true,
        "type": "date"
      },
      {
        "name": "time",
        "label": "Time*",
        "required": true,
        "type": "time"
      },
      {
        "name": "passengers",
        "label": "Passengers",
        "type": "number"
      },
      {
        "name": "notes",
        "label": "Notes",
        "type": "textarea"
      }
    ]
  }
} as const

type ServiceKey = keyof typeof SERVICES

export async function generateMetadata({ params }: { params: { slug: ServiceKey } }): Promise<Metadata> {
  const svc = SERVICES[params.slug]
  if(!svc){ return { title: "Service Not Found | FastWheel Limo" } }
  const url = `${SITE}/services/${params.slug}`
  return {
    title: `${svc.title} | FastWheel Limo`,
    description: svc.description,
    keywords: svc.keywords,
    alternates: { canonical: url },
    openGraph: { title: `${svc.title} | FastWheel Limo`, description: svc.description, url, images: [{ url: svc.image }], siteName: "FastWheel Limo", type: "website" }
  }
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((slug)=>({ slug }))
}

function JsonLd({ params }: { params: { slug: ServiceKey } }){
  const svc = SERVICES[params.slug]
  if(!svc) return null
  const data = { "@context":"https://schema.org", "@type":"Service", "name": svc.title, "description": svc.description, "areaServed":"United States", "provider": { "@type":"LocalBusiness", "name":"FastWheel Limo" }, "url": `${SITE}/services/${params.slug}` }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function Page({ params }: { params: { slug: ServiceKey } }) {
  const svc = SERVICES[params.slug]
  if(!svc){
    return (
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-700">This service does not exist. Please go back to the services list.</p>
        <div className="mt-6"><Link href="/services" className="text-yellow-600 underline">Back to Services</Link></div>
      </section>
    )
  }
  return (
    <>
      <JsonLd params={params} />
      <section className="relative w-full h-[320px]">
        <Image src={svc.image} alt={svc.title} fill className="object-cover brightness-50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 text-white">
            <h1 className="text-4xl font-extrabold">{svc.title}</h1>
            <p className="max-w-2xl text-gray-100 mt-2">{svc.description}</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-3">About this service</h2>
          <p className="text-gray-700">{svc.about}</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {svc.features.map((f,i)=>(<li key={i} className="bg-gray-50 rounded-lg p-3">✓ {f}</li>))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-3">Request a Quote</h3>
          <ServiceLeadForm fields={svc.fields as any} subject={svc.title} />
        </div>
      </section>

      <FAQs items={svc.faqs} />

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <Link href="/services" className="text-yellow-600 underline">← All Services</Link>
      </section>
    </>
  )
}
