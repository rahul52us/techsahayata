import "@/app/globals.css";
import type { Metadata } from "next";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Techsahayata-Starter with Techsahayata",
  description: "Starter with Techsahayata",
  viewport: 'width=device-width, initial-scale=1',
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
          <Navbar />   
          {children}
          <Footer />
        </Providers>
      </body>

      
    </html>
  );
}