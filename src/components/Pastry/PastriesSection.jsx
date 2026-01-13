import "./Pastry.css";
import p1 from "../../assets/pastry-shop.jpg"
import p5 from "../../assets/p5.jpg"
import p2 from "../../assets/home_BG5.jpg"

export default function PastriesSection() {
  return (
    <section className="pastry-collection">
      <div className="pastry-container">
        <p className="pastry-section-subtitle">WHY CHOOSE US</p>
        <h2 className="pastry-section-title">The <span className="highlight">Neza Pro </span>Difference</h2>

        <p>More than just a shop – we're your neighborhood lifestyle partner</p>

        <div className="diff-containers">
          <div className="difference-container">
          <div className="circular-container1">
            <i className="fa-solid fa-leaf"></i>
          </div>
          <h3>Fresh & Quality</h3>
          <p>Daily fresh produce and premium ingredients in everything we make</p>
        </div>

        <div className="difference-container">
          <div className="circular-container2">
            <i className="fa-solid fa-shop"></i>
          </div>
          <h3>All-in-One Convenience</h3>
          <p>Save time with food, coffee, stationery, and groceries under one roof</p>
        </div>

        <div className="difference-container">
          <div className="circular-container1">
            <i className="fa-solid fa-heart"></i>
          </div>
          <h3>Friendly Atmosphere</h3>
          <p>Warm service and a welcoming space that feels like home</p>
        </div>

        <div className="difference-container">
          <div className="circular-container2">
            <i className="fa-solid fa-tags"></i>
          </div>
          <h3>Affordable Prices</h3>
          <p>Quality products at prices that won't break the bank</p>
        </div>
        </div>

          <div className="images-container">
             {/* Card 1 */}
            <div className="image-card">
               <img src= {p1} alt="fresh daily" />
            </div>

            {/* Card 2 */}
            <div className="image-card">
               <img src= {p5} alt="fresh daily" />
            </div>

            {/* Card 3 */}
            <div className="image-card">
               <img src= {p2} alt="fresh daily" />
            </div>
          </div>
         
  
        </div>
    </section>
  );
}