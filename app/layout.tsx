import type { PropsWithChildren } from "react";

import { Metadata } from "next";
import { Roboto } from "next/font/google";

import { cn } from "@/utils";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { Toaster } from "@/components/ui/toaster";

import { META_DATA } from "@/constants/meta";

import "./globals.css";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin", "latin-ext"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  ...META_DATA,
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn("flex flex-col min-h-screen antialiased", roboto.variable)}>
        <ScrollToTop />
        <Header />
        <main className="grow flex flex-col min-h-150">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
