import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import bannerimage from "../../assets/bannerimage.gif"; // Si c'est une vidéo
import featureimage from "../../assets/testbanner.png";
import { Button } from "@nextui-org/react";
import NewsletterPopup from "../../Components/NewsletterPopup/NewsletterPopup";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";
import "./Home.css";

function Home() {
  useAnalytics();

  return (
    <>
      <Header />
      {/* Section Fonctionnalités */}
      <section className="features-section">
        <div className="feature-content">
          <h2>Why Choose Constelium?</h2>
          <p>
            Seamless integration with your space, enhanced by modern technology.
          </p>
          <ul>
            <li>High-quality digital canvases</li>
            <li>Customizable designs</li>
            <li>Support for various cryptocurrencies</li>
          </ul>
          <Button color="secondary">Learn More</Button>
        </div>
        <div className="feature-image">
          <img src={featureimage} alt="Feature" />
        </div>
        <div className="banner-image">
          <img src={bannerimage} alt="Banner" />
        </div>
      </section>
      <NewsletterPopup />
      <Footer />
    </>
  );
}

export default Home;
