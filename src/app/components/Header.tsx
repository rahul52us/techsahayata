"use client";
import React, { useRef, useState } from "react";
import { motion, useTransform, useSpring, useMotionValue } from "framer-motion";
import {
  Monitor, Smartphone, Layers, ArrowRight, Heart, Sparkles, Zap,
  Play, Volume2, VolumeX, CheckCircle, BarChart3, Maximize2,
  Globe, Library, Clock, Star, Sparkle, Wand2
} from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 25, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 25, stiffness: 120 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    }
  };

  const floatX = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const floatY = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 md:px-8 bg-[#080402] selection:bg-orange-500/30"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1785801522/tech_bg_scerrn_vvdosl.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* DARK OVERLAYS */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#080402]/90 via-[#080402]/40 to-[#080402]/90" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#080402]/70 via-transparent to-[#080402]/70" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#080402_70%)]" />

      {/* ─── VIBRANT LEMON‑ORANGE BOTTOM GRADIENT (intensified) ─── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[2]">
        {/* Main bottom linear – now with stronger yellow */}
        <div
          className="absolute bottom-0 left-0 w-full h-3/4"
          style={{
            background: `linear-gradient(to top, 
              rgba(255, 215, 0, 0.45) 0%, 
              rgba(255, 180, 0, 0.30) 20%, 
              rgba(249, 115, 22, 0.20) 45%, 
              rgba(251, 146, 60, 0.08) 70%, 
              transparent 100%)`,
          }}
        />

        {/* Large radial – golden yellow */}
        <div className="absolute bottom-[-20%] left-[10%] w-[80%] h-[70%] bg-gradient-to-t from-[#FFD700]/30 via-orange-500/15 to-transparent rounded-full blur-[180px]" />
        
        {/* Second – amber */}
        <div className="absolute bottom-[-10%] right-[5%] w-[60%] h-[60%] bg-amber-400/25 rounded-full blur-[150px]" />
        
        {/* Intense spot – pure lemon at the bottom center */}
        <div className="absolute bottom-[-5%] left-[20%] w-[60%] h-[40%] bg-yellow-300/30 rounded-full blur-[140px]" />
        
        {/* Extra subtle top glow */}
        <div className="absolute top-[10%] left-[30%] w-[40%] h-[30%] bg-orange-500/5 rounded-full blur-[120px]" />
      </div>

      {/* FLOATING CARDS (brighter) */}
      <motion.div
        style={{ x: floatX, y: floatY }}
        className="absolute left-[5%] top-[25%] z-[3] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-44 rounded-2xl bg-gradient-to-br from-orange-500/25 to-amber-500/25 border border-orange-500/25 backdrop-blur-sm p-3 shadow-2xl shadow-orange-900/30"
        >
          <div className="w-full h-20 rounded-xl bg-gradient-to-br from-orange-400/30 to-amber-500/30 mb-3" />
          <div className="w-3/4 h-2 rounded-full bg-orange-500/25 mb-2" />
          <div className="w-1/2 h-2 rounded-full bg-orange-500/20" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ x: useTransform(smoothX, [-0.5, 0.5], [20, -20]), y: useTransform(smoothY, [-0.5, 0.5], [20, -20]) }}
        className="absolute right-[5%] bottom-[20%] z-[3] hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-36 h-28 rounded-2xl bg-gradient-to-br from-amber-500/25 to-orange-500/25 border border-amber-500/25 backdrop-blur-sm p-3 shadow-2xl shadow-amber-900/30"
        >
          <div className="flex gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-orange-400/25" />
            <div className="w-8 h-8 rounded-lg bg-amber-400/20" />
          </div>
          <div className="w-full h-2 rounded-full bg-orange-500/25 mb-2" />
          <div className="w-2/3 h-2 rounded-full bg-orange-500/20" />
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[15%] top-[20%] z-[3] hidden md:block"
      >
        <Sparkles className="text-orange-400 w-10 h-10 opacity-60" />
      </motion.div>

      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute left-[18%] bottom-[25%] z-[3] hidden md:block"
      >
        <Zap className="text-orange-400 w-8 h-8 opacity-50" />
      </motion.div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">

          {/* BADGE – unchanged */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-orange-500/30 bg-orange-950/20 backdrop-blur-xl hover:bg-orange-900/20 transition-colors cursor-default mb-8"
          >
            <Heart size={14} className="text-orange-400 fill-orange-400 group-hover:scale-125 transition-transform duration-500" />
            <span className="text-[10px] md:text-xs font-bold text-orange-100/90 uppercase tracking-[0.3em]">
              TechSahayata : Crafting Digital Love
            </span>
          </motion.div>

          {/* HEADLINE – unchanged */}
          <div className="relative mb-5">
            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight"
            >
              WE BUILD
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-2 inline-flex items-center justify-center px-8 py-3 md:px-12 md:py-4 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 shadow-[0_0_60px_-10px_rgba(249,115,22,0.5)] border border-orange-400/50"
            >
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1a0a00] leading-none tracking-tight">
                EMOTION
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 30 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] tracking-tight"
            >
              INTO REALITY
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="max-w-2xl text-orange-100/50 text-lg md:text-xl font-light leading-relaxed mb-6"
          >
            Elevating code into <span className="text-orange-300 font-medium italic underline decoration-orange-500/50 underline-offset-4">Art</span>. We create software that feels human.
          </motion.p>

          {/* 337% STAT BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/15 backdrop-blur-sm mb-10"
          >
            <BarChart3 size={16} className="text-orange-400" />
            <span className="text-orange-100/70 text-sm font-medium tracking-wide">
              Skyrocket Engagement &amp; Boost Sales by{" "}
              <span className="text-orange-400 font-bold text-lg">337%</span>
              {" "}with cartoon videos
            </span>
          </motion.div>

          {/* VIDEO PLAYER MOCKUP (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="relative w-full max-w-4xl rounded-3xl overflow-hidden shadow-[0_30px_80px_-20px_rgba(249,115,22,0.35)] border border-orange-500/20 group/video mb-10"
          >
            <div className="relative aspect-video bg-gradient-to-br from-[#1a0e08] via-[#2d160a] to-[#1a0e08] overflow-hidden">
              {/* cartoon background */}
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[10%] left-[15%] w-[40%] h-[30%] rounded-full bg-orange-500/15 blur-[60px]" />
                <div className="absolute bottom-[20%] right-[10%] w-[35%] h-[25%] rounded-full bg-amber-500/12 blur-[50px]" />
                <div className="absolute top-[30%] right-[20%] w-[20%] h-[20%] rounded-full bg-pink-500/8 blur-[40px]" />
              </div>

              {/* cartoon scene (unchanged) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-4/5 h-4/5">
                  <div className="absolute bottom-[8%] left-[10%] w-[80%] h-[14%] bg-gradient-to-r from-amber-800/50 to-amber-700/40 rounded-lg border border-amber-500/15" />
                  <div className="absolute bottom-[22%] left-[18%] w-[28%] h-[36%] bg-gradient-to-b from-[#1a1a2e] to-[#0d0d1a] rounded-xl border border-orange-500/20 shadow-2xl shadow-orange-900/30">
                    <div className="absolute top-[8%] left-[8%] w-[84%] h-[40%] bg-gradient-to-br from-orange-400/20 to-amber-400/15 rounded-lg" />
                    <div className="absolute bottom-[12%] left-[10%] w-[80%] h-1.5 rounded-full bg-orange-500/15" />
                    <div className="absolute bottom-[12%] left-[45%] w-[10%] h-1.5 rounded-full bg-orange-400/25" />
                    <div className="absolute top-[10%] left-[10%] w-[80%] h-[30%] bg-orange-400/8 blur-[20px]" />
                    <div className="absolute top-[25%] left-[30%] w-[40%] h-[30%] bg-orange-300/10 rounded-full" />
                    <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-amber-300/10 rounded-full" />
                  </div>
                  <div className="absolute bottom-[24%] right-[30%] w-[6%] h-[10%] bg-gradient-to-b from-amber-700/60 to-amber-800/40 rounded-t-sm border border-amber-500/15" />
                  <motion.div animate={{ y: [0, -5, 0], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-[34%] right-[31%] w-[2%] h-[6%] bg-amber-300/20 blur-sm" />
                  <div className="absolute bottom-[8%] left-[50%] translate-x-[-50%] w-[22%] h-[44%]">
                    <div className="absolute bottom-[20%] left-[15%] w-[70%] h-[55%] bg-gradient-to-b from-orange-500/25 to-amber-500/20 rounded-2xl border border-orange-500/10" />
                    <div className="absolute top-[0%] left-[20%] w-[60%] h-[38%] bg-gradient-to-b from-orange-400/25 to-amber-400/20 rounded-full border border-orange-500/10" />
                    <div className="absolute top-[18%] left-[30%] w-[12%] h-[8%] bg-orange-300/25 rounded-full" />
                    <div className="absolute top-[18%] left-[58%] w-[12%] h-[8%] bg-orange-300/25 rounded-full" />
                    <div className="absolute top-[34%] left-[32%] w-[36%] h-[6%] border-b-2 border-orange-400/20 rounded-full" />
                    <div className="absolute top-[-10%] left-[15%] w-[70%] h-[20%] bg-gradient-to-r from-orange-500/30 to-amber-500/20 rounded-full border border-orange-400/10" />
                  </div>
                  <motion.div animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[12%] right-[12%] w-[12%] h-[12%] bg-orange-400/10 rounded-full border border-orange-400/15 flex items-center justify-center text-2xl">✨</motion.div>
                  <motion.div animate={{ y: [0, 6, 0], rotate: [0, -4, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }} className="absolute bottom-[40%] left-[8%] w-[10%] h-[10%] bg-amber-400/10 rounded-full border border-amber-400/15 flex items-center justify-center text-xl">🎨</motion.div>

                  {/* Unmute overlay */}
                  <div
                    className="absolute bottom-[12%] left-[50%] translate-x-[-50%] flex items-center gap-2 px-5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-orange-500/30 cursor-pointer hover:bg-black/80 transition-all"
                    onClick={toggleMute}
                  >
                    {isMuted ? <Volume2 size={16} className="text-orange-400" /> : <VolumeX size={16} className="text-orange-400" />}
                    <span className="text-white/80 text-xs font-medium tracking-wide">{isMuted ? "Unmute" : "Muted"}</span>
                  </div>

                  {/* ToonBee watermark */}
                  <div className="absolute top-[5%] left-[5%] flex items-center gap-1.5">
                    <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-[10px] font-black text-[#1a0800]">TB</div>
                    <span className="text-white/60 text-xs font-bold tracking-wider">ToonBee</span>
                  </div>
                </div>
              </div>

              {/* Play button */}
              <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                className="absolute inset-0 flex items-center justify-center z-10 group/play"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl animate-pulse" />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 shadow-[0_0_60px_-10px_rgba(249,115,22,0.5)] flex items-center justify-center transition-transform duration-300 group-hover/play:shadow-[0_0_80px_-10px_rgba(249,115,22,0.6)]">
                    <Play size={32} className="text-[#1a0800] fill-[#1a0800] ml-1" />
                  </div>
                </div>
              </motion.button>

              {/* Video controls */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center px-4 gap-3">
                <button onClick={togglePlay} className="text-white/60 hover:text-white transition-colors">
                  {isPlaying ? <div className="w-3 h-3 border-2 border-white/60" /> : <Play size={14} className="fill-white/60" />}
                </button>
                <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[35%] h-full bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />
                </div>
                <span className="text-white/40 text-[10px] font-mono">0:35 / 2:18</span>
                <button onClick={toggleMute} className="text-white/40 hover:text-white/70 transition-colors">
                  {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
                </button>
                <button className="text-white/40 hover:text-white/70 transition-colors">
                  <Maximize2 size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ─── UPDATED FEATURE BADGES (exact wording from your image) ─── */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/10 backdrop-blur-sm"
            >
              <Clock size={14} className="text-orange-400" />
              <span className="text-orange-100/60 text-xs font-medium">Full Length Text-1 (2-4 Video)</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/10 backdrop-blur-sm"
            >
              <Library size={14} className="text-orange-400" />
              <span className="text-orange-100/60 text-xs font-medium">Multi‑Style Cartoon Library</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/10 backdrop-blur-sm"
            >
              <Globe size={14} className="text-orange-400" />
              <span className="text-orange-100/60 text-xs font-medium">Works in 40+ Languages</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/20 backdrop-blur-sm"
            >
              <Star size={14} className="text-orange-400" />
              <span className="text-orange-100/80 text-xs font-medium">Full Creative Control (without complexity)</span>
            </motion.div>
          </div>

          {/* ─── NEW: extra badge for "Click Generate" ─── */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/10 backdrop-blur-sm mb-8"
          >
            <Wand2 size={14} className="text-orange-400" />
            <span className="text-orange-100/60 text-xs font-medium">Click Generate &amp; ToonBee automatically creates everything</span>
          </motion.div>

          {/* 3‑STEP PILLS (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/10 backdrop-blur-sm">
              <CheckCircle size={14} className="text-orange-400" />
              <span className="text-orange-100/60 text-xs font-medium">1. Write script</span>
            </div>
            <ArrowRight size={14} className="text-orange-500/30" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/10 backdrop-blur-sm">
              <CheckCircle size={14} className="text-orange-400" />
              <span className="text-orange-100/60 text-xs font-medium">2. Pick style</span>
            </div>
            <ArrowRight size={14} className="text-orange-500/30" />
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/20 backdrop-blur-sm">
              <CheckCircle size={14} className="text-orange-400" />
              <span className="text-orange-100/80 text-xs font-medium">3. Export &amp; amaze ✨</span>
            </div>
          </motion.div>

          {/* YOUR ORIGINAL SERVICE CARDS – untouched */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-5xl">
            <ServiceCard index={1} icon={<Monitor />} title="Web Mastery" desc="Next-gen experiences built with velocity and grace." />
            <ServiceCard index={2} icon={<Smartphone />} title="Mobile Native" desc="Fluid interfaces that live beautifully in your pocket." featured />
            <ServiceCard index={3} icon={<Layers />} title="Cloud Design" desc="Robust backends fueling your digital revolution." />
          </div>

          {/* MAGNETIC CTA – your original */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="mt-14"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-4 bg-gradient-to-r from-orange-500 to-red-500 text-[#1a0500] px-12 py-5 rounded-2xl font-black text-xl shadow-[0_20px_60px_-15px_rgba(249,115,22,0.4)] hover:shadow-[0_20px_60px_-10px_rgba(249,115,22,0.6)] transition-shadow overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Start Journey</span>
              <ArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── ServiceCard (unchanged) ───
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
      transition={{ delay: 0.8 + (index * 0.1), duration: 0.6 }}
      className={`group relative overflow-hidden p-7 rounded-3xl border transition-all duration-700
        ${featured
          ? 'border-orange-500/30 bg-gradient-to-b from-orange-950/30 to-red-950/15 scale-105 z-10 md:shadow-2xl md:shadow-orange-900/15'
          : 'border-orange-500/10 bg-orange-950/10 hover:border-orange-500/25'
        }`}
    >
      <div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 inset-0 z-0"
        style={{
          background: `radial-gradient(500px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(249, 115, 22, 0.1), transparent 40%)`
        }}
      />
      <div className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:-translate-y-1
        ${featured ? 'bg-gradient-to-br from-orange-400 to-red-500 text-[#1a0500] shadow-lg shadow-orange-500/20' : 'bg-orange-500/10 text-orange-400'}`}>
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <h3 className="relative z-10 text-white font-bold text-xl mb-2 tracking-tight">{title}</h3>
      <p className="relative z-10 text-orange-100/40 group-hover:text-orange-100/60 transition-colors duration-500 text-sm leading-relaxed">
        {desc}
      </p>
      <div className={`absolute top-0 right-0 w-20 h-20 blur-[50px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000
        ${featured ? 'bg-orange-500' : 'bg-red-500'}`} />
    </motion.div>
  );
}