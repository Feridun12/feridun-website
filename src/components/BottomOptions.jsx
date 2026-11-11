import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const options = [
  { num: "01", to: "/guide", key: "guide" },
  { num: "02", to: "/listings", key: "listings" },
  { num: "03", to: "/explore", key: "explore" },
];

export default function BottomOptions() {
  const { t } = useLanguage();

  return (
    <div className="wrap">
      <div className="bottom">
        {options.map((o) => (
          <Link key={o.num} className="opt" to={o.to}>
            <small>{o.num}</small>
            <em>|</em>
            <span>{t.options[o.key]}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
