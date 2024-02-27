import { useState, useEffect } from "react"; // Ajoutez cette ligne pour importer useState
// import axios from "axios";   Je l'ai mis en commentaire car se chemin n'était pas bon lors du "npm run dev"
import axios from "../../../package.json";
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
    try {
      const response = await axios.post(
        "https://api-const.vercel.app/mail/register",
        {
          mail,
        }
      );
      console.log(mail);

      const data = await response.json();
      if (data.message) {
        console.log("User registered:", data.message);
      }
      console.log(data);
    } catch (error) {
      console.error("There was an error registering the user", error);
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
      <div className="footerdiv">
        <div className="emailing">
          <input
            id="emailInput"
            type="email"
            placeholder="Your email"
            name="email"
            value={mail}
            onChange={handleMailChange}
            onSubmit={handleSubmit}
            required
            aria-invalid={!isValidMail}
          />
          <button type="submit" disabled={!isValidMail}>
            Subscribe
          </button>
        </div>
      </div>
      {/* <p className="allRights">©Constelium // All rights reserved.</p> */}
    </footer>
  );
}

export default Footer;
