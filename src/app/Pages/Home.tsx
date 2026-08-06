"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Key } from "lucide-react";
import Header from "../components/Header";
import Keyhighlight from "../components/Keyhighlight";
import Ourbrands from "../components/Ourbrands";
import Evolution from "../components/Evolution";
import Ourproducts from "../components/Ourproducts";
import Information from "../components/Information";


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
            <Header />
            <Keyhighlight />
            <Ourbrands />
            <Evolution/>
            <Ourproducts/>
            <Information/>
    </main>
  );
}
