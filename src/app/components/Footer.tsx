"use client";
import Link from "next/link";
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Globe,
  Package,
  Building2,
  Home,
  Info,
  MessageCircle,
  FileText,
  Shield,
  BookOpen,
  Cpu,
  Globe2,
  Code,
  AppWindow,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-14">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 border-b border-gray-800 pb-10">
          {/* Mumbai */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#33aed7]">
              <MapPin size={18} /> Mumbai
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              B-1601, Arihant Aura, Thane - Belapur Rd, Turbhe,
              Navi Mumbai, Maharashtra 400705
            </p>
            <p className="text-sm mt-3 text-gray-300 flex items-center gap-2">
              <Phone size={14} /> <strong>Support & Sales:</strong> +91-8069409439
            </p>
            <p className="text-sm mt-2 text-gray-300 flex items-center gap-2">
              <Phone size={14} /> <strong>Enquiries:</strong> +91-7208135479
            </p>
            <a
              href="mailto:info@Techsahayata.com"
              className="flex items-center gap-2 text-sm text-[#33aed7] hover:text-white mt-3 transition-colors duration-300"
            >
              <Mail size={14} /> info@Techsahayata.com
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#33aed7] hover:text-white mt-2 transition-colors duration-300"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>

          {/* New Delhi */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#33aed7]">
              <MapPin size={18} /> New Delhi
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              382, Ground Floor, Near Avalon Courtyard Sultanpur,
              New Delhi 110030
            </p>
          </div>

          {/* United States */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#33aed7]">
              <Globe size={18} /> United States
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              12 N Route 17, Suite 201, Paramus NJ, USA 07652
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#33aed7]">
              <Package size={18} /> Products
            </h4>
            <Link
              href="/products/ocr"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <FileText size={14} /> OCR
            </Link>
            <Link
              href="/products/websites"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <Globe2 size={14} /> Websites
            </Link>
            <Link
              href="/products/applications"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <AppWindow size={14} /> Applications
            </Link>
            <Link
              href="/products/rpa-automation"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <Cpu size={14} /> RPA Automation & AI Products
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#33aed7]">
              <Building2 size={18} /> Company
            </h4>
            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <Home size={14} /> Home
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <Info size={14} /> About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <MessageCircle size={14} /> Contact Us
            </Link>
            <Link
              href="/faqs"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <BookOpen size={14} /> FAQs
            </Link>
            <Link
              href="/privacy"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <Shield size={14} /> Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#33aed7] mt-2 transition-colors duration-300"
            >
              <FileText size={14} /> Terms of Service
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#33aed7] font-semibold">Techsahayata</span> — All Rights Reserved.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Built with ❤️ by{" "}
            <span className="text-[#33aed7] font-medium">Techsahayata</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
