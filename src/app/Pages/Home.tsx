"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import Header from "../components/Header";


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
      <Header/>

      {/* Value Props Section */}
      <section className="relative w-full py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">

        {/* Subtle Background Decoration */}

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 pointer-events-none">

          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#097899]/10 blur-[120px]" />

          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/20 blur-[120px]" />

        </div>



        <div className="container relative z-10 mx-auto px-6 lg:px-12">

          {/* Header Section */}

          <div className="max-w-4xl mx-auto text-center mb-20">

            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-[#097899] uppercase bg-[#097899]/10 rounded-full">

              The Future of Automation

            </span>

            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">

              AI-Powered  <span className="text-[#097899]">Web & Application</span> Solutions by Techsahayata.

            </h2>

            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">

              At the pace that suits you—transforming raw insights into revolutionary inventions with seamless AI integration.

            </p>

          </div>



          {/* Cards Grid */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">



            {/* Card 1: Website */}

            <div className="group relative bg-white rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#097899]/10 border border-slate-100">

              <div className="overflow-hidden rounded-2xl bg-slate-50 mb-8 aspect-[4/3] flex items-center justify-center">

                <img

                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011953/stick_website_assets/yzla03aleaywmmvuirve.png"

                  alt="Website Development"

                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"

                />

              </div>

              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#097899] transition-colors">

                Web Experience

              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">

                Beyond simple domains—we build high-performance, responsive web ecosystems designed to engage and convert your audience globally.

              </p>

            </div>



            {/* Card 2: Mobile Apps */}

            <div className="group relative bg-white rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#097899]/10 border border-slate-100">

              <div className="overflow-hidden rounded-2xl bg-slate-50 mb-8 aspect-[4/3] flex items-center justify-center">

                <img

                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011918/stick_website_assets/whynhgjynqe9vsf0nq3p.jpg"

                  alt="Mobile Solutions"

                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"

                />

              </div>

              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#097899] transition-colors">

                Mobile Innovation

              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">

                Native and cross-platform software crafted for iOS and Android, putting the power of Techsahayata right in your pocket.

              </p>

            </div>



            {/* Card 3: RPA/AI */}

            <div className="group relative bg-white rounded-[2.5rem] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#097899]/10 border border-slate-100">

              <div className="overflow-hidden rounded-2xl bg-slate-50 mb-8 aspect-[4/3] flex items-center justify-center">

                <img

                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011935/stick_website_assets/z3veldz5x2r8kktrg1fm.webp"

                  alt="AI Automation"

                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"

                />

              </div>

              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#097899] transition-colors">

                Intelligent RPA

              </h3>

              <p className="mt-4 text-slate-600 leading-relaxed">

                Uniting RPA with AI to automate complex, unstructured workflows. We don't just mimic human actions; we amplify human intelligence.

              </p>

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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-[#097899]">
            Innovative Brands That Trust Us
          </h2>

          {/* Row 1 - right to left */}
          <div className="mt-8 sm:mt-10 overflow-hidden">
            <div className="marquee-track flex animate-[marquee_25s_linear_infinite]">
              <div className="flex items-center justify-around gap-6 sm:gap-10 lg:gap-12 shrink-0 w-full opacity-90">
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/kleendrive_logo_uj8env.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/karmaaurved_logo_olitpr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767499670/vd_logo_rkpjnh.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
              </div>

              <div className="flex items-center justify-around gap-6 sm:gap-10 lg:gap-12 shrink-0 w-full opacity-90">
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/kleendrive_logo_uj8env.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/karmaaurved_logo_olitpr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767499670/vd_logo_rkpjnh.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
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
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/kleendrive_logo_uj8env.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/karmaaurved_logo_olitpr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767499670/vd_logo_rkpjnh.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
              </div>

              <div className="flex items-center justify-around gap-6 sm:gap-10 lg:gap-12 shrink-0 w-full opacity-90">
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/kleendrive_logo_uj8env.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/karmaaurved_logo_olitpr.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
                <img src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767499670/vd_logo_rkpjnh.png" alt="Brand" width={180} height={64} className="w-28 sm:w-36 md:w-40 lg:w-44 h-auto object-contain" />
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



       <section className="relative w-full py-24 bg-[#fcfdfe] overflow-hidden font-sans">
      {/* --- Smooth Aurora Background --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#097899]/10 rounded-full blur-[160px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#097899]/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Decorative Elements */}
      <div className="absolute top-40 left-10 w-4 h-4 rounded-full border-2 border-[#097899]/20 animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute top-80 right-20 w-8 h-8 rounded-full bg-gradient-to-tr from-[#097899]/10 to-transparent animate-pulse" />

      <div className="relative container mx-auto px-6 lg:px-20">
        
        {/* --- Minimalist Header --- */}
        <div className="relative z-10 max-w-4xl mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-[#097899]" />
            <span className="text-sm font-bold tracking-widest text-[#097899] uppercase italic">Evolution in Motion</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-black text-slate-900 mb-8 tracking-tight">
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#097899] to-[#40b1d1]">Emotion</span>, 
            <br />Deploy Intelligence.
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
            We bridge the gap between cold logic and human intuition, creating digital experiences that don't just work—they <span className="text-slate-900 font-medium">resonate</span>.
          </p>
        </div>

        {/* --- Unique Staggered Layout --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Section 01: The Core */}
          <div className="lg:col-span-7 group relative">
            <div className="relative overflow-hidden rounded-[3rem] bg-white p-2 shadow-[0_40px_100px_-20px_rgba(9,120,153,0.12)] border border-white">
              <div className="relative h-[450px] overflow-hidden rounded-[2.8rem] bg-slate-50 flex items-center justify-center">
                {/* Floating Shadow beneath image */}
                <div className="absolute bottom-10 w-1/2 h-8 bg-black/10 blur-2xl rounded-full scale-x-150 opacity-50 transition-transform group-hover:scale-x-110" />
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011954/stick_website_assets/tk2iy5vz5qgxe0tjtx2f.png"
                  alt="System Architecture"
                  className="relative z-10 w-3/4 h-auto object-contain transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:-rotate-2"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <span className="text-8xl font-black text-slate-100 absolute -translate-y-20 -translate-x-10 select-none">01</span>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-slate-900 mb-6 group-hover:text-[#097899] transition-colors">
                The Architecture of <br /><span className="text-[#097899]">Possibility</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                A robust mobile core isn't about code—it's about reliability. We build the silent engine that powers your boldest ideas with 99.9% uptime and zero friction.
              </p>
              <ul className="space-y-4">
                {['Hyper-Reactive UI', 'Cloud-Native Scalability', 'Military-Grade Security'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#097899]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 02: The Brain (Reversed) */}
          <div className="lg:col-span-5 order-last lg:order-none">
            <span className="text-8xl font-black text-slate-100 absolute -translate-y-20 translate-x-40 select-none">02</span>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-slate-900 mb-6">
                Cognitive <br /><span className="text-[#097899]">Deep-Flow</span>
              </h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We integrate AI that learns from every tap. Your app becomes an evolving organism, predicting user needs before they even arise.
              </p>
              <button className="group flex items-center gap-4 text-[#097899] font-bold text-lg">
                Explore Intelligence
                <span className="w-12 h-12 rounded-full border border-[#097899]/20 flex items-center justify-center transition-all group-hover:bg-[#097899] group-hover:text-white group-hover:scale-110">
                  →
                </span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 group relative">
             <div className="relative overflow-hidden rounded-[3rem] bg-white p-2 shadow-[0_40px_100px_-20px_rgba(9,120,153,0.12)] border border-white">
              <div className="relative h-[450px] overflow-hidden rounded-[2.8rem] bg-gradient-to-br from-[#097899]/5 to-transparent flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011860/stick_website_assets/lknhnmkr5yf3qt2an0gv.png"
                  alt="AI Impact"
                  className="w-3/4 h-auto object-contain transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:rotate-2"
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- Lovable CTA Section --- */}
        <div className="mt-40 text-center">
          <div className="relative inline-block p-1 rounded-[2.5rem] bg-gradient-to-r from-[#097899]/20 via-[#40b1d1]/20 to-[#097899]/20">
            <div className="bg-white rounded-[2.4rem] px-12 py-16 md:px-24">
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Ready for a <span className="italic">Smarter</span> Start?
              </h3>
              <p className="text-slate-500 text-lg max-w-xl mx-auto mb-10">
                Join 50+ visionary brands that transformed their mobile presence with our unified AI-ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <button className="px-10 py-5 bg-[#097899] text-white font-bold rounded-2xl shadow-[0_20px_40px_-10px_rgba(9,120,153,0.5)] hover:bg-[#075d77] hover:-translate-y-1 transition-all active:scale-95">
                  Begin the Journey
                </button>
                <button className="px-10 py-5 bg-slate-50 text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all border border-slate-200">
                  Watch Showcase
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>





      {/* Intelligent Document Processing Section */}
       <section className="relative w-full py-28 bg-white overflow-hidden font-sans">

      {/* --- Aesthetic Atmosphere --- */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#097899]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-[#097899]/10 rounded-full blur-[140px] pointer-events-none opacity-60" />



      <div className="relative container mx-auto px-6 lg:px-20">

        

        {/* --- Header: Sophisticated & Centered --- */}

        <div className="max-w-3xl mx-auto text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">

            The <span className="text-[#097899]">Impact</span> of Intelligence

          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#097899] to-transparent mx-auto mb-8" />

          <p className="text-xl text-slate-500 leading-relaxed font-light">

            Empower your organization with software that doesn't just process data—it <span className="text-slate-900 font-semibold italic">amplifies potential</span>.

          </p>

        </div>



        {/* --- Central Feature: The Glass Podium --- */}

        <div className="relative z-10 group">

          {/* Background decorative ring */}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] border border-[#097899]/10 rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-transform duration-1000" />

          

          <div className="relative bg-white/40 backdrop-blur-2xl border border-white rounded-[3rem] shadow-[0_32px_120px_-20px_rgba(9,120,153,0.15)] p-8 md:p-16 overflow-hidden">

            <div className="flex flex-col lg:flex-row items-center gap-16">

              

              {/* Left Side: Dynamic List */}

              <div className="flex-1 order-2 lg:order-1">

                <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">

                  Smarter Processes. <br />

                  <span className="text-[#097899]">Exponential Results.</span>

                </h3>

                

                <div className="grid gap-6">

                  {[

                    { label: "Streamlined Data", color: "#097899" },

                    { label: "Predictive Automation", color: "#40b1d1" },

                    { label: "AI-Driven Logic", color: "#097899" },

                    { label: "Seamless Synergy", color: "#40b1d1" }

                  ].map((item, idx) => (

                    <div key={idx} className="flex items-center gap-4 group/item">

                      <div 

                        className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm border border-slate-100 group-hover/item:scale-110 group-hover/item:rotate-6"

                        style={{ backgroundColor: `${item.color}10`, color: item.color }}

                      >

                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />

                        </svg>

                      </div>

                      <span className="text-lg font-medium text-slate-700 group-hover/item:text-[#097899] transition-colors">

                        {item.label}

                      </span>

                    </div>

                  ))}

                </div>

              </div>



              {/* Right Side: The 3D Focus */}

              <div className="flex-1 flex justify-center order-1 lg:order-2">

                <div className="relative">

                  {/* Floating Elements around image */}

                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#097899]/10 rounded-full blur-xl animate-pulse" />

                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#40b1d1]/10 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '6s' }} />

                  

                  

                  <img

                    src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011862/stick_website_assets/z3wmxmweewnzjmstmbod.png"

                    alt="Digital Transformation"

                    className="relative z-10 w-[380px] h-auto rounded-[2rem] transform transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2"

                  />

                  

                  {/* Reflection/Shadow under image */}

                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-slate-900/10 blur-xl rounded-[100%] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                </div>

              </div>

            </div>

          </div>

        </div>



        {/* --- Bottom Triptych: Minimalist Info Strips --- */}

        <div className="mt-24 grid md:grid-cols-3 gap-12">

          {[

            {

              title: "Cognitive Insights",

              desc: "Convert raw numbers into strategic advantages with intelligent analytics.",

              icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"

            },

            {

              title: "Rapid Velocity",

              desc: "Shatter bottlenecks with automation pipelines that work while you sleep.",

              icon: "M13 10V3L4 14h7v7l9-11h-7z"

            },

            {

              title: "Strategic Agility",

              desc: "Build a tech stack that pivots as fast as the global market demands.",

              icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"

            },

          ].map((item, i) => (

            <div

              key={i}

              className="relative group p-4"

            >

              <div className="mb-6 w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#097899] transition-all duration-500 group-hover:bg-[#097899] group-hover:text-white group-hover:scale-110 group-hover:shadow-lg">

                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">

                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={item.icon} />

                </svg>

              </div>

              <h4 className="text-2xl font-bold text-slate-800 mb-4 transition-colors group-hover:text-[#097899]">

                {item.title}

              </h4>

              <p className="text-slate-500 leading-relaxed font-light">

                {item.desc}

              </p>

              <div className="mt-6 w-0 h-0.5 bg-[#097899]/20 group-hover:w-full transition-all duration-700" />

            </div>

          ))}

        </div>



      </div>

    </section>

      <section className="relative w-full py-24 bg-gradient-to-br from-[#e6f9ff] via-white to-[#f0fcff] overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#097899]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-[#097899]/10 rounded-full blur-3xl animate-ping"></div>

        <div className="relative container mx-auto px-6 lg:px-12 text-center z-10">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#097899] mb-6 capitalize">
            Benefits of RPA, AI & Automation
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
            Revolutionize your operations with intelligent automation that minimizes manual work, enhances precision,
            and accelerates digital transformation across every business process.
          </p>

          {/* Core Section */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Glowing Halo */}
            <div className="absolute w-96 h-96 bg-[#097899]/20 blur-3xl rounded-full animate-pulse"></div>

            {/* Main Card */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-[#097899]/20 rounded-3xl shadow-2xl p-10 max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                {/* Left - Image with Glow */}
                <div className="flex-1 flex justify-center relative">
                  <div className="absolute w-64 h-64 bg-[#097899]/10 rounded-full blur-2xl animate-bounce"></div>
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
                      <div className="w-3 h-3 bg-[#097899] rounded-full mr-3"></div>
                      <span>Automates repetitive and rule-based tasks seamlessly</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#097899] rounded-full mr-3"></div>
                      <span>Improves data accuracy and reduces human error</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#097899] rounded-full mr-3"></div>
                      <span>Integrates AI for predictive and adaptive processes</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-3 h-3 bg-[#097899] rounded-full mr-3"></div>
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
                className="group bg-white/80 backdrop-blur-lg border border-[#097899]/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-semibold text-[#097899] mb-2 group-hover:scale-105 transition-transform duration-300">
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#097899] mb-14">
            Our Products
          </h2>

          {/* Product Cards Grid (ONLY 2 PRODUCTS) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-center items-start max-w-4xl mx-auto">
            {products.slice(0, 2).map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl border border-[#097899]/10 shadow-md hover:shadow-2xl transition-all duration-500 p-8 flex flex-col justify-between h-full"
              >
                {/* Gradient Corner */}
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#097899] to-[#0c8db5] rounded-bl-2xl p-3">
                  <ArrowRight className="text-white w-5 h-5" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#097899] mb-4">
                  {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 text-base leading-relaxed flex-grow">
                  {product.description}
                </p>

                {/* Bottom Accent Line */}
                <div className="mt-6 w-full h-1 rounded-full bg-gradient-to-r from-[#097899] to-[#0c8db5] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
          <h2 className="text-[#097899] text-3xl font-semibold mb-4">
            Will our Data be Safe?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Yes, your data is <span className="font-semibold text-[#097899]">100% safe & secure</span> and only your chosen people from your own organization have access to your data.
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
              <h2 className="text-2xl md:text-3xl font-bold text-[#097899] text-center md:text-left">
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
              <h2 className="text-3xl font-bold text-[#097899]">
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
