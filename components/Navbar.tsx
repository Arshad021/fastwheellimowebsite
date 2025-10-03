'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const [sopen,setSopen] = useState(false)
  return (
    <header className="bg-black text-white fixed w-full z-40 top-0">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="https://www.fastwheelslimo.com/wp-content/uploads/2021/06/fastwheellimo-logo.png" alt="FastWheel Limo" width={160} height={40} priority />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/book">Book Now</Link>
          <Link href="/fleets">Fleet</Link>
          <div className="relative" onMouseEnter={()=>setSopen(true)} onMouseLeave={()=>setSopen(false)}>
            <button className="flex items-center">Services ▾</button>
            {sopen && (
              <div className="absolute right-0 mt-2 bg-white text-black rounded shadow w-72 p-2 grid grid-cols-1">
                {['airport-limousine','point-to-point','corporate-travel','hourly-chauffeur','city-to-city','roadshows','events','wedding-limousine','prom-limousine','night-out-ride-limousine','business-van','casino-limousine','bachelor-parties-limousine'].map(slug=>(
                  <Link key={slug} href={`/services/${slug}`} className="px-4 py-2 hover:bg-gray-100 capitalize">{slug.replace(/-/g,' ')}</Link>
                ))}
                <Link href="/services" className="px-4 py-2 hover:bg-gray-100 font-semibold">All Services →</Link>
              </div>
            )}
          </div>
          <Link href="/locations">Locations</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/reserve" className="bg-yellow-500 text-black px-3 py-1 rounded">Login</Link>
        </nav>
        <button className="md:hidden" onClick={()=>setOpen(!open)} aria-label="Toggle menu">{open? '✖':'☰'}</button>
      </div>
      {open && (
        <div className="md:hidden bg-black text-white px-4 pb-4 space-y-1">
          <Link href="/" className="block py-2">Home</Link>
          <Link href="/book" className="block py-2">Book Now</Link>
          <Link href="/fleets" className="block py-2">Fleet</Link>
          <details className="pt-2">
            <summary>Services</summary>
            <div className="pl-4">
              {['airport-limousine','point-to-point','corporate-travel','hourly-chauffeur','city-to-city','roadshows','events','wedding-limousine','prom-limousine','night-out-ride-limousine','business-van','casino-limousine','bachelor-parties-limousine'].map(slug=>(
                <Link key={slug} href={`/services/${slug}`} className="block py-1 capitalize">{slug.replace(/-/g,' ')}</Link>
              ))}
              <Link href="/services" className="block py-1 font-semibold">All Services →</Link>
            </div>
          </details>
          <Link href="/locations" className="block py-2">Locations</Link>
          <Link href="/about" className="block py-2">About</Link>
          <Link href="/contact" className="block py-2">Contact</Link>
          <Link href="/reserve" className="block py-2">Login</Link>
        </div>
      )}
    </header>
  )
}
