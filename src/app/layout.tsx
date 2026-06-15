import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import FloatingEnquiry from "@/components/ui/FloatingEnquiry";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sheetla Global Logistics | Customs Clearance & Freight Forwarding",
  description: "Sheetla Global Logistics is a premium customs clearance and international freight forwarder. Enterprise customs clearance, air/ocean freight, trade compliance, and warehousing.",
  keywords: "Customs Clearance, Freight Forwarding, Custom House Agent, CHA, Air Cargo, Ocean Freight, Import Export Compliance, Logistics Supply Chain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white font-sans relative">
        {/* Fine grain noise overlay for premium feel */}
        <div className="bg-noise-overlay" />

        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>

        {/* Floating WhatsApp and Quick Enquiry widget */}
        <FloatingEnquiry />
      </body>
    </html>
  );
}
