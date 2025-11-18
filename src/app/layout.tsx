import "./globals.css";
import type { Metadata } from "next";
import Navbar from "../app/components/Navbar";
// import Footer from "../app/components/Footer";

export const metadata: Metadata = {
  title: "Techsahayata-Starter with Techsahayata",
  description: "Starter with Techsahayata",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navbar />   
        
        {children}

        {/* <Footer /> */}
      </body>

      
    </html>
  );
}
