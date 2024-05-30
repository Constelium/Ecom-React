import { useEffect } from "react";
import "./PaymentButton.css"; // Importer le fichier CSS

const PaymentButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://confirmo.net/sdk/scripts/confirmo.js";
    script.async = true;

    document.body.appendChild(script);

    script.onload = () => {
      if (window.Confirmo && window.Confirmo.PaymentButton) {
        window.Confirmo.PaymentButton.initialize({
          id: "bp-payment-button",
          url: "https://confirmo.net",
          buttonType: "SIMPLE",
          paymentButtonId: "Lg8BlpyMZAVqjRmnkDBYJ7GNe5P0rz31Ov6",
          values: {
            productName: "King Canvas",
            reference: null,
            returnUrl: null,
            overlay: true,
          },
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="bp-payment-button"></div>;
};

export default PaymentButton;
