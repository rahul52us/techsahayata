"use client";

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
      <div className="flex h-[85px] w-full">

        {/* LEFT : Logo Section */}
        <div className="flex items-center bg-white px-8 min-w-[240px] z-10">
          <Link href="/" className="flex items-center">
            <img
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011911/stick_website_assets/wtwjiyybu7odemnlu76z.png"
              alt="TechSahayata Logo"
              width="145"
              height="40"
              className="object-contain"
            />
             <span className="mt-1 text-xs font-medium tracking-wider text-sky-400 drop-shadow-[0_0_6px_rgba(56,189,248,0.6)]">
  Crafting Digital Love
</span>


          </Link>
        </div>

        {/* RIGHT : Menu Wrapper (NOT clipped) */}
        <div className="relative flex flex-1 items-center justify-end">

          {/* Fancy Blue Background (CLIPPED ONLY HERE) */}
          <div
            className="absolute inset-0 bg-[#87CEEB]"
            style={{
              clipPath: "polygon(40px 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />

          {/* Desktop Menu (NOT clipped) */}
          <div className="relative z-10 hidden lg:flex items-center space-x-10 px-10">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 font-semibold text-gray-900 hover:text-white"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

            {/* Products */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={() => handleMouseLeave("products")}
            >
              <button className="flex items-center gap-2 font-semibold text-gray-900 hover:text-white">
                <Package size={18} /> Products
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-lg bg-white shadow-xl border py-2 z-50">
                  {productsLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2 text-gray-700 hover:bg-[#e0f3f8]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={() => handleMouseLeave("company")}
            >
              <button className="flex items-center gap-2 font-semibold text-gray-900 hover:text-white">
                <Building2 size={18} /> Company
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    isCompanyOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCompanyOpen && (
                <div className="absolute right-0 mt-3 w-60 rounded-lg bg-white shadow-xl border py-2 z-50">
                  {companyLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-5 py-2 text-gray-700 hover:bg-[#e0f3f8]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#2aa1c9] shadow hover:bg-gray-100"
            >
              <PlayCircle size={18} /> Request a Demo
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="relative z-10 lg:hidden ml-auto px-4">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-white border"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="flex flex-col px-6 py-6 space-y-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 font-semibold text-gray-800"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

            <div>
              <p className="font-semibold text-gray-700 mb-2">Products</p>
              <div className="ml-4 space-y-2">
                {productsLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-700 mb-2">Company</p>
              <div className="ml-4 space-y-2">
                {companyLinks.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#2aa1c9] px-6 py-3 text-white font-semibold"
            >
              <PlayCircle size={18} /> Request a Demo
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
