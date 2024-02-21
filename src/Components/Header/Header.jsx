import { useState } from "react";
import { useLocation } from "react-router-dom"; // Importez useLocation
import "./Header.css";
import logo from "../../assets/LogoConst.png";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation(); // Utilisez le hook pour accéder à l'objet de localisation
  const shouldShowDigitalCanvasLink = location.pathname !== "/OurCanvases"; // Condition pour l'affichage

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header>
      <a href="/" className="logo-link">
        <img className="logo" src={logo} width="80" height="80" />
      </a>
      <div className="header-middle">
        {shouldShowDigitalCanvasLink && ( // Utilisez la condition ici pour afficher ou masquer le lien
          <a href="/OurCanvases" className="header-link">
            Get your digital canvas
          </a>
        )}
      </div>
      <nav>
        <button id="menuButton" className="menu-button" onClick={togglePopup}>
          {/* <i className="icon">☰</i> */}
          <svg id="hamburger" className="Header__toggle-svg">
            <g
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path id="top-line" d="M8,10 L30,10 Z"></path>
              <path id="middle-line" d="M8,20 L30,20 Z"></path>
              <path id="bottom-line" d="M8,30 L30,30 Z"></path>
            </g>
          </svg>
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
    </header>
  );
}

export default Header;
