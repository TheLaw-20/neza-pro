import { useEffect, useRef, useState } from "react";
import "./Gallery.css";

import p1 from "../../assets/croissant.jpg";
import p5 from "../../assets/p5.jpg";
import p2 from "../../assets/p6.jpg";

export default function GallerySection() {
  const sectionRef = useRef(null);

  const [services, setServices] = useState(1);
  const [days, setDays] = useState(1);
  const [animateHeart, setAnimateHeart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // reset
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

          {/* LEFT SIDE (UNCHANGED CONTENT) */}
          <div className="abt-left">
            <p className="abt-section-subtitle">ABOUT NEZA PRO</p>

            <h2 className="abt-section-title">
              Your Neighborhood <span className="highlight">Lifestyle Hub</span>
            </h2>

            <p className="abt-section-description">
              At Neza Pro, we believe in making your daily life easier and more enjoyable.
            </p>

            <p className="abt-section-description">
              From the moment you walk through our doors, you'll experience the warmth of
              fresh-baked pastries, premium coffee, and everyday convenience.
            </p>

            <div className="info-wrapper">

              <div className="abt-info">
                <div className="icon-container1">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <div className="txts">
                  <h3>
                    Community First <br />
                    <span className="abt-txts">
                      Building connections and serving our local community with care
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
                    Quality & Freshness <br />
                    <span className="abt-txts">
                      Only the finest ingredients and freshest products every day
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
                    Convenience <br />
                    <span className="abt-txts">
                      Everything you need under one roof, saving you time and effort
                    </span>
                  </h3>
                </div>
              </div>

              {/* STATS (ANIMATED) */}
              <div className="stats-container">
                <div className="stats">
                  <h1>{services}+</h1>
                  <p>Services</p>
                </div>

                <div className={`stats heart ${animateHeart ? "pulse" : ""}`}>
                  <h1>Fresh</h1>
                  <p>Daily Products</p>
                </div>

                <div className="stats">
                  <h1>{days}</h1>
                  <p>Days a Week</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE — DESKTOP ONLY */}
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
