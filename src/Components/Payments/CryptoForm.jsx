import { useState } from "react";

function PaymentForm() {
  const [formData, setFormData] = useState({
    twitterHandle: "",
    email: "",
    productInterest: "",
    cryptoChoice: "",
    transactionId: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous intégrerez le traitement du formulaire, comme l'envoi des données au serveur ou la vérification des transactions.
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="twitterHandle" className="form-label">
            Twitter Handle:
          </label>
          <input
            type="text"
            id="twitterHandle"
            name="twitterHandle"
            value={formData.twitterHandle}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        {/* ... Ajoutez d'autres champs de formulaire avec leur className ici ... */}

        <button type="submit" className="submit-button">
          Submit Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
