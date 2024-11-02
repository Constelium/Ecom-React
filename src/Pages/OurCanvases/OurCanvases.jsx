import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./OurCanvases.css";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";

const OurCanvases = () => {
  useAnalytics();

  const navigate = useNavigate(); // Initialiser le hook useNavigate

  // État local pour le panier
  const [cart, setCart] = useState([]);

  // Fonction pour ajouter un article au panier
  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart); // Mettez à jour l'état du panier
    console.log("Article ajouté au panier:", item); // Affichez dans la console pour vérifier
    navigate("/cart"); // Redirection vers la page du panier après ajout
  };

  // Exemple d'utilisation dans le bouton d'ajout au panier
  const handleAddToCart = () => {
    // Détails de l'article à ajouter au panier
    const item = {
      id: 1,
      name: "Constelium Canvas",
      price: 499,
      color: selectedColor,
      size: selectedSize,
    };
    addToCart(item);
  };

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(null);

  const colors = [
    { name: "Black", colorCode: "#1C1C1C" },
    { name: "White", colorCode: "#FFFFFF" },
    { name: "Wood", colorCode: "#C19A6B" },
  ];

  const sizes = ["Medium", "Maxi", "Master"];

  return (
    <>
      <Header />
      <main>
        <div className="product-images-wrapper">
          <div className="product-images">
            <img
              src="path_to_main_image.jpg"
              className="main-image"
              alt="Produit principal"
            />
          </div>
        </div>
        <div className="product-details">
          <h1 className="product-title">Constelium Canvas</h1>
          <p className="product-price">499 $</p>
          <p className="product-description">
            A unique canvas that seamlessly merges artistic beauty with the
            functionality of a modern dashboard, offering both inspiration and
            practicalit.
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
            <p>Select Size :</p>
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
          <button
            onClick={() =>
              handleAddToCart({ id: 1, name: "Constelium Canvas", price: 499 })
            }
            className="add-to-cart"
          >
            Add To Cart
          </button>
          <button className="crypto-button">Buy With Crypto</button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OurCanvases;
