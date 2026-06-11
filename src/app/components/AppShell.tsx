"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import AuthenticationLayout from "../layouts/authenticationLayout/AuthenticationLayout";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";
import MainLayout from "../layouts/mainLayout/MainLayout";

export default function AppShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  if (pathname.startsWith("/login")) {
    return <AuthenticationLayout>{children}</AuthenticationLayout>;
  }

  if (pathname.startsWith("/dashboard")) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  return <MainLayout>{children}</MainLayout>;
}
