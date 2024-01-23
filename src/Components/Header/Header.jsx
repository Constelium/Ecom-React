import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Importez useLocation
import "./Header.css";
import logo from "../../assets/LogoConst.png";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation(); // Utilisez le hook pour accéder à l'objet de localisation

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const shouldShowDigitalCanvasLink = location.pathname !== "/OurCanvases"; // Condition pour l'affichage

  return (
    <header>
      <nav>
        {shouldShowDigitalCanvasLink && ( // Utilisez la condition ici pour afficher ou masquer le lien
          <div className="header-middle">
            <a href="/OurCanvases" className="header-link">
              Get your digital canvas
            </a>
          </div>
        )}
        {/* Le reste de votre code */}
        <button id="menuButton" className="menu-button" onClick={togglePopup}>
          <i className="icon">☰</i>
        </button>
        {isPopupOpen && (
          <div id="dropdownMenu" className="dropdown-menu">
            <a href="/">Home</a>
            <a href="/OurCanvases">Canvas</a>
            <a href="/AboutUs">About us</a>
            <a href="/Faq">FAQ</a>
            <a href="/Contact">Contact us</a>
          </div>
        )}
      </nav>
      <a href="/" className="logo-link">
        <img className="logo" src={logo} width="80" height="80" />
      </a>
    </header>
  );
}

export default Header;
