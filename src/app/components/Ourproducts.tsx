"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
    motion,
    useInView,
    useMotionValue,
    useSpring,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import {
    ArrowRight,
    Sparkles,
    Star,
    Zap,
    Gem,
    Brain,
    Gauge,
    RefreshCw,
    Check,
    Orbit,
    Fingerprint,
    Box,
    Cpu,
    Cloud,
    Shield,
    Layers,
    GitBranch,
    Database,
    Server,
    Code,
    Terminal,
    Globe,
    Lock,
    ArrowLeft,
} from "lucide-react";

/* ───────── DATA ───────── */

const impactFeatures = [
    { label: "Streamlined Data", color: "from-orange-400 to-amber-400", detail: "Real-time data pipelines with 99.9% accuracy." },
    { label: "Predictive Automation", color: "from-amber-400 to-yellow-400", detail: "AI models that forecast trends before they emerge." },
    { label: "AI-Driven Logic", color: "from-orange-400 to-amber-400", detail: "Decision engines that learn and adapt with every interaction." },
    { label: "Seamless Synergy", color: "from-amber-400 to-yellow-400", detail: "Unified ecosystems where data flows frictionlessly." },
];

const triptych = [
    {
        title: "Cognitive Insights",
        desc: "Convert raw numbers into strategic advantages with intelligent analytics.",
        icon: Brain,
    },
    {
        title: "Rapid Velocity",
        desc: "Shatter bottlenecks with automation pipelines that work while you sleep.",
        icon: Gauge,
    },
    {
        title: "Strategic Agility",
        desc: "Build a tech stack that pivots as fast as the global market demands.",
        icon: RefreshCw,
    },
];

const rpaList = [
    "Automates repetitive and rule-based tasks seamlessly",
    "Improves data accuracy and reduces human error",
    "Integrates AI for predictive and adaptive processes",
    "Frees human talent for creative and strategic roles",
];

const benefitCards = [
    { icon: "🤖", title: "Process Automation", desc: "Automate time-consuming, repetitive business tasks with precision." },
    { icon: "⚙️", title: "Workflow Optimization", desc: "Streamline operations and enhance inter-departmental collaboration." },
    { icon: "📊", title: "AI Insights", desc: "Gain real-time analytics and data-driven decision-making capabilities." },
    { icon: "🚀", title: "Scalable Efficiency", desc: "Expand automation to handle complex processes at enterprise scale." },
];

const products = [
    {
        title: "Website Development",
        description:
            "We build high-performance, responsive web ecosystems designed to engage and convert your audience globally. From landing pages to full-scale platforms.",
        icon: <Cloud size={24} />,
    },
    {
        title: "Mobile Applications",
        description:
            "Native and cross-platform software crafted for iOS and Android, putting the power of Techsahayata right in your pocket with seamless UX.",
        icon: <Layers size={24} />,
    },
];

/* ───────── UTILITY: useMousePosition ───────── */
function useMousePosition() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const handleMove = useCallback((e: MouseEvent) => {
        x.set(e.clientX);
        y.set(e.clientY);
    }, [x, y]);
    useEffect(() => {
        window.addEventListener("mousemove", handleMove);
        return () => window.removeEventListener("mousemove", handleMove);
    }, [handleMove]);
    return { x, y };
}

/* ───────── COMPONENT: FloatingCube ───────── */
function FloatingCube() {
    const { x, y } = useMousePosition();
    const rotateX = useSpring(useTransform(y, [0, window.innerHeight], [10, -10]), { damping: 30 });
    const rotateY = useSpring(useTransform(x, [0, window.innerWidth], [-10, 10]), { damping: 30 });

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="w-20 h-20 md:w-28 md:h-28 relative"
        >
            <motion.div
                className="absolute inset-0 border border-orange-200/30 rounded-xl bg-orange-100/20 backdrop-blur-sm shadow-2xl"
                style={{
                    transform: "translateZ(30px)",
                }}
            />
            <motion.div
                className="absolute inset-0 border border-amber-200/30 rounded-xl bg-amber-100/20 backdrop-blur-sm"
                style={{
                    transform: "translateZ(-10px)",
                }}
            />
            <motion.div
                className="absolute inset-0 border border-orange-300/20 rounded-xl bg-orange-200/10"
                style={{
                    transform: "translateZ(10px)",
                }}
            />
        </motion.div>
    );
}

/* ───────── COMPONENT: FloatingTechIcons (light version) ───────── */
const techIcons = [
    Cpu, Cloud, Shield, Layers, GitBranch, Database,
    Server, Code, Terminal, Globe, Lock, Zap,
];

function FloatingTechIcons({ count = 12 }) {
    const [icons, setIcons] = useState<
        Array<{
            Icon: React.ElementType;
            x: number;
            y: number;
            size: number;
            opacity: number;
            duration: number;
            delay: number;
            rotate: number;
        }>
    >([]);

    useEffect(() => {
        const newIcons = Array.from({ length: count }, () => {
            const Icon = techIcons[Math.floor(Math.random() * techIcons.length)];
            return {
                Icon,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: 20 + Math.random() * 40,
                opacity: 0.04 + Math.random() * 0.08,
                duration: 12 + Math.random() * 20,
                delay: Math.random() * 15,
                rotate: Math.random() * 360,
            };
        });
        setIcons(newIcons);
    }, [count]);

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {icons.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        left: `${item.x}%`,
                        top: `${item.y}%`,
                    }}
                    animate={{
                        y: [0, -25, 0],
                        x: [0, 20, -15, 0],
                        rotate: [0, item.rotate, 0],
                    }}
                    transition={{
                        duration: item.duration,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut",
                    }}
                >
                    <item.Icon
                        size={item.size}
                        className="text-orange-400/10"
                        style={{ opacity: item.opacity }}
                    />
                </motion.div>
            ))}
        </div>
    );
}

/* ───────── MAIN EXPORT ───────── */
export default function ImpactAndBenefitsSection() {
    const s1Ref = useRef<HTMLElement>(null);
    const s2Ref = useRef<HTMLElement>(null);
    const s3Ref = useRef<HTMLElement>(null);
    const v1 = useInView(s1Ref, { once: true, margin: "-80px" });
    const v2 = useInView(s2Ref, { once: true, margin: "-80px" });
    const v3 = useInView(s3Ref, { once: true, margin: "-80px" });

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        if (v1) {
            const interval = setInterval(() => {
                setCounter((prev) => (prev + 1) % 100);
            }, 50);
            return () => clearInterval(interval);
        }
    }, [v1]);

    const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const totalBenefitCards = benefitCards.length;
    useEffect(() => {
        if (v2) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % totalBenefitCards);
                if (carouselRef.current) {
                    const cardWidth = carouselRef.current.children[0]?.clientWidth || 300;
                    carouselRef.current.scrollTo({
                        left: activeIndex * cardWidth,
                        behavior: "smooth",
                    });
                }
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [v2, activeIndex, totalBenefitCards]);

    return (
        <>
            {/* ─── SHARED BOTTOM LEMON GRADIENT (applies to all subsections) ─── */}
            <div className="relative">
                {/* This gradient will be inherited by all child sections via absolute positioning */}
            </div>

            {/* ════════════════════════════════════════
                SECTION 1 — IMPACT OF INTELLIGENCE
               ════════════════════════════════════════ */}
            <section
                ref={s1Ref}
                className="relative w-full py-28 md:py-36 overflow-hidden bg-white/95 bg-gradient-to-b from-white via-orange-50/30 to-white"
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

                {/* Flying Tech Icons (light) */}
                <FloatingTechIcons count={16} />

                {/* Animated gradient overlay (light) */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        background: [
                            "radial-gradient(ellipse at 20% 20%, rgba(251,191,36,0.12) 0%, transparent 50%)",
                            "radial-gradient(ellipse at 80% 80%, rgba(245,158,11,0.12) 0%, transparent 50%)",
                            "radial-gradient(ellipse at 40% 60%, rgba(249,115,22,0.08) 0%, transparent 50%)",
                            "radial-gradient(ellipse at 20% 20%, rgba(251,191,36,0.12) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                />

                {/* Floating cubes (light) */}
                <div className="absolute top-10 left-10 opacity-20">
                    <FloatingCube />
                </div>
                <div className="absolute bottom-20 right-10 opacity-20 scale-75">
                    <FloatingCube />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 scale-150">
                    <FloatingCube />
                </div>

                <div className="relative z-10 container mx-auto px-6 lg:px-20">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={v1 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="max-w-3xl mx-auto text-center mb-24"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={v1 ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-3 px-5 py-2 mb-8 rounded-full bg-orange-100/60 border border-orange-200/50 text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                            Quantum Core
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight leading-tight">
                            The{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
                                Impact
                            </span>{" "}
                            of Intelligence
                        </h2>
                        <p className="text-lg md:text-xl text-gray-500/70 leading-relaxed font-light">
                            Empower your organization with software that doesn't just process data—it{" "}
                            <span className="text-gray-700 font-semibold italic">amplifies potential</span>.
                        </p>
                    </motion.div>

                    {/* Dynamic Dashboard Card (light) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={v1 ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="relative z-10"
                    >
                        <div className="relative group rounded-[2.5rem] bg-white border border-orange-200/30 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] p-[2px]">
                            <div className="relative rounded-[2.4rem] bg-white/95 p-8 md:p-12 overflow-hidden">
                                {/* Animated background pattern (light) */}
                                <motion.div
                                    className="absolute inset-0 opacity-5"
                                    style={{
                                        backgroundImage: "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.2) 1px, transparent 1px)",
                                        backgroundSize: "40px 40px",
                                    }}
                                    animate={{
                                        backgroundPosition: ["0px 0px", "40px 40px"],
                                    }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                />

                                <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                                    {/* Left — Interactive Feature List */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -40 }}
                                        animate={v1 ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.4, duration: 0.7 }}
                                        className="flex-1 order-2 lg:order-1"
                                    >
                                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                                            Smarter Processes. <br />
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                                                Exponential Results.
                                            </span>
                                        </h3>

                                        <div className="grid gap-5">
                                            {impactFeatures.map((item, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={v1 ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ delay: 0.5 + idx * 0.1, duration: 0.5 }}
                                                    whileHover={{ scale: 1.02, x: 8 }}
                                                    className="group/item p-4 rounded-2xl border border-orange-200/50 hover:border-orange-300/70 transition-all duration-300 bg-orange-50/50 hover:bg-orange-100/50 cursor-pointer"
                                                >
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 border border-orange-200/50 bg-orange-100/50 text-orange-600 group-hover/item:scale-110 group-hover/item:bg-orange-200/70 group-hover/item:border-orange-300">
                                                            <Check size={20} strokeWidth={3} />
                                                        </div>
                                                        <div>
                                                            <span className="text-lg font-medium text-gray-700 group-hover/item:text-gray-900 transition-colors">
                                                                {item.label}
                                                            </span>
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                whileHover={{ height: "auto", opacity: 1 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <p className="text-sm text-gray-500/70 mt-1">{item.detail}</p>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>

                                        {/* Live Counter */}
                                        <motion.div
                                            className="mt-8 flex items-center gap-4 text-gray-500/70 text-sm"
                                            initial={{ opacity: 0 }}
                                            animate={v1 ? { opacity: 1 } : {}}
                                            transition={{ delay: 1 }}
                                        >
                                            <span className="font-mono text-2xl font-bold text-orange-500">{counter}%</span>
                                            <span>intelligence amplification</span>
                                        </motion.div>
                                    </motion.div>

                                    {/* Right — Image */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={v1 ? { opacity: 1, x: 0 } : {}}
                                        transition={{ delay: 0.5, duration: 0.7 }}
                                        className="flex-1 flex justify-center order-1 lg:order-2 relative"
                                    >
                                        <div className="relative">
                                            <motion.div
                                                className="absolute -inset-4 bg-orange-300/20 rounded-full blur-2xl"
                                                animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                                                transition={{ duration: 4, repeat: Infinity }}
                                            />
                                            <img
                                                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011862/stick_website_assets/z3wmxmweewnzjmstmbod.png"
                                                alt="Digital Transformation"
                                                className="relative z-10 w-[300px] md:w-[380px] h-auto rounded-[2rem] transition-all duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 shadow-2xl shadow-orange-200/30"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Triptych (light) */}
                    <div className="mt-24 grid md:grid-cols-3 gap-10 lg:gap-12">
                        {triptych.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                animate={v1 ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.7 + i * 0.15, duration: 0.6 }}
                                whileHover={{
                                    y: -10,
                                    scale: 1.03,
                                    boxShadow: "0 20px 60px rgba(251,191,36,0.15)",
                                }}
                                className="relative group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-orange-200/30 hover:border-orange-300/60 transition-all duration-500 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)]"
                            >
                                <motion.div
                                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-100/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ filter: "blur(20px)" }}
                                />
                                <div className="relative z-10">
                                    <div className="mb-6 w-16 h-16 rounded-2xl bg-orange-100/60 border border-orange-200/50 flex items-center justify-center text-orange-600 transition-all duration-500 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-orange-500/20 group-hover:border-transparent">
                                        <item.icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-500/70 leading-relaxed font-light">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 2 — BENEFITS OF RPA, AI & AUTOMATION (Horizontal Carousel)
               ════════════════════════════════════════ */}
            <section
                ref={s2Ref}
                className="relative w-full py-28 md:py-36 overflow-hidden bg-white/95 bg-gradient-to-b from-white via-orange-50/30 to-white"
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

                {/* Flying Tech Icons (light) */}
                <FloatingTechIcons count={14} />

                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        background: [
                            "radial-gradient(ellipse at 70% 30%, rgba(251,191,36,0.08) 0%, transparent 50%)",
                            "radial-gradient(ellipse at 30% 70%, rgba(245,158,11,0.08) 0%, transparent 50%)",
                            "radial-gradient(ellipse at 70% 30%, rgba(251,191,36,0.08) 0%, transparent 50%)",
                        ],
                    }}
                    transition={{ duration: 12, repeat: Infinity }}
                />

                <div className="relative z-10 container mx-auto px-6 lg:px-12">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={v2 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={v2 ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-100/60 border border-orange-200/50 text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase"
                        >
                            <Zap size={12} />
                            Next-Gen Automation
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 capitalize leading-tight">
                            Benefits of{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
                                RPA, AI & Automation
                            </span>
                        </h2>
                        <p className="text-base md:text-lg text-gray-500/70 max-w-3xl mx-auto leading-relaxed">
                            Revolutionize your operations with intelligent automation that minimizes manual work, enhances precision,
                            and accelerates digital transformation across every business process.
                        </p>
                    </motion.div>

                    {/* ─── BOOK CAROUSEL (light) ─── */}
                    <div className="relative max-w-5xl mx-auto">
                        {/* Book container with 3D perspective */}
                        <div className="relative flex items-center justify-center perspective-1000">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ rotateY: -90, opacity: 0, scale: 0.8 }}
                                    animate={{ rotateY: 0, opacity: 1, scale: 1 }}
                                    exit={{ rotateY: 90, opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    style={{ transformStyle: "preserve-3d" }}
                                    className="relative w-full max-w-md mx-auto"
                                >
                                    {/* Book Page Card */}
                                    <div className="relative bg-white rounded-2xl border border-orange-200/50 shadow-2xl shadow-orange-200/30 overflow-hidden p-8 md:p-10">
                                        {/* Spine (left side decorative) */}
                                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-orange-400 to-amber-500 rounded-l-2xl" />
                                        
                                        {/* Book page texture overlay */}
                                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(249,115,22,0.2) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />

                                        <div className="relative z-10 flex flex-col items-center text-center">
                                            <div className="text-6xl mb-4">{benefitCards[activeIndex].icon}</div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-3">
                                                {benefitCards[activeIndex].title}
                                            </h3>
                                            <p className="text-gray-500/70 text-lg leading-relaxed">
                                                {benefitCards[activeIndex].desc}
                                            </p>
                                            {/* Page number */}
                                            <div className="mt-6 text-xs text-orange-400/60 font-mono">
                                                {activeIndex + 1} / {benefitCards.length}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrows (light) */}
                        <button
                            onClick={() => setActiveIndex((prev) => (prev - 1 + benefitCards.length) % benefitCards.length)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-orange-600 border border-orange-200/50 hover:border-orange-400 rounded-full p-3 transition-all duration-300 z-20 shadow-lg"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <button
                            onClick={() => setActiveIndex((prev) => (prev + 1) % benefitCards.length)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 bg-white/80 backdrop-blur-sm text-gray-600 hover:text-orange-600 border border-orange-200/50 hover:border-orange-400 rounded-full p-3 transition-all duration-300 z-20 shadow-lg"
                        >
                            <ArrowRight size={24} />
                        </button>

                        {/* Dots indicator */}
                        <div className="flex justify-center gap-3 mt-10">
                            {benefitCards.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${
                                        i === activeIndex ? "w-8 bg-orange-500" : "w-2 bg-orange-300/50"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Book bottom shadow */}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-orange-300/20 rounded-full blur-2xl pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════
                SECTION 3 — OUR PRODUCTS (Morphing Cards)
               ════════════════════════════════════════ */}
            <section
                ref={s3Ref}
                className="relative w-full py-24 md:py-32 overflow-hidden bg-white/95 bg-gradient-to-b from-white via-orange-50/30 to-white"
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

                {/* Flying Tech Icons (light) */}
                <FloatingTechIcons count={12} />

                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    animate={{
                        background: [
                            "radial-gradient(ellipse at 30% 50%, rgba(251,191,36,0.06) 0%, transparent 60%)",
                            "radial-gradient(ellipse at 70% 50%, rgba(245,158,11,0.06) 0%, transparent 60%)",
                            "radial-gradient(ellipse at 30% 50%, rgba(251,191,36,0.06) 0%, transparent 60%)",
                        ],
                    }}
                    transition={{ duration: 15, repeat: Infinity }}
                />

                <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={v3 ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7 }}
                        className="mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={v3 ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-orange-100/60 border border-orange-200/50 text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase"
                        >
                            <Box size={12} />
                            What We Build
                        </motion.div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900">
                            Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
                                Products
                            </span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center items-stretch">
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                animate={v3 ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
                                whileHover={{ scale: 1.03, y: -6 }}
                                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-200/30 hover:border-orange-300/60 transition-all duration-500 p-8 flex flex-col justify-between overflow-hidden shadow-xl shadow-orange-200/10 hover:shadow-orange-300/20"
                            >
                                {/* Morphing background blur (light) */}
                                <motion.div
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-100/0 via-amber-100/0 to-transparent"
                                    whileHover={{
                                        background: "radial-gradient(circle at 30% 30%, rgba(251,191,36,0.12), transparent 60%)",
                                    }}
                                    transition={{ duration: 0.5 }}
                                />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-orange-100/60 border border-orange-200/50 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 group-hover:bg-orange-200/70 transition-all duration-300">
                                        {product.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-700 transition-colors">
                                        {product.title}
                                    </h3>
                                    <p className="text-gray-500/70 text-base leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                {/* Portal effect on hover */}
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400/60 to-amber-400/30"
                                    initial={{ scaleX: 0 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}