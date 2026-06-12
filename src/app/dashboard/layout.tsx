import type { ReactNode } from "react";
import Providers from "../providers";
import DashboardLayout from "../layouts/dashboardLayout/DashboardLayout";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <DashboardLayout>{children}</DashboardLayout>
    </Providers>
  );
}
