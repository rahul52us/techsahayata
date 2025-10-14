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
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveTag(id);
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {items.map((item) => (
        <button
          key={item.target}
          onClick={() => scrollToSection(item.target)}
          className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 ${
            activeTag === item.target
              ? "bg-teal-500 text-white shadow-lg scale-105"
              : "bg-gray-200 text-gray-800 hover:bg-teal-100"
          }`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
};

export default TagNav;
