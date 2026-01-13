import "./Feature.css";
import p1 from "../../assets/coffee-latte-art.jpg";
import p5 from "../../assets/coffee.jpg";
import p2 from "../../assets/sweet-buns.jpg";
import p3 from "../../assets/croissant.jpg";

export default function Features() {
  return (
    <section className="food_cafe-section">
      <div className="header-section">
        <h3 className="food_cafe-title">FOOD & CAFE</h3>
        <h2 className="food_cafe-subtitle">
          Delicious Food & <span className="highlight">Premium Coffee</span>
        </h2>
        <p className="food_cafe-description">
          From morning pastries to hearty meals and artisan coffee – we've got your cravings covered
        </p>
      </div>

      {/* ================= Pastries & Bread ================= */}
      <div>
        <div className="pastry_bread-section">
          <i className="fa-solid fa-bread-slice"></i>
          <h2>Pastries & Bread</h2>
        </div>

        <div className="pastry_bread-card-wrapper">
          <div className="pastry_bread-card">
           <div className="image-holder">
  <img src={p3} alt="Fresh Croissants" />
</div>

            <h3>Fresh Croissants</h3>
            <p>Buttery, flaky, and baked fresh every morning</p>
          </div>

          <div className="pastry_bread-card">
         <div className="image-holder">
  <img src={p2} alt="Fresh Croissants" />
</div>

            <h3>Sweet Buns</h3>
            <p>Soft, sweet, and perfect with coffee</p>
          </div>

          <div className="pastry_bread-card">
            <div className="icon-holder">
              <i className="fa-solid fa-cookie-bite"></i>
            </div>
            <h3>Donuts & Cakes</h3>
            <p>Indulgent treats for every occasion</p>
          </div>

          <div className="pastry_bread-card">
            <div className="icon-holder">
              <i className="fa-solid fa-bread-slice"></i>
            </div>
            <h3>Artisan Bread</h3>
            <p>Fresh-baked loaves daily</p>
          </div>
        </div>
      </div>

      {/* ================= Coffee Cafe ================= */}
      <div>
        <div className="coffee-cafe-section">
          <i className="fa-solid fa-mug-hot"></i>
          <h2>Coffee Cafe</h2>
        </div>

        <div className="coffee-cafe-card-wrapper">
          <div className="coffee-cafe-card">
            <div className="img-holder">
  <img src={p5} alt="Premium Espresso" />
</div>

            <h3>Premium Espresso</h3>
            <p>Rich, bold, and expertly brewed</p>
          </div>

          <div className="coffee-cafe-card">
            <div className="image-holder">
  <img src={p1} alt="Fresh Croissants" />
</div>

            <h3>Specialty Lattes</h3>
            <p>Creamy, smooth, and Instagram-worthy</p>
          </div>

          <div className="coffee-cafe-card">
            <div className="icon-holder">
              <i className="fa-solid fa-glass-water"></i>
            </div>
            <h3>Hot & Cold Drinks</h3>
            <p>Teas, smoothies, and refreshing beverages</p>
          </div>
        </div>
      </div>

      {/* ================= Mini Eatery ================= */}
      <div>
        <div className="eatery-section">
          <i className="fa-solid fa-burger"></i>
          <h2>Mini Eatery</h2>
        </div>

        <div className="eatery-cards-wrapper">
          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-burger"></i>
            </div>
            <h3 className="card-title">Burgers</h3>
            <p className="card-description">Juicy and delicious</p>
          </div>

          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-pizza-slice"></i>
            </div>
            <h3 className="card-title">Pizza</h3>
            <p className="card-description">Hot and fresh slices</p>
          </div>

          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-drumstick-bite"></i>
            </div>
            <h3 className="card-title">Chicken</h3>
            <p className="card-description">Crispy and tender</p>
          </div>

          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-utensils"></i>
            </div>
            <h3 className="card-title">Chips / Fries</h3>
            <p className="card-description">Golden and crispy</p>
          </div>

          <div className="eatery-card">
            <div className="eatery-icon-container">
              <i className="fa-solid fa-bread-slice"></i>
            </div>
            <h3 className="card-title">Sandwiches</h3>
            <p className="card-description">Fresh and filling</p>
          </div>
        </div>
      </div>
    </section>
  );
}
