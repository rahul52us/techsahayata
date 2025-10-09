"use client";

import React, { useEffect, useRef, useState } from "react";

type Tag = {
  id: string;
  label: string;
};

const tags: Tag[] = [
  { id: "vendor-onboarding", label: "Vendor Onboarding" },
  { id: "vendor-due-diligence", label: "Vendor Due Diligence" },
  { id: "order-management", label: "Order Management" },
  { id: "streamlined-invoice-processing", label: "Streamlined Invoice Processing" },
  { id: "five-way-matching", label: "5-Way Matching" },
  { id: "reconciliation", label: "Reconciliation" },
  { id: "help-desk", label: "Help Desk" },
  { id: "catalog-management", label: "Catalog Management" },
];

export default function TagNav() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState<string>(tags[0].id);

  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(undefined, "", `#${id}`);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );

    tags.forEach((t) => {
      const el = document.getElementById(t.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollBy = (delta: number) => {
    const el = containerRef.current;
    if (el) {
      el.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full py-4 relative">
      <div className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20">
        {/* <button
          onClick={() => scrollBy(-200)}
          aria-label="scroll-left"
          className="p-2 rounded-full bg-white shadow"
        >
          ◀
        </button> */}
      </div>

      <div className="overflow-x-auto" ref={containerRef}>
        <div className="flex gap-4 px-4 md:px-8 min-w-max items-center">
          {tags.map((t) => (
            <a
              key={t.id}
              href={`#${t.id}`}
              onClick={handleClick(t.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-full shadow-sm transition ${
                active === t.id
                  ? "bg-teal-600 text-white"
                  : "bg-teal-50 text-teal-700 hover:bg-teal-100"
              }`}
            >
              {t.label}
            </a>
          ))}
        </div>
      </div>

      {/* <div className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20">
        <button
          onClick={() => scrollBy(200)}
          aria-label="scroll-right"
          className="p-2 rounded-full bg-white shadow"
        >
          ▶
        </button>
      </div> */}
    </nav>
  );
}
