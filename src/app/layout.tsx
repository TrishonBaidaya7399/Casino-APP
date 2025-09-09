import "../app/globals.css";

import type React from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";
import GlobalProvider from "@/providers/GlobalProvider";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Casino & Sports Betting Platform",
  description: "Premium casino and sports betting experience",
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">  <GlobalProvider>{children}</GlobalProvider></body>
    </html>
  );
}
