"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FileText,
  Building2,
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
import TagNav from "../terms/tagnav";

export default function TermsPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-[#f3fafc] to-white text-gray-800 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963642/termsserhero_tm17zb.jpg"
          alt="Terms of Service"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Deep brand-aligned overlay */}
        <div className="absolute inset-0 bg-[#002c3a]/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <div className="flex justify-center mb-6">
            <div className="p-5 rounded-full bg-[#097899]/30 border border-[#097899]/50 backdrop-blur-md">
              <FileText size={56} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            Terms of Service
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed text-slate-100">
            Please read these Terms carefully before using any of our services at{" "}
            <strong className="text-[#67e2ff]">TechSahayata</strong>.
          </p>

          <div className="mt-8 text-sm text-slate-300 tracking-wide uppercase">
            <p className="mb-1">
              <strong>Effective Date:</strong> January 1, 2024
            </p>
            <p>
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tag Navigation */}
      <div className="container mx-auto px-6 lg:px-12">
        <TagNav
          items={[
            { label: "Company Info", target: "company-info" },
            { label: "Use of Services", target: "use-services" },
            { label: "Payments & Billing", target: "payments" },
            { label: "Confidentiality", target: "confidentiality" },
            { label: "Data Privacy", target: "data-privacy" },
            { label: "Liability", target: "liability" },
            { label: "Service Modifications", target: "service-modifications" },
            { label: "Termination", target: "termination" },
            { label: "Governing Law", target: "governing-law" },
            { label: "Contact", target: "contact" },
            { label: "Agreement", target: "agreement" },
          ]}
        />
      </div>

      {/* Content Section */}
      <section className="py-24 relative">
        {/* Background Decorative Blurs using #097899 */}
        <div className="absolute top-20 left-0 w-80 h-80 bg-[#097899]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#097899]/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 space-y-28 leading-relaxed text-lg">
          {/* Section 1 */}
          <motion.div
            id="company-info"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963469/logo_ud1if4.png"
                alt="Company Overview"
                width={600}
                height={400}
                className="rounded-3xl shadow-[0_20px_50px_rgba(9,120,153,0.1)] border border-slate-100"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#002c3a] mb-6 flex items-center gap-3">
                <Building2 className="text-[#097899]" /> 1. Company Information
              </h2>
              <p className="text-slate-600">
                <strong className="text-[#097899]">TechSahayata</strong> is a technology solutions provider offering
                website development, mobile app development, AI, and RPA services with
                a focus on innovation and efficiency.
              </p>
            </div>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            id="use-services"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#002c3a] mb-6 flex items-center gap-3">
                <Shield className="text-[#097899]" /> 3. Use of Services
              </h2>
              <p className="text-slate-600 mb-4">
                You agree to use our services only for lawful purposes. You must not:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Upload or share illegal, harmful, or unauthorized content.",
                  "Attempt to hack, disrupt, or harm our systems or networks.",
                  "Infringe on intellectual property or privacy rights of others.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#097899] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-slate-600 italic border-l-4 border-[#097899] pl-4">
                TechSahayata reserves the right to suspend or terminate access in case of misuse.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963656/terms-services_atzz5c.jpg"
                alt="Use of Services"
                width={600}
                height={400}
                className="rounded-3xl shadow-[0_20px_50px_rgba(9,120,153,0.1)] border border-slate-100"
              />
            </div>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            id="payments"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963628/terms-payment_erb9eb.webp"
                alt="Payments and Billing"
                width={600}
                height={400}
                className="rounded-3xl shadow-[0_20px_50px_rgba(9,120,153,0.1)] border border-slate-100"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#002c3a] mb-6 flex items-center gap-3">
                <CreditCard className="text-[#097899]" /> 6. Payments and Billing
              </h2>
              <p className="text-slate-600">
                Payments must be made according to the agreed quotation or invoice terms.
                Late payments may result in project delays or temporary service suspension. All financial transactions are processed through secure, encrypted channels.
              </p>
            </div>
          </motion.div>

          {/* Remaining Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div id="confidentiality" className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#002c3a] mb-4 flex items-center gap-3">
                <Lock className="text-[#097899]" /> 7. Confidentiality
              </h2>
              <p className="text-slate-600 text-base">
                Both parties must maintain confidentiality. TechSahayata secures all
                project data and uses it strictly for service delivery purposes under strict NDAs.
              </p>
            </div>

            <div id="data-privacy" className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#002c3a] mb-4 flex items-center gap-3">
                <Database className="text-[#097899]" /> 8. Data Privacy
              </h2>
              <p className="text-slate-600 text-base">
                Our Privacy Policy explains how we collect and use your data. You can read the full documentation{" "}
                <a href="/privacy" className="text-[#097899] font-bold hover:underline">
                  here
                </a>.
              </p>
            </div>

            <div id="liability" className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#002c3a] mb-4 flex items-center gap-3">
                <AlertTriangle className="text-[#097899]" /> 9. Liability
              </h2>
              <p className="text-slate-600 text-base">
                TechSahayata is not liable for indirect, incidental, or consequential
                damages. Services are provided “as is” without guarantees of error-free performance.
              </p>
            </div>

            <div id="service-modifications" className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#002c3a] mb-4 flex items-center gap-3">
                <RefreshCcw className="text-[#097899]" /> 10. Modifications
              </h2>
              <p className="text-slate-600 text-base">
                We may update or discontinue parts of our services at any time. We will
                make reasonable efforts to inform clients about significant changes.
              </p>
            </div>

            <div id="termination" className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#002c3a] mb-4 flex items-center gap-3">
                <Power className="text-[#097899]" /> 11. Termination
              </h2>
              <p className="text-slate-600 text-base">
                We reserve the right to suspend your access if these Terms
                are violated. Upon termination, all granted rights end immediately.
              </p>
            </div>

            <div id="governing-law" className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-bold text-[#002c3a] mb-4 flex items-center gap-3">
                <Gavel className="text-[#097899]" /> 12. Governing Law
              </h2>
              <p className="text-slate-600 text-base">
                These Terms are governed by the laws of India. Any disputes shall be
                resolved exclusively in the courts of Delhi, India.
              </p>
            </div>
          </div>

          {/* Contact & Agreement Section */}
          <motion.div
            id="contact"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center py-16 bg-[#002c3a] rounded-[3rem] text-white shadow-xl"
          >
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                <Mail className="text-[#097899]" /> 13. Contact Information
              </h2>
              <div className="space-y-4 font-light text-slate-300 mb-12">
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="text-[#67e2ff]">contact@techsahayata.com</span>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a href="https://www.techsahayata.com" className="hover:text-[#67e2ff] transition-colors">
                    www.techsahayata.com
                  </a>
                </p>
                <p><strong>Address:</strong> [Insert Company Address]</p>
              </div>

              <div id="agreement" className="pt-8 border-t border-white/10">
                <h2 className="text-3xl font-bold mb-4">14. Agreement</h2>
                <p className="text-slate-300">
                  By using our services, you acknowledge that you have read, understood, and
                  agreed to these Terms of Service in their entirety.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="h-20" />
    </main>
  );
}