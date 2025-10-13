"use client";
import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  video: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "MetaMind Health",
    description:
      "Empowering mental wellness with cutting-edge AI tools and therapy solutions for holistic health.",
    video: "/assets/metamind.mp4",
    link: "https://www.metamindhealth.com/",
  },
  {
    title: "Travel Explorer",
    description:
      "Discover and book travel experiences across destinations with seamless search and booking features.",
    video: "/assets/travel.mp4",
    link: "https://travel-six-tan-34.vercel.app/",
  },
  {
    title: "Basify",
    description:
      "A complete business management platform for small enterprises to grow and simplify operations.",
    video: "/assets/basify.mp4",
    link: "https://basify.vercel.app/",
  },
  {
    title: "Business Sahayata",
    description:
      "Providing digital transformation, consulting, and marketing services to help businesses scale up.",
    video: "/assets/business.mp4",
    link: "https://businesssahayata.com/",
  },
];

export default function Projects() {
  return (
    <main className="bg-[#f3fafc] font-sans">
      {/* 🌟 Minimal Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/assets/webhero.jpg" 
          alt="Projects Hero"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002c3a]/90 via-[#00485a]/70 to-[#046c8a]/60"></div>

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight animate-fade-in-up">
            Our Web Products
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 mb-6 animate-fade-in-up delay-100">
            Explore our modern, scalable, and innovative web applications —
            designed with precision, creativity, and performance in mind.
          </p>
          <a
            href="#projects"
            className="bg-[#33aed7] hover:bg-[#2a96bb] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* 💻 Projects Section */}
      <section id="projects" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#33aed7] mb-12">
            Our Web Products
          </h2>

          {/* Grid Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#c2edf9] group"
              >
                {/* Project Video */}
                <div className="relative h-56 w-full overflow-hidden">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-semibold text-[#046c8a] mb-2">
                    {project.title}
                  </h3>
                  <div className="w-16 h-[2px] bg-[#33aed7] mb-4"></div>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#046c8a] font-medium inline-flex items-center gap-2 hover:text-[#33aed7] transition-colors"
                  >
                    Project demo
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
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
