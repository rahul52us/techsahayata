"use client";
import React from "react";
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
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-[#e8f8fc] to-white text-gray-800 font-sans">
      {/* Header Section */}
      <section className="w-full bg-white shadow-md py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/bg-pattern.svg')] bg-center opacity-5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full bg-[#33aed7]/10 border border-[#33aed7]/30">
              <FileText size={56} className="text-[#33aed7]" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#33aed7] drop-shadow-sm">
            Terms of Service
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Welcome to <strong>TechSahayata</strong>! Please read these Terms of
            Service carefully before using our websites, software, and AI tools.
          </p>
          <div className="mt-6 text-sm text-gray-500">
            <p><strong>Effective Date:</strong> [Insert Date]</p>
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          {/* Terms Sections */}
          {[
            {
              title: "1. Company Information",
              icon: <Building2 className="text-[#33aed7]" />,
              content:
                "TechSahayata is a technology solutions provider offering website development, mobile app development, software engineering, artificial intelligence (AI), and robotic process automation (RPA) services.",
            },
            {
              title: "2. Acceptance of Terms",
              icon: <CheckCircle className="text-[#33aed7]" />,
              content: (
                <>
                  By using our Services, you confirm that you:
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                    <li>Are at least 18 years old or legally capable of entering a contract.</li>
                    <li>Agree to comply with these Terms and applicable laws.</li>
                    <li>Have authority to bind your organization, if using Services on its behalf.</li>
                  </ul>
                </>
              ),
            },
            {
              title: "3. Use of Services",
              icon: <Shield className="text-[#33aed7]" />,
              content: (
                <>
                  You agree to use our Services only for lawful purposes. You must not:
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                    <li>Upload or share illegal, harmful, or unauthorized content.</li>
                    <li>Attempt to hack, damage, or interfere with our servers or networks.</li>
                    <li>Violate intellectual property or privacy rights of others.</li>
                  </ul>
                  <p className="mt-2 text-gray-700">
                    We reserve the right to suspend or terminate access in case of misuse.
                  </p>
                </>
              ),
            },
            {
              title: "4. Intellectual Property",
              icon: <Shield className="text-[#33aed7]" />,
              content:
                "All content, code, logos, and materials provided by TechSahayata are the company’s intellectual property. You may not copy, modify, or redistribute without written permission.",
            },
            {
              title: "5. Client Responsibilities",
              icon: <CheckCircle className="text-[#33aed7]" />,
              content: (
                <>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide accurate project and billing information.</li>
                    <li>Obtain necessary permissions for shared data or materials.</li>
                    <li>Make timely payments as per contract terms.</li>
                  </ul>
                  <p className="mt-2 text-gray-700">
                    TechSahayata is not liable for delays caused by incomplete client inputs.
                  </p>
                </>
              ),
            },
            {
              title: "6. Payments and Billing",
              icon: <CreditCard className="text-[#33aed7]" />,
              content:
                "Payments must follow the agreed quotation or invoice terms. Late payments may delay service or result in temporary suspension.",
            },
            {
              title: "7. Confidentiality",
              icon: <Lock className="text-[#33aed7]" />,
              content:
                "Both parties must keep project information confidential. TechSahayata secures client data and uses it solely for service delivery.",
            },
            {
              title: "8. Data Privacy",
              icon: <Database className="text-[#33aed7]" />,
              content: (
                <>
                  Our Privacy Policy explains how we handle your data. Please review it{" "}
                  <a href="/privacy" className="text-[#33aed7] hover:underline">here</a>.
                </>
              ),
            },
            {
              title: "9. Limitation of Liability",
              icon: <AlertTriangle className="text-[#33aed7]" />,
              content:
                "TechSahayata is not liable for indirect or consequential damages, including loss of profits or data. Services are provided “as is” without warranty of uninterrupted or error-free operation.",
            },
            {
              title: "10. Service Modifications",
              icon: <RefreshCcw className="text-[#33aed7]" />,
              content:
                "We may modify, suspend, or discontinue any part of our Services or pricing at any time, with reasonable efforts to notify clients of major changes.",
            },
            {
              title: "11. Termination",
              icon: <Power className="text-[#33aed7]" />,
              content:
                "TechSahayata may suspend or terminate your access without notice if these Terms are violated. Upon termination, all granted rights cease immediately.",
            },
            {
              title: "12. Governing Law",
              icon: <Gavel className="text-[#33aed7]" />,
              content:
                "These Terms are governed by the laws of India. Any disputes will fall under the exclusive jurisdiction of the courts in Delhi, India.",
            },
            {
              title: "13. Contact Information",
              icon: <Mail className="text-[#33aed7]" />,
              content: (
                <div className="border-l-4 border-[#33aed7] bg-white p-6 rounded-lg shadow-sm">
                  <p><strong>Email:</strong> contact@techsahayata.com</p>
                  <p>
                    <strong>Website:</strong>{" "}
                    <a href="https://www.techsahayata.com" className="text-[#33aed7] hover:underline">
                      www.techsahayata.com
                    </a>
                  </p>
                  <p><strong>Address:</strong> [Insert Company Address]</p>
                </div>
              ),
            },
            {
              title: "14. Agreement",
              icon: null,
              content:
                "By using our Services, you acknowledge that you have read, understood, and agreed to these Terms of Service.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-md p-8 transition-transform duration-500 hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-semibold text-[#33aed7] mb-4 flex items-center gap-2">
                {section.icon} {section.title}
              </h2>
              <div className="text-gray-700 leading-relaxed">{section.content}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
