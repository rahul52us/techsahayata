"use client";
import React, { useState, useEffect } from "react";

interface TagItem {
  label: string;
  target: string;
}

interface TagNavProps {
  items: TagItem[];
}

const TagNav: React.FC<TagNavProps> = ({ items }) => {
  const [activeTag, setActiveTag] = useState<string>("");

  // Scroll listener to highlight the active section
  useEffect(() => {
    const handleScroll = () => {
      // Offset slightly to account for fixed headers if any
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (let i = items.length - 1; i >= 0; i--) {
        const section = document.getElementById(items[i].target);
        if (section && section.offsetTop <= scrollPos) {
          setActiveTag(items[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on load

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  // Smooth scroll to section
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Scroll to section with a small offset for better visibility
      const offset = 80; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = section.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setActiveTag(id);
    }
  };

  return (
    <nav className="flex flex-wrap justify-center gap-3 py-10">
      {items.map((item) => (
        <button
          key={item.target}
          onClick={() => scrollToSection(item.target)}
          className={`px-5 py-2.5 rounded-full text-sm md:text-base font-semibold transition-all duration-300 border-2 ${
            activeTag === item.target
              ? "bg-[#097899] text-white border-[#097899] shadow-[0_10px_20px_rgba(9,120,153,0.3)] scale-105"
              : "bg-white text-gray-600 border-gray-100 hover:border-[#097899]/30 hover:bg-[#097899]/5 hover:text-[#097899]"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default TagNav;