import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./OurCanvases.css";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";

const OurCanvases = () => {
  useAnalytics();

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(null);

  const colors = [
    { name: "Black", colorCode: "#1C1C1C" },
    { name: "White", colorCode: "#fFFFFF" },
    { name: "Wood", colorCode: "#C19A6B" },
  ];

  const sizes = ["Medium", "Maxi", "Master"];

  return (
    <>
      <Header />
      <main className="product-page">
        <div className="product-images">
          <img
            src="/path/to/product-image.jpg"
            alt="Product"
            className="main-image"
          />
          <div className="thumbnails">
            <img src="/path/to/thumbnail1.jpg" alt="Thumbnail 1" />
            <img src="/path/to/thumbnail2.jpg" alt="Thumbnail 2" />
            <img src="/path/to/thumbnail3.jpg" alt="Thumbnail 3" />
          </div>
        </div>

        <div className="product-details">
          <h2 className="product-title">Constelium Canvas</h2>
          <p className="product-price">$ USD</p>
          <p className="product-description">
            A remarkable shoe that's naturally soft, cozy all over, and fits
            your every move.
          </p>

          <div className="product-colors">
            <p>Color :</p>
            <div className="color-options">
              {colors.map((color, index) => (
                <span
                  key={index}
                  className={`color-swatch ${
                    selectedColor === color.name ? "active" : ""
                  }`}
                  style={{ backgroundColor: color.colorCode }}
                  onClick={() => setSelectedColor(color.name)}
                ></span>
              ))}
            </div>
          </div>
          <div className="product-sizes">
            <p>SELECT SIZE :</p>
            <div className="size-options">
              {sizes.map((size, index) => (
                <button
                  key={index}
                  className={`size-button ${
                    selectedSize === size ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <p className="size-recommendation">
              Medium (22") - Maxi (32") - Master (42"){" "}
            </p>
          </div>
          <button className="add-to-cart">ADD TO CART</button>
          <button className="paypal-button">Buy with PayPal</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OurCanvases;
