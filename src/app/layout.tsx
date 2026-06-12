import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import FloatingEnquiry from "@/components/ui/FloatingEnquiry";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sheetla Global Logistics | Customs Clearance & Freight Forwarding",
  description: "Sheetla Global Logistics is a premium licensed customs broker and international freight forwarder. Enterprise customs clearance, air/ocean freight, trade compliance, and warehousing.",
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
      className={`${plusJakartaSans.variable} ${outfit.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-navy-dark text-slate-100 font-sans relative">
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
