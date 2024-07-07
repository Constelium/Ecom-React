import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import HomeSection from "../../Components/HomeSection";
import NewsletterPopup from "../../Components/NewsletterPopup/NewsletterPopup";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";
import "./Home.css";

import ImageVanGogh from "../../assets/ImageVanGogh.jpg";
import ImageNFT from "../../assets/ImageNFT.jpg";
import ImagePerso from "../../assets/ImagePerso.jpg";
import imagevitrine5 from "../../assets/imagevitrine2.png";

function Home() {
  useAnalytics();

  return (
    <>
      <Header />
      <main className="mainHome">
        <div className="banner">
          <Banner />
        </div>
        <HomeSection
          title="Welcome to the World of Constelium"
          text="Discover a premium visual experience with Constelium: a perfect harmony between digital art and cutting-edge technology. Our digital canvases, crafted with the expertise of artisan cabinetmakers, are not just works of art; they are the pulsing heart of your passion for cryptocurrencies and NFTs."
          imgSrc={ImageVanGogh}
          altText="Van Gogh"
        />
        <HomeSection
          title="Display Your Passion"
          text="With Constelium, your NFT collection comes to life in the most elegant setting imaginable. Each pixel on our screens is a window into the worlds you've chosen to embrace. Your digital works are no longer confined to ordinary displays; they are illuminated, enhanced by the brilliance and clarity of our high-end canvases."
          imgSrc={ImageNFT}
          altText="NFT"
        />
        <HomeSection
          title="Monitor Your Cryptos"
          text="But Constelium isn't just for display; it's a dynamic dashboard for your crypto investments. Follow market fluctuations in real-time, and let your canvas inform you of trends without ever losing sight of elegance and beauty. With Constelium, performance meets art."
          imgSrc={imagevitrine5}
          altText="Crypto Dashboard"
        />
        <HomeSection
          title="Inclusive Technology"
          text="We understand the importance of accessibility. That's why our canvases accept various wallets, allowing you to connect and interact with your portfolio in an intuitive and secure way."
          imgSrc={imagevitrine5}
          altText="Wallet Integration"
        />
        <HomeSection
          title="Limitless Customization"
          text="Constelium gives you the choice: one base model for those who appreciate simplicity, and customization options for those who desire a more personal touch. Do you dream of a canvas that reflects your identity? We bring it to life for you."
          imgSrc={ImagePerso}
          altText="Customization"
        />
        <HomeSection
          title="Join the Visual Revolution"
          text="With Constelium, step into an era where digital art and finance meet in a radiant dance, where every color and every number tell your story. Welcome to your new visual home, where your NFTs and cryptos reign supreme."
          imgSrc={imagevitrine5}
          altText="Visual Revolution"
        />
        <NewsletterPopup />
      </main>
      <Footer />
    </>
  );
}

export default Home;
