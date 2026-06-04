import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingSocial from "@/components/FloatingSocial";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mor Pankh — Asli Swad, Rangeen Mehfil",
  description:
    "Mor Pankh — Where every colour of flavour comes alive. Authentic Pakistani street food and BBQ served with heart.",
  keywords: ["Pakistani restaurant", "desi food", "biryani", "karahi", "BBQ", "Mor Pankh"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-secondary font-sans text-onyx">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingSocial />
      </body>
    </html>
  );
}
