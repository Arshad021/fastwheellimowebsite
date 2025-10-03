import Link from "next/link"

export default function Cities(){
  const cities = [
    { name: 'Boston', slug: 'boston', img: 'https://plus.unsplash.com/premium_photo-1694475434235-12413ec38b3e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'New York', slug: 'new-york', img: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Chicago', slug: 'chicago', img: 'https://images.unsplash.com/photo-1596250410216-1ac77dc208e3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Miami', slug: 'miami', img: 'https://images.unsplash.com/photo-1597535973747-951442d5dbc7?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ]

  return (
    <section className="py-16 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-5 gap-6">
        {/* Left Panel */}
        <div className="col-span-2 bg-black text-white rounded-2xl p-10 flex flex-col justify-center">
          <h3 className="text-4xl font-extrabold mb-4">Top Cities</h3>
          <p className="text-gray-300 mb-6">
            Discover your one-stop travel shop: long-distance rides, airport transfers, and more.
          </p>
          <Link href="">
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition">
              All Cities
            </button>
          </Link>
        </div>

        {/* City Cards */}
        <div className="col-span-3 grid grid-cols-2 gap-6">
          {cities.map((c,i)=>(
            <Link key={i} href={`/cities/${c.slug}`} className="block">
              <div className="relative rounded-2xl overflow-hidden shadow-lg group h-64">
                <img 
                  src={c.img} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt={c.name}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold tracking-wide">{c.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
