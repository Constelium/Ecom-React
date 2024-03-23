import "./Contact.css";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";
import emailjs from "emailjs-com";

function Contact() {
  useAnalytics();

  const sendEmail = (e) => {
    e.preventDefault(); // Pour éviter le rechargement de la page

    emailjs
      .sendForm(
        "service_0autcan",
        "template_rri80tt",
        e.target,
        "5bAKsxUPupy75QEtF"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message envoyé avec succès!");
        },
        (error) => {
          console.log(error.text);
          alert("Erreur lors de l'envoi du message. Veuillez réessayer.");
        }
      );
  };
  return (
    <div>
      <Header />
      <main>
        <div className="contact">
          <form onSubmit={sendEmail}>
            <label htmlFor="nom">Nom :</label>
            <input type="text" name="nom" required />
            <br />
            <label htmlFor="email">Email :</label>
            <input type="email" name="email" required />
            <br />
            <label htmlFor="message">Message :</label>
            <br />
            <textarea name="message" rows="4" required></textarea>
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
