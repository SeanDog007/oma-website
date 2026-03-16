import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ōma — Know Yourself. Completely.",
  description:
    "The first platform to read your genome and microbiome as one integrated biological system. Tests at cost. Analysis free. Precise, personalized protocols.",
  openGraph: {
    title: "Ōma — Know Yourself. Completely.",
    description:
      "Your genome and your microbiome — read together for the first time.",
    type: "website",
    siteName: "Ōma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ōma — Know Yourself. Completely.",
    description:
      "Your genome and your microbiome — read together for the first time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <ScrollProgress />
        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
