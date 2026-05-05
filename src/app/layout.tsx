import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { Source_Serif_4, Inter, Outfit } from "next/font/google";
import { Container } from "@/components/ui/container";
import { IntroLoaderWrapper } from "@/components/IntroLoaderWrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-source-serif",
});

export const metadata: Metadata = {
  title: "Whenevr® — Your design partner for growth",
  description: "A subscription-based design agency for fast-growing startups.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} ${outfit.variable}`}>
      <body className="antialiased font-sans">
        <IntroLoaderWrapper>
          <Navbar />
          {children}
        </IntroLoaderWrapper>
      </body>
    </html>
  );
}
