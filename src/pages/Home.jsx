import { Link } from "react-router-dom";
import BottomOptions from "../components/BottomOptions.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <main className="centre">
        <p className="slogan">{t.home.slogan}</p>
        <h1 className="name">Feridun Canselen</h1>
        <p className="company">{t.home.company}</p>
        <Link className="cta" to="/contact">
          {t.home.cta}
        </Link>
      </main>
      <BottomOptions />
    </>
  );
}
