"use client";
import Image from "next/image";

export default function PRYPage() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[560px] lg:h-[620px]">
        <Image
          src="/assets/bg-home-new.webp"
          alt="PRY background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-10 md:p-16 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-4">
              PRY
            </h1>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              Welcome to PRY, a robust data extraction tool designed to simplify
              the extraction and validation of information from various
              documents such as invoices, PDFs, and more. This comprehensive
              documentation will guide you through the features and
              functionalities of PRY, enabling you to efficiently extract,
              validate, and manage data according to your specific needs.
            </p>

            <div className="mt-8">
              <button className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium transition">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="container mx-auto px-6 lg:px-12 py-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Getting Started
        </h2>
        <p className="text-center text-gray-600 mb-8">
          The video demonstrates signature extraction and verification by PRY:
        </p>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg border">
            <video
              src="/assets/pry-getting-started.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Extraction Methods */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-2xl font-bold text-teal-600 text-center mb-12">
          Extraction Methods
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Barcode */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <Image
              src="/assets/barcode.gif"
              alt="Barcode Icon"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              Barcode
            </h3>
            <p className="text-gray-600 text-sm">
              With advanced barcode extraction capabilities, PRY empowers users
              to effortlessly capture and interpret barcode data.
            </p>
          </div>

          {/* Template Less */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <Image
              src="/assets/invoice-processing.gif"
              alt="Template Icon"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              Template Less Extraction
            </h3>
            <p className="text-gray-600 text-sm">
              Template extraction uses predefined templates to extract data from
              documents like invoices or receipts, reducing errors.
            </p>
          </div>

          {/* Signature */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <Image
              src="/assets/signature.gif"
              alt="Signature Icon"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              Signature
            </h3>
            <p className="text-gray-600 text-sm">
              The PRY tool simplifies signature identification and cropping in
              documents, improving review efficiency.
            </p>
          </div>

          {/* Multilingual */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <Image
              src="/assets/multi-language.gif"
              alt="Multilingual Icon"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-teal-600 mb-2">
              Multilingual
            </h3>
            <p className="text-gray-600 text-sm">
              PRY excels in multilingual data extraction, enabling users to gain
              insights from documents in various languages.
            </p>
          </div>

          {/* Stamp */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition">
            <Image
              src="/assets/stamp.gif"
              alt="Stamp Icon"
              width={64}
              height={64}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-teal-600 mb-2">Stamp</h3>
            <p className="text-gray-600 text-sm">
              Introducing the stamp detection tool to improve document
              management and processing efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Engines Section — same as image */}
      <section className="container mx-auto px-6 lg:px-12 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text */}
          <div className="lg:w-2/3 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-6">
              Engines
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              At PRY, we're proud to offer a suite of advanced data extraction
              engines, designed to meet diverse data processing needs.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our first engine is just the beginning. It's built for high
              performance, capable of handling large volumes of data with
              exceptional accuracy.
            </p>
          </div>

          {/* Right Icon */}
          <div className="lg:w-1/3 flex justify-center">
            <Image
              src="/assets/engine.webp"
              alt="Engine Icon"
              width={220}
              height={220}
              className="drop-shadow-md"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
