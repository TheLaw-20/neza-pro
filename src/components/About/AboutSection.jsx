import "./About.css";

export default function AboutSection() {
  return (
    <section className="about-collection">
      <div className="about-container">
        <p className="about-section-subtitle">WHAT WE OFFER</p>
        <h2 className="about-section-title">Everything You Need, All in <span className="highlight">One Place</span></h2>
        <p className="about-section-description">
          From your morning coffee to office supplies, discover the convenience of having it all at Neza Pro
        </p>

        <div className="about-cards-wrapper">
          {/* Card 1 */}
          <article className="about-card">
            <div className="about-card-image popular">
               <div className="mini-container1">
                <i className="fa-solid fa-bread-slice"></i>
              </div>
            </div>
            <div className="about-card-content">
              <h3>Pastries & Bread</h3>
              <p>Start your day with fresh-baked croissants, donuts, cakes, and artisan breads made daily with premium ingredients</p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="about-card">
            <div className="about-card-image">
               <div className="mini-container2">
                <i className="fa-solid fa-coffee"></i>
              </div>
            </div>
            <div className="about-card-content">
              <h3>Coffee Cafe</h3>
              <p>Relax with premium coffee, specialty teas, and refreshing cold drinks expertly crafted by our baristas</p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="about-card">
            <div className="about-card-image featured">
              <div className="mini-container1">
                <i className="fa-solid fa-burger"></i>
              </div>
              
            </div>
            <div className="about-card-content">
              <h3>Mini Eatery</h3>
              <p>Satisfy your cravings with burgers, pizza, sandwiches, chicken, and crispy fries – perfect for quick meals</p>
            </div>
          </article>

           {/* Card 4 */}
          <article className="about-card">
            <div className="about-card-image popular">
              <div className="mini-container2">
                <i className="fa-solid fa-pen"></i>
              </div>
              
            </div>
            <div className="about-card-content">
              <h3>Stationery Shop</h3>
              <p>Find all your school and office supplies, from notebooks to printing essentials, for students and professionals</p>
            </div>
            </article>

            {/* Card 5 */}
          <article className="about-card">
            <div className="about-card-image featured">
              <div className="mini-container1">
                <i className="fa-solid fa-shopping-cart"></i>
              </div>
              
            </div>
            <div className="about-card-content">
              <h3>Mini Supermarket</h3>
              <p>Shop for everyday groceries, snacks, and household essentials – your convenient neighborhood store</p>
            </div>
          </article>

            <article className="stats-contanier">
              <div className="mini-container">
              <i className="fa-solid fa-images"></i>
              </div>

              <div className="stats-container-content">
              <h3>See It YourSelf</h3>
              <p>Take a visual tour of our space and discover what makes Neza Pro your go-to lifestyle destination</p>
              <div className="stats-btn">
                View Gallery <i className="fa-solid fa-arrow-right"></i>
              </div>
              </div>
            </article>


            </div>
        </div>


    </section>
  );
}