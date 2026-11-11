import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const links = [
  { to: "/about", key: "about" },
  { to: "/portfolio", key: "portfolio" },
  { to: "/listings", key: "listings" },
  { to: "/reviews", key: "reviews" },
  { to: "/contact", key: "contact" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link className="logo" to="/" onClick={() => setOpen(false)}>
        Feridun Canselen
      </Link>

      <button
        className="burger"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={"links" + (open ? " open" : "")}>
        {links.map((l) => (
          <NavLink
            key={l.key}
            to={l.to}
            className={({ isActive }) => (isActive ? "active" : undefined)}
            onClick={() => setOpen(false)}
          >
            {t.nav[l.key]}
          </NavLink>
        ))}

        <div className="lang" role="group" aria-label="Language">
          <button aria-pressed={lang === "tr"} onClick={() => setLang("tr")}>
            TR
          </button>
          <i>|</i>
          <button aria-pressed={lang === "en"} onClick={() => setLang("en")}>
            EN
          </button>
        </div>
      </div>
    </nav>
  );
}
