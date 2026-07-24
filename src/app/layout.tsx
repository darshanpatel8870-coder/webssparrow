import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "WebsSparrow | Custom WordPress, Shopify & Laravel Development Agency",
    template: "%s | WebsSparrow Technologies"
  },
  description: "WebsSparrow is a premier full-stack web development agency building fast, scalable, and secure web applications, e-commerce stores, custom APIs, and migrations using Laravel, Next.js, WordPress & Shopify.",
  keywords: [
    "WebsSparrow", "Web Development Agency", "WordPress Agency", "Shopify E-commerce Agency", 
    "Laravel Agency", "React.js Agency", "Custom Web Development", "API integrations", 
    "Website speed optimization", "Custom plugin development"
  ],
  metadataBase: new URL("https://webssparrow.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "WebsSparrow | Custom WordPress, Shopify & Laravel Agency",
    description: "Custom e-commerce storefronts, web applications, custom themes, plugins, and scalable backend solutions.",
    url: "https://webssparrow.com",
    siteName: "WebsSparrow",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WebsSparrow | Custom Web Development Agency",
    description: "Custom web development agency specializing in WordPress, Shopify, Laravel, React & Node.js."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-bg-base text-text-primary"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
