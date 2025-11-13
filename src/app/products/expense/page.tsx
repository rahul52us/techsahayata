"use client";

import { FaPlaneDeparture, FaReceipt, FaChartPie } from "react-icons/fa";
import { useState } from "react";

export default function ExpensePage() {
  const videos = [
    "/https://res.cloudinary.com/dtlrp3fzu/video/upload/v1763011933/stick_website_assets/m1hg49dtz667qap3mwa4.mp4",
    "/https://res.cloudinary.com/dtlrp3fzu/video/upload/v1763011933/stick_website_assets/m1hg49dtz667qap3mwa4.mp4",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <main className="w-full min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative w-full h-[560px] lg:h-[620px]">
        <img
          src="/https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011884/stick_website_assets/uh8efecihkqa0bj9rhtm.webp"
          alt="Expense background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-10 md:p-16 text-center">
            <h1 className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-4">Expense</h1>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              Welcome to Expense, a robust data extraction tool designed to simplify the extraction and
              validation of information from various documents such as invoices, PDFs, and more.
            </p>
            <div className="mt-8">
              <button className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full text-lg font-medium transition">
                Book Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Streamlined Expense Management Section */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-3xl font-extrabold text-teal-600 mb-8">Streamlined Expense Management Journey</h2>
          <p className="text-lg text-gray-700 mb-8">
            EXPENSE streamlines your expense management journey by allowing you to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaPlaneDeparture className="w-16 h-16 mb-4 text-teal-500" />
              <p className="text-lg font-semibold text-teal-600 mb-4">Easily create detailed trip requests</p>
              <p className="text-gray-600">
                Without the need for templates, making the process faster and more efficient.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaReceipt className="w-16 h-16 mb-4 text-teal-500" />
              <p className="text-lg font-semibold text-teal-600 mb-4">Track expenses effortlessly</p>
              <p className="text-gray-600">
                With intelligent data extraction, making it easier to manage and monitor expenses.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
              <FaChartPie className="w-16 h-16 mb-4 text-teal-500" />
              <p className="text-lg font-semibold text-teal-600 mb-4">Gain insights into spending patterns</p>
              <p className="text-gray-600">
                Through a breakdown by categories, allowing you to make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Video Slider Section */}
      <section className="container mx-auto px-6 lg:px-12 py-12">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Getting Started</h2>
        <p className="text-center text-gray-600 mb-8">
          The videos demonstrate signature extraction and verification by Expense:
        </p>

        <div className="relative max-w-3xl mx-auto">
          {/* Video */}
          <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg border">
            <video
              src={videos[currentIndex]}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-r-full"
          >
            &#10094;
          </button>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white p-3 rounded-l-full"
          >
            &#10095;
          </button>
        </div>
      </section>


      {/* Feature rows (design from attachment) */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        {/* Row 1: Text left, Image right (Effortless Trip Requests) */}
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-24">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-extrabold text-teal-600 mb-4">Effortless Trip Requests</h3>
            <p className="text-gray-700 leading-relaxed">
              Simplify the process of creating trip requests with EXPENSE. Provide detailed
              information about your journey, including travel dates, origin and destination
              cities, purpose of the trip, and estimated expenses. Our user-friendly interface
              ensures a straightforward trip request creation process without the need for
              templates.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-56 h-56 rounded-full bg-teal-400 flex items-center justify-center shadow-lg">
              <img src="/https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011951/stick_website_assets/uco1emlyw7hs8idehv2o.webp" alt="Trip request" className="w-40 h-40 object-contain" />
            </div>
          </div>
        </div>

        {/* Row 2: Image left, Text right (Intelligent Data Extraction) */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-none">
            <div className="w-56 h-56 rounded-full bg-teal-400 flex items-center justify-center shadow-lg">
              <img src="/https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011880/stick_website_assets/elqeqwbry5tsazgxbka5.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-3xl font-extrabold text-teal-600 mb-4">Intelligent Data Extraction</h3>
            <p className="text-gray-700 leading-relaxed">
              Eliminate the need for templates with EXPENSE's intelligent data extraction. Easily upload
              bills, receipts, and invoices, and watch as relevant fields are automatically filled. This not
              only saves time but also ensures accuracy in capturing essential information, reducing the
              risk of errors associated with manual data entry.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-24">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-extrabold text-teal-600 mb-4">Expense Breakdown by Categories</h3>
            <p className="text-gray-700 leading-relaxed">
              EXPENSE takes expense tracking to the next level by providing a detailed breakdown by categories. Gain insights into spending patterns across various categories such as transportation, accommodation, meals, and more. This feature empowers you to make informed financial decisions without the need for predefined templates.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-56 h-56 rounded-full bg-teal-400 flex items-center justify-center shadow-lg">
              <img src="/https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011880/stick_website_assets/drzc31fg280wd9afmmsm.webp" alt="Trip request" className="w-40 h-40 object-contain" />
            </div>
          </div>
        </div>

        {/* Row 2: Image left, Text right (Intelligent Data Extraction) */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-none">
            <div className="w-56 h-56 rounded-full bg-teal-400 flex items-center justify-center shadow-lg">
              <img src="/https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011863/stick_website_assets/rg8zzoqt8mpx8beaoxqa.webp" alt="Data extraction" className="w-40 h-40 object-contain" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <h3 className="text-3xl font-extrabold text-teal-600 mb-4">Validation and Approval Workflow</h3>
            <p className="text-gray-700 leading-relaxed">
              Ensure transparency and compliance with EXPENSE's validation and approval workflow. Superiors can easily review trip requests, validate expenses, and make quick decisions with just a click. This streamlined process enhances communication and accelerates the approval cycle.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
