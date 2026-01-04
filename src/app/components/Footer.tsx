"use client";
import Link from "next/link";
import React from "react";
import {
  Linkedin,
  Package,
  Building2,
  Home,
  Info,
  MessageCircle,
  FileText,
  Shield,
  BookOpen,
  Globe2,
  AppWindow,
  Mail,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white py-14">
      <div className="max-w-screen-xl mx-auto px-6">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 border-b border-gray-800 pb-10">

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[#097899]">Contact</h4>

            <p className="text-sm text-gray-300 mt-1 flex items-center gap-2">
              <Phone size={14} /> <strong>Support & Sales:</strong> +91-8069409439
            </p>

            <p className="text-sm text-gray-300 mt-2 flex items-center gap-2">
              <Phone size={14} /> <strong>Enquiries:</strong> +91-7208135479
            </p>

            <a
              href="mailto:info@Techsahayata.com"
              className="flex items-center gap-2 text-sm text-[#097899] hover:text-white mt-3 transition-colors duration-300"
            >
              <Mail size={14} /> info@Techsahayata.com
            </a>

            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#097899] hover:text-white mt-2 transition-colors duration-300"
            >
              <Linkedin size={14} /> LinkedIn
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#097899]">
              <Package size={18} /> Products
            </h4>

            {/* OCR removed */}
            {/* <Link href="/products/ocr" className="...."> ... </Link> */}

            <Link
              href="/products/websites"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#097899] transition-colors duration-300"
            >
              <Globe2 size={14} /> Websites
            </Link>

            <Link
              href="/products/applications"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#097899] mt-2 transition-colors duration-300"
            >
              <AppWindow size={14} /> Applications
            </Link>
          </div>

          {/* Company */}
          <div>
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-[#097899]">
              <Building2 size={18} /> Company
            </h4>

            <Link
              href="/"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#097899] transition-colors duration-300"
            >
              <Home size={14} /> Home
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#097899] mt-2 transition-colors duration-300"
            >
              <Info size={14} /> About
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#097899] mt-2 transition-colors duration-300"
            >
              <MessageCircle size={14} /> Contact Us
            </Link>

            <Link
              href="/faqs"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#097899] mt-2 transition-colors duration-300"
            >
              <BookOpen size={14} /> FAQs
            </Link>

            <Link
              href="/privacy"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#097899] mt-2 transition-colors duration-300"
            >
              <Shield size={14} /> Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#097899] mt-2 transition-colors duration-300"
            >
              <FileText size={14} /> Terms of Service
            </Link>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#097899] font-semibold">Techsahayata</span> — All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500 mt-1">
            Built with ❤️ by{" "}
            <span className="text-[#097899] font-medium">Techsahayata</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
