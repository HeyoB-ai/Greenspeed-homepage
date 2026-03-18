import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Greenspeed – Duurzame medicijnbezorging voor apotheken",
    template: "%s | Greenspeed",
  },
  description:
    "Greenspeed verzorgt duurzame medicijnbezorging per fiets en e-bike. AI-gestuurde routeplanning, real-time tracking en vaste koeriers. CO₂-neutraal en betrouwbaar.",
  keywords: [
    "medicijnbezorging",
    "apotheek bezorging",
    "duurzame bezorging",
    "fietskoerier apotheek",
    "AIroute planner",
    "Greenspeed",
  ],
  authors: [{ name: "Greenspeed B.V." }],
  creator: "Greenspeed B.V.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://greenspeed.nl",
    siteName: "Greenspeed",
    title: "Greenspeed – Duurzame medicijnbezorging voor apotheken",
    description:
      "CO₂-neutrale medicijnbezorging per fiets met AI-gestuurde routeplanning en real-time tracking.",
    images: [
      {
        url: "https://placehold.co/1200x630/3ab4a0/white?text=Greenspeed",
        width: 1200,
        height: 630,
        alt: "Greenspeed – Duurzame medicijnbezorging",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greenspeed – Duurzame medicijnbezorging",
    description: "CO₂-neutrale medicijnbezorging voor apotheken",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
