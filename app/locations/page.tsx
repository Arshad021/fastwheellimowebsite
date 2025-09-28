export default function Locations(){
  const places = ["Boston", "Cambridge", "Brookline", "Providence", "New York", "Chicago", "Miami"]
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Popular Locations</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {places.map((p,i)=>(
          <div key={i} className="p-6 border rounded-xl">
            <h3 className="font-semibold">{p}</h3>
            <p className="text-gray-600 mt-2">Premium chauffeur service to and from {p} and surrounding areas.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
