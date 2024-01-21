import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/LogoConst.png";

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
      <header>
        <nav>
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
        <img className="logo" src={logo} width="80" height="80" />
      </header>
  );
}

export default Header;
