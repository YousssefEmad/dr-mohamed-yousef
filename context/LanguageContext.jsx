"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { pickLocalized, t as translate, getDir } from "@/lib/helpers";

const STORAGE_KEY = "site_lang";
const DEFAULT_LANG = "ar";

const LanguageContext = createContext({
  lang: DEFAULT_LANG,
  dir: "rtl",
  setLang: () => {},
  toggleLang: () => {},
  pick: () => "",
  t: () => "",
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(DEFAULT_LANG);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "ar" || saved === "en") setLangState(saved);
    } catch (_) {
      /* ignore */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const dir = getDir(lang);
    document.documentElement.setAttribute("lang", lang === "ar" ? "ar" : "en");
    document.documentElement.setAttribute("dir", dir);
    document.body.classList.toggle("lang-ar", lang === "ar");
    document.body.classList.toggle("lang-en", lang === "en");
  }, [lang, ready]);

  const setLang = useCallback((next) => {
    const value = next === "en" ? "en" : "ar";
    setLangState(value);
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch (_) {
      /* ignore */
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLang(lang === "ar" ? "en" : "ar");
  }, [lang, setLang]);

  const pick = useCallback(
    (item, field) => pickLocalized(item, field, lang),
    [lang]
  );

  const t = useCallback((labels, key) => translate(labels, key, lang), [lang]);

  const value = useMemo(
    () => ({ lang, dir: getDir(lang), setLang, toggleLang, pick, t, ready }),
    [lang, setLang, toggleLang, pick, t, ready]
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
