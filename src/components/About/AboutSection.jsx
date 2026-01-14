import "./About.css";
import { useTranslation } from "react-i18next";

export default function AboutSection() {
  const { t } = useTranslation();

  return (
    <section className="about-collection">
      <div className="about-container">
        <p className="about-section-subtitle">
          {t("about.subtitle")}
        </p>

        <h2 className="about-section-title">
          {t("about.title")}{" "}
          <span className="highlight">{t("about.highlight")}</span>
        </h2>

        <p className="about-section-description">
          {t("about.description")}
        </p>

        <div className="about-cards-wrapper">
          {/* Card 1 */}
          <article className="about-card">
            <div className="about-card-image popular">
              <div className="mini-container1">
                <i className="fa-solid fa-bread-slice"></i>
              </div>
            </div>
            <div className="about-card-content">
              <h3>{t("about.cards.pastries.title")}</h3>
              <p>{t("about.cards.pastries.desc")}</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="about-card">
            <div className="about-card-image">
              <div className="mini-container2">
                <i className="fa-solid fa-coffee"></i>
              </div>
            </div>
            <div className="about-card-content">
              <h3>{t("about.cards.cafe.title")}</h3>
              <p>{t("about.cards.cafe.desc")}</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="about-card">
            <div className="about-card-image featured">
              <div className="mini-container1">
                <i className="fa-solid fa-burger"></i>
              </div>
            </div>
            <div className="about-card-content">
              <h3>{t("about.cards.eatery.title")}</h3>
              <p>{t("about.cards.eatery.desc")}</p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="about-card">
            <div className="about-card-image popular">
              <div className="mini-container2">
                <i className="fa-solid fa-pen"></i>
              </div>
            </div>
            <div className="about-card-content">
              <h3>{t("about.cards.stationery.title")}</h3>
              <p>{t("about.cards.stationery.desc")}</p>
            </div>
          </article>

          {/* Card 5 */}
          <article className="about-card">
            <div className="about-card-image featured">
              <div className="mini-container1">
                <i className="fa-solid fa-shopping-cart"></i>
              </div>
            </div>
            <div className="about-card-content">
              <h3>{t("about.cards.supermarket.title")}</h3>
              <p>{t("about.cards.supermarket.desc")}</p>
            </div>
          </article>

          {/* Gallery CTA */}
          <article className="stats-contanier">
            <div className="mini-container">
              <i className="fa-solid fa-images"></i>
            </div>

            <div className="stats-container-content">
              <h3>{t("about.gallery.title")}</h3>
              <p>{t("about.gallery.desc")}</p>
              <div className="stats-btn">
                {t("about.gallery.button")}{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
