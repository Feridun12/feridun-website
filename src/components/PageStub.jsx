import { useLanguage } from "../context/LanguageContext.jsx";

// Temporary page body. Replace with real content, one page at a time.
export default function PageStub({ titleKey }) {
  const { t } = useLanguage();

  return (
    <main className="stub">
      <h1>{t.pages[titleKey]}</h1>
      <p>{t.pages.soon}</p>
    </main>
  );
}
