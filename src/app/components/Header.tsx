"use client";
import React, { useRef, useState } from "react";
import { motion, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone, Layers, ArrowRight, Heart, Sparkles } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking for global parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  // Deep Background Parallax
  const bgX = useTransform(smoothX, [-0.5, 0.5], ["-3%", "3%"]);
  const bgY = useTransform(smoothY, [-0.5, 0.5], ["-3%", "3%"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    }
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 md:px-8 bg-[#020617] selection:bg-[#33bedf]/30"
    >
      {/* 1. DYNAMIC IMMERSIVE BACKGROUND */}
      <motion.div style={{ x: bgX, y: bgY, scale: 1.15 }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#020617]/50 to-transparent z-10" />
        <img
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011871/stick_website_assets/va1znnbi9jdcrqinwwzi.jpg"
          alt="Atmosphere"
          className="w-full h-full object-cover opacity-40 brightness-75 transition-opacity duration-1000"
        />
      </motion.div>

      {/* 2. SOFT AMBIENT LIGHTING */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#33bedf]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center max-w-7xl mx-auto">
          
          {/* FLOATING BADGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="group flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/10 transition-colors cursor-default mb-10"
          >
            <Heart size={16} className="text-[#33bedf] fill-[#33bedf] group-hover:scale-125 transition-transform duration-500" />
            <span className="text-[10px] md:text-xs font-bold text-white/90 uppercase tracking-[0.4em]">
              TechSahayata : Crafting Digital Love
            </span>
          </motion.div>

          {/* TITANIC TYPOGRAPHY */}
          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              style={{ 
                x: useTransform(smoothX, [-0.5, 0.5], [-12, 12]), 
                y: useTransform(smoothY, [-0.5, 0.5], [-12, 12]) 
              }}
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[11vw] font-black text-white leading-[0.85] tracking-tighter"
            >
              WE BUILD <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#33bedf] via-white to-[#33bedf] animate-gradient-x">
                EMOTION.
              </span>
            </motion.h1>
            
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-8 md:-top-16 md:-right-12 pointer-events-none"
            >
              <Sparkles className="text-[#33bedf] w-12 h-12 md:w-24 md:h-24 opacity-30" />
            </motion.div>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl text-gray-400 text-lg md:text-2xl font-light leading-relaxed mb-16"
          >
            Elevating code into <span className="text-white font-medium italic underline decoration-[#33bedf]/50 underline-offset-4">Art</span>. We create software that feels human.
          </motion.p>

          {/* LUXURY CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            <ServiceCard index={1} icon={<Monitor />} title="Web Mastery" desc="Next-gen experiences built with velocity and grace." />
            <ServiceCard index={2} icon={<Smartphone />} title="Mobile Native" desc="Fluid interfaces that live beautifully in your pocket." featured />
            <ServiceCard index={3} icon={<Layers />} title="Cloud Design" desc="Robust backends fueling your digital revolution." />
          </div>

          {/* MAGNETIC CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 bg-white text-black px-12 py-5 rounded-2xl font-black text-xl shadow-[0_20px_60px_-15px_rgba(255,255,255,0.2)] hover:shadow-[#33bedf]/40 transition-shadow overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#33bedf] to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10 group-hover:text-white transition-colors">Start Journey</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-500 group-hover:text-white" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, desc, featured = false, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spotlightPos, setSpotlightPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setSpotlightPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + (index * 0.1) }}
      className={`group relative overflow-hidden p-8 rounded-[2rem] border transition-all duration-700 
        ${featured 
          ? 'border-[#33bedf]/40 bg-white/[0.03] scale-105 z-10 md:shadow-2xl md:shadow-[#33bedf]/10' 
          : 'border-white/5 bg-white/[0.01] hover:border-white/20'
        }`}
    >
      {/* MOUSE SPOTLIGHT EFFECT */}
      <div 
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 z-0"
        style={{
          background: `radial-gradient(600px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(51, 190, 223, 0.08), transparent 40%)`
        }}
      />

      <div className={`relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:-translate-y-2
        ${featured ? 'bg-[#33bedf] text-black shadow-lg shadow-[#33bedf]/20' : 'bg-white/5 text-[#33bedf]'}`}>
        {React.cloneElement(icon, { size: 28 })}
      </div>

      <h3 className="relative z-10 text-white font-bold text-2xl mb-3 tracking-tight">{title}</h3>
      <p className="relative z-10 text-gray-500 group-hover:text-gray-300 transition-colors duration-500 text-sm md:text-base leading-relaxed">
        {desc}
      </p>

      {/* DECORATIVE CORNER GRADIENT */}
      <div className={`absolute top-0 right-0 w-24 h-24 blur-[60px] opacity-0 group-hover:opacity-50 transition-opacity duration-1000 
        ${featured ? 'bg-[#33bedf]' : 'bg-blue-500'}`} />
    </motion.div>
  );
}