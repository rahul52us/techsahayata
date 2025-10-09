"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, FC, useRef } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Package,
  Building2,
  PlayCircle,
  Info,
} from "lucide-react";
import logo from "../../../public/assets/logo.png";

const Navbar: FC = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const productsTimer = useRef<NodeJS.Timeout | null>(null);
  const companyTimer = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: "products" | "company") => {
    if (menu === "products") {
      if (productsTimer.current) clearTimeout(productsTimer.current);
      setProductsOpen(true);
    } else {
      if (companyTimer.current) clearTimeout(companyTimer.current);
      setCompanyOpen(true);
    }
  };

  const handleMouseLeave = (menu: "products" | "company") => {
    if (menu === "products") {
      productsTimer.current = setTimeout(() => setProductsOpen(false), 150);
    } else {
      companyTimer.current = setTimeout(() => setCompanyOpen(false), 150);
    }
  };

  // ✅ Main Navigation Links
  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About Us", href: "/about", icon: <Info size={18} /> },
  ];

  // ✅ Product Links
  const productsLinks = [
    { name: "OCR", href: "/products/ocr" },
    { name: "Websites", href: "/products/websites" },
    { name: "Applications", href: "/products/applications" },
    { name: "RPA Automation & AI Products", href: "/products/rpa-automation" },
  ];

  // ✅ Company Links (without About Us)
  const companyLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-md transition-all duration-300 h-[85px]">
      <div className="container mx-auto flex items-center justify-between px-10 h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src={logo}
            alt="TechSahayata Logo"
            width={145}
            height={40}
            priority
            className="object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10 ml-auto">
          {/* Main Links */}
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative flex items-center gap-2 text-gray-800 hover:text-[#33aed7] font-semibold text-[16px] tracking-wide transition-all duration-200 group"
            >
              {link.icon}
              {link.name}
              <span className="absolute left-0 bottom-[-6px] w-0 h-[2px] bg-[#33aed7] rounded-full transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={() => handleMouseLeave("products")}
          >
            <button className="flex items-center gap-2 text-gray-800 hover:text-[#33aed7] font-semibold text-[16px] tracking-wide transition-all duration-200 group">
              <Package size={18} /> Products
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isProductsOpen ? "rotate-180 text-[#33aed7]" : ""
                }`}
              />
            </button>
            {isProductsOpen && (
              <div className="absolute right-0 mt-3 w-56 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 py-2 z-20 animate-fadeIn">
                {productsLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-2.5 text-gray-700 hover:text-[#33aed7] hover:bg-[#e0f3f8] rounded-md font-medium transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={() => handleMouseLeave("company")}
          >
            <button className="flex items-center gap-2 text-gray-800 hover:text-[#33aed7] font-semibold text-[16px] tracking-wide transition-all duration-200 group">
              <Building2 size={18} /> Company
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isCompanyOpen ? "rotate-180 text-[#33aed7]" : ""
                }`}
              />
            </button>
            {isCompanyOpen && (
              <div className="absolute right-0 mt-3 w-60 rounded-xl bg-white/95 backdrop-blur-md shadow-xl border border-gray-100 py-2 z-20 animate-fadeIn">
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-2.5 text-gray-700 hover:text-[#33aed7] hover:bg-[#e0f3f8] rounded-md font-medium transition-all"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Request Demo Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#33aed7] to-[#2aa1c9] hover:from-[#2aa1c9] hover:to-[#1f91b5] px-6 py-3 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <PlayCircle size={18} /> Request a Demo
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-[#e0f3f8] hover:border-[#33aed7] transition-all duration-200"
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg animate-fadeIn">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {/* Main Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 text-gray-800 hover:text-[#33aed7] text-[15px] font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon} {link.name}
              </Link>
            ))}

            {/* Products */}
            <div>
              <div className="flex items-center gap-2 text-gray-800 text-[15px] font-semibold mb-1">
                <Package size={18} /> Products
              </div>
              <div className="pl-6 space-y-2">
                {productsLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-600 hover:text-[#33aed7] text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <div className="flex items-center gap-2 text-gray-800 text-[15px] font-semibold mb-1">
                <Building2 size={18} /> Company
              </div>
              <div className="pl-6 space-y-2">
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-gray-600 hover:text-[#33aed7] text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Demo Button */}
            <div className="pt-3">
              <Link
                href="/demo"
                className="flex justify-center items-center gap-2 w-full rounded-full bg-gradient-to-r from-[#33aed7] to-[#2aa1c9] hover:from-[#2aa1c9] hover:to-[#1f91b5] px-5 py-2.5 font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <PlayCircle size={18} /> Request a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
