import { useState, useEffect } from "react"; // Ajoutez cette ligne pour importer useState
import axios from "axios";
// import axios from "../../../package.json";
import "./Footer.css";
import X from "../../assets/x.png";
import LinkedIn from "../../assets/LinkedIn.png";
import TikTok from "../../assets/TikTok.png";

function Footer() {
  // État pour stocker la valeur de l'entrée de l'e-mail
  const [mail, setMail] = useState("");

  // État pour la validation de l'email
  const [isValidMail, setIsValidMail] = useState(false);

  // Fonction pour mettre à jour l'état avec la valeur du champ de saisie
  const handleMailChange = (event) => {
    setMail(event.target.value);
  };

  // Utilisation de useEffect pour gérer la validation de l'email
  useEffect(() => {
    // Expression régulière simple pour la validation d'email
    const mailRegex = /\S+@\S+\.\S+/;
    setIsValidMail(mailRegex.test(mail));
  }, [mail]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");
    formMess.innerHTML =
      "<p className='success'>YES I !!! DUM DUM DUM !!!!</p>";

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

  return (
    <footer>
      <div className="FooterLinks">
        <div>
          <h3>Contact</h3>
          <p>constelium.xyz@gmail.com</p>
        </div>
        <div>
          <h3>Socials</h3>
          <a
            href="https://twitter.com/constelium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={X} alt="X" />
          </a>
          <a
            href="https://www.linkedin.com/in/constelium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a
            href="https://www.tiktok.com/@constelium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={TikTok} alt="TikTok" />
          </a>
        </div>
      </div>
      <form className="footerdiv" onSubmit={handleSubmit}>
        <h3>Newsletter</h3>
        <div className="emailing">
          <input
            id="emailInput"
            type="email"
            placeholder="Your email"
            name="email"
            value={mail}
            onChange={handleMailChange}
            required
            aria-invalid={!isValidMail.toString()} // Convertir en chaîne de caractères
          />
          <button type="submit" disabled={!isValidMail}>
            Subscribe
          </button>
        </div>
      </form>
      <div className="formMessage"></div>
      <div className="allRights">
        <p>Copyright © 2024 Constelium®, all rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
