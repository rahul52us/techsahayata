"use client";
import React from "react";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-[#f4fbfd] to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/privacypolicyhero.webp"
          alt="Privacy Policy"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center text-white px-6">
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md">
              <ShieldCheck size={56} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            Privacy Policy
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            At <strong>TechSahayata</strong>, your privacy is our top priority.
            We’re committed to protecting your data and keeping your trust.
          </p>
          <div className="mt-6 text-sm text-gray-200">
            <p>
              <strong>Effective Date:</strong> [Insert Date]
            </p>
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16 leading-relaxed text-lg">
          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              1. Information We Collect
            </h2>
            <p>
              We may collect the following types of information to enhance and
              personalize your experience with our services:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Personal details such as name, email, and phone number.</li>
              <li>
                Technical data including IP address, browser type, and device
                details.
              </li>
              <li>
                Usage data that helps us understand how you interact with our
                platform.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide, operate, and maintain our services.</li>
              <li>To improve user experience and optimize performance.</li>
              <li>To communicate important updates or service changes.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              3. Data Protection and Security
            </h2>
            <p>
              We implement strong security measures including encryption, secure
              servers, and restricted access controls to protect your
              information from unauthorized access or misuse.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              4. Sharing of Information
            </h2>
            <p>
              We respect your privacy and do not sell your data. Limited
              information may be shared only with:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Trusted partners under confidentiality agreements.</li>
              <li>Authorities, when legally required.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              5. Cookies
            </h2>
            <p>
              We use cookies to improve your browsing experience and analyze
              website performance. You may disable cookies through your browser
              settings if you prefer.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or request deletion of your
              personal data. For assistance, contact us at{" "}
              <span className="text-[#33aed7] font-medium">
                privacy@techsahayata.com
              </span>
              .
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              7. Policy Updates
            </h2>
            <p>
              This policy may be updated periodically to reflect changes in our
              practices or legal obligations. Any revisions will be posted here
              with an updated effective date.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
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
                rel="noopener noreferrer"
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
