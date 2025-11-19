"use client";
import React from "react";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const appProjects: Project[] = [
  {
    title: "HealthTrack Mobile",
    description:
      "A fitness and wellness app helping users track steps, calories, and daily activities with insights.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594403/original-4788ae2ebc604984b82262c597d0373b_nekkxv.webp",
    link: "#",
  },
  {
    title: "Foodify",
    description:
      "A food ordering and restaurant discovery app for seamless browsing, ordering, and delivery.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594403/e64a5091f8c490ce60ea9e1a6e162389_tbygpp.webp",
    link: "#",
  },
  {
    title: "EduVerse",
    description:
      "A modern e-learning platform offering courses, live classes, and student progress tracking.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594404/online-learning-mobile-app-ui-kit-with-different-gui-layout-including-log-in-create-account-course-information-screen-vector_dkjgfr.jpg",
    link: "#",
  },
  {
    title: "EventHub",
    description:
      "An all-in-one app for discovering, managing, and booking local and global events.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594404/a6d5408b054a0b2e61bb8d010beac7bf_se8elu.jpg",
    link: "#",
  },
  {
    title: "ShopEase",
    description:
      "An e-commerce app that delivers a smooth shopping experience with smart product recommendations.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594403/original-a804252a9f6e48720934a444d60b1c52_fhjffe.webp",
    link: "#",
  },
  {
    title: "TaskMate",
    description:
      "A productivity and task management app designed to help users plan, track, and achieve goals.",
    image:
      "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594403/original-8d8335dca57f937f99e641efa90995fa_tvkyy4.webp",
    link: "#",
  },
];

export default function Applications() {
  return (
    <main className="bg-[#f3fafc] font-sans">
      {/* 🌟 Hero Section */}
      <section className="relative w-full h-[55vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011861/stick_website_assets/vtoemz0m6susdgindhvn.jpg"
          alt="Applications Hero"
          fill
          unoptimized
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#002c3a]/90 via-[#00485a]/70 to-[#046c8a]/60"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-6 md:px-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in-up">
            Our Mobile Applications
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200 mb-6 animate-fade-in-up delay-100">
            Explore our innovative mobile apps designed to enhance everyday
            living through smart, seamless, and engaging digital experiences.
          </p>

          <a
            href="#applications"
            className="bg-[#33aed7] hover:bg-[#2a96bb] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            View Applications
          </a>
        </div>
      </section>

      {/* 💻 Applications Section */}
      <section id="applications" className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#33aed7] mb-12">
            Our Mobile Applications
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {appProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#c2edf9] group"
              >
                {/* Thumbnail */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

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
                    className="text-[#046c8a] font-medium inline-flex items-center gap-2 hover:text-[#33aed7] transition-colors"
                  >
                    Project Demo
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
