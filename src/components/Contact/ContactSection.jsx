import React from "react";
import "./Contact.css";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="stationery-shop" id="stationery-shop">
      <div className="stationery-shop-section">
        <div className="stationery-shop-wrapper">

          {/* LEFT SIDE */}
          <div className="option-wrapper">
            <p className="stationery-shop-section-subtitle">
              {t("stationery.subtitle")}
            </p>

            <h2 className="stationery-shop-section-title">
              {t("stationery.title.start")}{" "}
              <span className="highlight">{t("stationery.title.highlight")}</span>{" "}
              {t("stationery.title.end")}
            </h2>

            <p className="stationery-shop-description">
              {t("stationery.description")}
            </p>

            <div className="option-info">
              <div className="icon-container">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <h3>{t("stationery.items.school.title")}</h3>
                <span>{t("stationery.items.school.desc")}</span>
              </div>
            </div>

            <div className="option-info">
              <div className="icon-container">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3>{t("stationery.items.office.title")}</h3>
                <span>{t("stationery.items.office.desc")}</span>
              </div>
            </div>

            <div className="option-info">
              <div className="icon-container">
                <i className="fa-solid fa-palette"></i>
              </div>
              <div>
                <h3>{t("stationery.items.art.title")}</h3>
                <span>{t("stationery.items.art.desc")}</span>
              </div>
            </div>

            <div className="option-info">
              <div className="icon-container">
                <i className="fa-solid fa-print"></i>
              </div>
              <div>
                <h3>{t("stationery.items.print.title")}</h3>
                <span>{t("stationery.items.print.desc")}</span>
              </div>
            </div>

            <div className="option-container">
              <i className="fa-solid fa-tags"></i>{" "}
              {t("stationery.promo")}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="items-wrapper">
            <div className="items-card">
              <i className="fa-solid fa-book"></i>
              <h3>{t("stationery.products.notebooks")}</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-pen"></i>
              <h3>{t("stationery.products.pens")}</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-pencil"></i>
              <h3>{t("stationery.products.pencils")}</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-eraser"></i>
              <h3>{t("stationery.products.erasers")}</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-ruler"></i>
              <h3>{t("stationery.products.rulers")}</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-scissors"></i>
              <h3>{t("stationery.products.scissors")}</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-marker"></i>
              <h3>{t("stationery.products.markers")}</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-folder"></i>
              <h3>{t("stationery.products.folders")}</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-calculator"></i>
              <h3>{t("stationery.products.calculators")}</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
