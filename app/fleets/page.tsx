import FleetCard from '../../components/FleetCard'

const fleet = [
  { title: 'Executive Sedan', desc: 'Comfortable executive sedans.', image: '/car1.webp', pax: 3, luggage: 3 },
  { title: 'First Class Sedan', desc: 'Premium sedans, leather interiors.', image: '/car1.webp', pax: 3, luggage: 3 },
  { title: 'Executive SUV', desc: 'Spacious SUVs for groups.', image: '/car2.webp', pax: 6, luggage: 4 },
  { title: 'Premium SUV', desc: 'Black-on-black luxury SUVs.', image: '/car3.webp', pax: 6, luggage: 5 },
  { title: 'Business Van', desc: 'Comfortable van for teams.', image: '/car1.webp', pax: 10, luggage: 10 },
  { title: 'Stretch Limousine', desc: 'Perfect for weddings & events.', image: '/car2.webp', pax: 8, luggage: 6 },
  { title: 'Party Bus', desc: 'Celebrate with onboard lighting & sound.', image: '/car3.webp', pax: 14, luggage: 8 },
]

export default function Fleets() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-10">Our Fleet</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {fleet.map((c,i)=>(
          <div key={i} className="border rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col">
            <FleetCard {...c} />
            
          </div>
        ))}
      </div>
    </section>
  )
}
