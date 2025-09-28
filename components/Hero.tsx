import Link from 'next/link'
import Image from 'next/image'

export default function Hero(){
  return (
    <section className="relative w-full min-h-[560px] bg-black">
      <Image src="/banner1.jpg" alt="Hero" fill className="object-cover opacity-60" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 text-white">
          <p className="uppercase tracking-widest text-yellow-400 font-semibold">Affordable & Reliable Chauffeur Service</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-3">
            For All Your <br className="hidden md:block"/> Transportation <br className="hidden md:block"/> Needs
          </h1>
          <p className="mt-5 text-lg max-w-2xl text-gray-100">
            Local, family-owned. Fixed-price rates. No hidden fees. Available 24/7 across Boston & New England.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link href="/book" className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold">BOOK NOW</Link>
            <a href="tel:+18577779500" className="border border-white/70 px-6 py-3 rounded-lg">Call (+) 777 9500</a>
            <a href="https://wa.me/18577779500" className="underline">WhatsApp us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
