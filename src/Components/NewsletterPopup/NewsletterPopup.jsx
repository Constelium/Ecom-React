import { useState, useEffect } from "react";
import "./NewsletterPopup.css";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

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
          <form>
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    )
  );
};

export default NewsletterPopup;
