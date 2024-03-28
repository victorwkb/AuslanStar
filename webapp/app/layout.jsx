import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AuslanStar",
  description: "AuslanStar is a platform for learning Australian Sign Language (Auslan) online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={
          "mx-auto max-w-[1200px] px-6 py-8 md-py-12"
        }>
          {children}
        </div>
      </body>
    </html>
  );
}
