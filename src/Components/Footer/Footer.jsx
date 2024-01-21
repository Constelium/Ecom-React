import React from "react";
import "./Footer.css";

function Footer() {
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
          <input type="text" placeholder="Your email address" />
          <button>Sign up</button>
        </div>
        <p>©Constelium // All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
