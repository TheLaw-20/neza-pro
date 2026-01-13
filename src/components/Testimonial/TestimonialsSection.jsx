import React from "react";
import "./Testimonial.css";

const TestimonialsSection = () => {
  return (
    <section className="order-visit" id="order-visit">
      <div className="order-visit-section">
        

        {/* MAIN WRAPPER */}
        <div className="order-visit-wrapper">
          {/* LEFT SIDE */}
          <div className="info-wrapper">
            <p className="order-visit-section-subtitle">ORDER & VISIT</p>

        <h2 className="order-visit-section-title">
          Ready to Experience <span className="highlight">Neza Pro?</span>
        </h2>

        <p className="order-visit-description">
          Whether you're craving fresh pastries, need office supplies, or want to
          grab quick groceries – we're here for you every day.
        </p>
            <div className="contact-info">
              <div className="icon-container">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="texts">
                <h3>
                  Call Us <br />
                  <span className="contact-txts">
                    Get in touch for inquiries and orders
                  </span>
                </h3>
              </div>
            </div>

            <div className="contact-info">
              <div className="icon-container">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="texts">
                <h3>
                  WhatsApp Orders <br />
                  <span className="contact-txts">
                    Quick and easy ordering via WhatsApp
                  </span>
                </h3>
              </div>
            </div>

            <div className="contact-info">
              <div className="icon-container">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="texts">
                <h3>
                  Visit Our Location <br />
                  <span className="contact-txts">
                    Stop by and explore everything we offer
                  </span>
                </h3>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="btns">
              <div className="contact-btn">
                <i className="fa-solid fa-envelope"></i>
                Contact Us
              </div>

              <div className="view-btn">
                <i className="fa-solid fa-images"></i>
                View Gallery
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="visit-order-wrapper">
            <div className="hours-card">
              <h2>Business Hours</h2>

              <div className="dates">
                <h3>Monday - Friday</h3>
                <p>7:00 AM - 8:00 PM</p>
              </div>

              <div className="dates">
                <h3>Saturday</h3>
                <p>7:00 AM - 9:00 PM</p>
              </div>

              <div className="dates">
                <h3>Sunday</h3>
                <p>8:00 AM - 7:00 PM</p>
              </div>

              <div className="bottom-message">
                Open Daily • Walk-ins Welcome • Fresh Products Every Day
              </div>

              <p className="follow-us">Follow us on social media</p>

              <div className="socials">
                <div className="fb">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="fb">
                  <i className="fab fa-instagram"></i>
                </div>
                <div className="fb">
                  <i className="fab fa-tiktok"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
