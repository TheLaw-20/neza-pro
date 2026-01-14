import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Gallery.css";

import p1 from "../../assets/croissant.jpg";
import p5 from "../../assets/p5.jpg";
import p2 from "../../assets/p6.jpg";

export default function GallerySection() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  const [services, setServices] = useState(1);
  const [days, setDays] = useState(1);
  const [animateHeart, setAnimateHeart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServices(1);
          setDays(1);
          setAnimateHeart(false);

          let s = 1;
          const sInterval = setInterval(() => {
            s++;
            setServices(s);
            if (s >= 5) clearInterval(sInterval);
          }, 200);

          let d = 1;
          const dInterval = setInterval(() => {
            d++;
            setDays(d);
            if (d >= 7) clearInterval(dInterval);
          }, 200);

          setTimeout(() => setAnimateHeart(true), 300);
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="abt-section" ref={sectionRef}>
      <div className="container">
        <div className="abt-wrapper">

          <div className="abt-left">
            <p className="abt-section-subtitle">
              {t("gallery.subtitle")}
            </p>

            <h2 className="abt-section-title">
              {t("gallery.title")}{" "}
              <span className="highlight">
                {t("gallery.titleHighlight")}
              </span>
            </h2>

            <p className="abt-section-description">
              {t("gallery.description1")}
            </p>

            <p className="abt-section-description">
              {t("gallery.description2")}
            </p>

            <div className="info-wrapper">

              <div className="abt-info">
                <div className="icon-container1">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className="txts">
                  <h3>
                    {t("gallery.communityTitle")} <br />
                    <span className="abt-txts">
                      {t("gallery.communityText")}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="abt-info">
                <div className="icon-container2">
                  <i className="fa-solid fa-leaf"></i>
                </div>
                <div className="txts">
                  <h3>
                    {t("gallery.qualityTitle")} <br />
                    <span className="abt-txts">
                      {t("gallery.qualityText")}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="abt-info">
                <div className="icon-container3">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="txts">
                  <h3>
                    {t("gallery.convenienceTitle")} <br />
                    <span className="abt-txts">
                      {t("gallery.convenienceText")}
                    </span>
                  </h3>
                </div>
              </div>

              <div className="stats-container">
                <div className="stats">
                  <h1>{services}+</h1>
                  <p>{t("gallery.services")}</p>
                </div>

                <div className={`stats heart ${animateHeart ? "pulse" : ""}`}>
                  <h1>Fresh</h1>
                  <p>{t("gallery.dailyProducts")}</p>
                </div>

                <div className="stats">
                  <h1>{days}</h1>
                  <p>{t("gallery.daysAWeek")}</p>
                </div>
              </div>

            </div>
          </div>

          <div className="abt-images">
            <img src={p1} alt="coffee" className="abt-img img-1" />
            <img src={p5} alt="pastries" className="abt-img img-2" />
            <img src={p2} alt="food" className="abt-img img-3" />
          </div>

        </div>
      </div>
    </section>
  );
}
