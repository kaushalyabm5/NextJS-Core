import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // 1. Import Poppins
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

// 2. Configure Poppins Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // ඔයාට අවශ්‍ය font weights
});

export const metadata: Metadata = {
  title: "BMW Superbikes | High Performance Bikes",
  description: "Explore the ultimate range of BMW Motorrad superbikes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      {/* 3. Apply poppins.className to <body> */}
      <body className={`${poppins.className} min-h-full flex flex-col bg-slate-950 text-slate-100`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}