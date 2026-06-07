"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const HIDDEN_PREFIXES = ["/login", "/dashboard"];

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideChrome = HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix));

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

