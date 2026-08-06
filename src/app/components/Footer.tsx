"use client";

import Link from "next/link";
import React from "react";
import {
  Linkedin,
  Globe2,
  AppWindow,
  Mail,
  Phone,
  Home,
  Info,
  MessageCircle,
  Shield,
  FileText,
  BookOpen,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-orange-50/80 text-gray-800 py-8 overflow-hidden border-t-4 border-dashed border-orange-300/60">
      {/* ─── Cartoon‑style decorative elements ─── */}
      {/* Dotted background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-6 h-6 rounded-full border-2 border-orange-400/30" />
        <div className="absolute top-24 right-20 w-8 h-8 rounded-full border-2 border-amber-400/30" />
        <div className="absolute bottom-16 left-1/3 w-5 h-5 rounded-full border-2 border-orange-400/30" />
        <div className="absolute top-1/2 right-10 w-4 h-4 rounded-full border-2 border-amber-400/30" />
        <div className="absolute bottom-8 left-8 w-10 h-10 rounded-full border-2 border-orange-400/20" />
      </div>

      {/* ─── BOTTOM LEMON GRADIENT ─── */}
      <div className="absolute bottom-0 left-0 w-full h-3/4 pointer-events-none z-0">
        {/* Main linear lemon glow */}
        <div
          className="absolute bottom-0 left-0 w-full h-2/3"
          style={{
            background: `linear-gradient(to top, 
              rgba(255, 215, 0, 0.20) 0%, 
              rgba(255, 200, 50, 0.12) 30%, 
              rgba(251, 146, 60, 0.05) 60%, 
              transparent 100%)`,
          }}
        />
        {/* Radial lemon spots for extra warmth */}
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] bg-yellow-300/15 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-5%] right-[10%] w-[40%] h-[40%] bg-amber-300/12 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] bg-yellow-100/10 rounded-full blur-[120px]" />
      </div>

      {/* Floating emojis (cartoon vibe) */}
      <div className="absolute top-4 left-8 text-2xl animate-bounce-slow pointer-events-none z-10">🚀</div>
      <div className="absolute bottom-4 right-8 text-3xl animate-spin-slow pointer-events-none z-10">✨</div>
      <div className="absolute top-1/2 left-1/4 text-xl animate-float pointer-events-none z-10">🌟</div>

      {/* Top divider – wavy cartoon style */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 z-10" />
      <div className="absolute top-1 left-0 w-full h-0.5 bg-dashed border-b-2 border-dashed border-orange-300/30 z-10" />

      <div className="max-w-screen-xl mx-auto px-6 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start border-b-2 border-dashed border-orange-200/40 pb-8">

          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="group inline-block relative">
              <img
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011911/stick_website_assets/wtwjiyybu7odemnlu76z.png"
                alt="TechSahayata Logo"
                className="h-8 w-auto object-contain drop-shadow-[0_4px_8px_rgba(249,115,22,0.2)] group-hover:drop-shadow-[0_4px_16px_rgba(249,115,22,0.5)] transition-all duration-300 transform group-hover:scale-105"
              />
              <span className="absolute -top-1 -right-4 text-sm animate-ping">⚡</span>
            </Link>
            <p className="text-[13px] text-gray-600 leading-relaxed font-medium bg-white/50 px-3 py-1 rounded-full inline-block border border-orange-200/30 shadow-sm">
              Crafting digital love ❤️ <br /> high‑performance software.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com"
                className="p-2 rounded-full bg-orange-100 hover:bg-orange-200 text-orange-600 hover:text-orange-700 transition-all border-2 border-orange-300/50 hover:border-orange-400 shadow-md hover:shadow-lg transform hover:scale-110"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions & Nav */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] mb-4 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Solutions
            </h4>
            <div className="flex flex-col gap-2.5 text-[14px] text-gray-600">
              <Link href="/" className="hover:text-orange-500 flex items-center gap-2 group transition-all bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
                <Home size={14} className="group-hover:rotate-12 transition-transform" /> Home
              </Link>
              <Link href="/products/websites" className="hover:text-orange-500 flex items-center gap-2 group transition-all bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
                <Globe2 size={14} className="group-hover:rotate-12 transition-transform" /> Websites
              </Link>
              <Link href="/products/applications" className="hover:text-orange-500 flex items-center gap-2 group transition-all bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
                <AppWindow size={14} className="group-hover:rotate-12 transition-transform" /> Applications
              </Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] mb-4 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Resources
            </h4>
            <div className="flex flex-col gap-2.5 text-[14px] text-gray-600">
              <Link href="/about" className="hover:text-orange-500 hover:translate-x-1 transition-all flex items-center gap-2 bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
                <Info size={14} /> About Us
              </Link>
              <Link href="/faqs" className="hover:text-orange-500 hover:translate-x-1 transition-all flex items-center gap-2 bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
                <BookOpen size={14} /> FAQs
              </Link>
              <Link href="/privacy" className="hover:text-orange-500 hover:translate-x-1 transition-all flex items-center gap-2 bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
                <Shield size={14} /> Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-orange-500 hover:translate-x-1 transition-all flex items-center gap-2 bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
                <FileText size={14} /> Terms
              </Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] mb-4 text-orange-600 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
              Support
            </h4>
            <Link href="/contact" className="group flex items-center gap-3 text-[14px] text-gray-600 hover:text-orange-500 transition-all bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
              <div className="p-1.5 rounded-full bg-orange-200/50 border-2 border-orange-300/30 group-hover:border-orange-400/60 group-hover:bg-orange-300/50 transition-all">
                <MessageCircle size={14} className="text-orange-500" />
              </div>
              Contact Us
            </Link>
            <a href="tel:+8305487970" className="group flex items-center gap-3 text-[14px] text-gray-600 hover:text-orange-500 transition-all bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
              <div className="p-1.5 rounded-full bg-orange-200/50 border-2 border-orange-300/30 group-hover:border-orange-400/60 group-hover:bg-orange-300/50 transition-all">
                <Phone size={14} className="text-orange-500" />
              </div>
              +91-8305487970
            </a>
            <a href="mailto:support@techsahayata.com" className="group flex items-center gap-3 text-[14px] text-gray-600 hover:text-orange-500 transition-all bg-orange-50/30 px-3 py-1.5 rounded-full hover:bg-orange-100/60 border border-transparent hover:border-orange-200/50">
              <div className="p-1.5 rounded-full bg-orange-200/50 border-2 border-orange-300/30 group-hover:border-orange-400/60 group-hover:bg-orange-300/50 transition-all">
                <Mail size={14} className="text-orange-500" />
              </div>
              support@techsahayata.com
            </a>
          </div>
        </div>

        {/* Bottom Bar – Cartoon style */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-[11px] text-gray-500 gap-4">
          <p className="tracking-widest font-bold uppercase bg-orange-100/30 px-4 py-1.5 rounded-full border-2 border-dashed border-orange-300/40">
            © {new Date().getFullYear()} TECHSAHAYATA
          </p>
          <div className="flex items-center gap-2">
            <span className="h-[2px] w-8 bg-gradient-to-r from-orange-300 to-amber-300 rounded-full" />
            <p className="font-black uppercase tracking-tighter text-gray-600">
              Built with <span className="text-red-500">❤️</span> by{" "}
              <span className="text-orange-500 font-extrabold drop-shadow-[0_2px_4px_rgba(249,115,22,0.2)]">Techsahayata</span>
            </p>
            <span className="h-[2px] w-8 bg-gradient-to-l from-orange-300 to-amber-300 rounded-full" />
          </div>
        </div>
      </div>

      {/* ─── Custom keyframes for animations ─── */}
      <style jsx>{`
        .animate-bounce-slow {
          animation: bounceSlow 4s infinite;
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-spin-slow {
          animation: spinSlow 12s linear infinite;
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;