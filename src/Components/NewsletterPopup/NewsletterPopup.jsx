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
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const NewsletterPopup = localStorage.getItem("NewsletterPopup");
    if (!NewsletterPopup) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    // Expression régulière simple pour la validation d'email
    const mailRegex = /\S+@\S+\.\S+/;
    setIsValidMail(mailRegex.test(mail));
  }, [mail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");
    formMess.innerHTML = "<p className='success'>Successfully subscribed</p>";

    try {
      const response = await axios.post(
        "https://api-const.vercel.app/mail/register",
        { mail }
      );
      if (response.data.message) {
        console.log("User registered:", response.data.message);
      }
      setMail("");
    } catch (error) {
      formMess.innerHTML =
        "<p className='error'>There was an error registering the user</p>";
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem("NewsletterPopup", "true"); // Marque la popup comme vue
  };

  if (!isVisible) return null;

  return (
    isVisible && (
      <div className="newsletter-popup">
        <div className="newsletter-content">
          <h2>Subscribe to Our Newsletter</h2>
          <div className="text-annonce">
            <p>
              Receive a free product with your first order to enrich your
              experience with our Canvas.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              id="input-popup"
              type="email"
              placeholder="Your email"
              name="email"
              value={mail}
              onChange={handleMailChange}
              required
              aria-invalid={!isValidMail.toString()}
            />
            <button type="submit">Subscribe</button>
            <div className="formMessage"></div>
          </form>
          <a href="#" onClick={handleClose} className="no-thanks-link">
            No, thanks
          </a>
        </div>
      </div>
    )
  );
};

export default NewsletterPopup;
