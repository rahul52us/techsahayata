"use client";
import React from "react";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-[#e8f8fc] to-white text-gray-800 font-sans">
      {/* Header */}
      <section className="w-full bg-white shadow-md py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/bg-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full bg-[#33aed7]/10 border border-[#33aed7]/30">
              <ShieldCheck size={56} className="text-[#33aed7]" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#33aed7] drop-shadow-sm">
            Privacy Policy
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            At <strong>TechSahayata</strong>, we are dedicated to safeguarding your
            personal information and maintaining transparency in how we use it.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <p>
              <strong>Effective Date:</strong> [Insert Date]
            </p>
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* Info Sections */}
          {[
            {
              title: "1. Information We Collect",
              content:
                "We may collect the following information to provide and improve our services:",
              list: [
                "Personal details like name, email, phone number, and company info.",
                "Technical data such as IP address, browser type, and device information.",
                "Usage data related to how you interact with our software and platforms.",
              ],
            },
            {
              title: "2. How We Use Your Information",
              list: [
                "Provide and maintain our services.",
                "Improve user experience and system performance.",
                "Communicate updates or service changes.",
                "Comply with legal obligations.",
              ],
            },
            {
              title: "3. Data Protection and Security",
              content:
                "We use encryption, secure servers, and strict access control policies to protect your information from unauthorized access or misuse.",
            },
            {
              title: "4. Sharing of Information",
              content:
                "We never sell or rent your data. Limited information may be shared with:",
              list: [
                "Trusted partners under confidentiality agreements.",
                "Authorities, when required by law.",
              ],
            },
            {
              title: "5. Cookies",
              content:
                "We use cookies to enhance your browsing experience. You can disable them anytime in your browser settings.",
            },
            {
              title: "6. Your Rights",
              content: (
                <>
                  You can request access, correction, or deletion of your data
                  anytime. Contact us at{" "}
                  <span className="text-[#33aed7] font-medium">
                    privacy@techsahayata.com
                  </span>
                  .
                </>
              ),
            },
            {
              title: "7. Policy Updates",
              content:
                "We may update this policy periodically. Updates will be reflected on this page with the revised date.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-md p-8 transition-transform duration-500 hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-semibold text-[#33aed7] mb-4">
                {section.title}
              </h2>
              {section.content && (
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {section.content}
                </p>
              )}
              {section.list && (
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact Section */}
          <div className="border-l-4 border-[#33aed7] bg-white p-8 rounded-2xl shadow-md transition-all hover:shadow-lg">
            <h2 className="text-2xl font-semibold text-[#33aed7] mb-3">
              8. Contact Us
            </h2>
            <p>
              <strong>Email:</strong>{" "}
              <span className="text-[#33aed7]">privacy@techsahayata.com</span>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.techsahayata.com"
                target="_blank"
                className="text-[#33aed7] hover:underline"
              >
                www.techsahayata.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> [Insert Company Address]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
