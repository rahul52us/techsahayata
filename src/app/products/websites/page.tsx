"use client";
import React from "react";

interface Project {
  title: string;
  description: string;
  video?: string;
  image?: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "MetaMind Health",
    description:
      "Empowering mental wellness with cutting-edge AI tools and therapy solutions for holistic health.",
    video:
      "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1762963670/metamind_ugzwpe.mp4",
    link: "https://www.metamindhealth.com/",
  },
  {
    title: "Travel Explorer",
    description:
      "Discover and book travel experiences across destinations with seamless search and booking features.",
    video:
      "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1762964003/travel_aez7h2.mp4",
    link: "https://travel-six-tan-34.vercel.app/",
  },
  {
    title: "Basify",
    description:
      "A complete business management platform for small enterprises to grow and simplify operations.",
    video:
      "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1762963964/basify_myikat.mp4",
    link: "https://basify.vercel.app/",
  },
  {
    title: "Business Sahayata",
    description:
      "Providing digital transformation, consulting, and marketing services to help businesses scale up.",
    video:
      "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1762963829/business_up1a9i.mp4",
    link: "https://businesssahayata.com/",
  },

  
  {
    title: "DentalCare",
    description:
      "Modern website for dental clinics with appointment booking, treatments display, and patient management.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763789011/Dentalcare_o3dgep.png",
    link: "https://dental-frontend-sandy.vercel.app/login",
  },
  {
    title: "FX NTop",
    description:
      "A financial analytics dashboard for tracking forex signals, market trends, and trading insights.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763789011/fxntop_dtogqj.png",
    link: "https://fx.ntop.in/login",
  },
  {
    title: "Travel CRM",
    description:
      "A smart CRM built for travel agencies to manage leads, bookings, follow-ups, and customer pipelines.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763789011/travellcrm_er3zfz.png",
    link: "https://travel-crm-iota.vercel.app/login",
  },
  {
    title: "HRMS Portal",
    description:
      "A Human Resource Management System with attendance, leave, payroll, and employee management features.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763789011/HRMS_xnjhxy.png",
    link: "https://hrms-portals.vercel.app/login",
  },
  {
    title: "School Management System",
    description:
      "A comprehensive platform for schools to manage students, teachers, classes, and academic records.",
    video:
      "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1763997053/Recording_2025-11-24_203439_h3cl2d.mp4",
    link: "https://school-managent.vercel.app/",
  },
    {
    title: "Kleen Driving school",
    description:
      "Driving schools offer professional training for safe, confident driving, covering traffic laws.",
    video:
      "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1767023023/Recording_2025-12-29_210800_fr4afk.mp4",
    link: "https://kleen-drive.vercel.app/",
  },
];

export default function Projects() {
  return (
    <main className="bg-[#f3fafc] font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden">
        <img
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963740/webhero_zqqnmi.jpg"
          alt="Projects Hero"
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#002c3a]/90 via-[#00485a]/70 to-[#046c8a]/60"></div>

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
          <h2 className="text-3xl md:text-4xl font-bold text-[#33aed7] mb-12">
            Our Web Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#c2edf9] group"
              >
                {/* Image or Video */}
                <div className="relative h-56 w-full overflow-hidden">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <img
                      src={project.image!}
                      alt={project.title}
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
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
