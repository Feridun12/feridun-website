import { createContext, useContext, useEffect, useState } from "react";
import translations from "../i18n/translations.js";

const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "tr" || saved === "en") return saved;
  } catch (e) {}
  return "tr";
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem("lang", lang);
    } catch (e) {}
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
