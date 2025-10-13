"use client";
import React from "react";
import Image from "next/image";

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
    <main className="bg-[#f3fafc] font-sans">
      {/* 🌟 Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/assets/rpaaihero.jpg" 
          alt="RPA Automation Hero"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002c3a]/90 via-[#00485a]/70 to-[#046c8a]/60"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight animate-fade-in-up">
            Robotic Process Automation (RPA)
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 mb-6 animate-fade-in-up delay-100">
            Revolutionize your operations with intelligent software bots that
            automate repetitive business tasks — boosting efficiency and
            reducing costs.
          </p>
          <a
            href="#features"
            className="bg-[#33aed7] hover:bg-[#2a96bb] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            Explore Features
          </a>
        </div>
      </section>

      {/* 💻 RPA Features Section */}
      <section id="features" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#33aed7] mb-12">
            Intelligent Automation Features
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto text-base md:text-lg mb-14 leading-relaxed">
            From finance to HR and customer service — our RPA solutions help
            automate rule-based tasks, enhance accuracy, and free your teams for
            strategic work.
          </p>

          {/* Grid Section */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {rpaFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#c2edf9] group"
              >
                {/* Feature Video */}
                <div className="relative h-56 w-full overflow-hidden">
                  <video
                    src={feature.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
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
            ))}
          </div>

          {/* CTA Button */}
          <div className="mt-16">
            <button className="px-10 py-4 rounded-full bg-[#33aed7] hover:bg-[#2a97ba] text-white font-semibold shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
              Book Free Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
