import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navigation } from "@/components/Navigation";
import "../globals.css";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <Navigation />
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

