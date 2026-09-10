import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "@/components/my/Head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "КОД Л.Е.Т.О"
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="max-w-7xl bg-gradient-to-t from-[#d3f0fe] to-[#dde7ff] my-font font-extralight text-[#171717] mx-auto min-h-screen">
        <Head />
        {children}
      </body>
    </html>
  );
}
