import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import bannerImage from "../../assets/bannerimage.mp4";
import testbanner from "../../assets/testbanner.png";
import { Button } from "@nextui-org/react";
import NewsletterPopup from "../../Components/NewsletterPopup/NewsletterPopup";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";
import "./Home.css";

function Home() {
  useAnalytics();

  return (
    <>
      <Header />
      <div className="home-container">
        {/* Section Bannière */}
        <section className="banner-section">
          <div className="banner-content">
            <h1>Transform your space with Constelium</h1>
            <p>Your canvas to highlight everything.</p>
            <Button color="primary">Get Started</Button>
          </div>
          <div className="banner-image">
            <img src={bannerImage} alt="Banner" />
          </div>
        </section>

        {/* Section Fonctionnalités */}
        <section className="features-section">
          <div className="feature-content">
            <h2>Why Choose Constelium?</h2>
            <p>
              Seamless integration with your space, enhanced by modern
              technology.
            </p>
            <ul>
              <li>High-quality digital canvases</li>
              <li>Customizable designs</li>
              <li>Support for various cryptocurrencies</li>
            </ul>
            <Button color="secondary">Learn More</Button>
          </div>
          <div className="feature-image">
            <img src={testbanner} alt="test" />
          </div>
        </section>
      </div>
      <NewsletterPopup />
      <Footer />
    </>
  );
}

export default Home;
