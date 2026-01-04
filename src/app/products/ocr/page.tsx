"use client";
import React from "react";
import Image from "next/image";

interface OCRFeature {
  title: string;
  description: string;
  video: string;
  link: string;
}

const ocrFeatures: OCRFeature[] = [
  {
    title: "Text Recognition",
    description:
      "Extract printed or typed text from scanned documents, PDFs, and images with precision. Convert them into editable and searchable text formats instantly.",
    video: "/assets/text-recognition.mp4",
    link: "#",
  },
  {
    title: "Handwriting Recognition",
    description:
      "Detect and digitize handwritten text from notes, forms, and scanned pages. Perfect for archiving old manuscripts or handwritten records.",
    video: "/assets/handwriting-recognition.mp4",
    link: "#",
  },
  {
    title: "PDF OCR",
    description:
      "Extract structured text from scanned PDFs while retaining document formatting and layout. Ideal for invoices, reports, and forms.",
    video: "/assets/pdf-ocr.mp4",
    link: "#",
  },
  {
    title: "Image OCR",
    description:
      "Identify and capture text from photos, screenshots, and images — even those with complex backgrounds, angles, or lighting.",
    video: "/assets/image-ocr.mp4",
    link: "#",
  },
  {
    title: "Multilingual OCR",
    description:
      "Recognize text in multiple languages and scripts, including English, Hindi, French, Japanese, and more — with automatic language detection.",
    video: "/assets/multilingual-ocr.mp4",
    link: "#",
  },
  {
    title: "AI-powered Validation",
    description:
      "Use AI-based validation to verify extracted data automatically, reducing errors and improving accuracy in document workflows.",
    video: "/assets/ai-validation.mp4",
    link: "#",
  },
];

export default function OCRPage() {
  return (
    <main className="bg-[#f3fafc] font-sans">
      {/* 🌟 Minimal Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963738/vaom-hero-section_hw0k3y.webp" 
          alt="OCR Hero"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002c3a]/90 via-[#00485a]/70 to-[#046c8a]/60"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight animate-fade-in-up">
            Intelligent OCR for Modern Workflows
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 mb-6 animate-fade-in-up delay-100">
            Unlock the power of text recognition across documents, images, and
            handwritten notes — fast, accurate, and multilingual.
          </p>
          <a
            href="#features"
            className="bg-[#097899] hover:bg-[#2a96bb] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            Explore OCR Projects
          </a>
        </div>
      </section>

      {/* ✨ Features Section */}
      <section id="features" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#097899] mb-4">
            Optical Character Recognition (OCR)
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
            Experience the power of OCR — a cutting-edge solution designed to
            extract, process, and validate text from images, PDFs, and handwritten
            documents. Transform physical data into digital insights with unmatched
            accuracy.
          </p>

          {/* Grid Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {ocrFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16">
            <button className="bg-[#097899] hover:bg-[#2a96bb] text-white px-10 py-4 rounded-full font-semibold shadow-md hover:shadow-xl transition">
              Book a Free Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* 🎬 Feature Card Component */
function FeatureCard({ feature }: { feature: OCRFeature }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#c2edf9] group">
      {/* Video Preview */}
      <div className="relative h-56 w-full overflow-hidden">
        <video
          src={feature.video}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-40 transition-opacity"></div>
      </div>

      {/* Text Content */}
      <div className="p-6 text-left">
        <h3 className="text-xl font-semibold text-[#046c8a] mb-2">
          {feature.title}
        </h3>
        <div className="w-16 h-[2px] bg-[#097899] mb-4"></div>
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {feature.description}
        </p>
        <a
          href={feature.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#046c8a] font-medium inline-flex items-center gap-2 hover:text-[#097899] transition-colors"
        >
          Explore more
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
