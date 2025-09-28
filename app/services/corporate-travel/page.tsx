import Link from "next/link";

export default function Page() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Banner */}
      <div className="relative bg-black text-white rounded-2xl shadow-lg mb-16 h-[300px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1584467735815-f778f274e65d?q=80&w=1600"
          alt="Corporate Travel Limousine"
          className="absolute inset-0 w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 bg-black/60 rounded-2xl"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Corporate Travel
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professional corporate travel services with fixed rates, on-time
            pickups, and premium vehicles for executives.
          </p>
        </div>
      </div>

      {/* Two Column Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        {/* Left Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1524646432680-7e9c74d7faaa?q=80&w=1200"
            alt="Corporate Chauffeur Service"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Travel in Comfort & Style
          </h2>
          <p className="text-gray-700">
            Our corporate limousine service is tailored for professionals who
            value punctuality, reliability, and luxury. Whether it’s daily
            business commutes, meetings, or events, we ensure a seamless travel
            experience.
          </p>
          <p className="text-gray-700">
            Impress your clients and colleagues with premium vehicles driven by
            trained chauffeurs who prioritize your comfort and privacy.
          </p>
          <div>
            <Link
              href="/book"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded font-bold transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>

      {/* Fleet Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Fleet for Corporate Travel
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Car 1 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="/Chrysler-300-1200x675.jpg"
              alt="Executive Sedan"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Executive Sedan</h3>
              <p className="text-gray-600 mb-4">
                Ideal for solo business professionals and VIP meetings.
              </p>
              <Link
                href="/book"
                className="text-yellow-600 font-bold hover:underline"
              >
                Book Now →
              </Link>
            </div>
          </div>

          {/* Car 2 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1200"
              alt="Luxury SUV"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Luxury SUV</h3>
              <p className="text-gray-600 mb-4">
                Spacious option for small teams and executive groups.
              </p>
              <Link
                href="/book"
                className="text-yellow-600 font-bold hover:underline"
              >
                Book Now →
              </Link>
            </div>
          </div>

          {/* Car 3 */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?q=80&w=1200"
              alt="Luxury Limousine"
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Luxury Limousine</h3>
              <p className="text-gray-600 mb-4">
                Premium option for high-level executives and special events.
              </p>
              <Link
                href="/book"
                className="text-yellow-600 font-bold hover:underline"
              >
                Book Now →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
