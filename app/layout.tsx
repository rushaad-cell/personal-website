import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navigation } from "@/components/Navigation";
import { EasterEggSection } from "@/components/EasterEggSection";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rushaad Mistry | Cognitive Science Researcher & Product Strategist",
  description: "Cognitive Science student at UC Berkeley specializing in product research and data-driven strategy. Bridging behavioral sciences and product thinking.",
  keywords: ["cognitive science", "data science", "UX research", "eye-tracking", "product strategy"],
  authors: [{ name: "Rushaad Mistry" }],
  openGraph: {
    title: "Rushaad Mistry | Cognitive Science Researcher",
    description: "Bridging behavioral sciences and product thinking to translate human data into insights for innovation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Navigation />
          <div className="pt-20 md:pt-24">
            <div className="h-20 md:h-24"></div>
            {children}
          </div>
          <EasterEggSection />
        </ThemeProvider>
      </body>
    </html>
  );
}
