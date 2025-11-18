"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";


interface StatCircleProps {
  targetValue: number;
  suffix?: string;
  label: string;
  ringColor: string;
  accentColor: string;
}

function StatCircle({ targetValue, suffix = "", label, ringColor, accentColor }: StatCircleProps) {
  const [value, setValue] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId: number;
    const durationMs = 1200;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / durationMs);
      setProgress(t);
      setValue(Math.floor(t * targetValue));
      if (t < 1) frameId = requestAnimationFrame(tick);
    };
    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [targetValue]);

  const size = 180;
  const radiusOuter = 84;
  const radiusInner = 70;
  const circumference = 2 * Math.PI * radiusInner;
  const dash = circumference * progress;



  return (
    <div className="flex flex-col items-center">
      <svg width={size} height={size} viewBox="0 0 200 200">
        {/* Outer ring */}
        <circle cx="100" cy="100" r={radiusOuter} className={`fill-transparent stroke-[14] ${ringColor}`} />
        {/* Inner track */}
        <circle cx="100" cy="100" r={radiusInner} className="fill-[#232357] stroke-[#232357] stroke-[14]" />
        {/* Progress ring */}
        <circle
          cx="100"
          cy="100"
          r={radiusInner}
          className={`fill-transparent ${accentColor}`}
          strokeWidth={10}
          strokeDasharray={`${dash} ${circumference}`}
          transform="rotate(-90 100 100)"
          strokeLinecap="round"
        />
        {/* Value */}
        <text x="100" y="110" textAnchor="middle" className="fill-white" style={{ fontSize: 36, fontWeight: 700 }}>
          {value}
          {suffix}
        </text>
      </svg>
      <p className="mt-6 text-base md:text-lg font-semibold text-gray-900 text-center max-w-xs">{label}</p>
    </div>
  );
}

export default function Home() {
  const [factIndex, setFactIndex] = useState(0);

  const factSlides = [
    {
      image: 'https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011887/stick_website_assets/i6ykd9kdt7c2evop36hl.webp',
      lines: [
        'Our IDP (Intelligent Data Processor) software uses AI and NLP to process and analyze large amounts of data in real-time.',
        'It can extract, transform, load data, clean, enrich structure it, identify patterns and anomalies and generate insights using machine learning algorithms.',
        'It can be used in various industries and can be integrated with other systems, but there are concerns about errors and bias in the processed data.',
      ],
    },
    {
      image: 'https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011888/stick_website_assets/cbrkvsh3vzidudjgxdfm.webp',
      lines: [
        'IDP systems accelerate processing by using OCR, NLP and ML to convert unstructured documents into structured data.',
        'They reduce manual effort and speed up downstream workflows while maintaining traceability and audit logs.',
        'Careful model training and human-in-the-loop review reduces error rates and bias.',
      ],
    },
    {
      image: 'https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011888/stick_website_assets/f6spa6wfwzohkiunfp8z.webp',
      lines: [
        'IDP platforms can integrate with ERP, CRM and RPA tools to automate end-to-end processes.',
        'They improve data quality and enable analytics that drive business decisions at scale.',
        'Robust governance and validation pipelines keep outputs reliable for critical systems.',
      ],
    },
  ];

  useEffect(() => {
    const t = setInterval(() => {
      setFactIndex((i) => (i + 1) % factSlides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  const goPrevFact = () => setFactIndex((i) => (i - 1 + factSlides.length) % factSlides.length);
  const goNextFact = () => setFactIndex((i) => (i + 1) % factSlides.length);
  const goToFact = (i: number) => setFactIndex(i);
  const products = [
    // {
    //   title: "OCR",
    //   description:
    //     "OCR (Optical Character Recognition) is a technology that converts printed or handwritten text in images, scanned documents, or PDFs into editable and searchable digital text.",
    //   href: "/products/pry",
    // },
    {
      title: "Website",
      description:
        "A website is a collection of interconnected web pages, multimedia, and files that are accessed via a web browser under a common domain name. The World Wide Web is a system of websites and other web content that is accessible over the internet. ",
      href: "/products/vaom",
    },
    {
      title: "Application",
      description:
        "Application is a software program designed to perform specific tasks or solve particular problems for users or businesses.",
      href: "/products/expense",
    },
    // {
    //   title: "RPA automation & AI Products",
    //   description:
    //     "RPA (Robotic Process Automation) and AI Automation help businesses automate repetitive tasks and make smarter decisions.",
    //   href: "/products/expense",
    // },
  ];

  return (
    <main className="w-full">
      <section className="relative w-full h-[90vh] overflow-hidden">
        {/* Hero Image */}
        <img
            src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011871/stick_website_assets/va1znnbi9jdcrqinwwzi.jpg"
          alt="Techsahayata Hero"
          className="object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-xl space-y-6 text-white">
              <h1 className="text-5xl md:text-4xl font-bold leading-tight">
                Unlock the Future of Business <br />
                with{" "}
                <span className="text-[#33aed7]">
                  Techsahayata Driven Framework
                </span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-200">
                Elevate Efficiency, Drive Innovation, and Transform Your Operational
                Landscape with Our Advanced AI and Machine Learning Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props Section */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#33aed7]">
              website apps or AI Templateless Document Extraction Powered by Techsahayata.
            </h2>
            <p className="mt-4 text-xl text-[#33aed7] text-center">
              At the pace that suits you, from insight to invention
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="rounded-3xl shadow-xl/30 shadow-sm bg-white ring-1 ring-gray-100 p-8 text-center">
              <div className="mx-auto max-w-[360px]">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011953/stick_website_assets/yzla03aleaywmmvuirve.png"
                  alt="Uncover"
                  width={720}
                  height={480}
                  className="mx-auto h-auto w-full"
                />
              </div>
              <h3 className="mt-6 text-3xl font-extrabold text-[#33aed7]">Website</h3>
              <p className="mt-3 text-gray-600 text-lg">
                A website is any web page whose content is identified by a common domain name and is published on at least one web server.
              </p>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl shadow-sm bg-white ring-1 ring-gray-100 p-8 text-center">
              <div className="mx-auto max-w-[360px]">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011918/stick_website_assets/whynhgjynqe9vsf0nq3p.jpg"
                  alt="Automate"
                  width={720}
                  height={480}
                  className="mx-auto h-auto w-full"
                />
              </div>
              <h3 className="mt-6 text-3xl font-extrabold text-[#33aed7]">Mobile apps and software</h3>
              <p className="mt-3 text-gray-600 text-lg">
                Mobile applications, or apps, are software designed for smartphones and tablets, downloaded from app stores like Google Play and the Apple App Store              </p>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl shadow-sm bg-white ring-1 ring-gray-100 p-8 text-center">
              <div className="mx-auto max-w-[360px]">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011935/stick_website_assets/z3veldz5x2r8kktrg1fm.webp"
                  alt="Execute"
                  width={720}
                  height={480}
                  className="mx-auto h-auto w-full"
                />
              </div>
              <h3 className="mt-6 text-3xl font-extrabold text-[#33aed7]">RPA and AI automation</h3>
              <p className="mt-3 text-gray-600 text-lg">
                Intelligent Automation (IA) is the combination of RPA and AI, where RPA handles structured tasks and AI adds the ability to handle complex              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Govern Smarter. Operate Leaner. Impact Greener. */}

      {/* <section className="w-full py-20 md:py-24 bg-teal-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="egDqYs">Techsahayata</h2>
            <p className="mt-6 text-lg md:text-xl text-gray-800">
              Govern Smarter. Operate Leaner. Impact Greener.
            </p>
            <p className="mt-2 text-lg md:text-xl text-gray-800">
              Optimizing digital transformation for People, Planet, and Performance.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
            <StatCircle targetValue={500} suffix="%" label="Fast Processing, Maximum Efficiency!" ringColor="stroke-blue-900" accentColor="stroke-blue-500" />
            <StatCircle targetValue={200} suffix="M" label="Turning Pages into Possibilities annually" ringColor="stroke-green-900" accentColor="stroke-green-600" />
            <StatCircle targetValue={10} suffix="X" label="Quicker Results" ringColor="stroke-amber-800" accentColor="stroke-amber-400" />
          </div>
        </div>
      </section> */}

      {/* Brands marquee section */}
      <section className="w-full py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#33aed7]">
            Innovative Brands That Trust Us
          </h2>

          {/* Row 1 - right to left */}
          <div className="mt-8 sm:mt-10 overflow-hidden">
            <div className="marquee-track flex animate-[marquee_25s_linear_infinite]">
              <div className="flex items-center justify-around gap-6 sm:gap-10 lg:gap-12 shrink-0 w-full opacity-90">
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
              </div>

              <div className="flex items-center justify-around gap-6 sm:gap-10 lg:gap-12 shrink-0 w-full opacity-90">
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
              </div>
            </div>
          </div>

          {/* Row 2 - left to right */}
          <div className="mt-8 sm:mt-10 overflow-hidden">
            <div className="marquee-track reverse flex animate-[marquee_25s_linear_infinite_reverse]">
              <div className="flex items-center justify-around gap-6 sm:gap-10 lg:gap-12 shrink-0 w-full opacity-90">
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
              </div>

              <div className="flex items-center justify-around gap-6 sm:gap-10 lg:gap-12 shrink-0 w-full opacity-90">
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Tailwind keyframes for marquee */}
        <style jsx global>{`
    @keyframes marquee {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  `}</style>
      </section>



      <section className="relative w-full py-24 bg-gradient-to-br from-[#e6f9ff] via-white to-[#f0fcff] overflow-hidden">
        {/* Decorative Background Orbs */}
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-[#33aed7]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#33aed7]/10 rounded-full blur-3xl animate-ping"></div>

        <div className="relative container mx-auto px-6 lg:px-12 text-center">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#33aed7] mb-6">
            Mobile Apps & AI — The Unified Ecosystem
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-16">
            Explore how modern mobile applications combine core system components with artificial intelligence
            to deliver smarter, faster, and human-like experiences.
          </p>

          {/* Responsive Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Card 1 */}
            <div className="group relative bg-white shadow-xl border border-[#33aed7]/20 rounded-3xl p-8 flex flex-col justify-between h-full hover:shadow-[#33aed7]/30 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-[#33aed7]/10 to-[#33aed7]/20 opacity-0 group-hover:opacity-50 blur-3xl transition-opacity duration-700 rounded-3xl"></div>

              <div className="relative z-10 flex justify-center mb-8">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011954/stick_website_assets/tk2iy5vz5qgxe0tjtx2f.png"
                  alt="Mobile App Components"
                  className="w-full max-w-sm h-auto rounded-2xl object-contain shadow-lg transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 flex flex-col flex-grow justify-end">
                <h3 className="text-2xl font-semibold text-[#33aed7] mb-3">
                  Components of Mobile Apps
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Discover the interconnected elements that power our comprehensive mobile app ecosystem —
                  from backend intelligence to user-facing design.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-white shadow-xl border border-[#33aed7]/20 rounded-3xl p-8 flex flex-col justify-between h-full hover:shadow-[#33aed7]/30 transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-[#33aed7]/30 blur-3xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              </div>

              <div className="relative z-10 flex justify-center mb-8">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011860/stick_website_assets/lknhnmkr5yf3qt2an0gv.png"
                  alt="AI Mobile Impact"
                  className="w-full max-w-sm h-auto rounded-2xl object-contain shadow-lg transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="relative z-10 flex flex-col flex-grow justify-end">
                <h3 className="text-2xl font-semibold text-[#33aed7] mb-3">
                  Impact of Mobile Apps with AI
                </h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  AI-infused mobile apps redefine engagement with predictive insights, automation, and adaptive interactions —
                  making technology feel more human.
                </p>
              </div>
            </div>
          </div>

          {/* Unified Footer Text */}
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-[#33aed7] mb-4">
              Unified Mobile Intelligence
            </h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              When traditional app components seamlessly integrate with AI capabilities,
              they form a dynamic ecosystem — one that evolves with users and redefines digital innovation.
            </p>
          </div>
        </div>
      </section>





      {/* Intelligent Document Processing Section */}
      <section className="relative w-full py-24 bg-gradient-to-br from-[#e6f9ff] via-white to-[#f0fcff] overflow-hidden">
        {/* Animated Gradient Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#33aed7]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#33aed7]/10 rounded-full blur-3xl animate-ping"></div>

        <div className="relative container mx-auto px-6 lg:px-12 text-center z-10">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#33aed7] mb-6 capitalize">
            Benefits of Software and Applications
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Empower your organization with intelligent software that automates, accelerates, and amplifies digital workflows — blending AI, automation, and analytics for true transformation.
          </p>

          {/* Core Visual Section */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Glowing Background Halo */}
            <div className="absolute w-96 h-96 bg-[#33aed7]/20 blur-3xl rounded-full animate-pulse"></div>

            {/* Central Image Card */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-[#33aed7]/20 rounded-3xl shadow-2xl p-10 max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left Side - Text */}
                <div className="flex-1 text-left">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Smarter Processes. Faster Results.
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Intelligent software integrates data, automates decisions, and enhances business outcomes — powered by cutting-edge technologies like AI, ML, and NLP.
                  </p>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#33aed7] rounded-full mr-3"></div>
                      <span>Streamlined Data Processing</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#33aed7] rounded-full mr-3"></div>
                      <span>Enhanced Automation and Accuracy</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#33aed7] rounded-full mr-3"></div>
                      <span>AI-Driven Decision Making</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#33aed7] rounded-full mr-3"></div>
                      <span>Seamless Integration Across Systems</span>
                    </li>
                  </ul>
                </div>

                {/* Right Side - 3D Styled Image */}
                <div className="flex-1 flex justify-center relative">
                  <div className="absolute w-64 h-64 bg-[#33aed7]/10 rounded-full blur-2xl animate-bounce"></div>
                  <img
                    src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011862/stick_website_assets/z3wmxmweewnzjmstmbod.png"
                    alt="Benefits of Software"
                    className="relative z-10 w-80 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Glowing Info Strip */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Insights",
                desc: "Analyze and predict trends through intelligent data systems.",
              },
              {
                title: "Accelerated Workflow",
                desc: "Boost productivity with integrated automation pipelines.",
              },
              {
                title: "Digital Transformation",
                desc: "Bridge technology with strategy to create business agility.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/80 backdrop-blur-lg border border-[#33aed7]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <h4 className="text-xl font-semibold text-[#33aed7] mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 bg-gradient-to-br from-[#e6f9ff] via-white to-[#f0fcff] overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#33aed7]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#33aed7]/10 rounded-full blur-3xl animate-ping"></div>

        <div className="relative container mx-auto px-6 lg:px-12 text-center z-10">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#33aed7] mb-6 capitalize">
            Benefits of RPA, AI & Automation
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Revolutionize your operations with intelligent automation that minimizes manual work, enhances precision,
            and accelerates digital transformation across every business process.
          </p>

          {/* Core Section */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Glowing Halo */}
            <div className="absolute w-96 h-96 bg-[#33aed7]/20 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Card */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-[#33aed7]/20 rounded-3xl shadow-2xl p-10 max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left - Image with Glow */}
                <div className="flex-1 flex justify-center relative">
                  <div className="absolute w-64 h-64 bg-[#33aed7]/10 rounded-full blur-2xl animate-bounce"></div>
                  <img
                    src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011936/stick_website_assets/cdsfm7gzdfzwfum6ra0g.png"
                    alt="RPA AI Automation"
                    className="relative z-10 w-80 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Right - Text Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">
                    Smart. Scalable. Self-Optimizing.
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Harness the synergy of Robotic Process Automation, Artificial Intelligence, and Machine Learning
                    to unlock new levels of efficiency and innovation.
                  </p>

                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#33aed7] rounded-full mr-3"></div>
                      <span>Automates repetitive and rule-based tasks seamlessly</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#33aed7] rounded-full mr-3"></div>
                      <span>Improves data accuracy and reduces human error</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#33aed7] rounded-full mr-3"></div>
                      <span>Integrates AI for predictive and adaptive processes</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#33aed7] rounded-full mr-3"></div>
                      <span>Frees human talent for creative and strategic roles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Benefits Strip */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤖",
                title: "Process Automation",
                desc: "Automate time-consuming, repetitive business tasks with precision.",
              },
              {
                icon: "⚙️",
                title: "Workflow Optimization",
                desc: "Streamline operations and enhance inter-departmental collaboration.",
              },
              {
                icon: "📊",
                title: "AI Insights",
                desc: "Gain real-time analytics and data-driven decision-making capabilities.",
              },
              {
                icon: "🚀",
                title: "Scalable Efficiency",
                desc: "Expand automation to handle complex processes at enterprise scale.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/80 backdrop-blur-lg border border-[#33aed7]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-[#33aed7] mb-2 group-hover:scale-105 transition-transform duration-300">
                  {item.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>








      <section className="py-20 bg-[#e6f7fc]">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    {/* Section Title */}
    <h2 className="text-4xl md:text-5xl font-extrabold text-[#33aed7] mb-14">
      Our Products
    </h2>

    {/* Product Cards Grid (ONLY 2 PRODUCTS) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-start max-w-4xl mx-auto">
      {products.slice(0, 2).map((product, index) => (
        <div
          key={index}
          className="group relative bg-white rounded-2xl border border-[#33aed7]/10 shadow-md hover:shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between h-full"
        >
          {/* Gradient Corner */}
          <div className="absolute top-0 right-0 bg-gradient-to-r from-[#33aed7] to-[#0c8db5] rounded-bl-2xl p-3">
            <ArrowRight className="text-white w-5 h-5" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-[#33aed7] mb-4">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-gray-700 text-base leading-relaxed flex-grow">
            {product.description}
          </p>

          {/* Bottom Accent Line */}
          <div className="mt-6 w-full h-1 rounded-full bg-gradient-to-r from-[#33aed7] to-[#0c8db5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      ))}
    </div>
  </div>
</section>






      {/* Robot illustrater */}


      <div className="w-full bg-gradient-to-r from-[#e6f7fc] to-white py-20 px-6 flex items-center justify-center">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
    {/* Left Column */}
    <div className="flex flex-col gap-8">
      {/* Websites */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#c2edf9] hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
        <h3 className="text-2xl font-semibold text-[#0c92b2] mb-3 text-center">
          Websites
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>24/7 online presence</li>
          <li>Builds brand credibility</li>
          <li>Cost-effective marketing</li>
          <li>Easy to update info</li>
        </ul>
      </div>

      {/* Applications & Software */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#c2edf9] hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
        <h3 className="text-2xl font-semibold text-[#0c92b2] mb-3 text-center">
          Applications & Software
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>Streamline operations</li>
          <li>Automate workflows</li>
          <li>Save time & reduce errors</li>
          <li>Data-driven insights</li>
        </ul>
      </div>
    </div>

    {/* Center GIF */}
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-3xl shadow-2xl border border-[#c2edf9] p-4 md:p-8 hover:shadow-[0_0_30px_#c2edf9] transition-shadow duration-500">
        <img
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011925/stick_website_assets/mhx4rg1w4utnmkfqj7rb.gif"
          alt="Platform Illustration"
          className="w-[250px] md:w-[320px] lg:w-[360px] rounded-2xl object-contain"
        />
      </div>
    </div>

    {/* Right Column */}
    <div className="flex flex-col gap-8">
      {/* Mobile Apps */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#c2edf9] hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
        <h3 className="text-2xl font-semibold text-[#0c92b2] mb-3 text-center">
          Mobile Apps
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>Enhances engagement</li>
          <li>Access anytime, anywhere</li>
          <li>Push notifications</li>
          <li>Personalized experience</li>
        </ul>
      </div>

      {/* RPA & AI Automation */}
      <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#c2edf9] hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]">
        <h3 className="text-2xl font-semibold text-[#0c92b2] mb-3 text-center">
          RPA & AI Automation
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>Automates tasks</li>
          <li>Improves accuracy</li>
          <li>Adapts with learning</li>
          <li>Smart predictions</li>
        </ul>
      </div>
    </div>
  </div>
</div>





      <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-12 bg-[#e6f7fc]">
        {/* Left Column: Text */}
        <div className="w-full md:w-1/2 text-left bg-[#f0fbff] p-8 rounded-2xl shadow-md border border-[#c2edf9]">
          <h2 className="text-[#33aed7] text-3xl font-semibold mb-4">
            Will our Data be Safe?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yes, your data is <span className="font-semibold text-[#33aed7]">100% safe & secure</span> and only your chosen people from your own organization have access to your data.
            Apart from this, your data is stored in an <span className="font-semibold">encrypted format</span> when it is saved in databases as well as during transit between the server and your machine.
            Multiple security audits and reviews have been conducted to ensure maximum protection.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="w-full md:w-1/2 text-center mt-10 md:mt-0">
          <img
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011881/stick_website_assets/lvmwfoyhfdmqdltfrtv6.webp"
            alt="Data Security Visual"
            className="w-56 md:w-72 mx-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>


      <section className="py-16 px-6 bg-[#e6f7fc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center bg-[#f0fbff] rounded-2xl p-6 md:p-10 shadow-md border border-[#c2edf9] gap-6">
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex justify-center">
              <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011894/stick_website_assets/a9sa8hjnhj2ufrbfhtgl.jpg"
                alt="RPA Illustration"
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3">
              <h2 className="text-2xl md:text-3xl font-bold text-[#33aed7] text-center md:text-left">
                Can RPA help Finance and Accounting? Yes!
              </h2>
              <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Automation can empower finance and accounting business units to be
                more efficient, streamline high-touch processes, and boost employee
                satisfaction.
              </p>
              <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                End-to-end process automation can save up to 60% processing time and
                cost, all while integrating multiple legacy systems and applications,
                reducing the need for manual labor and ensuring maximum data security
                and compliance across all operations.
              </p>
              <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed text-justify">
                Additionally, hyperautomation can accelerate complex processes within
                the department.
              </p>
            </div>
          </div>
        </div>
      </section>



      <section className="py-16 px-6 bg-[#e6f7fc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row-reverse items-center space-y-6 md:space-y-0 md:space-x-6 bg-[#f0fbff] rounded-2xl p-6 md:p-10">

            {/* Image Section */}
            <div className="w-full md:w-1/3 order-first md:order-last">
              <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011895/stick_website_assets/bkhpqiggdhhhplavtz58.jpg"
                alt="Automation Illustration"
                className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-2/3 order-last md:order-first">
              <h2 className="text-3xl font-bold text-[#33aed7]">
                What can be automated? A lot!
              </h2>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                There are key areas of opportunity for automation inside finance and
                accounting. From customer onboarding and invoicing, to cash
                application, to logistics management to invoice processing, to
                payments processing.
              </p>
              <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                Nearly any process can benefit from automation inside finance and
                accounting. In the next page, you will discover process heatmaps
                that highlight where automation has the biggest potential across
                the business unit.
              </p>
            </div>

          </div>
        </div>
      </section>


    </main>
  );
}
