"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
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
    Zap,
    Shield,
    Cloud,
    Cpu,
    Star,
    Gem,
    Orbit,
    Layers,
    Hexagon,
    Fingerprint,
} from "lucide-react";

// ─── Constellation Particles (light version) ──────────────────────────────
const starPositions = Array.from({ length: 40 }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2.5,
    delay: Math.random() * 4,
    duration: 4 + Math.random() * 6,
}));

// ─── Floating Orbs (softer for light bg) ──────────────────────────────────
const floatingOrbs = [
    { size: 160, x: "2%", y: "10%", delay: 0, duration: 8, color: "rgba(251,191,36,0.08)" },
    { size: 100, x: "92%", y: "15%", delay: 0.8, duration: 10, color: "rgba(245,158,11,0.06)" },
    { size: 180, x: "5%", y: "60%", delay: 1.6, duration: 9, color: "rgba(249,115,22,0.05)" },
    { size: 120, x: "88%", y: "68%", delay: 0.4, duration: 7, color: "rgba(251,146,60,0.06)" },
];

// ─── Feature Data ───────────────────────────────────────────────────────────
const features = [
    {
        id: "01",
        title: "The Architecture of Possibility",
        desc: "A robust mobile core isn't about code—it's about reliability. We build the silent engine that powers your boldest ideas with 99.9% uptime and zero friction.",
        icon: <Cpu size={28} />,
        image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011954/stick_website_assets/tk2iy5vz5qgxe0tjtx2f.png",
        bullets: [
            { icon: <Zap size={18} />, text: "Hyper‑Reactive UI" },
            { icon: <Cloud size={18} />, text: "Cloud‑Native Scalability" },
            { icon: <Shield size={18} />, text: "Military‑Grade Security" },
        ],
    },
    {
        id: "02",
        title: "Cognitive Deep‑Flow",
        desc: "We integrate AI that learns from every tap. Your app becomes an evolving organism, predicting user needs before they even arise.",
        icon: <Orbit size={28} />,
        image: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011860/stick_website_assets/lknhnmkr5yf3qt2an0gv.png",
        action: "Explore Intelligence",
    },
];

// ─── TiltCard (light version) ──────────────────────────────────────────────
function TiltCard({
    children,
    className = "",
    glowColor = "rgba(251,191,36,0.15)",
}: {
    children: React.ReactNode;
    className?: string;
    glowColor?: string;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const rawX = useMotionValue(0);
    const rawY = useMotionValue(0);
    const springConfig = { damping: 25, stiffness: 200 };
    const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [6, -6]), springConfig);
    const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-6, 6]), springConfig);
    const scale = useSpring(1, { damping: 20, stiffness: 250 });

    const handleMouseMove = useCallback(
        (e: React.MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            rawX.set((e.clientX - rect.left) / rect.width - 0.5);
            rawY.set((e.clientY - rect.top) / rect.height - 0.5);
        },
        [rawX, rawY]
    );

    const handleMouseLeave = useCallback(() => {
        rawX.set(0);
        rawY.set(0);
        setIsHovered(false);
        scale.set(1);
    }, [rawX, rawY, scale]);

    const handleMouseEnter = useCallback(() => {
        setIsHovered(true);
        scale.set(1.02);
    }, [scale]);

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                scale,
                transformStyle: "preserve-3d",
                perspective: 1200,
            }}
            className={`relative group ${className}`}
        >
            {/* Outer glow ring */}
            <motion.div
                className="absolute -inset-6 rounded-full pointer-events-none"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${glowColor}, transparent 70%)`,
                    filter: "blur(30px)",
                }}
                animate={{ opacity: isHovered ? 1 : 0.4, scale: isHovered ? 1.3 : 1 }}
                transition={{ duration: 0.7 }}
            />
            {/* Rotating border ring */}
            <motion.div
                className="absolute -inset-2 rounded-[2.8rem] pointer-events-none"
                style={{
                    border: "1.5px solid rgba(251,191,36,0.20)",
                    borderRadius: "2.8rem",
                }}
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            />
            <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-orange-200/30 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.08)] p-[2px]">
                <div className="relative rounded-[2.4rem] bg-white/95 p-8 md:p-10">
                    {children}
                </div>
            </div>
        </motion.div>
    );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function EvolutionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % features.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + features.length) % features.length);

    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(handleNext, 6000);
        return () => clearInterval(interval);
    }, [isInView]);

    const currentFeature = features[activeIndex];

    return (
        <section
            ref={sectionRef}
            className="relative w-full py-28 md:py-36 overflow-hidden bg-white/95 bg-gradient-to-b from-white via-orange-50/30 to-white"
        >
            {/* ─── BOTTOM LEMON GRADIENT (matching Services & Brands) ─── */}
            <div className="absolute inset-0 pointer-events-none z-0">
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
                {/* Radial lemon spots */}
                <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-yellow-300/15 rounded-full blur-[180px]" />
                <div className="absolute bottom-[-5%] right-[10%] w-[40%] h-[40%] bg-amber-300/12 rounded-full blur-[150px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-yellow-100/10 rounded-full blur-[120px]" />
            </div>

            {/* ─── Light Particle Constellation ────────────────────────────── */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                {starPositions.map((star, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-orange-300/30"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: star.size,
                            height: star.size,
                        }}
                        animate={{
                            opacity: [0.1, 0.5, 0.1],
                            scale: [1, 1.4, 1],
                        }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            delay: star.delay,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            {/* ─── Floating Orbs (softer) ───────────────────────────────────── */}
            {floatingOrbs.map((orb, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full pointer-events-none hidden lg:block z-0"
                    style={{
                        left: orb.x,
                        top: orb.y,
                        width: orb.size,
                        height: orb.size,
                        background: orb.color,
                        filter: "blur(60px)",
                    }}
                    animate={{
                        x: [0, 30, -20, 0],
                        y: [0, -20, 30, 0],
                    }}
                    transition={{
                        duration: orb.duration,
                        repeat: Infinity,
                        delay: orb.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* ─── Decorative floating icons (recolored) ──────────────────── */}
            <motion.div
                className="absolute left-8 top-20 z-5 pointer-events-none hidden xl:block"
                animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
                <Sparkles size={24} className="text-orange-400/20" />
            </motion.div>
            <motion.div
                className="absolute right-12 top-32 z-5 pointer-events-none hidden xl:block"
                animate={{ y: [0, 10, 0], rotate: [0, -10, 10, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.8, ease: "easeInOut" }}
            >
                <Star size={22} className="text-orange-400/20" />
            </motion.div>
            <motion.div
                className="absolute left-10 bottom-32 z-5 pointer-events-none hidden xl:block"
                animate={{ y: [0, -15, 0], rotate: [0, 12, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, delay: 1.2, ease: "easeInOut" }}
            >
                <Gem size={26} className="text-orange-400/20" />
            </motion.div>
            <motion.div
                className="absolute right-10 bottom-40 z-5 pointer-events-none hidden xl:block"
                animate={{ y: [0, 8, 0], rotate: [0, -6, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
            >
                <Fingerprint size={20} className="text-orange-400/20" />
            </motion.div>

            <div className="container relative z-10 mx-auto px-6 lg:px-20 max-w-7xl">
                {/* ─── Header ────────────────────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 max-w-4xl mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.15, duration: 0.6 }}
                        className="flex items-center gap-5 mb-8"
                    >
                        <div className="h-[2px] w-14 bg-gradient-to-r from-orange-500 to-amber-400" />
                        <span className="text-xs font-bold tracking-[0.25em] text-orange-600 uppercase">
                            Constellation Engine
                        </span>
                        <motion.span
                            className="w-2 h-2 rounded-full bg-orange-500"
                            animate={{ scale: [1, 1.6, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>

                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight leading-[1.05]">
                        Design{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500">
                            Emotion
                        </span>
                        ,
                        <br />
                        Deploy Intelligence.
                    </h2>

                    <p className="text-lg md:text-xl text-gray-500/70 max-w-2xl leading-relaxed">
                        We bridge the gap between cold logic and human intuition, creating digital experiences that don't just work—they{" "}
                        <span className="text-gray-700 font-medium">resonate</span>.
                    </p>
                </motion.div>

                {/* ─── Dynamic Feature Showcase ──────────────────────────────── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20"
                    >
                        {/* ── Image Side ── */}
                        <motion.div
                            className="lg:col-span-7"
                            initial={{ scale: 0.95 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.7 }}
                        >
                            <TiltCard glowColor="rgba(251,191,36,0.15)">
                                <div className="relative h-[380px] md:h-[450px] flex items-center justify-center">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-transparent to-amber-200/10" />
                                    <motion.img
                                        src={currentFeature.image}
                                        alt={currentFeature.title}
                                        className="relative z-10 w-3/4 h-auto object-contain drop-shadow-[0_20px_60px_rgba(251,191,36,0.15)]"
                                        initial={{ scale: 0.9, rotate: -2 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ duration: 0.8 }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-200/20 to-transparent pointer-events-none" />
                                </div>
                            </TiltCard>
                        </motion.div>

                        {/* ── Text Side ── */}
                        <div className="lg:col-span-5 relative">
                            <span className="text-[12rem] md:text-[14rem] font-black text-orange-200/20 absolute -top-32 -left-8 select-none pointer-events-none">
                                {currentFeature.id}
                            </span>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-12 h-12 rounded-xl bg-orange-100/60 border border-orange-200/50 flex items-center justify-center text-orange-600">
                                        {currentFeature.icon}
                                    </span>
                                    <span className="text-sm font-bold tracking-[0.2em] text-orange-500/60 uppercase">
                                        Feature {currentFeature.id}
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                                    {currentFeature.title.split(" ").map((word, i) =>
                                        i === 0 ? (
                                            <span
                                                key={i}
                                                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400"
                                            >
                                                {word}{" "}
                                            </span>
                                        ) : (
                                            <span key={i}>{word} </span>
                                        )
                                    )}
                                </h3>

                                <p className="text-base md:text-lg text-gray-500/70 mb-8 leading-relaxed">
                                    {currentFeature.desc}
                                </p>

                                {currentFeature.bullets ? (
                                    <ul className="space-y-4">
                                        {currentFeature.bullets.map((item, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{
                                                    delay: 0.3 + i * 0.12,
                                                    duration: 0.5,
                                                }}
                                                className="flex items-center gap-4 text-gray-600 font-semibold group/item"
                                            >
                                                <span className="w-10 h-10 rounded-xl bg-orange-100/60 border border-orange-200/50 flex items-center justify-center text-orange-500 group-hover/item:bg-orange-200/70 group-hover/item:border-orange-300 transition-all duration-300">
                                                    {item.icon}
                                                </span>
                                                {item.text}
                                            </motion.li>
                                        ))}
                                    </ul>
                                ) : (
                                    <motion.button
                                        whileHover={{ scale: 1.04 }}
                                        whileTap={{ scale: 0.96 }}
                                        className="group flex items-center gap-4 text-orange-600 font-bold text-lg"
                                    >
                                        {currentFeature.action}
                                        <span className="w-14 h-14 rounded-full border border-orange-300/50 flex items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_40px_rgba(249,115,22,0.3)]">
                                            <ArrowRight size={22} />
                                        </span>
                                    </motion.button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* ─── Navigation Dots ────────────────────────────────────── */}
                <div className="flex justify-center gap-4 mb-16">
                    {features.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`transition-all duration-300 ${
                                i === activeIndex
                                    ? "w-12 h-3 bg-orange-500 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                                    : "w-3 h-3 bg-orange-300/30 rounded-full hover:bg-orange-400/50"
                            }`}
                            aria-label={`Go to feature ${i + 1}`}
                        />
                    ))}
                </div>

                {/* ─── CTA Section (light theme) ────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-10 text-center"
                >
                    <div className="relative inline-block p-[1.5px] rounded-[3rem] bg-gradient-to-r from-orange-300/40 via-amber-300/30 to-orange-300/40">
                        <div className="relative bg-white rounded-[2.8rem] px-10 py-16 md:px-20 md:py-20 overflow-hidden shadow-[0_8px_40px_-12px_rgba(0,0,0,0.05)]">
                            {/* Ambient glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[60%] bg-orange-200/20 rounded-full blur-[100px] pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-200/15 rounded-full blur-[80px] pointer-events-none" />
                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-200/15 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 1.0, duration: 0.5 }}
                                    className="inline-flex items-center gap-3 px-5 py-2.5 mb-8 rounded-full bg-orange-100/60 border border-orange-200/50 text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                                    Launch Ready
                                </motion.div>

                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
                                    Ready for a{" "}
                                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-400">
                                        Smarter
                                    </span>{" "}
                                    Start?
                                </h3>

                                <p className="text-gray-500/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                                    Join 50+ visionary brands that transformed their mobile presence with our unified AI-ecosystem.
                                </p>

                                <div className="flex flex-wrap justify-center gap-5">
                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-12 py-5 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-base rounded-2xl shadow-[0_20px_50px_-10px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_60px_-10px_rgba(249,115,22,0.5)] transition-shadow"
                                    >
                                        Begin the Journey
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.05, y: -3 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-12 py-5 bg-orange-100/40 text-gray-700 font-bold text-base rounded-2xl border border-orange-200/50 hover:bg-orange-100/70 hover:border-orange-300 transition-all backdrop-blur-sm"
                                    >
                                        Watch Showcase
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}