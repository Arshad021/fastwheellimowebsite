export default function PhoneBar(){
  return (
    <div className="bg-yellow-500 text-black py-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-wrap items-center justify-between gap-3">
        <div className="font-semibold">Your Global Chauffeur Service</div>
        <div className="flex items-center gap-6">
          <a href="tel:+18577779500" className="underline">(857) 777 9500</a>
          <a href="mailto:hello@fastwheellimo.com" className="underline">hello@fastwheellimo.com</a>
          <a href="https://wa.me/18577779500" className="underline">WhatsApp us</a>
        </div>
      </div>
    </div>
  )
}
