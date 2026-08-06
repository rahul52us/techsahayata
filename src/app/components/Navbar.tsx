"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, FC, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const pathname = usePathname();
  const productsTimer = useRef<NodeJS.Timeout | null>(null);
  const companyTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileExpanded(null);
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

  const toggleMobileSection = (section: string) => {
    setMobileExpanded((prev) => (prev === section ? null : section));
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
    <>
      {/* FIXED NAVBAR */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-[100] w-full"
      >
        {/* Glass backdrop */}
        <div className="absolute inset-0 bg-[#0a0502]/80 backdrop-blur-xl border-b border-orange-500/10" />

        <div className="relative flex h-[70px] md:h-[80px] w-full items-center max-w-7xl mx-auto px-4 md:px-8">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 z-30 shrink-0">
            <img
              src="https://res.cloudinary.com/dtlrp3fzu/image/upload/v1763011911/stick_website_assets/wtwjiyybu7odemnlu76z.png"
              alt="TechSahayata Logo"
              className="object-contain w-[110px] md:w-[140px] brightness-110"
            />
            <div className="hidden sm:flex items-center gap-2">
              <div className="h-4 w-[1px] bg-orange-500/30" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-orange-400/80">
                Crafting Digital Love
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex flex-1 items-center justify-end gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-100/70 hover:text-white transition-colors rounded-xl hover:bg-orange-500/10"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}

            {/* Products Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => handleMouseEnter("products")}
              onMouseLeave={() => handleMouseLeave("products")}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-100/70 hover:text-white transition-colors rounded-xl hover:bg-orange-500/10">
                <Package size={16} />
                Products
                <motion.div
                  animate={{ rotate: isProductsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+12px)] right-0 w-56 rounded-2xl bg-[#120a05]/95 backdrop-blur-xl border border-orange-500/20 shadow-2xl shadow-orange-900/20 py-2 overflow-hidden"
                  >
                    {productsLinks.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-orange-100/70 hover:text-white hover:bg-orange-500/10 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={() => handleMouseLeave("company")}
            >
              <button className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-100/70 hover:text-white transition-colors rounded-xl hover:bg-orange-500/10">
                <Building2 size={16} />
                Company
                <motion.div
                  animate={{ rotate: isCompanyOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.div>
              </button>

              <AnimatePresence>
                {isCompanyOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+12px)] right-0 w-56 rounded-2xl bg-[#120a05]/95 backdrop-blur-xl border border-orange-500/20 shadow-2xl shadow-orange-900/20 py-2 overflow-hidden"
                  >
                    {companyLinks.map((item, i) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-5 py-3 text-sm text-orange-100/70 hover:text-white hover:bg-orange-500/10 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500/50" />
                          {item.name}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="ml-4 group flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2.5 text-sm font-bold text-[#1a0500] shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 transition-shadow"
            >
              <PlayCircle size={18} />
              Request a Demo
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 hover:text-white hover:bg-orange-500/20 transition-all active:scale-90"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* MOBILE ACCORDION MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden bg-[#0a0502]/95 backdrop-blur-xl border-t border-orange-500/10"
            >
              <div className="px-4 py-5 space-y-2 max-w-7xl mx-auto">
                {/* Direct Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-orange-100/80 font-semibold hover:bg-orange-500/10 hover:text-white transition-colors"
                  >
                    <span className="text-orange-500">{link.icon}</span>
                    {link.name}
                  </Link>
                ))}

                {/* Accordion: Products */}
                <div className="rounded-xl border border-orange-500/10 overflow-hidden">
                  <button
                    onClick={() => toggleMobileSection("products")}
                    className="flex items-center justify-between w-full px-4 py-3.5 text-orange-100/80 font-semibold hover:bg-orange-500/5 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <Package size={18} className="text-orange-500" />
                      Products
                    </span>
                    <motion.div
                      animate={{ rotate: mobileExpanded === "products" ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={18} className="text-orange-500/60" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "products" && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-3 space-y-1">
                          {productsLinks.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-orange-100/50 hover:text-orange-100 hover:bg-orange-500/10 transition-colors"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion: Company */}
                <div className="rounded-xl border border-orange-500/10 overflow-hidden">
                  <button
                    onClick={() => toggleMobileSection("company")}
                    className="flex items-center justify-between w-full px-4 py-3.5 text-orange-100/80 font-semibold hover:bg-orange-500/5 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <Building2 size={18} className="text-orange-500" />
                      Company
                    </span>
                    <motion.div
                      animate={{ rotate: mobileExpanded === "company" ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <ChevronDown size={18} className="text-orange-500/60" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {mobileExpanded === "company" && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-3 space-y-1">
                          {companyLinks.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm text-orange-100/50 hover:text-orange-100 hover:bg-orange-500/10 transition-colors"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 rounded-xl py-3.5 font-bold text-[#1a0500] bg-gradient-to-r from-orange-500 to-red-500 shadow-lg shadow-orange-500/20 mt-3"
                >
                  <PlayCircle size={20} />
                  Request a Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-[70px] md:h-[80px] w-full" aria-hidden="true" />
    </>
  );
};

export default Navbar;