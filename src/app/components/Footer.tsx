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
    <footer className="relative bg-[#050505] text-white py-8 overflow-hidden">
      {/* Aesthetic Top Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#097899]/40 to-transparent" />

      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start border-b border-white/5 pb-8">
          
          {/* Column 1: Brand & Logo */}
          <div className="space-y-4">
            <Link href="/" className="group inline-block">
              <img 
                src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011911/stick_website_assets/wtwjiyybu7odemnlu76z.png" 
                alt="TechSahayata Logo" 
                className="h-7 w-auto object-contain opacity-70 brightness-90 group-hover:opacity-100 group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(9,120,153,0.5)] transition-all duration-500"
              />
            </Link>
            <p className="text-[12px] text-gray-500 leading-relaxed font-medium">
              Crafting digital love through <br /> high-performance software.
            </p>
            <div className="flex gap-3">
              <a href="https://linkedin.com" className="p-1.5 rounded-full bg-white/5 hover:bg-[#097899]/20 hover:text-[#097899] transition-all border border-white/5">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Solutions & Nav */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#097899]">Solutions</h4>
            <div className="flex flex-col gap-2.5 text-[13px] text-gray-400">
              <Link href="/" className="hover:text-white flex items-center gap-2 group transition-all">
                <Home size={12} className="group-hover:text-[#097899]" /> Home
              </Link>
              <Link href="/products/websites" className="hover:text-white flex items-center gap-2 group transition-all">
                <Globe2 size={12} className="group-hover:text-[#097899]" /> Websites
              </Link>
              <Link href="/products/applications" className="hover:text-white flex items-center gap-2 group transition-all">
                <AppWindow size={12} className="group-hover:text-[#097899]" /> Applications
              </Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#097899]">Resources</h4>
            <div className="flex flex-col gap-2.5 text-[13px] text-gray-400">
              <Link href="/about" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                 <Info size={12} /> About Us
              </Link>
              <Link href="/faqs" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                 <BookOpen size={12} /> FAQs
              </Link>
              <Link href="/privacy" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                 <Shield size={12} /> Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                 <FileText size={12} /> Terms
              </Link>
            </div>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-3">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] mb-4 text-[#097899]">Support</h4>
            <Link href="/contact" className="group flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-all">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-[#097899]/50 transition-all">
                <MessageCircle size={12} className="text-[#097899]" />
              </div>
              Contact Us
            </Link>
            <a href="tel:+919977053447" className="group flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-all">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-[#097899]/50 transition-all">
                <Phone size={12} className="text-[#097899]" />
              </div>
              +91-9977053447
            </a>
            <a href="mailto:support@techsahayata.com" className="group flex items-center gap-3 text-[13px] text-gray-400 hover:text-white transition-all">
              <div className="p-1.5 rounded-md bg-white/5 border border-white/10 group-hover:border-[#097899]/50 transition-all">
                <Mail size={12} className="text-[#097899]" />
              </div>
              support@techsahayata.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-[10px] text-gray-600 gap-4">
          <p className="tracking-widest font-medium uppercase">© {new Date().getFullYear()} TECHSAHAYATA</p>
          <div className="flex items-center gap-2">
            <span className="h-[1px] w-6 bg-gray-800" />
            <p className="font-black uppercase tracking-tighter text-gray-400">
              Built with ❤️ by <span className="text-[#097899]">Techsahayata</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;