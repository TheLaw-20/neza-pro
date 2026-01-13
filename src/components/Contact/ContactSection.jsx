import React from "react";
import "./Contact.css";

const ContactSection = () => {
  return (
    <section className="stationery-shop" id="stationery-shop">
      <div className="stationery-shop-section">

        <div className="stationery-shop-wrapper">

          {/* LEFT SIDE */}
          <div className="option-wrapper">
            <p className="stationery-shop-section-subtitle">STATIONERY SHOP</p>

            <h2 className="stationery-shop-section-title">
              All Your <span className="highlight">School & Office</span> Essentials
            </h2>

            <p className="stationery-shop-description">
              From students to professionals, we stock everything you need to stay
              organized, creative, and productive. Quality supplies at affordable prices.
            </p>

            <div className="option-info">
              <div className="icon-container">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <div>
                <h3>School Supplies</h3>
                <span>Notebooks, pens, pencils, erasers, and more</span>
              </div>
            </div>

            <div className="option-info">
              <div className="icon-container">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div>
                <h3>Office Essentials</h3>
                <span>Files, folders, staplers, and organizers</span>
              </div>
            </div>

            <div className="option-info">
              <div className="icon-container">
                <i className="fa-solid fa-palette"></i>
              </div>
              <div>
                <h3>Art Supplies</h3>
                <span>Colors, markers, craft materials</span>
              </div>
            </div>

            <div className="option-info">
              <div className="icon-container">
                <i className="fa-solid fa-print"></i>
              </div>
              <div>
                <h3>Printing Services</h3>
                <span>Quick and affordable printing solutions</span>
              </div>
            </div>

            <div className="option-container">
              <i className="fa-solid fa-tags"></i>
              Student Discounts Available • Quality Brands • Competitive Prices
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="items-wrapper">
            <div className="items-card">
              <i className="fa-solid fa-book"></i>
              <h3>Notebooks</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-pen"></i>
              <h3>Pens</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-pencil"></i>
              <h3>Pencils</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-eraser"></i>
              <h3>Erasers</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-ruler"></i>
              <h3>Rulers</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-scissors"></i>
              <h3>Scissors</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-marker"></i>
              <h3>Markers</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-folder"></i>
              <h3>Folders</h3>
            </div>

            <div className="items-card">
              <i className="fa-solid fa-calculator"></i>
              <h3>Calculators</h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
