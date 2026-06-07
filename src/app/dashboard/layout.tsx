import type { ReactNode } from "react";
import AuthGuard from "@/components/admin/AuthGuard";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AuthGuard>{children}</AuthGuard>;
}

