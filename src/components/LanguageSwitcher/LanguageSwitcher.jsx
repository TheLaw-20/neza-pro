import { useState } from "react";
import i18n from "i18next";
import "./LanguageSwitcher.css";

const LanguageSwitcher = () => {
  const [open, setOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng);
    setOpen(false);
  };

  return (
    <div className="language-switcher">
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        🌍 {i18n.language === "rw" ? "Kinyarwanda" : "English"}
      </button>

      {open && (
        <ul className="lang-dropdown">
          <li onClick={() => changeLanguage("en")}>English</li>
          <li onClick={() => changeLanguage("rw")}>Kinyarwanda</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
