"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, PlayCircle, Globe, Sparkles, 
  ArrowRight, MousePointer2, ChevronLeft, ChevronRight 
} from "lucide-react";

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
    description: "Empowering mental wellness with cutting-edge AI tools and therapy solutions for holistic health.",
    video: "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1762963670/metamind_ugzwpe.mp4",
    link: "https://www.metamindhealth.com/",
  },
  {
    title: "Travel Explorer",
    description: "Discover and book travel experiences across destinations with seamless search and booking features.",
    video: "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1762964003/travel_aez7h2.mp4",
    link: "https://travel-six-tan-34.vercel.app/",
  },
  {
    title: "Basify",
    description: "A complete business management platform for small enterprises to grow and simplify operations.",
    video: "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1762963964/basify_myikat.mp4",
    link: "https://basify.vercel.app/",
  },
  {
    title: "Business Sahayata",
    description: "Providing digital transformation, consulting, and marketing services to help businesses scale up.",
    video: "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1762963829/business_up1a9i.mp4",
    link: "https://businesssahayata.com/",
  },
  {
    title: "DentalCare",
    description: "Modern website for dental clinics with appointment booking, treatments display, and patient management.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763789011/Dentalcare_o3dgep.png",
    link: "https://dental-frontend-sandy.vercel.app/login",
  },
  {
    title: "FX NTop",
    description: "A financial analytics dashboard for tracking forex signals, market trends, and trading insights.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763789011/fxntop_dtogqj.png",
    link: "https://fx.ntop.in/login",
  },
  {
    title: "Travel CRM",
    description: "A smart CRM built for travel agencies to manage leads, bookings, follow-ups, and customer pipelines.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763789011/travellcrm_er3zfz.png",
    link: "https://travel-crm-iota.vercel.app/login",
  },
  {
    title: "HRMS Portal",
    description: "A Human Resource Management System with attendance, leave, payroll, and employee management features.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763789011/HRMS_xnjhxy.png",
    link: "https://hrms-portals.vercel.app/login",
  },
  {
    title: "School Management System",
    description: "A comprehensive platform for schools to manage students, teachers, classes, and academic records.",
    video: "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1763997053/Recording_2025-11-24_203439_h3cl2d.mp4",
    link: "https://school-managent.vercel.app/",
  },
  {
    title: "Kleen Driving school",
    description: "Driving schools offer professional training for safe, confident driving, covering traffic laws.",
    video: "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1767023023/Recording_2025-12-29_210800_fr4afk.mp4",
    link: "https://kleen-drive.vercel.app/",
  },
   {
    title: "Vd Properties",
    description: "To simplify real estate with service you can rely on and guidance you can trust.",
    video: "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1767518417/Recording_2026-01-04_143240_jjw0bz.mp4",
    link: "https://www.vdproperties.com.au/",
  },
  {
    title: "Meetzy",
    description: "Virtual event platform for hosting interactive webinars, conferences, and workshops with ease.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1769394128/Screenshot_2026-01-26_075144_knlfww.png",
    link: "https://events-xi-eosin.vercel.app",
  },
    {
    title: "Digwinii",
    description: "Digiwinii is a digital marketing and business solutions agency dedicated to helping local businesses increase visibility, attract customers, and grow sustainably in today’s digital landscape.",
    video: "https://res.cloudinary.com/dtlrp3fzu/video/upload/v1769394361/Recording_2026-01-26_075520_nuriqg.mp4",
    link: "https://digiwinii.vercel.app/",
  },
];

export default function Projects() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.05]);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="bg-[#f8fdff] font-sans selection:bg-[#097899] selection:text-white overflow-x-hidden">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden bg-[#001a24]">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963740/webhero_zqqnmi.jpg"
            alt="Web Hero"
            className="w-full h-full object-cover opacity-30 brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001a24]/80 to-[#f8fdff]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#67e2ff] text-[10px] font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-xl shadow-2xl"
          >
            <Sparkles size={12} className="text-[#097899]" /> Future of Web
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tight"
          >
            Built for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#097899] to-[#67e2ff]">Performance.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed mb-10"
          >
            We don't just build websites; we engineer digital ecosystems that convert visitors into loyal advocates.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={scrollToProjects}
              className="group relative bg-[#097899] text-white px-12 py-4 rounded-full font-bold transition-all hover:shadow-[0_0_30px_rgba(9,120,153,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Gallery <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="absolute bottom-10 text-white/20"
        >
          <MousePointer2 size={20} />
        </motion.div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-[1300px] mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-[#002c3a] tracking-tighter">Web Works</h2>
            <div className="h-1.5 w-20 bg-[#097899] rounded-full" />
          </div>
          <div className="px-5 py-2 rounded-xl bg-white shadow-sm border border-slate-100">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Showing <span className="text-[#097899]">{indexOfFirstProject + 1}-{Math.min(indexOfLastProject, projects.length)}</span> of {projects.length}
            </p>
          </div>
        </div>

        {/* The Pretty Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[480px] w-full"
              >
                {/* Background Shadow Effect */}
                <div className="absolute inset-4 bg-[#097899]/20 blur-[40px] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative h-full w-full bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:border-[#097899]/30">
                  
                  {/* Media Header */}
                  <div className="relative h-1/2 overflow-hidden">
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-tighter text-[#097899] shadow-sm">
                        {project.video ? "Dynamic" : "Live View"}
                      </span>
                    </div>

                    {project.video ? (
                      <video
                        src={project.video}
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    ) : (
                      <img
                        src={project.image!}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    )}
                    
                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Body Content */}
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-black text-[#002c3a] mb-2 leading-tight group-hover:text-[#097899] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>

                    <motion.a
                      href={project.link}
                      target="_blank"
                      className="mt-6 flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#f0f9ff] text-[#097899] font-bold text-xs uppercase tracking-widest transition-all hover:bg-[#097899] hover:text-white"
                    >
                      Experience Demo <ExternalLink size={14} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- MINIMALIST PAGINATION --- */}
        <div className="mt-24 flex justify-center">
          <nav className="flex items-center gap-4 p-2 bg-white rounded-2xl border border-slate-100 shadow-xl shadow-[#097899]/5">
            <button
              onClick={() => { setCurrentPage(p => Math.max(p - 1, 1)); scrollToProjects(); }}
              disabled={currentPage === 1}
              className="p-3 rounded-xl hover:bg-slate-50 disabled:opacity-20 transition-all"
            >
              <ChevronLeft size={20} className="text-[#097899]" />
            </button>

            <div className="flex gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => { setCurrentPage(num); scrollToProjects(); }}
                  className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${
                    currentPage === num 
                    ? 'bg-[#097899] text-white shadow-lg shadow-[#097899]/30 scale-110' 
                    : 'text-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              onClick={() => { setCurrentPage(p => Math.min(p + 1, totalPages)); scrollToProjects(); }}
              disabled={currentPage === totalPages}
              className="p-3 rounded-xl hover:bg-slate-50 disabled:opacity-20 transition-all"
            >
              <ChevronRight size={20} className="text-[#097899]" />
            </button>
          </nav>
        </div>
      </section>
      
      <div className="h-20" />
    </main>
  );
}