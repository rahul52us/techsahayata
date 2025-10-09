"use client";
import React from "react";

interface RPAFeature {
  title: string;
  description: string;
  video: string;
  link: string;
}

const rpaFeatures: RPAFeature[] = [
  {
    title: "Automated Data Entry",
    description:
      "Eliminate manual data entry tasks by automating repetitive workflows like form filling, data validation, and data migration across multiple systems.",
    video: "/assets/rpa-data-entry.mp4",
    link: "#",
  },
  {
    title: "Invoice Processing",
    description:
      "Automatically extract and validate information from invoices, receipts, and purchase orders, reducing human errors and improving processing speed.",
    video: "/assets/rpa-invoice.mp4",
    link: "#",
  },
  {
    title: "Report Generation",
    description:
      "Generate and distribute business reports automatically from various sources like Excel, databases, and CRMs—saving hours of manual effort.",
    video: "/assets/rpa-report.mp4",
    link: "#",
  },
  {
    title: "Email Automation",
    description:
      "Automate email reading, sorting, and responding workflows using AI-based pattern detection to improve customer support efficiency.",
    video: "/assets/rpa-email.mp4",
    link: "#",
  },
  {
    title: "HR Onboarding Automation",
    description:
      "Simplify onboarding by automating repetitive HR tasks such as document verification, ID creation, and employee data synchronization.",
    video: "/assets/rpa-hr.mp4",
    link: "#",
  },
  {
    title: "Customer Support Bots",
    description:
      "Integrate RPA with AI chatbots to handle FAQs, ticket management, and response tracking, offering 24/7 intelligent customer engagement.",
    video: "/assets/rpa-bot.mp4",
    link: "#",
  },
];

export default function RpaAutomation() {
  return (
    <section className="relative w-full py-24 bg-gradient-to-br from-[#e6f9ff] via-white to-[#f0fcff] overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#33aed7]/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#33aed7]/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        {/* Title Section */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#33aed7] mb-6">
          Robotic Process Automation (RPA)
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg mb-14 leading-relaxed">
          RPA uses intelligent software bots to automate repetitive and
          rule-based business tasks. By integrating RPA into your workflow, you
          can reduce operational costs, eliminate manual errors, and achieve
          greater efficiency across departments.
        </p>

        {/* RPA Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {rpaFeatures.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <button className="px-10 py-4 rounded-full bg-[#33aed7] hover:bg-[#2a97ba] text-white font-semibold shadow-md hover:shadow-lg transition">
            Book Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}

/* Feature Card Component */
function FeatureCard({ feature }: { feature: RPAFeature }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#c2edf9] group">
      {/* Video Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <video
          src={feature.video}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-30 transition-opacity"></div>
      </div>

      {/* Text Section */}
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-[#046c8a] mb-2">
          {feature.title}
        </h3>
        <div className="w-16 h-[2px] bg-[#33aed7] mb-4"></div>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {feature.description}
        </p>
        <a
          href={feature.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#046c8a] font-medium inline-flex items-center gap-2 hover:text-[#33aed7] transition-colors"
        >
          Explore More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
