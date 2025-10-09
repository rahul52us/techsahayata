"use client";
import React from "react";

interface Project {
  title: string;
  description: string;
  video: string;
  link: string;
}

const appProjects: Project[] = [
  {
    title: "HealthTrack Mobile",
    description:
      "A fitness and wellness app helping users track steps, calories, and daily activities with insights.",
    video: "/assets/healthtrack.mp4",
    link: "#",
  },
  {
    title: "Foodify",
    description:
      "A food ordering and restaurant discovery app for seamless browsing, ordering, and delivery.",
    video: "/assets/foodify.mp4",
    link: "#",
  },
  {
    title: "EduVerse",
    description:
      "A modern e-learning platform offering courses, live classes, and student progress tracking.",
    video: "/assets/eduverse.mp4",
    link: "#",
  },
  {
    title: "EventHub",
    description:
      "An all-in-one app for discovering, managing, and booking local and global events.",
    video: "/assets/eventhub.mp4",
    link: "#",
  },
  {
    title: "ShopEase",
    description:
      "An e-commerce app that delivers a smooth shopping experience with smart product recommendations.",
    video: "/assets/shopease.mp4",
    link: "#",
  },
  {
    title: "TaskMate",
    description:
      "A productivity and task management app designed to help users plan, track, and achieve goals.",
    video: "/assets/taskmate.mp4",
    link: "#",
  },
];

export default function Applications() {
  return (
    <section className="bg-[#f3fafc] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#33aed7] mb-12">
          Our Applications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {appProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* Reusable Card Component */
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[#c2edf9] group">
      {/* Video Preview */}
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
  );
}
