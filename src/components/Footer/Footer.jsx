import "./Footer.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_053st4r",
      "template_ej302tc",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        category: activeTab === "general" ? "General Inquiry" : "Order",
      },
      "jKZdNKklDm-SwVSLw"
    );
  };

  return (
    <footer className="footer">
      <div className="footer-section brand">
        <div id="contact" className="contact-section">
          <p className="about-section-subtitle">
            {t("footer.contact.subtitle")}
          </p>

          <h2 className="contact-title">
            {t("footer.contact.title.start")}{" "}
            <span className="highlight">
              {t("footer.contact.title.highlight")}
            </span>
          </h2>

          <p>{t("footer.contact.description")}</p>

          {/* Form */}
          <div className="form-container">
            <h3 className="form-header">
              {t("footer.form.title")}
            </h3>

            <form className="contact-form" onSubmit={sendEmail}>
              <input
                type="text"
                placeholder={t("footer.form.name")}
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                placeholder={t("footer.form.email")}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                placeholder={t("footer.form.phone")}
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                placeholder={t("footer.form.message")}
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button type="submit" className="send-btn">
                <i className="fa-solid fa-heart"></i>
                {t("footer.form.send")}
              </button>
            </form>
          </div>

          {/* Contact Cards */}
          <div className="contact-mini-container-wrapper">
            <div className="contact-mini-container">
              <h3>
                <i className="fa-solid fa-phone"></i>{" "}
                {t("footer.cards.calls.title")}
              </h3>
              <p>{t("footer.cards.calls.desc")}</p>
              <h3>+250 (079) 123-4567</h3>
            </div>

            <div className="contact-mini-container">
              <h3>
                <i className="fab fa-whatsapp"></i>{" "}
                {t("footer.cards.whatsapp.title")}
              </h3>
              <p>{t("footer.cards.whatsapp.desc")}</p>
              <h3>{t("footer.cards.whatsapp.action")}</h3>
            </div>

            <div className="contact-mini-container">
              <h3>
                <i className="fa-solid fa-envelope"></i>{" "}
                {t("footer.cards.email.title")}
              </h3>
              <p>{t("footer.cards.email.desc")}</p>
              <h3>info@nezapro.com</h3>
            </div>

            <div className="contact-mini-container">
              <h3>
                <i className="fa-solid fa-location-dot"></i>{" "}
                {t("footer.cards.visit.title")}
              </h3>
              <p>{t("footer.cards.visit.address")}</p>
              <p>{t("footer.cards.visit.hours")}</p>
              <h3>
                <i className="fa-solid fa-directions"></i>{" "}
                {t("footer.cards.visit.action")}
              </h3>
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="brand-logo">
          <i className="fa-solid fa-croissant croissant-icon"></i>
          <h2>Neza Pro</h2>
        </div>

        <p>{t("footer.brand.description")}</p>

        <div className="socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-tiktok"></i></a>
          <a href="#"><i className="fab fa-whatsapp"></i></a>
        </div>
      </div>

      {/* Links */}
      <div className="footer-section">
        <h3>{t("footer.links.title")}</h3>
        <ul>
          <li>{t("footer.links.home")}</li>
          <li>{t("footer.links.about")}</li>
          <li>{t("footer.links.food")}</li>
          <li>{t("footer.links.gallery")}</li>
          <li>{t("footer.links.contact")}</li>
        </ul>
      </div>

      {/* Services */}
      <div className="footer-section">
        <h3>{t("footer.services.title")}</h3>
        <ul>
          <li>{t("footer.services.pastries")}</li>
          <li>{t("footer.services.coffee")}</li>
          <li>{t("footer.services.eatery")}</li>
          <li>{t("footer.services.stationery")}</li>
          <li>{t("footer.services.market")}</li>
        </ul>
      </div>

      {/* Hours */}
      <div className="footer-section hours">
        <h3>{t("footer.hours.title")}</h3>
        <ul>
          <li>{t("footer.hours.weekdays")}</li>
          <li>{t("footer.hours.saturday")}</li>
          <li>{t("footer.hours.sunday")}</li>
        </ul>

        <div className="notice">
          <i className="fa-solid fa-check-circle"></i>{" "}
          {t("footer.hours.notice")}
        </div>
      </div>

      <div className="footer-bottom">
        <p>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
