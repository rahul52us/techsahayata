"use client";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Tablet, Sparkles, ArrowRight, MousePointer2, Smartphone } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const appProjects: Project[] = [
  {
    title: "HealthTrack Mobile",
    description: "A fitness and wellness app helping users track steps, calories, and daily activities with insights.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594403/original-4788ae2ebc604984b82262c597d0373b_nekkxv.webp",
    link: "#",
  },
  {
    title: "Foodify",
    description: "A food ordering and restaurant discovery app for seamless browsing, ordering, and delivery.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594403/e64a5091f8c490ce60ea9e1a6e162389_tbygpp.webp",
    link: "#",
  },
  {
    title: "EduVerse",
    description: "A modern e-learning platform offering courses, live classes, and student progress tracking.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594404/online-learning-mobile-app-ui-kit-with-different-gui-layout-including-log-in-create-account-course-information-screen-vector_dkjgfr.jpg",
    link: "#",
  },
  {
    title: "EventHub",
    description: "An all-in-one app for discovering, managing, and booking local and global events.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594404/a6d5408b054a0b2e61bb8d010beac7bf_se8elu.jpg",
    link: "#",
  },
  {
    title: "ShopEase",
    description: "An e-commerce app that delivers a smooth shopping experience with smart product recommendations.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594403/original-a804252a9f6e48720934a444d60b1c52_fhjffe.webp",
    link: "#",
  },
  {
    title: "TaskMate",
    description: "A productivity and task management app designed to help users plan, track, and achieve goals.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763594403/original-8d8335dca57f937f99e641efa90995fa_tvkyy4.webp",
    link: "#",
  },
];

export default function Applications() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <main className="bg-[#f3fafc] font-sans selection:bg-[#097899] selection:text-white overflow-x-hidden">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-[#002c3a]">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011861/stick_website_assets/vtoemz0m6susdgindhvn.jpg"
            alt="Applications Hero"
            fill
            priority
            unoptimized
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002c3a]/50 to-[#f3fafc]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#097899]/20 border border-[#097899]/30 text-[#67e2ff] text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-pulse" /> Mobile Excellence
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
          >
            Our App <span className="text-[#097899]">Ecosystem</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Crafting intuitive mobile experiences that bridge the gap between imagination and reality. Explore our suite of innovative applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#applications"
              className="bg-[#097899] hover:bg-[#0b89ad] text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all flex items-center gap-2 group"
            >
              Explore Apps <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Floating Mouse Icon */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center text-white/40"
        >
          <MousePointer2 size={24} />
          <span className="text-[10px] uppercase tracking-widest mt-2">Scroll</span>
        </motion.div>
      </section>

      {/* --- APPLICATIONS GRID --- */}
      <section id="applications" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black text-[#002c3a] tracking-tight">Application Gallery</h2>
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              className="h-2 bg-[#097899] mt-2 rounded-full origin-left"
            />
          </div>
          <p className="text-slate-500 font-medium mt-4 md:mt-0">
            Showcasing {appProjects.length} high-performance mobile solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {appProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_50px_-15px_rgba(9,120,153,0.1)] hover:shadow-[0_30px_70px_-10px_rgba(9,120,153,0.2)] transition-all duration-500 flex flex-col border border-slate-100"
            >
              {/* Media Container */}
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Blur */}
                <div className="absolute inset-0 bg-[#097899]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="absolute top-5 right-5 z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg text-[#097899] transition-transform group-hover:rotate-12">
                    <Smartphone size={24} />
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-[#002c3a] mb-3 group-hover:text-[#097899] transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 flex-grow">
                  {project.description}
                </p>
                
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-between w-full p-5 rounded-2xl bg-[#f3fafc] text-[#097899] font-black text-xs uppercase tracking-widest hover:bg-[#097899] hover:text-white transition-all duration-300 shadow-sm"
                >
                  View Details
                  <ExternalLink size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>      
      
      <div className="h-20" />
    </main>
  );
}