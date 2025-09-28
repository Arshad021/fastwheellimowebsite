import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-xl font-bold">FastWheel Limo</h3>
          <p className="text-gray-400 mt-3">Your global chauffeur service.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li><Link href="/book">Book a Ride</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/fleets">Fleet</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><a href="/reserve">Login to Account</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Working Hours</h4>
          <p className="text-gray-400 mt-3">Mon - Sun<br/>Open 24 Hours</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Get in Touch</h4>
          <p className="text-gray-400 mt-3"><a href="tel:+18577779500">(857) 777 9500</a></p>
          <p className="text-gray-400"><a href="mailto:hello@fastwheellimo.com">hello@fastwheellimo.com</a></p>
          <p className="text-gray-400 mt-2"><a href="https://wa.me/18577779500">WhatsApp us</a></p>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 py-6 border-t border-white/10">© {new Date().getFullYear()} FastWheel Limo · Terms & Conditions · Privacy Policy</div>
    </footer>
  )
}
