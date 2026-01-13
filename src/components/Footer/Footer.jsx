import "./Footer.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Footer() {
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

    emailjs
      .send(
        "service_053st4r", // Service ID
        "template_ej302tc", // Template ID
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          category:
            activeTab === "general" ? "General Inquiry" : "Order",
        },
        "jKZdNKklDm-SwVSLw" // Public Key
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <footer className="footer">

        {/* Brand + Contact */}
        <div className="footer-section brand">
          <div id="contact" className="contact-section">
            <p className="about-section-subtitle">GET IN TOUCH NOW</p>
            <h2 className="contact-title">Visit or <span className="highlight">Contact Us</span></h2>
            <p>We'd love to hear from you! Stop by, give us a call, or send us a message</p>

            

            {/* Form */}
            <div className="form-container">
              <h3 className="form-header">Send Us a Message</h3>
            <form className="contact-form" onSubmit={sendEmail}>
                <input
                  type="text"
                  placeholder="John Doe"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  placeholder="john@gmail.com"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              <input
                type="text"
                placeholder="+250 (079) 123-4567"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                placeholder="Tell us what you're looking for..."
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit" className="send-btn">
                <i className="fa-solid fa-heart"></i>Send Message
              </button>
            </form>
            </div>

            <div className="contact-mini-container-wrapper">
              <div className="contact-mini-container">
                <h3><i className="fa-solid fa-phone"></i> Calls</h3>
                <p>Give us a ring for inquiries or orders</p>
                <h3>+250 (079) 123-4567</h3>
              </div>

              <div className="contact-mini-container">
                <h3><i className="fab fa-whatsapp"></i> WhatsApp</h3>
                <p>Quick orders and inquiries</p>
                <h3>Message on WhatsApp</h3>
              </div>

              <div className="contact-mini-container">
                <h3><i className="fa-solid fa-envelope"></i> Email Us</h3>
                <p>Send us your questions</p>
                <h3>info@nezapro.com</h3>
              </div>

              <div className="contact-mini-container">
                <h3><i className="fa-solid fa-location-dot"></i> Visit Our Store</h3>
                <p>123 Main Street, Your City</p>
                <p>Open Daily: 7AM - 9PM</p>
                <h3><i className="fa-solid fa-directions"></i> Get Directions</h3>
              </div>

            </div>
      

          <div className="brand-logo">
            <i className="fa-solid fa-croissant croissant-icon"></i>
            <h2>Neza Pro</h2>
          </div>

          <p>
            Your one-stop destination for fresh food, premium coffee,
            quality stationery, and everyday essentials.
          </p>

          <div className="socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-tiktok"></i></a>
            <a href="#"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><i className="fa-solid fa-chevron-right"></i><a href="#">Home</a></li>
            <li><i className="fa-solid fa-chevron-right"></i><a href="#">About</a></li>
            <li><i className="fa-solid fa-chevron-right"></i><a href="#">Food & Cafe</a></li>
            <li><i className="fa-solid fa-chevron-right"></i><a href="#">Gallery</a></li>
            <li><i className="fa-solid fa-chevron-right"></i><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li><i className="fa-solid fa-bread-slice"></i> Pastries & Bread</li>
            <li><i className="fa-solid fa-coffee"></i> Coffee Cafe</li>
            <li><i className="fa-solid fa-burger"></i> Mini Eatery</li>
            <li><i className="fa-solid fa-pen"></i> Stationery Shop</li>
            <li><i className="fa-solid fa-shopping-cart"></i> Mini Supermarket</li>
          </ul>
        </div>

        {/* Hours */}
        <div className="footer-section hours">
          <h3>Business Hours</h3>
          <ul>
            <li>Monday – Friday <span>7AM – 8PM</span></li>
            <li>Saturday <span>7AM – 9PM</span></li>
            <li>Sunday <span>8AM – 7PM</span></li>
          </ul>

          <div className="notice">
            <i className="fa-solid fa-check-circle"></i> Open Daily
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Neza Pro. All rights reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
