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
    { name: "Black", colorCode: "#000000" },
    { name: "White", colorCode: "#f8f4f0" },
    { name: "Cream", colorCode: "#eae6d7" },
    { name: "Limited Blue", colorCode: "#5068a9" },
    { name: "Limited Red", colorCode: "#a82b2d" },
  ];

  const sizes = [6, 7, 8, 9, 10];

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
          <h2 className="product-title">Women's Wool Runners</h2>
          <p className="product-price">$95 USD</p>
          <p className="product-description">
            A remarkable shoe that's naturally soft, cozy all over, and fits
            your every move.
          </p>

          <div className="product-colors">
            <p>CLASSICS:</p>
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
            <p>SELECT SIZE:</p>
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
              In between sizes? We recommend you size up.{" "}
              <a href="/size-chart">See Size Chart</a>
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
