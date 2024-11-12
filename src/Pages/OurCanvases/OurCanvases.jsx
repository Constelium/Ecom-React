import useState from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./OurCanvases.css";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";
import { useCart } from "../../contexts/CartContext";
import { useUser } from "../../contexts/UserContext";

const OurCanvases = () => {
  useAnalytics();

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { user, toggleAuthPopup } = useUser();

  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState(null);

  const colors = [
    { name: "Black", colorCode: "#1C1C1C" },
    { name: "White", colorCode: "#FFFFFF" },
    { name: "Wood", colorCode: "#C19A6B" },
  ];

  const sizes = ["Medium", "Maxi", "Master"];

  const handleAddToCart = async () => {
    if (!user) {
      toggleAuthPopup();
      return;
    }

    const item = {
      photo: "path_to_main_image.jpg",
      price: 499,
      color: selectedColor,
      size: selectedSize,
    };

    try {
      const response = await fetch(
        `http://localhost:3001/user/updateNFTs/${user._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ products: [...user.products, item] }),
        }
      );
      const data = await response.json();
      if (data) {
        addToCart(item);
        navigate("/cart");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

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
          <p className="product-price">499 €</p>
          <p className="product-description">
            A unique canvas that seamlessly merges artistic beauty with the
            functionality of a modern dashboard, offering both inspiration and
            practicality.
          </p>

          <div className="product-colors">
            <p>Color:</p>
            <div className="color-options">
              {colors.map((color) => (
                <span
                  key={color.name}
                  className="color-option"
                  style={{ backgroundColor: color.colorCode }}
                  onClick={() => setSelectedColor(color.name)}
                >
                  {color.name}
                </span>
              ))}
            </div>
          </div>

          <div className="product-sizes">
            <p>Size:</p>
            <div className="size-options">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`size-button ${
                    selectedSize === size ? "active" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button onClick={handleAddToCart} className="add-to-cart">
            Add To Car
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default OurCanvases;
