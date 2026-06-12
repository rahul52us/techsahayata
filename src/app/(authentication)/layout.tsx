import type { ReactNode } from "react";
import Providers from "../providers";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9fafb' }}>
        {children}
      </div>
    </Providers>
  );
}
