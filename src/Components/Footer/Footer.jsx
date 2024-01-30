import { useState } from "react"; // Ajoutez cette ligne pour importer useState
import "./Footer.css";

function Footer() {
  const [email, setEmail] = useState(""); // État pour stocker l'email entré par l'utilisateur

  const handleEmailChange = (event) => {
    // Cette fonction va maintenant être utilisée
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    // Cette fonction va également être utilisée
    event.preventDefault();
    // Ici, vous pouvez ajouter la logique pour envoyer l'email à votre service de newsletter.
    console.log(email); // Pour le test, nous affichons l'email dans la console.
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
              name="email"
              placeholder="Your email address"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <button type="submit">Sign up</button>
          </form>
        </div>
        <p>©Constelium // All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
