import Link from 'next/link'
import Image from 'next/image'

export default function ServicesPreview() {
  const services = [
    {
      title: 'Airport Limousine',
      slug: 'airport-limousine',
      description: 'Reliable and comfortable rides to and from the airport.',
      image: '/pexels-pixabay-69121-980x638.jpg',
    },
    {
      title: 'Wedding Limousine',
      slug: 'wedding-limousine',
      description: 'Make your special day unforgettable with our luxury wedding limousines.',
      image: '/wedd.jpg',
    },
    {
      title: 'Night Out Ride Limousine',
      slug: 'night-out-ride-limousine',
      description: 'Enjoy your night out in style and safety with our premium rides.',
      image: '/pexels-chad-kirchoff-952437.jpg',
    },
    {
      title: 'Casino Limousine',
      slug: 'casino-limousine',
      description: 'Arrive at the casino in style and enjoy a VIP experience all night long.',
      image: '/pexels-drew-rae-1871508-1-768x483.jpg',
    },
    {
      title: 'Prom Limousine',
      slug: 'prom-limousine',
      description: 'Turn prom night into a luxury event with our elegant limousine services.',
      image: '/prom-1200x675.jpg',
    },
    {
      title: 'Bachelor Parties Limousine',
      slug: 'bachelor-parties-limousine',
      description: 'Celebrate bachelor parties with a safe, stylish, and fun limousine ride.',
      image: '/pexels-mauricio-mascaro-801863-768x512.jpg',
    },
  ]

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="p-6 border rounded-lg hover:shadow flex flex-col"
          >
            <div className="w-full h-40 relative mb-4">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover rounded-md"
              />
            </div>
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.description}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
