import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Cart.css";
// import PaymentButton from "../../Components/PaymentCrypto/CryptoForm";

// Supposons que nous ayons des articles de panier initiaux comme exemple
const initialCartItems = [
  { id: 1, name: "Produit A", price: 10.99, quantity: 2 },
  { id: 2, name: "Produit B", price: 15.99, quantity: 1 },
  // Ajoutez d'autres produits ici
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleRemoveItem = (itemId) => {
    const newCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(newCartItems);
  };

  const handleQuantityChange = (itemId, quantity) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <Header />
      <main>
        <h2>Your Cart</h2>
        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>Prix unitaire: {item.price}€</p>
                <p>
                  Quantité:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </p>
                <p>Total: {(item.price * item.quantity).toFixed(2)}€</p>
                <button onClick={() => handleRemoveItem(item.id)}>
                  Retirer du panier
                </button>
              </div>
            ))}
            <h3>Prix total du panier: {totalPrice}€</h3>
          </div>
        ) : (
          <p>Votre panier est vide.</p>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
