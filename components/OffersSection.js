export default function Offers() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Exclusive Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg">
          <img src="/images/offer1.jpg" alt="Offer 1" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-semibold mt-4">Spa Package</h3>
          <p className="mt-2">Get 20% off on our premium spa package.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg">
          <img src="/images/offer2.jpg" alt="Offer 2" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-semibold mt-4">Hair Treatment</h3>
          <p className="mt-2">Free consultation with any hair treatment.</p>
        </div>
      </div>
    </section>
  );
}
