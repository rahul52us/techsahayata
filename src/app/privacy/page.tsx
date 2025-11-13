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
    <main className="w-full min-h-screen bg-gradient-to-b from-white via-[#f5fcff] to-white text-gray-800 font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-[520px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963516/privacypolicyhero_iavmny.webp"
          alt="Privacy Policy"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-6"
        >
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
        </motion.div>
      </section>

      {/* Content Section */}
      <section className="py-24 relative">
        {/* background blur gradient shapes */}
        <div className="absolute top-32 left-0 w-72 h-72 bg-[#33aed7]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0c92b2]/10 rounded-full blur-3xl"></div>

        <div className="max-w-6xl mx-auto px-6 space-y-28">
          {/* 1 */}
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
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
                1. Information We Collect
              </h2>
              <p>
                We collect data to personalize and enhance your experience.
                These include:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Personal details like name, email, and phone number.</li>
                <li>Technical data such as IP address and device info.</li>
                <li>Usage insights that help us improve our platform.</li>
              </ul>
            </div>
          </motion.div>

          {/* 2 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain our services.</li>
                <li>To improve user experience and optimize performance.</li>
                <li>To communicate updates or service changes.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963515/privacy-data_kxnkqo.jpg"
                alt="Data Usage"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* 3 */}
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
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
                3. Data Protection and Security
              </h2>
              <p>
                We employ top-tier measures including encryption, firewalls, and
                access controls to ensure your data remains secure.
              </p>
            </div>
          </motion.div>

          {/* 4 */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col-reverse md:flex-row items-center gap-10"
          >
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
                4. Sharing of Information
              </h2>
              <p>
                We only share data when necessary with trusted partners or
                authorities:
              </p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Confidential partners under strict NDAs.</li>
                <li>Regulatory authorities when legally required.</li>
              </ul>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963518/privacy-sharing_xi2uls.jpg"
                alt="Data Sharing"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>

          {/* 5 */}
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
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
                5. Cookies
              </h2>
              <p>
                We use cookies to make your experience smoother and analyze
                performance. You can disable cookies anytime in your browser
                settings.
              </p>
            </div>
          </motion.div>

          {/* 6–8 (condensed clean layout) */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              6. Your Rights
            </h2>
            <p className="max-w-3xl mx-auto mb-10">
              You can access, modify, or delete your data by contacting us at{" "}
              <span className="text-[#33aed7] font-medium">
                privacy@techsahayata.com
              </span>
              .
            </p>

            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              7. Policy Updates
            </h2>
            <p className="max-w-3xl mx-auto mb-10">
              We may update this policy periodically. Updates will appear on
              this page with a new effective date.
            </p>

            <h2 className="text-3xl font-semibold text-[#33aed7] mb-4">
              8. Contact Us
            </h2>
            <div className="max-w-3xl mx-auto space-y-2">
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
          </motion.div>
        </div>
      </section>
    </main>
  );
}
