import type { Metadata } from "next";
import { Caveat, Fragment_Mono, Funnel_Display, Inter } from "next/font/google";
import "./globals.css";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const funnelDisplay = Funnel_Display({
  variable: "--font-funnel",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

// Used only for the handwritten margin notes.
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Trifreight Trade Solutions | Freight Forwarding",
    template: "%s | Trifreight Trade Solutions",
  },
  description:
    "Trifreight Trade Solutions coordinates air freight, ocean freight, road transport, and customs clearance — one connected operation from origin to destination.",
  keywords:
    "freight forwarding, air freight, ocean freight, road transport, customs clearance, logistics, consolidation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${funnelDisplay.variable} ${fragmentMono.variable} ${caveat.variable} antialiased`}
      data-scroll-behavior="smooth"
    >
      <body>
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}