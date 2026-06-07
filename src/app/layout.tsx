import "./globals.css";
import type { Metadata, Viewport } from "next";
import AppShell from "./components/AppShell";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Techsahayata-Starter with Techsahayata",
  description: "Starter with Techsahayata",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}
