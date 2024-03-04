import { useState, useEffect } from "react";
import "./NewsletterPopup.css";
import axios from "axios";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mail, setMail] = useState("");

  // État pour la validation de l'email
  const [isValidMail, setIsValidMail] = useState(false);

  // Fonction pour mettre à jour l'état avec la valeur du champ de saisie
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Expression régulière simple pour la validation d'email
    const mailRegex = /\S+@\S+\.\S+/;
    setIsValidMail(mailRegex.test(mail));
  }, [mail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://api-const.vercel.app/mail/register",
        { mail }
      );
      console.log("User registered:", response.data); // Utilisez response.data au lieu de response.json()
      if (response.data.message) {
        console.log("User registered:", response.data.message);
      }
    } catch (error) {
      console.error("There was an error registering the user", error);
    }
  };

  const handleClose = () => setIsVisible(false);

  return (
    isVisible && (
      <div className="newsletter-popup">
        <div className="newsletter-content">
          <button className="close-btn" onClick={handleClose}>
            &times;
          </button>
          <h2>Subscribe to Our Newsletter</h2>
          <p>Get the latest news and updates directly to your inbox.</p>
          <form onSubmit={handleSubmit}>
            <input
              id="emailInput"
              type="email"
              placeholder="Your email"
              name="email"
              value={mail}
              onChange={handleMailChange}
              required
              aria-invalid={!isValidMail.toString()}
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    )
  );
};

export default NewsletterPopup;
