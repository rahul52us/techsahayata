"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, FC, useRef, useEffect } from "react";
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

const Navbar: FC = () => {
  const [isProductsOpen, setProductsOpen] = useState(false);
  const [isCompanyOpen, setCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const productsTimer = useRef<NodeJS.Timeout | null>(null);
  const companyTimer = useRef<NodeJS.Timeout | null>(null);

  // Handle scroll effect for a "floating" feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const navLinks = [
    { name: "Home", href: "/", icon: <Home size={18} /> },
    { name: "About Us", href: "/about", icon: <Info size={18} /> },
  ];

  const productsLinks = [
    { name: "Websites", href: "/products/websites", desc: "Custom SEO-ready sites" },
    { name: "Applications", href: "/products/applications", desc: "Scalable cloud solutions" },
  ];

  const companyLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
        ? "bg-white/80 backdrop-blur-lg shadow-lg h-[75px]" 
        : "bg-white h-[85px]"
      } border-b border-gray-100`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10 h-full">
        
        {/* Logo */}
        <Link href="/" className="flex items-center group relative z-50">
          <div className="relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
            <Image
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011911/stick_website_assets/wtwjiyybu7odemnlu76z.png"
              alt="TechSahayata Logo"
              width={160}
              height={45}
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 ml-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative flex items-center gap-2 text-gray-700 hover:text-[#097899] font-bold text-[15px] transition-colors duration-300 group"
            >
              <span className="opacity-70 group-hover:opacity-100 transition-opacity">{link.icon}</span>
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#097899] transition-all duration-300 group-hover:w-full rounded-full" />
            </Link>
          ))}

          {/* Products Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={() => handleMouseLeave("products")}
          >
            <button className={`flex items-center gap-2 font-bold text-[15px] transition-all duration-300 ${isProductsOpen ? "text-[#097899]" : "text-gray-700"}`}>
              <Package size={18} className="opacity-70" />
              Products
              <ChevronDown size={14} className={`transition-transform duration-300 ${isProductsOpen ? "rotate-180" : ""}`} />
            </button>
            
            {/* Dropdown Menu */}
            <div className={`absolute right-[-20px] mt-2 w-64 origin-top-right rounded-2xl bg-white p-2 shadow-2xl border border-gray-100 transition-all duration-300 ${isProductsOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
              {productsLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex flex-col px-4 py-3 hover:bg-[#097899]/5 rounded-xl transition-all"
                >
                  <span className="text-gray-800 group-hover:text-[#097899] font-bold text-sm">{item.name}</span>
                  <span className="text-xs text-gray-400 group-hover:text-gray-500">{item.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Company Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("company")}
            onMouseLeave={() => handleMouseLeave("company")}
          >
            <button className={`flex items-center gap-2 font-bold text-[15px] transition-all duration-300 ${isCompanyOpen ? "text-[#097899]" : "text-gray-700"}`}>
              <Building2 size={18} className="opacity-70" />
              Company
              <ChevronDown size={14} className={`transition-transform duration-300 ${isCompanyOpen ? "rotate-180" : ""}`} />
            </button>
            
            <div className={`absolute right-0 mt-2 w-56 origin-top-right rounded-2xl bg-white p-2 shadow-2xl border border-gray-100 transition-all duration-300 ${isCompanyOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-2 invisible"}`}>
              {companyLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2.5 text-gray-700 hover:text-[#097899] hover:bg-[#097899]/5 rounded-xl font-semibold text-sm transition-all"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-[#097899] hover:bg-[#07637d] px-7 py-3 font-bold text-white shadow-[0_10px_20px_-10px_rgba(9,120,153,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(9,120,153,0.6)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
          >
            <PlayCircle size={18} /> 
            <span>Request Demo</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl bg-gray-50 text-gray-700 hover:text-[#097899] transition-all duration-300 active:scale-90"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-[85px] bg-white/95 backdrop-blur-xl transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}>
        <div className="flex flex-col h-full overflow-y-auto px-8 py-10 space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-4 text-2xl font-bold text-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="p-2 bg-gray-50 rounded-lg text-[#097899]">{link.icon}</div>
              {link.name}
            </Link>
          ))}

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Products</p>
            <div className="grid grid-cols-1 gap-3">
              {productsLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-lg font-semibold text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-gray-400 font-bold">Company</p>
            <div className="grid grid-cols-2 gap-y-3">
              {companyLinks.map((item) => (
                <Link key={item.name} href={item.href} className="text-sm font-semibold text-gray-600" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            className="flex justify-center items-center gap-3 w-full rounded-2xl bg-[#097899] py-5 font-bold text-white shadow-xl shadow-[#097899]/20"
            onClick={() => setMobileMenuOpen(false)}
          >
            <PlayCircle size={22} /> Request a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;