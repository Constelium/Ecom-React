import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import NewsletterPopup from "../../Components/NewsletterPopup/NewsletterPopup";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";
import "./Home.css";

// import ImageVanGogh from "../../assets/ImageVanGogh.jpg";
// import ImageNFT from "../../assets/ImageNFT.jpg";
// import ImagePerso from "../../assets/ImagePerso.jpg";
// import imagevitrine5 from "../../assets/imagevitrine2.png";

function HomePage() {
  useAnalytics();

  return (
    <>
      <Header />
      <main className="mainHome">
        <div className="banner">
          <Banner />
        </div>

        <NewsletterPopup />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
