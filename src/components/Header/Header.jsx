import "./Header.css";
import bg from "../../assets/featuresBG.jpg";

export default function Header() {
  return (
    <>
      {/* NAV BAR */}
      <nav className="navbar">
        <div className="nav-logo">
          <i className="fa-solid fa-croissant"></i> Neza Pro
        </div>
        <ul className="nav-links">
          <li>About</li>
          <li>Menu</li>
          <li>Gallery</li>
          <li>Order/Contact</li>
        </ul>
        <button className="nav-order-now-btn">Order Now</button>
      </nav>
      {/* HERO SECTION */}
      <section className="nav-section">
        <div className="nav-bg" 
         style={{ backgroundImage: `url(${bg})` }}>
          <div className="nav-overlay"></div>

          <div className="nav-content">
            <div className="nav-badge top-badge">
              <i className="fa-solid fa-star"></i>
              Your Everyday Lifestyle Destination
            </div>

            <h1>
              Neza Pro - Your One Stop Shop for{" "}
              <span className="nav-highlight">Food, Coffee & Essentials</span>
            </h1>

            <p className="nav-sub">
              Fresh pastries, premium coffee, quick meals, stationery, and groceries – all under one roof. Experience convenience with quality.
            </p>
            <div className="header-card">
              <div className="header-card-item">
                <i className="fa-solid fa-bread-slice"></i>
                <span>Pastries</span>
                </div>

              <div className="header-card-item">
                <i className="fa-solid fa-mug-hot"></i>
                <span>Cafe</span>
              </div>

              <div className="header-card-item">
                <i className="fa-solid fa-burger"></i>
                <span>Eatery</span>
              </div>

              <div className="header-card-item">
                <i className="fa-solid fa-pen"></i>
                <span>Stationery</span>
              </div>

              <div className="header-card-item">
                <i className="fa-solid fa-cart-shopping"></i>
                <span>Supermarket</span>
              </div>

            </div>

            <div className="nav-buttons">
              <button className="nav-btn-explore-btn">
                Explore Our Menu <i className="fa-solid fa-arrow-right"></i>
              </button>
              <button className="nav-btn-visit-btn">
                <i className="fa-solid fa-location"></i> Visit Us Today
              </button>
            </div>

            <div className="nav-badge-bottom-badge">
              <i className="fa-solid fa-clock"></i>
              Open Daily • Fresh Products • Friendly Service
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}