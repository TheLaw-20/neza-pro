import "./Header.css";
import bg from "../../assets/featuresBG.jpg";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      {/* NAV BAR */}
      <nav className="navbar">
        <div className="nav-logo">
          <i className="fa-solid fa-croissant"></i> Neza Pro
        </div>

        <LanguageSwitcher />

        <ul className="nav-links">
          <li>{t("nav.about")}</li>
          <li>{t("nav.menu")}</li>
          <li>{t("nav.gallery")}</li>
          <li>{t("nav.contact")}</li>
        </ul>

        <button className="nav-order-now-btn">
          {t("hero.button")}
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="nav-section">
        <div
          className="nav-bg"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="nav-overlay"></div>

          <div className="nav-content">
            <div className="nav-badge top-badge">
              <i className="fa-solid fa-star"></i>
              {t("hero.badgeTop")}
            </div>

            <h1>
              {t("hero.title")}{" "}
              <span className="nav-highlight">
                {t("hero.highlight")}
              </span>
            </h1>

            <p className="nav-sub">{t("hero.subtitle")}</p>

            <div className="header-card">
              <div className="header-card-item">
                <i className="fa-solid fa-bread-slice"></i>
                <span>{t("hero.cards.pastries")}</span>
              </div>

              <div className="header-card-item">
                <i className="fa-solid fa-mug-hot"></i>
                <span>{t("hero.cards.cafe")}</span>
              </div>

              <div className="header-card-item">
                <i className="fa-solid fa-burger"></i>
                <span>{t("hero.cards.eatery")}</span>
              </div>

              <div className="header-card-item">
                <i className="fa-solid fa-pen"></i>
                <span>{t("hero.cards.stationery")}</span>
              </div>

              <div className="header-card-item">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>{t("hero.cards.supermarket")}</span>
              </div>
            </div>

            <div className="nav-buttons">
              <button className="nav-btn-explore-btn">
                {t("hero.explore")}{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </button>

              <button className="nav-btn-visit-btn">
                <i className="fa-solid fa-location"></i>{" "}
                {t("hero.visit")}
              </button>
            </div>

            <div className="nav-badge-bottom-badge">
              <i className="fa-solid fa-clock"></i>
              {t("hero.badgeBottom")}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
