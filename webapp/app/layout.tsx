import type { Metadata } from "next";
import "../styles/globals.css";
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
      <body className="antialiased width-full bg-yellow-50 font-comic text-primary">
        <main>
          <Navbar />
          <div>
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
