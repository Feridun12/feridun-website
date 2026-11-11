import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <main className="stub">
      <h1>{t.pages.notFound}</h1>
      <p>
        <Link className="cta" to="/">
          {t.pages.back}
        </Link>
      </p>
    </main>
  );
}
