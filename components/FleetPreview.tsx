import FleetCard from './FleetCard'
export default function FleetPreview(){
  const fleet = [
    { title: 'Executive Sedan Class', desc: 'Comfortable executive sedans for business travel.', image: '/car1.webp', pax:3, luggage:3 },
    { title: 'First Class Sedan', desc: 'Luxury sedans with Wi-Fi on request.', image: '/car2.webp', pax:3, luggage:3 },
    { title: 'SUV Executive', desc: 'Spacious SUVs for groups.', image: '/car3.webp', pax:6, luggage:4 },
  ]
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Fleet</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {fleet.map((f,i)=>(<FleetCard key={i} {...f}/>))}
      </div>
    </section>
  )
}
