import FleetCard from "@/components/FleetCard"
import ContactForm from "@/components/ContactForm"

const fleet = [
  { title: 'Executive Sedan', desc: 'Comfortable executive sedans.', image: '/car1.jpg', pax: 3, luggage: 3 },
  { title: 'First Class Sedan', desc: 'Premium sedans, leather interiors.', image: '/car2.jpg', pax: 3, luggage: 3 },
  { title: 'Executive SUV', desc: 'Spacious SUVs for groups.', image: '/car3.jpg', pax: 6, luggage: 4 },
]

export default function BostonPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 space-y-16">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold mb-4">New York Limousine Service</h1>
        <p className="text-lg text-gray-600">
          Premium limo service in New York with airport transfers, corporate rides & more.
        </p>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Available Fleet in New York</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((c,i)=>(<FleetCard key={i} {...c} />))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-8">Book Your Ride in New York</h2>
        <ContactForm />
      </div>
    </section>
  )
}
