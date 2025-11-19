"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "es" | "de";

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translate: (text: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Simple translation function using Google Translate API (client-side)
async function translateText(text: string, targetLang: "es" | "de"): Promise<string> {
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`
    );
    const data = await response.json();
    return data[0]?.[0]?.[0] || text;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translationCache, setTranslationCache] = useState<Record<string, string>>({});

  const translate = async (text: string): Promise<string> => {
    if (language === "en" || !text.trim()) return text;
    
    const cacheKey = `${language}:${text}`;
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    const translated = await translateText(text, language);
    setTranslationCache((prev) => ({ ...prev, [cacheKey]: translated }));
    return translated;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, translate: () => "" }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslation must be used within TranslationProvider");
  }
  return context;
}

