import React, { useState, useEffect } from "react";
import "./Home.css";
import logo from "../../assets/mastercard.png";

// background images
import bg1 from "../../assets/home_BG.jpg";
import bg2 from "../../assets/home_BG5.jpg";
import bg3 from "../../assets/home_BG4.jpg";

const slides = [
  { image: bg1, text: "Taste Happiness with Neza Pro" },
  { image: bg2, text: "Freshly Baked Every Morning" },
  { image: bg3, text: "Where Every Bite Feels Like Home" },
];

const menuItems = [
  "Home",
  "About",
  "Menu",
  "Gallery",
  "Order/Contact",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="home-section"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="overlay"></div>

      {/* Navbar */}
      <header className="home-header">
        <img src={logo} alt="Neza Pro Logo" className="home-logo" />

        {/* Desktop Links */}
        <nav className="desktop-menu">
  <ul>
    <li><a href="#home">Home</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#gallery">Gallery</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>


        {/* Hamburger for mobile */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>

      {/* Mobile slide-out menu */}
      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
  <button className="close-btn" onClick={() => setMenuOpen(false)}>
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="close-icon"
  >
    <path
      d="M6 6L18 18M6 18L18 6"
      stroke="#5A3A22"   /* brown color */
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
</button>


  <ul>
    <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
    <li><a href="#about" onClick={() => setMenuOpen(false)}>About Us</a></li>
    <li><a href="#pastry" onClick={() => setMenuOpen(false)}>Our Pastries</a></li>
    <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
    <li><a href="#offer" onClick={() => setMenuOpen(false)}>Special Offers</a></li>
    <li><a href="#testimonial" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
    <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
  </ul>
</nav>


      {/* Backdrop */}
      {menuOpen && (
        <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>
      )}

      <div className="home-content fade-text">
        <h1>{slides[currentSlide].text}</h1>
      </div>
    </section>
  );
};

export default Home;
