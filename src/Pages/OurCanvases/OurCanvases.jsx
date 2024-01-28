import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./OurCanvases.css";

function OurCanvases() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <Header />
      <main className="OurCanvasesMain">
        <section className="product-page">
          <div className="product-image">
            <img src="../public/imgtest.png" alt="Nom du Produit" />
          </div>
          <div className="product-details">
            <h1>Digital Canva</h1>
            <p className="price">1000 €</p>
            <p className="size">Taille : 16"/20"/24"/28"/32"/40"/50"</p>
            <button className="buy-button" onClick={togglePopup}>
              PRE-ORDER
            </button>
          </div>
          {isPopupOpen && (
            <div id="accountPopup" className="popup-container">
              <div className="popup-content">
                <span className="close-btn" onClick={togglePopup}>
                  &times;
                </span>
                <h2>Constelium</h2>
                <div className="popup-buttons-container">
                  <button id="signupBtn">Sign up</button>
                  <button id="loginBtn">Log in</button>
                </div>
              </div>
            </div>
          )}
        </section>
        <div className="description">
          <div>
            <h4>Product Description</h4>
            <p>
              Dive into the heart of a revolutionary visual experience with our
              canvases, where innovation meets elegance. Our digital canvas is
              more than just a display; it's an open window to the worlds you
              choose to embrace.
            </p>
          </div>
          <div>
            <h4>Avant-Garde Design</h4>
            <p>
              Each Constelium Canvas is meticulously crafted by our expert
              artisans, incorporating high-precision screens within a
              handcrafted frame that combines aesthetics with functionality.
              With sleek contours and a slim profile, it's ready to take its
              place in the most sophisticated of interiors.
            </p>
          </div>
          <div>
            <h4>Cutting-Edge Technology</h4>
            <p>
              Equipped with the latest display technologies, it offers unmatched
              image clarity, vibrant colors that bring each pixel to life.
              Whether you're an aficionado of digital art or in search of a
              dynamic platform for your cryptos and NFTs, our canvases are
              designed to transcend your visual experience.
            </p>
          </div>
          <div>
            <h4>Limitless Personalization</h4>
            <p>
              We understand that every enthusiast has a unique vision. That's
              why Constelium Canvas comes with a suite of customizable options.
              Choose from a variety of sizes, frame finishes, and software
              configurations to create a piece that truly resonates with your
              personal style and technological needs.
            </p>
          </div>
          <div>
            <h4>Intuitive Connectivity</h4>
            <p>
              With a user-friendly interface and multi-platform connectivity, it
              integrates seamlessly into your digital ecosystem. Display and
              manage your NFT collections with ease, track real-time market
              fluctuations of cryptocurrencies, or simply let yourself be
              captivated by an art gallery that renews at your whim.
            </p>
          </div>
          <div>
            <h4>Eco-Responsible Commitment</h4>
            <p>
              At Constelium, we are dedicated to responsible art and technology.
              Our canvases are designed to be energy-efficient, featuring
              sustainable materials and a committed recycling policy.
            </p>
          </div>
          <div>
            <h4>Join the Visual Revolution</h4>
            <p>
              Experience our digital canvases and reinvent the way you see the
              world. It's much more than a product; it's a passport to the
              future of digital art and digital asset management.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default OurCanvases;
