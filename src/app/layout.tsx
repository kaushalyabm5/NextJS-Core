import type { Metadata } from "next";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import "./globals.css";

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
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        {/* Navbar එක සියලුම පිටු වල උඩින්ම පෙනේ */}
        <Navbar />

        {/* Dynamic Page Content එක මැදට Render වේ */}
        <main className="flex-1">{children}</main>

        {/* Footer එක සියලුම පිටු වල පහළින්ම පෙනේ */}
        <Footer />
      </body>
    </html>
  );
}