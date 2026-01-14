import "./Feature.css";
import { useTranslation } from "react-i18next";
import p1 from "../../assets/coffee-latte-art.jpg";
import p5 from "../../assets/coffee.jpg";
import p2 from "../../assets/sweet-buns.jpg";
import p3 from "../../assets/croissant.jpg";

export default function Features() {
  const { t } = useTranslation();

  return (
    <section className="food_cafe-section">
      <div className="header-section">
        <h3 className="food_cafe-title">
          {t("features.header.title")}
        </h3>

        <h2 className="food_cafe-subtitle">
          {t("features.header.subtitle.start")}{" "}
          <span className="highlight">
            {t("features.header.subtitle.highlight")}
          </span>
        </h2>

        <p className="food_cafe-description">
          {t("features.header.description")}
        </p>
      </div>

      {/* ================= Pastries & Bread ================= */}
      <div>
        <div className="pastry_bread-section">
          <i className="fa-solid fa-bread-slice"></i>
          <h2>{t("features.pastries.section")}</h2>
        </div>

        <div className="pastry_bread-card-wrapper">
          <div className="pastry_bread-card">
            <div className="image-holder">
              <img src={p3} alt={t("features.pastries.items.croissant.title")} />
            </div>
            <h3>{t("features.pastries.items.croissant.title")}</h3>
            <p>{t("features.pastries.items.croissant.desc")}</p>
          </div>

          <div className="pastry_bread-card">
            <div className="image-holder">
              <img src={p2} alt={t("features.pastries.items.buns.title")} />
            </div>
            <h3>{t("features.pastries.items.buns.title")}</h3>
            <p>{t("features.pastries.items.buns.desc")}</p>
          </div>

          <div className="pastry_bread-card">
            <div className="icon-holder">
              <i className="fa-solid fa-cookie-bite"></i>
            </div>
            <h3>{t("features.pastries.items.donuts.title")}</h3>
            <p>{t("features.pastries.items.donuts.desc")}</p>
          </div>

          <div className="pastry_bread-card">
            <div className="icon-holder">
              <i className="fa-solid fa-bread-slice"></i>
            </div>
            <h3>{t("features.pastries.items.bread.title")}</h3>
            <p>{t("features.pastries.items.bread.desc")}</p>
          </div>
        </div>
      </div>

      {/* ================= Coffee Cafe ================= */}
      <div>
        <div className="coffee-cafe-section">
          <i className="fa-solid fa-mug-hot"></i>
          <h2>{t("features.cafe.section")}</h2>
        </div>

        <div className="coffee-cafe-card-wrapper">
          <div className="coffee-cafe-card">
            <div className="img-holder">
              <img src={p5} alt={t("features.cafe.items.espresso.title")} />
            </div>
            <h3>{t("features.cafe.items.espresso.title")}</h3>
            <p>{t("features.cafe.items.espresso.desc")}</p>
          </div>

          <div className="coffee-cafe-card">
            <div className="image-holder">
              <img src={p1} alt={t("features.cafe.items.latte.title")} />
            </div>
            <h3>{t("features.cafe.items.latte.title")}</h3>
            <p>{t("features.cafe.items.latte.desc")}</p>
          </div>

          <div className="coffee-cafe-card">
            <div className="icon-holder">
              <i className="fa-solid fa-glass-water"></i>
            </div>
            <h3>{t("features.cafe.items.drinks.title")}</h3>
            <p>{t("features.cafe.items.drinks.desc")}</p>
          </div>
        </div>
      </div>

      {/* ================= Mini Eatery ================= */}
      <div>
        <div className="eatery-section">
          <i className="fa-solid fa-burger"></i>
          <h2>{t("features.eatery.section")}</h2>
        </div>

        <div className="eatery-cards-wrapper">
          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-burger"></i>
            </div>
            <h3 className="card-title">{t("features.eatery.items.burgers.title")}</h3>
            <p className="card-description">{t("features.eatery.items.burgers.desc")}</p>
          </div>

          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-pizza-slice"></i>
            </div>
            <h3 className="card-title">{t("features.eatery.items.pizza.title")}</h3>
            <p className="card-description">{t("features.eatery.items.pizza.desc")}</p>
          </div>

          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-drumstick-bite"></i>
            </div>
            <h3 className="card-title">{t("features.eatery.items.chicken.title")}</h3>
            <p className="card-description">{t("features.eatery.items.chicken.desc")}</p>
          </div>

          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-utensils"></i>
            </div>
            <h3 className="card-title">{t("features.eatery.items.fries.title")}</h3>
            <p className="card-description">{t("features.eatery.items.fries.desc")}</p>
          </div>

          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-bread-slice"></i>
            </div>
            <h3 className="card-title">{t("features.eatery.items.sandwiches.title")}</h3>
            <p className="card-description">{t("features.eatery.items.sandwiches.desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
