"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe, Smartphone, Bot, ArrowUpRight, Sparkles, Zap, Star, Flame } from "lucide-react";

const services = [
  {
    icon: <Globe size={22} />,
    tag: "Web",
    title: "Web Experience",
    desc: "Beyond simple domains—we build high-performance, responsive web ecosystems designed to engage and convert your audience globally.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011953/stick_website_assets/yzla03aleaywmmvuirve.png",
    emoji: "🚀",
    accent: "from-orange-400 to-amber-400",
  },
  {
    icon: <Smartphone size={22} />,
    tag: "Mobile",
    title: "Mobile Innovation",
    desc: "Native and cross-platform software crafted for iOS and Android, putting the power of Techsahayata right in your pocket.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011918/stick_website_assets/whynhgjynqe9vsf0nq3p.jpg",
    emoji: "📱",
    accent: "from-amber-400 to-yellow-400",
  },
  {
    icon: <Bot size={22} />,
    tag: "AI / RPA",
    title: "Intelligent RPA",
    desc: "Uniting RPA with AI to automate complex, unstructured workflows. We don't just mimic human actions; we amplify human intelligence.",
    image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011935/stick_website_assets/z3veldz5x2r8kktrg1fm.webp",
    emoji: "🤖",
    accent: "from-orange-500 to-red-400",
  },
];

const floatingEmojis = [
  { emoji: "✨", x: "8%", y: "15%", delay: 0, duration: 4 },
  { emoji: "🔥", x: "92%", y: "20%", delay: 0.5, duration: 5 },
  { emoji: "⚡", x: "5%", y: "70%", delay: 1, duration: 3.5 },
  { emoji: "💎", x: "95%", y: "65%", delay: 1.5, duration: 4.5 },
  { emoji: "🎯", x: "50%", y: "8%", delay: 0.8, duration: 5.5 },
  { emoji: "🌟", x: "15%", y: "90%", delay: 0.3, duration: 4.2 },
  { emoji: "🔮", x: "85%", y: "88%", delay: 1.2, duration: 3.8 },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-28 md:py-36 overflow-hidden bg-white/95 bg-gradient-to-b from-white via-orange-50/30 to-white"
    >
      {/* ─── BOTTOM LEMON GRADIENT (like hero but softer) ─── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Bottom linear glow – lemon to transparent */}
        <div
          className="absolute bottom-0 left-0 w-full h-2/3"
          style={{
            background: `linear-gradient(to top, 
              rgba(255, 215, 0, 0.18) 0%, 
              rgba(255, 200, 50, 0.10) 30%, 
              rgba(251, 146, 60, 0.04) 60%, 
              transparent 100%)`,
          }}
        />
        {/* Radial lemon spot at bottom center */}
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-yellow-300/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-5%] right-[10%] w-[40%] h-[40%] bg-amber-300/10 rounded-full blur-[150px]" />
        {/* Warm ambient glows (lighter) */}
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-orange-200/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-yellow-100/10 rounded-full blur-[120px]" />
      </div>

      {/* Floating emoji decorations (recolored for light bg) */}
      {floatingEmojis.map((item, i) => (
        <motion.div
          key={i}
          className="absolute z-[5] pointer-events-none hidden md:block"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, -8, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <span className="text-2xl lg:text-3xl drop-shadow-[0_0_20px_rgba(251,191,36,0.3)] filter">
            {item.emoji}
          </span>
        </motion.div>
      ))}

      <div className="container relative z-10 mx-auto px-6 lg:px-12 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 text-xs font-bold tracking-[0.2em] text-orange-600 uppercase bg-orange-100/60 border border-orange-200/50 rounded-full"
          >
            <Sparkles size={14} className="text-orange-500" />
            The Future of Automation
            <Sparkles size={14} className="text-orange-500" />
          </motion.span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.05] tracking-tight">
            AI-Powered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
              Web & Application
            </span>{" "}
            Solutions by Techsahayata.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-500/70 max-w-2xl mx-auto leading-relaxed font-light">
            At the pace that suits you—transforming raw insights into revolutionary inventions with seamless AI integration.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0];
  index: number;
  isInView: boolean;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.15 + index * 0.15, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-[2rem] overflow-hidden cursor-pointer"
    >
      {/* Card background – white with soft shadow */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm border border-orange-200/30 rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_-15px_rgba(251,146,60,0.15)] transition-shadow duration-700" />

      {/* Bottom-right warm glow (lemon) */}
      <div
        className="absolute bottom-0 right-0 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 100%, rgba(251,191,36,0.15) 0%, rgba(245,158,11,0.05) 40%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />

      {/* Mouse-following spotlight (light version) */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-[2rem]"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(251,191,36,0.08), transparent 50%)`,
        }}
      />

      {/* Top gradient line */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-orange-300/30 to-transparent" />

      {/* Floating emoji near card — top right corner */}
      <motion.div
        className="absolute -top-3 -right-3 z-20 hidden lg:block"
        animate={{
          y: [0, -8, 0],
          rotate: [0, 12, -8, 0],
        }}
        transition={{
          duration: 3 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-100/80 to-amber-100/80 border border-orange-200/50 backdrop-blur-md flex items-center justify-center text-2xl shadow-lg shadow-orange-200/30">
          {service.emoji}
        </div>
      </motion.div>

      {/* Corner sparkle decorations */}
      <motion.div
        className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <Star size={14} className="text-orange-400/40" />
      </motion.div>

      <div className="relative z-10 p-6 lg:p-7">
        {/* Image container */}
        <div className="relative overflow-hidden rounded-2xl mb-7 aspect-[4/3]">
          <img
            src={service.image}
            alt={service.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
          />
          {/* Image overlay gradient – lighter */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

          {/* Tag badge – light version */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-bold tracking-wider text-orange-700 uppercase bg-white/70 backdrop-blur-md border border-orange-200/50 rounded-full shadow-sm">
              {service.icon}
              {service.tag}
            </span>
          </div>

          {/* Emoji floating on image */}
          <motion.div
            className="absolute top-4 right-4"
            animate={{ y: [0, -5, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-xl drop-shadow-lg">{service.emoji}</span>
          </motion.div>

          {/* Arrow icon on hover – orange */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={isHovered ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.5, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30"
          >
            <ArrowUpRight size={18} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex items-center gap-3 mb-2">
          <h3 className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-orange-700 transition-colors duration-500">
            {service.title}
          </h3>
          <motion.span
            className="text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={isHovered ? { y: [0, -3, 0] } : {}}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            {service.emoji}
          </motion.span>
        </div>

        <p className="text-sm lg:text-[15px] text-gray-500/70 group-hover:text-gray-700 leading-relaxed transition-colors duration-500">
          {service.desc}
        </p>

        {/* Bottom accent line – orange */}
        <div className="mt-6 h-px w-full bg-gradient-to-r from-orange-300/40 via-orange-200/20 to-transparent group-hover:from-orange-400/60 transition-all duration-500" />

        {/* Bottom row: emoji + read more hint */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm opacity-50 group-hover:opacity-80 transition-opacity">{service.emoji}</span>
            <span className="text-[10px] font-bold tracking-wider text-orange-400/60 group-hover:text-orange-500 uppercase transition-colors">
              Explore
            </span>
          </div>
          <motion.div
            animate={isHovered ? { x: [0, 4, 0] } : {}}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Zap size={14} className="text-orange-300/50 group-hover:text-orange-500/70 transition-colors" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}