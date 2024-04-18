import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AuslanStar",
  description:
    "AuslanStar is a platform for learning Australian Sign Language (Auslan) online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
