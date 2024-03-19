import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Contact.css";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";

function Contact() {
  useAnalytics();

  return (
    <div>
      <Header />
      <main>
        <div className="contact">
          <form action="traitement_contact.php" method="post">
            <label htmlFor="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required />
            <br />
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" required />
            <br />
            <label htmlFor="message">Message :</label>
            <br />
            <textarea id="message" name="message" rows="4" required></textarea>
            <br />
            <input type="submit" value="Envoyer" />
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
