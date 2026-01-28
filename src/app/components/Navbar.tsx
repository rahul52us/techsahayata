"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; 
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
  
  const pathname = usePathname();
  const productsTimer = useRef<NodeJS.Timeout | null>(null);
  const companyTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

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
    { name: "Websites", href: "/products/websites" },
    { name: "Applications", href: "/products/applications" },
  ];

  const companyLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full shadow-md bg-white">
      <div className="flex h-[70px] md:h-[85px] w-full items-center">
        
        {/* LEFT SECTION: Logo & Slogan */}
        <div className="flex items-center bg-white px-4 md:pl-8 md:pr-12 z-30 h-full relative">
          <Link href="/" className="flex items-center gap-3 md:gap-4">
            <img
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011911/stick_website_assets/wtwjiyybu7odemnlu76z.png"
              alt="TechSahayata Logo"
              className="object-contain w-[100px] md:w-[135px]"
            />
            <div className="h-5 w-[1px] bg-gray-200 hidden md:block" />
            <span className="text-[9px] md:text-xs font-bold tracking-widest drop-shadow-[0_0_8px_rgba(9,120,153,0.3)] uppercase whitespace-nowrap" style={{ color: "#097899" }}>
              Crafting Digital Love
            </span>
          </Link>
          
          <div className="hidden md:block absolute top-0 -right-7 h-full w-14 bg-white z-[-1]" style={{ clipPath: 'polygon(0 0, 0% 100%, 100% 100%)' }} />
        </div>

        {/* RIGHT SECTION: Navigation */}
        <div className="relative flex flex-1 h-full items-center justify-end px-4 md:px-10">
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: "#097899",
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 30px 100%)",
            }}
          />

          {/* Desktop Menu */}
          <div className="relative z-10 hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 font-bold text-white hover:opacity-80 transition-all"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div 
              className="relative h-[85px] flex items-center" 
              onMouseEnter={() => handleMouseEnter("products")} 
              onMouseLeave={() => handleMouseLeave("products")}
            >
              <button className="flex items-center gap-2 font-bold text-white hover:opacity-80 transition-all">
                <Package size={18} /> Products
                <ChevronDown size={16} className={`transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isProductsOpen && (
                <div className="absolute top-[75px] right-0 w-52 rounded-xl bg-white shadow-2xl border border-gray-100 py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                  {productsLinks.map((item) => (
                    <Link key={item.name} href={item.href} className="block px-5 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-[#097899] transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative h-[85px] flex items-center" 
              onMouseEnter={() => handleMouseEnter("company")} 
              onMouseLeave={() => handleMouseLeave("company")}
            >
              <button className="flex items-center gap-2 font-bold text-white hover:opacity-80 transition-all">
                <Building2 size={18} /> Company
                <ChevronDown size={16} className={`transition-transform duration-200 ${isCompanyOpen ? "rotate-180" : ""}`} />
              </button>
              
              {isCompanyOpen && (
                <div className="absolute top-[75px] right-0 w-52 rounded-xl bg-white shadow-2xl border border-gray-100 py-2 z-[60] animate-in fade-in slide-in-from-top-2 duration-200">
                  {companyLinks.map((item) => (
                    <Link key={item.name} href={item.href} className="block px-5 py-3 text-gray-700 font-semibold hover:bg-blue-50 hover:text-[#097899] transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-2.5 font-bold shadow-md transition-all hover:-translate-y-0.5"
              style={{ color: "#097899" }}
            >
              <PlayCircle size={20} /> Request a Demo
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <div className="relative z-10 lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white border border-white/30 active:scale-90 transition-transform"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-5 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-4 font-bold text-gray-700 p-4 rounded-xl hover:bg-blue-50"
              >
                <span style={{ color: "#097899" }}>{link.icon}</span>
                {link.name}
              </Link>
            ))}
            
            {/* Products Section */}
            <div className="pt-2">
                <p className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">Products</p>
                {productsLinks.map(l => (
                    <Link 
                      key={l.name} 
                      href={l.href} 
                      className="block p-4 font-bold text-gray-700 hover:text-[#097899]"
                    >
                      {l.name}
                    </Link>
                ))}
            </div>
            
            {/* More Section */}
            <div className="pt-2">
                <p className="px-4 text-[10px] font-black text-gray-400 uppercase tracking-widest">More</p>
                {companyLinks.map(l => (
                    <Link 
                      key={l.name} 
                      href={l.href} 
                      className="block p-4 font-bold text-gray-700 hover:text-[#097899]"
                    >
                      {l.name}
                    </Link>
                ))}
            </div>

            <Link
              href="/contact"
              className="mt-4 flex items-center justify-center gap-2 rounded-xl p-4 text-white font-bold shadow-lg"
              style={{ backgroundColor: "#097899" }}
            >
              <PlayCircle size={22} /> Request a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;