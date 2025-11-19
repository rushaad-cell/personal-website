import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/Navigation";
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                if (window.google && window.google.translate) {
                  new google.translate.TranslateElement(
                    { pageLanguage: 'en', includedLanguages: 'es,de', layout: 0 },
                    'google_translate_element'
                  );
                }
              }
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <div className="pt-12 md:pt-12">
          <div className="h-12 md:h-12"></div>
          {children}
        </div>
      </body>
    </html>
  );
}
