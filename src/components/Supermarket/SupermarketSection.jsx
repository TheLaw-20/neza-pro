import "./Supermarket.css"
import p1 from "../../assets/super-market.jpg"

function SupermarketSection(){
    return(
        <section className="supermarket-section">
            <div className="supermarket-warapper">
                <h3 className="supermarket-title">MINI SUPERMARKET</h3>
                <h2 className="supermarket-subtitle">Your <span className="highlight">Everyday Groceries </span>Neighbor</h2>
                <p className="supermarket-description">
                    Skip the long drive to big supermarkets. Get all your daily essentials, snacks, and household items right here in your neighborhood.
                </p>
                <div className="supermarket-items-wrapper">
                    <div className="supermarket-item">
                        <div className="item">
                            <h3 className="item-title"><i className="fa-solid fa-shopping-basket"></i> Groceries</h3>
                        </div>
                        <p>Rice, flour, cooking oil, spices, and pantry staples</p>
                    </div>

                    <div className="supermarket-item">
                        <div className="item">
                            <h3 className="item-title"><i className="fa-solid fa-cookie"></i> Snacks & Treats</h3>
                        </div>
                        <p>Chips,biscuits, chocolates, and sweet treats</p>
                    </div>

                    <div className="supermarket-item">
                        <div className="item">
                            <h3 className="item-title"><i className="fa-solid fa-soap"></i> Household Items</h3>
                        </div>
                        <p>Detergents, soaps, cleaning supplies</p>
                    </div>

                    <div className="supermarket-item">
                        <div className="item">
                            <h3 className="item-title"><i className="fa-solid fa-"></i> Beverages</h3>
                        </div>
                        <p>Soft drinks, juices, water, and more</p>
                    </div>

                </div>
                <div className="bottom-msg">
                    <p> <i className="fa-solid fa-check-circle"></i> Fresh stock delivered regularly</p>
                    <p><i className="fa-solid fa-check-circle"></i> Competitive prices on all items</p>
                    <p><i className="fa-solid fa-check-circle"></i> Convenient location with easy parking</p>
                </div>

            </div>

           <div className="image-wrapper">
            <div className="image-container">
                <img src={p1} alt="Mini Supermarket" />
            </div>
           </div>
        </section>
    );
}

export default SupermarketSection