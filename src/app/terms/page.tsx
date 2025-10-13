"use client";
import React from "react";
import Image from "next/image";
import {
  FileText,
  Building2,
  CheckCircle,
  Shield,
  CreditCard,
  Lock,
  Database,
  AlertTriangle,
  RefreshCcw,
  Power,
  Gavel,
  Mail,
} from "lucide-react";

export default function TermsPage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-[#f4fbfd] to-white text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/assets/termsserhero.jpg" 
          alt="Terms of Service"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative z-10 text-center text-white px-6">
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full bg-white/20 border border-white/30 backdrop-blur-md">
              <FileText size={56} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            Terms of Service
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Please read these Terms carefully before using any of our services at{" "}
            <strong>TechSahayata</strong>.
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
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <Building2 className="text-[#33aed7]" /> 1. Company Information
            </h2>
            <p>
              <strong>TechSahayata</strong> is a technology solutions provider offering
              website development, mobile app development, AI, and RPA services
              with a focus on innovation and efficiency.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <CheckCircle className="text-[#33aed7]" /> 2. Acceptance of Terms
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>You are at least 18 years old or legally able to enter a contract.</li>
              <li>You agree to comply with these Terms and all applicable laws.</li>
              <li>
                If using services for an organization, you have authority to bind that
                organization.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <Shield className="text-[#33aed7]" /> 3. Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes. You must not:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Upload or share illegal, harmful, or unauthorized content.</li>
              <li>Attempt to hack, disrupt, or harm our systems or networks.</li>
              <li>Infringe on intellectual property or privacy rights of others.</li>
            </ul>
            <p className="mt-2">
              TechSahayata reserves the right to suspend or terminate access in case
              of misuse.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <Shield className="text-[#33aed7]" /> 4. Intellectual Property
            </h2>
            <p>
              All logos, code, designs, and materials provided by TechSahayata are
              our intellectual property. Unauthorized use, copying, or modification is
              prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <CheckCircle className="text-[#33aed7]" /> 5. Client Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate project and billing information.</li>
              <li>Obtain permissions for shared data or content.</li>
              <li>Ensure timely payments as per contract terms.</li>
            </ul>
            <p className="mt-2">
              TechSahayata is not liable for delays caused by incomplete client inputs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <CreditCard className="text-[#33aed7]" /> 6. Payments and Billing
            </h2>
            <p>
              Payments must be made according to the agreed quotation or invoice terms.
              Late payments may result in project delays or temporary service
              suspension.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <Lock className="text-[#33aed7]" /> 7. Confidentiality
            </h2>
            <p>
              Both parties must maintain confidentiality. TechSahayata secures all
              project data and uses it strictly for service delivery.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <Database className="text-[#33aed7]" /> 8. Data Privacy
            </h2>
            <p>
              Our Privacy Policy explains how we collect and use your data. You can
              read it{" "}
              <a href="/privacy" className="text-[#33aed7] hover:underline">
                here
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <AlertTriangle className="text-[#33aed7]" /> 9. Limitation of Liability
            </h2>
            <p>
              TechSahayata is not liable for indirect, incidental, or consequential
              damages. Services are provided “as is” without guarantees of
              uninterrupted or error-free performance.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <RefreshCcw className="text-[#33aed7]" /> 10. Service Modifications
            </h2>
            <p>
              We may update or discontinue parts of our services at any time. We will
              make reasonable efforts to inform clients about significant changes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <Power className="text-[#33aed7]" /> 11. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your access if these Terms
              are violated. Upon termination, all granted rights end immediately.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <Gavel className="text-[#33aed7]" /> 12. Governing Law
            </h2>
            <p>
              These Terms are governed by the laws of India, and any disputes shall be
              resolved exclusively in the courts of Delhi, India.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
              <Mail className="text-[#33aed7]" /> 13. Contact Information
            </h2>
            <p>
              <strong>Email:</strong>{" "}
              <span className="text-[#33aed7]">contact@techsahayata.com</span>
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://www.techsahayata.com"
                className="text-[#33aed7] hover:underline"
              >
                www.techsahayata.com
              </a>
            </p>
            <p>
              <strong>Address:</strong> [Insert Company Address]
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              14. Agreement
            </h2>
            <p>
              By using our services, you acknowledge that you have read,
              understood, and agreed to these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
