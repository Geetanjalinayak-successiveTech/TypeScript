"use client";

import { createContext, useState, ReactNode } from "react";
import Language from "../Components/LanguageSwitcher";


type LanguageContextType = {
  lang: string;
  setLang: (value: string) => void;
};

const LanguageSwitcher = createContext<LanguageContextType | null>(null);

export default function App() {
  const [lang, setLang] = useState<string>("en");

  return (
    <LanguageSwitcher.Provider value={{ lang, setLang }}>
      <div>
        <Language />
      </div>
    </LanguageSwitcher.Provider>
  );
}

export { LanguageSwitcher };
