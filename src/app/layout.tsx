import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
      className={`${rubik.variable} h-full antialiased`}
    >
      <body className={`${rubik.className} min-h-full flex flex-col`}>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
