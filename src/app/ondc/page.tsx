export default function ONDCPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-teal-600 mb-6">
            ONDC Integration
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Open Network for Digital Commerce - Revolutionizing e-commerce through our comprehensive ONDC solutions.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Seller Integration</h3>
            <p className="text-gray-600">Seamlessly connect your business to the ONDC network and reach millions of customers.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Buyer Solutions</h3>
            <p className="text-gray-600">Access a vast marketplace of products and services through our ONDC buyer platform.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Logistics Support</h3>
            <p className="text-gray-600">Complete logistics solutions integrated with ONDC for seamless order fulfillment.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

