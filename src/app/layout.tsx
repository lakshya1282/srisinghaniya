import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ivyMode = localFont({
  src: [
    {
      path: "../../ivy-mode/IvyMode-Regular.woff2",
      weight: "400",
      style: "normal",
    }
  ],
  variable: "--font-ivy-mode",
});

const vazirmatn = localFont({
  src: [
    {
      path: "../../Vazirmatn/static/Vazirmatn-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../Vazirmatn/static/Vazirmatn-Medium.ttf",
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "SriSinghaniya Infrastructures",
  description: "Trusted Manufacturer of Power & Infrastructure Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ivyMode.variable} ${vazirmatn.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
