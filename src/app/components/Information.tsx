"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Globe,
  Smartphone,
  Cpu,
  Shield,
  Lock,
  Zap,
  Cloud,
  Database,
  Server,
  Code,
  Terminal,
  GitBranch,
  Sparkles,
  Star,
  Gem,
  Orbit,
  Award,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";

/* ───────── DATA ───────── */

const featureData = [
  {
    title: "Websites",
    icon: <Globe className="w-6 h-6 md:w-7 md:h-7 text-orange-500" />,
    points: [
      "24/7 online presence",
      "Builds brand credibility",
      "Cost‑effective marketing",
      "Easy to update info",
    ],
    gradient: "from-orange-400/30 via-amber-400/20 to-transparent",
    badge: "High Impact",
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />,
    points: [
      "Enhances engagement",
      "Access anytime, anywhere",
      "Push notifications",
      "Personalized experience",
    ],
    gradient: "from-amber-400/30 via-orange-400/20 to-transparent",
    badge: "iOS & Android",
  },
  {
    title: "Applications & Software",
    icon: <Layers className="w-6 h-6 md:w-7 md:h-7 text-orange-500" />,
    points: [
      "Streamline operations",
      "Automate workflows",
      "Save time & reduce errors",
      "Data‑driven insights",
    ],
    gradient: "from-red-400/30 via-orange-400/20 to-transparent",
    badge: "Enterprise Ready",
  },
  {
    title: "RPA & AI Automation",
    icon: <Cpu className="w-6 h-6 md:w-7 md:h-7 text-amber-500" />,
    points: [
      "Automates tasks",
      "Improves accuracy",
      "Adapts with learning",
      "Smart predictions",
    ],
    gradient: "from-amber-400/30 via-yellow-400/20 to-transparent",
    badge: "AI Powered",
  },
];

const stats = [
  { icon: <Award className="w-6 h-6" />, value: "99.9%", label: "Uptime" },
  { icon: <Users className="w-6 h-6" />, value: "10k+", label: "Active Users" },
  { icon: <Clock className="w-6 h-6" />, value: "60%", label: "Faster Processes" },
];

const techIcons = [
  Cloud,
  Database,
  Server,
  Code,
  Terminal,
  GitBranch,
  Zap,
  Lock,
  Sparkles,
  Star,
  Gem,
  Orbit,
];

/* ───────── COMPONENTS ───────── */

function FloatingParticles({ count = 24 }: { count?: number }) {
  const [particles, setParticles] = useState<
    Array<{
      Icon: any;
      x: number;
      y: number;
      size: number;
      opacity: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, () => ({
      Icon: techIcons[Math.floor(Math.random() * techIcons.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 18 + Math.random() * 28,
      opacity: 0.04 + Math.random() * 0.08,
      duration: 16 + Math.random() * 20,
      delay: Math.random() * 8,
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{
            y: [0, -35, 0],
            x: [0, 20, -10, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        >
          <p.Icon
            size={p.size}
            className="text-orange-400"
            style={{ opacity: p.opacity }}
          />
        </motion.div>
      ))}
    </div>
  );
}

function GlassCard({
  children,
  className = "",
  glowColor = "rgba(251,191,36,0.15)",
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springConfig = { damping: 22, stiffness: 200 };
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), springConfig);
  const scale = useSpring(1, { damping: 20, stiffness: 250 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });
    rawX.set(x / rect.width - 0.5);
    rawY.set(y / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    scale.set(1);
  };

  const handleMouseEnter = () => {
    scale.set(1.02);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      className={`relative group h-full ${className}`}
    >
      <motion.div
        className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
        }}
      />

      <div className="relative h-full flex flex-col justify-between bg-white/80 backdrop-blur-sm border border-orange-200/30 group-hover:border-orange-300/60 rounded-2xl md:rounded-3xl shadow-[0_8px_40px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_-15px_rgba(251,146,60,0.12)] transition-shadow duration-300 p-5 sm:p-6 md:p-7">
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(251,191,36,0.08), transparent 80%)`,
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref} className="font-black text-3xl md:text-5xl text-gray-900 tracking-tight">
      {isInView ? value : "0"}
    </span>
  );
}

/* ───────── MAIN COMPONENT ───────── */

export default function AwesomeTechSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const featuresRef = useRef<HTMLDivElement>(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-60px" });

  const safetyRef = useRef<HTMLDivElement>(null);
  const safetyInView = useInView(safetyRef, { once: true, margin: "-60px" });

  const rpaRef = useRef<HTMLDivElement>(null);
  const rpaInView = useInView(rpaRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-white/95 bg-gradient-to-b from-white via-orange-50/30 to-white text-gray-900 selection:bg-orange-500 selection:text-white py-16 md:py-28"
    >
      {/* ─── BOTTOM LEMON GRADIENT ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
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
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-yellow-300/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-5%] right-[10%] w-[40%] h-[40%] bg-amber-300/12 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-yellow-100/10 rounded-full blur-[120px]" />
      </div>

      <FloatingParticles count={26} />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-orange-200/20 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-amber-200/20 rounded-full blur-[90px] sm:blur-[130px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
        {/* ─── HERO HEADER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-14 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-orange-100/60 border border-orange-200/50 text-xs sm:text-sm font-semibold text-orange-600 tracking-wide uppercase backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
            <span>Next‑Gen Digital Ecosystem</span>
          </motion.div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-gray-900 leading-[1.15]">
            Build Smarter. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-amber-500">
              Scale Exponentially.
            </span>
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-xl text-gray-500/70 max-w-2xl mx-auto font-light leading-relaxed">
            End‑to‑end web development, intelligent automation, and bespoke AI architectures engineered to transform your business.
          </p>
        </motion.div>

        {/* ─── FEATURE GRID ─── */}
        <div ref={featuresRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Left Column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {featureData.slice(0, 2).map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-1"
                initial={{ opacity: 0, x: -40 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.18, duration: 0.6 }}
              >
                <GlassCard>
                  <div>
                    <div className="flex items-center justify-between mb-4 gap-2">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-orange-100/60 border border-orange-200/50 shrink-0 text-orange-600">
                        {item.icon}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-orange-100/50 border border-orange-200/50 text-orange-700 shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>

                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600/80 mb-5">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 group/item">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full mt-auto`} />
                </GlassCard>
              </motion.div>
            ))}
          </div>

          {/* Center Column: Robot Visual */}
          <div className="lg:col-span-6 flex justify-center items-center py-4 lg:py-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={featuresInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative group cursor-pointer w-full max-w-sm sm:max-w-md lg:max-w-none"
            >
              <motion.div
                className="absolute -inset-4 sm:-inset-8 rounded-full bg-gradient-to-r from-orange-300/30 to-amber-300/30 blur-2xl sm:blur-3xl pointer-events-none"
                animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />

              <motion.div
                className="absolute -inset-4 sm:-inset-8 rounded-full border border-orange-300/30 pointer-events-none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-3 h-3 bg-orange-400 rounded-full shadow-lg shadow-orange-400/30 absolute -top-1.5 left-1/2 -translate-x-1/2" />
              </motion.div>

              <motion.div
                className="absolute -inset-8 sm:-inset-14 rounded-full border border-amber-300/20 pointer-events-none"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2.5 h-2.5 bg-amber-300 rounded-full shadow-md shadow-amber-300/30 absolute top-1/2 -right-1.5 -translate-y-1/2" />
              </motion.div>

              <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-10 border border-orange-300/30 shadow-2xl shadow-orange-200/30">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011925/stick_website_assets/mhx4rg1w4utnmkfqj7rb.gif"
                  alt="AI Automation Robot"
                  className="w-full max-w-[200px] sm:max-w-[260px] lg:max-w-[300px] mx-auto rounded-xl object-contain drop-shadow-[0_20px_20px_rgba(251,146,60,0.15)]"
                />
              </div>

              <motion.div
                className="absolute -top-3 -right-2 sm:-right-4 bg-orange-100/80 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-orange-700 border border-orange-300/50 shadow-lg"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                ✨ Autonomous AI
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-2 sm:-left-4 bg-amber-100/80 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-amber-700 border border-amber-300/50 shadow-lg"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                ⚡ 24/7 Scalable
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {featureData.slice(2).map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-1"
                initial={{ opacity: 0, x: 40 }}
                animate={featuresInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.18, duration: 0.6 }}
              >
                <GlassCard>
                  <div>
                    <div className="flex items-center justify-between mb-4 gap-2">
                      <div className="p-2.5 sm:p-3 rounded-xl bg-orange-100/60 border border-orange-200/50 shrink-0 text-orange-600">
                        {item.icon}
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-orange-100/50 border border-orange-200/50 text-orange-700 shrink-0">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>

                    <ul className="space-y-2 text-xs sm:text-sm text-gray-600/80 mb-5">
                      {item.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-2.5 group/item">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`h-1 w-full bg-gradient-to-r ${item.gradient} rounded-full mt-auto`} />
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── STATS STRIP ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 sm:mt-20 md:mt-28 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group p-5 sm:p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-orange-200/30 text-center overflow-hidden hover:border-orange-300/60 transition-colors shadow-[0_8px_40px_-12px_rgba(0,0,0,0.04)]"
            >
              <div className="text-orange-500 flex justify-center mb-2.5 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <AnimatedCounter value={stat.value} />
              <p className="text-gray-500/70 text-xs sm:text-sm font-medium uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* ─── DATA SAFETY SECTION ─── */}
        <motion.div
          ref={safetyRef}
          initial={{ opacity: 0, y: 50 }}
          animate={safetyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-20 sm:mt-28 md:mt-36 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 order-2 lg:order-1">
            <GlassCard glowColor="rgba(245,158,11,0.15)">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-orange-100/60 border border-orange-200/50 text-orange-600 shrink-0">
                  <Shield size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Will our Data be Safe?
                </h2>
              </div>

              <p className="text-gray-600/80 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                Absolutely. Your enterprise data is{" "}
                <span className="text-orange-600 font-semibold underline underline-offset-4 decoration-orange-400/50">
                  100% secure and isolated
                </span>
                . Only authorized team members within your organization maintain access control.
              </p>

              <p className="mt-3 sm:mt-4 text-gray-600/80 leading-relaxed text-sm sm:text-base md:text-lg font-light">
                All information is protected via end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), backed by routine third-party penetration testing and compliance audits.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 pt-4 border-t border-orange-200/30">
                <div className="flex items-center gap-2 text-orange-700 text-xs sm:text-sm font-semibold bg-orange-100/60 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-orange-200/50">
                  <Lock size={16} /> AES-256 Encryption
                </div>
                <div className="flex items-center gap-2 text-orange-700 text-xs sm:text-sm font-semibold bg-orange-100/60 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl border border-orange-200/50">
                  <Shield size={16} /> Audited Architecture
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <motion.div
              initial={{ scale: 0.9, rotate: -3 }}
              animate={safetyInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="relative group w-full max-w-md"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-300/30 to-amber-300/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
              <img
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011881/stick_website_assets/lvmwfoyhfdmqdltfrtv6.webp"
                alt="Data Security"
                className="relative w-full rounded-2xl shadow-2xl border border-orange-300/30 object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* ─── RPA FINANCE SECTION ─── */}
        <motion.div
          ref={rpaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={rpaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-20 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {/* Card 1 */}
          <GlassCard>
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="p-2.5 rounded-xl bg-orange-100/60 border border-orange-200/50 text-orange-600 shrink-0">
                  <Cpu size={24} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  Can RPA empower Finance & Accounting?
                </h3>
              </div>

              <div className="overflow-hidden rounded-xl mb-5 border border-orange-200/30">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011894/stick_website_assets/a9sa8hjnhj2ufrbfhtgl.jpg"
                  alt="RPA Finance"
                  className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="text-gray-600/80 leading-relaxed text-xs sm:text-sm md:text-base font-light">
                Automation optimizes high-touch financial workflows, freeing team members from repetitive manual data entry while dramatically boosting satisfaction and accuracy.
              </p>
              <p className="text-gray-600/80 leading-relaxed text-xs sm:text-sm md:text-base font-light mt-2.5 sm:mt-3">
                End-to-end process bots reduce operational overhead by up to 60%, connecting legacy ERP systems with modern cloud infrastructure securely.
              </p>
            </div>
          </GlassCard>

          {/* Card 2 */}
          <GlassCard>
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-5">
                <div className="p-2.5 rounded-xl bg-amber-100/60 border border-amber-200/50 text-amber-600 shrink-0">
                  <Zap size={24} />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                  What processes can be automated?
                </h3>
              </div>

              <div className="overflow-hidden rounded-xl mb-5 border border-amber-200/30">
                <img
                  src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011895/stick_website_assets/bkhpqiggdhhhplavtz58.jpg"
                  alt="Automation Scope"
                  className="w-full h-44 sm:h-52 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <p className="text-gray-600/80 leading-relaxed text-xs sm:text-sm md:text-base font-light">
                From customer onboarding, invoice processing, and accounts payable to bank reconciliations and automated tax reporting — almost any rule-based routine can be automated.
              </p>
              <p className="text-gray-600/80 leading-relaxed text-xs sm:text-sm md:text-base font-light mt-2.5 sm:mt-3">
                Process heatmaps identify key operational bottlenecks to maximize return on investment from day one.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        {/* ─── CALL TO ACTION ─── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-20 sm:mt-24 md:mt-32 text-center"
        >
          <div className="inline-block relative group max-w-full">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 blur-xl opacity-75 group-hover:opacity-100 transition duration-500 group-hover:scale-105 animate-pulse" />

            <div className="relative bg-white/80 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5 rounded-full border border-orange-300/40 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 shadow-2xl shadow-orange-200/30">
              <span className="text-gray-900 font-bold text-base sm:text-xl tracking-tight text-center sm:text-left">
                Ready to accelerate your workflow?
              </span>

              <button className="relative group/btn overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-white font-extrabold py-3 sm:py-3.5 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 flex items-center gap-2 text-xs sm:text-base shrink-0">
                <span className="relative z-10">Get Started Now</span>
                <ArrowRight size={18} className="relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}