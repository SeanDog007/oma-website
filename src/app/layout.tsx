import type { Metadata } from "next";
import { Inter, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "600"],
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ōma Analytics — The Complete Biological Picture",
  description:
    "The first platform to unify genomic variant data with quantitative microbiome testing — purpose-built for functional medicine practitioners.",
  openGraph: {
    title: "Ōma Analytics — The Complete Biological Picture",
    description:
      "The first platform to unify genomic variant data with quantitative microbiome testing.",
    type: "website",
    siteName: "Ōma Analytics",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ōma Analytics — The Complete Biological Picture",
    description:
      "The first platform to unify genomic variant data with quantitative microbiome testing.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} ${ibmPlexMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
