import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import HomeSection from "../../Components/HomeSection.jsx";
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
          imgSrc={ImageVanGogh}
          title="NFT Display"
          Subtitle="Blockchain Integration"
          text="Our Canvas allow you to display NFTs from a variety of blockchains, including Ethereum and Solana, providing a dynamic showcase for your digital art and all you desire. Utilizing blockchain technology, each displayed NFT is secure and authentic, ensuring ownership and uniqueness of the art."
          altText="NFT"
          direction="left-to-right"
        />
        <HomeSection
          imgSrc={ImageNFT}
          title="Financial Charts"
          Subtitle="Crypto, Stocks, Forex"
          text="View real-time charts of your financial assets. Follow market trends and make informed decisions with a clear and detailed display. Receive instant updates on financial market fluctuations directly on your Canvas."
          altText="CRYPTO"
          direction="right-to-left"
        />
        <HomeSection
          imgSrc={imagevitrine5}
          title="Photos and personal videos"
          Subtitle="Eternal Memories"
          text=" Display your most precious memories with exceptional image quality. Whether family photos or vacation videos, our frames offer unparalleled clarity and vibrancy. Easily transfer your photos and videos via our mobile app, customizing the display to your preferences."
          altText="Peronal Things"
          direction="left-to-right"
        />
        <HomeSection
          imgSrc={imagevitrine5}
          title="Versatility and Customization"
          text="We understand the importance of accessibility. That's why our canvases accept various wallets, allowing you to connect and interact with your portfolio in an intuitive and secure way."
          altText="Versatility"
          direction="right-to-left"
        />
        <HomeSection
          imgSrc={ImagePerso}
          title="Mobile App"
          text="Constelium gives you the choice: one base model for those who appreciate simplicity, and customization options for those who desire a more personal touch. Do you dream of a canvas that reflects your identity? We bring it to life for you."
          altText="App"
          direction="left-to-right"
        />
        <HomeSection
          imgSrc={imagevitrine5}
          title="Join the Visual Revolution"
          text="With Constelium, step into an era where digital art and finance meet in a radiant dance, where every color and every number tell your story. Welcome to your new visual home, where your NFTs and cryptos reign supreme."
          altText="Revolution"
          direction="right-to-left"
        />
        <NewsletterPopup />
      </main>
      <Footer />
    </>
  );
}

export default Home;
