import TagNav from "./TagNav";

export default function VaOmPage() {
  return (
    <main className="w-full min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url("/assets/vaom-hero-section.webp")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70"></div>
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 w-full max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
            VaOm <span className="text-teal-400">Vendor &amp; Order Management</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-8 font-medium drop-shadow">
            Welcome to the cutting-edge realm of VaOm, where Vendor and Order Management transcend traditional boundaries, ushering in a groundbreaking era of efficiency, transparency, and excellence.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 active:bg-teal-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition duration-300 transform hover:scale-105">
            Book Demo
          </button>
        </div>
      </section>

      <section className="container mx-auto px-6 lg:px-12 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-teal-600 mb-12 text-center drop-shadow">
          Why <span className="text-black">VaOm?</span>
        </h2>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
          <div className="flex-1 text-lg leading-relaxed text-gray-700 bg-gray-50 rounded-2xl shadow-lg p-8">
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-500">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Transformative Solution for Streamlined Procurement.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-500">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Unparalleled Efficiency and Transparency.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-500">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Meticulous Record-Keeping for Organizations.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-teal-500">
                  <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M5 13l4 4L19 7" /></svg>
                </span>
                <span>Cutting-edge Automation for Error-Free Operations.</span>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="/assets/why-vaom.gif"
              alt="Why VaOm?"
              className="w-full max-w-md h-auto object-cover rounded-2xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Tag Navigation */}
      <div className="container mx-auto px-6 lg:px-12">
        <TagNav />
      </div>

      {/* Product Feature Sections (matching TagNav) */}

      {/* Vendor Onboarding */}
      <section id="vendor-onboarding" className="container mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Efficient Vendor Onboarding</h3>
            <p className="max-w-2xl">
              Security is paramount at VaOm. Our onboarding enforces submission of essential documents (MSME, MCA, GST, cancelled cheque) and automated verifications to ensure only verified vendors are added to your ecosystem. This reduces procurement risk and speeds up supplier activation.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <div className="bg-teal-500 text-white rounded-3xl p-10 w-[320px] h-[220px] flex items-center justify-center shadow-2xl">
              <img src="/assets/onboarding.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Vendor Due Diligence */}
      <section id="vendor-due-diligence" className="container mx-auto px-6 lg:px-12 py-20 bg-gray-50 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full flex items-center justify-center order-2 lg:order-1">
            <div className="bg-teal-500 text-white rounded-3xl p-10 w-[320px] h-[220px] flex items-center justify-center shadow-2xl">
              <img src="/assets/due-diligence.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
              <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <svg x="10" y="22" width="44" height="28" rx="4" />
                <path d="M18 30h12M18 36h10" />
                <path d="M44 14v8M44 38v4" />
              </g>
            </div>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2 text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Vendor Due Diligence</h3>
            <p>
              VaOm performs comprehensive vendor due diligence — financial checks, legal compliance, reputation and performance analytics. This systematic evaluation helps mitigate fraud, ensure compliance, and preserve organizational trust.
            </p>
          </div>
        </div>
      </section>

      {/* Order Management */}
      <section id="order-management" className="container mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Order Management</h3>
            <p className="max-w-2xl">
              Streamline order creation, approvals, dispatch and tracking with a central dashboard. VaOm reduces manual coordination, prevents duplicate orders and provides full visibility across procurement cycles.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <div className="bg-teal-500 text-white rounded-3xl p-10 w-[320px] h-[220px] flex items-center justify-center shadow-2xl">
              <img src="/assets/due-diligence.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
              <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 18h48v28H8z" />
                <path d="M16 26h32M16 34h20" />
                <path d="M20 46v4M44 46v4" />
              </g>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Invoice Processing */}
      <section id="streamlined-invoice-processing" className="container mx-auto px-6 lg:px-12 py-20 bg-gray-50 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full flex items-center justify-center order-2 lg:order-1">
            <div className="bg-teal-500 text-white rounded-3xl p-10 w-[320px] h-[220px] flex items-center justify-center shadow-2xl">
              <img src="/assets/invoice.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
              <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <svg x="12" y="16" width="40" height="32" rx="3" />
                <path d="M20 26h24M20 34h12" />
              </g>
            </div>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2 text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Streamlined Invoice Processing</h3>
            <p>
              From capture to validation and approvals, VaOm automates invoice processing to reduce errors and processing time. OCR, validation rules and configurable workflows speed up AP cycles and improve cashflow predictability.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Way Matching */}
      <section id="five-way-matching" className="container mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">5-Way Matching</h3>
            <p className="max-w-2xl">
              Ensure invoice accuracy by matching PO, goods receipt, invoice, contract terms and payment details. VaOm flags mismatches, routes exceptions and ensures only validated invoices move to payment.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <div className="bg-teal-500 text-white rounded-3xl p-10 w-[320px] h-[220px] flex items-center justify-center shadow-2xl">
              <img src="/assets/matching.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
              <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="20" cy="24" r="6" />
                <circle cx="44" cy="24" r="6" />
                <svg x="18" y="36" width="28" height="12" rx="3" />
              </g>
            </div>
          </div>
        </div>
      </section>
      {/* Reconciliation */}
      <section id="reconciliation" className="container mx-auto px-6 lg:px-12 py-20 bg-gray-50 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full flex items-center justify-center order-2 lg:order-1">
            <div className="bg-teal-500 text-white rounded-3xl p-10 w-[320px] h-[220px] flex items-center justify-center shadow-2xl">
              <img src="/assets/payment-reconciliation.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
              <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 20h32v24H16z" />
                <path d="M24 28h16M24 36h10" />
              </g>
            </div>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2 text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Reconciliation</h3>
            <p>
              VaOm automates reconciliation across ledgers and statements, identifying mismatches and proposing adjustments. Reconciliation cycles are faster and more accurate, easing month-end closes.
            </p>
          </div>
        </div>
      </section>

      {/* Help Desk */}
      <section id="help-desk" className="container mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Help Desk</h3>
            <p className="max-w-2xl">
              A built-in help desk ensures vendors and procurement teams have a single place to raise issues, view SLAs and track resolutions. Use automated routing and knowledge-base suggestions to keep ticket volumes manageable.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex items-center justify-center">
            <div className="bg-teal-500 text-white rounded-3xl p-10 w-[320px] h-[220px] flex items-center justify-center shadow-2xl">
              <img src="/assets/help-desk.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
              <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M32 12v6M18 24h28M12 44h12v6H12zM40 44h12v6H40z" />
              </g>
            </div>
          </div>
        </div>
      </section>
      {/* Catalog Management */}
      <section id="catalog-management" className="container mx-auto px-6 lg:px-12 py-20 bg-gray-50 rounded-2xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 w-full flex items-center justify-center order-2 lg:order-1">
            <div className="bg-teal-500 text-white rounded-3xl p-10 w-[320px] h-[220px] flex items-center justify-center shadow-2xl">
              <img src="/assets/catalog-management.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
              <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <svg x="10" y="16" width="44" height="8" rx="2" />
                <svg x="10" y="30" width="44" height="8" rx="2" />
                <svg x="10" y="44" width="44" height="8" rx="2" />
              </g>
            </div>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2 text-lg leading-relaxed text-gray-700">
            <h3 className="text-2xl font-semibold text-teal-600 mb-4">Catalog Management</h3>
            <p>
              Maintain a centralized product and service catalog with versioning, approvals and supplier mappings. Catalog Management keeps procurement consistent and ensures downstream systems receive accurate item data.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
