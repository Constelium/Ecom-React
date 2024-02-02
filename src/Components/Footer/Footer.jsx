import { useState, useEffect } from "react"; // Ajoutez cette ligne pour importer useState
import "./Footer.css";

function Footer() {
  // État pour stocker la valeur de l'entrée de l'e-mail
  const [email, setEmail] = useState("");

  // État pour la validation de l'email
  const [isValidEmail, setIsValidEmail] = useState(false);

  // Fonction pour mettre à jour l'état avec la valeur du champ de saisie
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Utilisation de useEffect pour gérer la validation de l'email
  useEffect(() => {
    // Expression régulière simple pour la validation d'email
    const emailRegex = /\S+@\S+\.\S+/;
    setIsValidEmail(emailRegex.test(email));
  }, [email]);

  // Fonction pour gérer l'envoi du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isValidEmail) {
      // Ici, vous pouvez ajouter la logique pour envoyer l'email à votre service de newsletter.
      console.log("Email submitted:", email);
      // Réinitialiser le champ après la soumission
      setEmail("");
    } else {
      console.log("Invalid email address.");
    }
  };

  return (
    <footer>
      <div className="FooterLinks">
        <div>
          <h3>Contact us</h3>
          <p>Email: constelium.xyz@gmail.com</p>
        </div>
        <div>
          <h3>Follow us</h3>
          <a href="#">
            <img src="twitter.png" alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="footerdiv">
        <div className="emailing">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              value={email}
              onChange={handleEmailChange}
              required
              aria-invalid={!isValidEmail}
            />
            <button type="submit" disabled={!isValidEmail}>
              Sign up
            </button>
          </form>
        </div>
        <p>©Constelium // All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
