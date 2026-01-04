"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe2, Cookie, UserCheck, RefreshCcw, Mail } from "lucide-react";

export default function PrivacyPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-[#f3fafc] to-white text-gray-800 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963516/privacypolicyhero_iavmny.webp"
          alt="Privacy Policy"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Adjusted overlay to use brand-aligned dark teal */}
        <div className="absolute inset-0 bg-[#002c3a]/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
          <div className="flex justify-center mb-6">
            {/* Icon container with brand color accents */}
            <div className="p-5 rounded-full bg-[#097899]/30 border border-[#097899]/50 backdrop-blur-md">
              <ShieldCheck size={56} className="text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-4">
            Privacy Policy
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed text-slate-100">
            At <strong className="text-[#67e2ff]">TechSahayata</strong>, your privacy is our top priority.
            We’re committed to protecting your data and keeping your trust.
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

      {/* Content Section */}
      <section className="py-24 relative">
        {/* Background decorative shapes using #097899 */}
        <div className="absolute top-32 left-0 w-72 h-72 bg-[#097899]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#097899]/5 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 space-y-28">
          {/* 1. Information Collection */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963518/privacy-security_parrto.jpg"
                alt="Data Privacy"
                width={600}
                height={400}
                className="rounded-3xl shadow-[0_20px_50px_rgba(9,120,153,0.1)] border border-slate-100"
              />
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-[#097899] font-bold uppercase text-xs tracking-widest mb-4">
                <UserCheck size={18} /> Section One
              </div>
              <h2 className="text-3xl font-bold text-[#002c3a] mb-6">
                1. Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We collect data to personalize and enhance your experience.
                These include:
              </p>
              <ul className="space-y-3">
                {[
                  "Personal details like name, email, and phone number.",
                  "Technical data such as IP address and device info.",
                  "Usage insights that help us improve our platform."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#097899] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 2. Usage */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-[#097899] font-bold uppercase text-xs tracking-widest mb-4">
                <RefreshCcw size={18} /> Section Two
              </div>
              <h2 className="text-3xl font-bold text-[#002c3a] mb-6">
                2. How We Use Your Information
              </h2>
              <ul className="space-y-3">
                {[
                  "To provide, operate, and maintain our services.",
                  "To improve user experience and optimize performance.",
                  "To communicate updates or service changes.",
                  "To comply with legal obligations."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#097899] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963515/privacy-data_kxnkqo.jpg"
                alt="Data Usage"
                width={600}
                height={400}
                className="rounded-3xl shadow-[0_20px_50px_rgba(9,120,153,0.1)] border border-slate-100"
              />
            </div>
          </motion.div>

          {/* 3. Security */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963518/privacy-usage_kddwvy.jpg"
                alt="Data Security"
                width={600}
                height={400}
                className="rounded-3xl shadow-[0_20px_50px_rgba(9,120,153,0.1)] border border-slate-100"
              />
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-[#097899] font-bold uppercase text-xs tracking-widest mb-4">
                <Lock size={18} /> Section Three
              </div>
              <h2 className="text-3xl font-bold text-[#002c3a] mb-6">
                3. Data Protection and Security
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We employ top-tier measures including encryption, firewalls, and
                access controls to ensure your data remains secure. Our systems are
                regularly audited to maintain the highest standards of safety.
              </p>
            </div>
          </motion.div>

          {/* 4. Sharing */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-[#097899] font-bold uppercase text-xs tracking-widest mb-4">
                <Globe2 size={18} /> Section Four
              </div>
              <h2 className="text-3xl font-bold text-[#002c3a] mb-6">
                4. Sharing of Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We only share data when necessary with trusted partners or
                authorities:
              </p>
              <ul className="space-y-3">
                {[
                  "Confidential partners under strict NDAs.",
                  "Regulatory authorities when legally required."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-600">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#097899] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963518/privacy-sharing_xi2uls.jpg"
                alt="Data Sharing"
                width={600}
                height={400}
                className="rounded-3xl shadow-[0_20px_50px_rgba(9,120,153,0.1)] border border-slate-100"
              />
            </div>
          </motion.div>

          {/* 5. Cookies */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963514/privacy-cookies_yr1zam.webp"
                alt="Cookies Policy"
                width={600}
                height={400}
                className="rounded-3xl shadow-[0_20px_50px_rgba(9,120,153,0.1)] border border-slate-100"
              />
            </div>
            <div className="md:w-1/2">
              <div className="inline-flex items-center gap-2 text-[#097899] font-bold uppercase text-xs tracking-widest mb-4">
                <Cookie size={18} /> Section Five
              </div>
              <h2 className="text-3xl font-bold text-[#002c3a] mb-6">
                5. Cookies
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We use cookies to make your experience smoother and analyze
                performance. You can disable cookies anytime in your browser
                settings, though some features may rely on them to function.
              </p>
            </div>
          </motion.div>

          {/* Final Sections */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center py-16 bg-white rounded-[3rem] border border-[#097899]/10 shadow-sm"
          >
            <div className="max-w-3xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-[#002c3a] mb-4">
                6. Your Rights
              </h2>
              <p className="text-slate-600 mb-12">
                You can access, modify, or delete your data by contacting us at{" "}
                <a href="mailto:privacy@techsahayata.com" className="text-[#097899] font-bold hover:underline">
                  privacy@techsahayata.com
                </a>
              </p>

              <h2 className="text-3xl font-bold text-[#002c3a] mb-4">
                7. Policy Updates
              </h2>
              <p className="text-slate-600 mb-12">
                We may update this policy periodically. Updates will appear on
                this page with a new effective date to keep you informed.
              </p>

              <div className="w-16 h-1 bg-[#097899] mx-auto mb-10 rounded-full" />

              <h2 className="text-3xl font-bold text-[#002c3a] mb-6 flex items-center justify-center gap-3">
                <Mail className="text-[#097899]" /> 8. Contact Us
              </h2>
              <div className="space-y-4 text-slate-600 font-medium">
                <p>
                  <strong>Email:</strong>{" "}
                  <span className="text-[#097899]">privacy@techsahayata.com</span>
                </p>
                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.techsahayata.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#097899] hover:underline"
                  >
                    www.techsahayata.com
                  </a>
                </p>
                <p>
                  <strong>Address:</strong> [Insert Company Address Here]
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