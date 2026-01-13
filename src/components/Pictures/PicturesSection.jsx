import "./Pictures.css"
import p1 from "../../assets/p1.jpg"
import p2 from "../../assets/p2.jpg"
import p3 from "../../assets/p3.jpg"
import p4 from "../../assets/p4.jpg"
import p5 from "../../assets/p5.jpg"
import p6 from "../../assets/p6.jpg"
import p7 from "../../assets/p7.jpg"
import p8 from "../../assets/p8.jpg"
import p9 from "../../assets/coffee.jpg"

function PicturesSection() {
    return(
        <section className="picture-section">
            <div className="header-section">
                <p className="picture-section-subtitle">GALLERY</p>
        <h2 className="picture-section-title">See What Makes Us<span className="highlight"> Special</span></h2>
        <p className="picture-section-description">A visual tour of our fresh pastries, artisan coffee, and welcoming space
        </p>
            </div>
            <div className="pictures-wrapper">
                <div className="img-container">
                    <img src={p1} alt="" />
                </div>

                <div className="img-container">
                    <img src={p2} alt="" />
                </div>

                <div className="img-container">
                    <img src={p3} alt="" />
                </div>

                <div className="img-container">
                    <img src={p4} alt="" />
                </div>

                <div className="img-container">
                    <img src={p5} alt="" />
                </div>

                <div className="img-container">
                    <img src={p6} alt="" />
                </div>

                <div className="img-container">
                    <img src={p7} alt="" />
                </div>

                <div className="img-container">
                    <img src={p8} alt="" />
                </div>

                <div className="img-container">
                    <img src={p9} alt="" />
                </div>

            </div>
        </section>
    );
}

export default PicturesSection