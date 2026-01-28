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
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

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
    <main className="bg-[#f3fafc] font-sans selection:bg-[#097899] selection:text-white overflow-x-hidden">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-[#002c3a]">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1762963740/webhero_zqqnmi.jpg"
            alt="Web Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002c3a]/50 to-[#f3fafc]" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#097899]/20 border border-[#097899]/30 text-[#67e2ff] text-xs font-bold tracking-[0.2em] uppercase mb-8 backdrop-blur-md"
          >
            <Sparkles size={14} className="animate-pulse" /> Precision Crafted
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter"
          >
            Our Web <span className="text-[#097899]">Solutions</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed mb-12"
          >
            Preserving legacy data while building future-proof experiences. Explore our modern ecosystem of web products.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={scrollToProjects}
              className="bg-[#097899] hover:bg-[#0b89ad] text-white px-10 py-4 rounded-full font-bold shadow-xl transition-all flex items-center gap-2 group"
            >
              View Portfolio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 flex flex-col items-center text-white/40"
        >
          <MousePointer2 size={24} />
          <span className="text-[10px] uppercase tracking-widest mt-2">Scroll</span>
        </motion.div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section id="projects" className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto min-h-screen">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black text-[#002c3a] tracking-tight">Product Gallery</h2>
          </div>
          <p className="text-slate-500 font-medium mt-4 md:mt-0">
            Page <span className="text-[#097899] font-bold">{currentPage}</span> of {totalPages} — {projects.length} Total Projects
          </p>
        </div>

        {/* Paginated Grid with Transitions */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode="wait">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_15px_50px_-15px_rgba(9,120,153,0.1)] hover:shadow-[0_30px_70px_-10px_rgba(9,120,153,0.2)] transition-all duration-500 flex flex-col border border-slate-100"
              >
                {/* Media Container */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay loop muted playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <img
                      src={project.image!}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  <div className="absolute inset-0 bg-[#097899]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="absolute top-5 right-5 z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg text-[#097899] transition-all duration-500 group-hover:bg-[#097899] group-hover:text-white group-hover:rotate-12">
                      {project.video ? <PlayCircle size={24} /> : <Globe size={24} />}
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
                    Project Demo
                    <ExternalLink size={16} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- BEAUTIFUL PAGINATION --- */}
        <div className="mt-20 flex justify-center">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md p-3 rounded-[2rem] shadow-xl border border-slate-200/50">
            {/* Prev Button */}
            <button
              onClick={() => {
                setCurrentPage(prev => Math.max(prev - 1, 1));
                scrollToProjects();
              }}
              disabled={currentPage === 1}
              className="p-3 rounded-full hover:bg-slate-100 disabled:opacity-20 transition-all text-[#002c3a]"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => {
                    setCurrentPage(pageNum);
                    scrollToProjects();
                  }}
                  className="relative w-12 h-12 flex items-center justify-center text-sm font-black transition-colors duration-300"
                >
                  <span className={`relative z-10 ${currentPage === pageNum ? 'text-white' : 'text-slate-400 hover:text-[#097899]'}`}>
                    {pageNum}
                  </span>
                  {currentPage === pageNum && (
                    <motion.div
                      layoutId="activeBubble"
                      className="absolute inset-0 bg-[#097899] rounded-2xl shadow-lg shadow-[#097899]/30"
                      transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                scrollToProjects();
              }}
              disabled={currentPage === totalPages}
              className="p-3 rounded-full hover:bg-slate-100 disabled:opacity-20 transition-all text-[#002c3a]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>      

      <div className="h-10" />
    </main>
  );
}