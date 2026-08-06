"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

// Custom dataset with balanced, gallery-style aspect ratios
const row1Items = [
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011950/stick_website_assets/odyldfca0sjvdegdpilr.png",
    aspect: "w-[240px] h-[220px] sm:w-[280px] sm:h-[250px]",
  },
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/kleendrive_logo_uj8env.png",
    aspect: "w-[300px] h-[220px] sm:w-[350px] sm:h-[250px]",
  },
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011877/stick_website_assets/gnmdihgway62nl90nsrr.jpg",
    aspect: "w-[220px] h-[220px] sm:w-[260px] sm:h-[250px]",
  },
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/karmaaurved_logo_olitpr.png",
    aspect: "w-[280px] h-[220px] sm:w-[320px] sm:h-[250px]",
  },
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767499670/vd_logo_rkpjnh.png",
    aspect: "w-[310px] h-[220px] sm:w-[360px] sm:h-[250px]",
  },
];

const row2Items = [
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767499670/vd_logo_rkpjnh.png",
    aspect: "w-[290px] h-[220px] sm:w-[340px] sm:h-[250px]",
  },
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011913/stick_website_assets/uy3iw2ltfwvk8edwkiuu.png",
    aspect: "w-[250px] h-[220px] sm:w-[290px] sm:h-[250px]",
  },
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1769393965/c1fdde2a-e7ce-4164-8eeb-a9ba04fb74af_o8f4fr.png",
    aspect: "w-[320px] h-[220px] sm:w-[370px] sm:h-[250px]",
  },
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1769393962/logo_yxawve.jpg",
    aspect: "w-[230px] h-[220px] sm:w-[270px] sm:h-[250px]",
  },
  {
    src: "https://res.cloudinary.com/dtlrp3fzu/image/upload/v1767418988/kleendrive_logo_uj8env.png",
    aspect: "w-[280px] h-[220px] sm:w-[330px] sm:h-[250px]",
  },
];

interface MarqueeRowProps {
  items: { src: string; aspect: string }[];
  reverse?: boolean;
  speed?: number;
}

function MarqueeRow({ items, reverse = false, speed = 30 }: MarqueeRowProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [halfWidth, setHalfWidth] = useState(0);
  const x = useMotionValue(0);

  useEffect(() => {
    if (trackRef.current) {
      const totalWidth = trackRef.current.scrollWidth;
      const calculatedHalf = totalWidth / 2;
      setHalfWidth(calculatedHalf);
      if (reverse) {
        x.set(-calculatedHalf);
      }
    }
  }, [reverse, items, x]);

  useAnimationFrame((_, delta) => {
    if (!halfWidth) return;
    const move = (reverse ? 1 : -1) * speed * (delta / 1000);
    let newX = x.get() + move;

    if (reverse) {
      if (newX > 0) newX = -halfWidth;
    } else {
      if (newX < -halfWidth) newX = 0;
    }
    x.set(newX);
  });

  return (
    <div
      ref={containerRef}
      className="overflow-hidden py-2 pointer-events-none w-full"
    >
      <motion.div
        ref={trackRef}
        className="flex gap-4 sm:gap-6 w-max"
        style={{ x }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div
            key={i}
            className={`shrink-0 ${item.aspect} rounded-2xl sm:rounded-3xl bg-white border border-slate-200/50 shadow-[0_4px_25px_rgba(0,0,0,0.04)] overflow-hidden flex items-center justify-center p-6 sm:p-8 backdrop-blur-sm`}
          >
            <img
              src={item.src}
              alt="Brand Logo"
              className="w-full h-full object-contain filter drop-shadow-sm opacity-90 transition-opacity duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function BrandsSection() {
  return (
    <section className="relative w-full py-12 md:py-20 overflow-hidden bg-white/95 bg-gradient-to-b from-white via-orange-50/30 to-white">
      {/* ─── BOTTOM LEMON GRADIENT (matching ServicesSection) ─── */}
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

      {/* Edge-to-Edge Screen Gallery Canvas */}
      <div className="relative w-full space-y-2 sm:space-y-4 z-10">
        {/* Row 1 — Left Movement */}
        <MarqueeRow items={row1Items} reverse={false} speed={32} />

        {/* Row 2 — Right Movement */}
        <MarqueeRow items={row2Items} reverse={true} speed={28} />

        {/* Reference-Style Center Badge Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-[#0f0f0f]/95 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.25)]"
          >
            <span className="text-sm sm:text-xl font-medium text-white tracking-tight whitespace-nowrap">
              Made with{" "}
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400">
                TechSahayata
              </span>
            </span>
          </motion.div>
        </div>

        {/* Subtle Edge Gradients Fading Out Seamlessly */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}