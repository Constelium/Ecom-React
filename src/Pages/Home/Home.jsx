import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import DynamicText from "../../Components/DynamicText/DynamicText";
import "./Home.css";
// image dans la section Display Your Passion (imagevitrine2)
import imagevitrine2 from "../../assets/imagevitrine2.png";
import Banner from "../../assets/Banner.gif";

function HomePage() {
  return (
    <>
      <Header />
      <main className="mainHome">
        <div className="banner">
          <DynamicText />
        </div>
        <img src={Banner} alt="Banner" width="210%" height="400px" />
        <div className="section">
          <h2>Welcome to the World of Constelium</h2>
          {/* J'ai déjà réglé les tailles d'images pour quelle rentre dans les cases (width,height) à changer si besoin*/}
          <div className="caseImg">
            <img src="" alt="" width="100%" height="300px" />
          </div>
          <p>
            Discover a premium visual experience with Constelium: a perfect
            harmony between digital art and cutting-edge technology. Our digital
            canvases, crafted with the expertise of artisan cabinetmakers, are
            not just works of art; they are the pulsing heart of your passion
            for cryptocurrencies and NFTs.
          </p>
        </div>
        <div className="section">
          <h2>Display Your Passion</h2>
          <div className="caseImg">
            <img
              src={imagevitrine2}
              alt="Product on wall"
              width="100%"
              height="300px"
            />
          </div>
          <p>
            With Constelium, your NFT collection comes to life in the most
            elegant setting imaginable. Each pixel on our screens is a window
            into the worlds you've chosen to embrace. Your digital works are no
            longer confined to ordinary displays; they are illuminated, enhanced
            by the brilliance and clarity of our high-end canvases.
          </p>
        </div>
        <div className="section">
          <h2>Monitor Your Cryptos</h2>
          <div className="caseImg">
            <img src="" alt="" width="100%" height="300px" />
          </div>
          <p>
            But Constelium isn't just for display; it's a dynamic dashboard for
            your crypto investments. Follow market fluctuations in real-time,
            and let your canvas inform you of trends without ever losing sight
            of elegance and beauty. With Constelium, performance meets art.
          </p>
        </div>
        <div className="section">
          <h2>Inclusive Technology</h2>
          <div className="caseImg">
            <img src="" alt="" width="100%" height="300px" />
          </div>
          <p>
            We understand the importance of accessibility. That's why our
            canvases accept various wallets, allowing you to connect and
            interact with your portfolio in an intuitive and secure way.
          </p>
        </div>
        <div className="section">
          <h2>Limitless Customization</h2>
          <div className="caseImg">
            <img src="" alt="" width="100%" height="300px" />
          </div>
          <p>
            Constelium gives you the choice: one base model for those who
            appreciate simplicity, and customization options for those who
            desire a more personal touch. Do you dream of a canvas that reflects
            your identity ? We bring it to life for you.
          </p>
        </div>
        <div className="section">
          <h2>Join the Visual Revolution</h2>
          <div className="caseImg">
            <img src="" alt="" width="100%" height="300px" />
          </div>
          <p>
            With Constelium, step into an era where digital art and finance meet
            in a radiant dance, where every color and every number tell your
            story. Welcome to your new visual home, where your NFTs and cryptos
            reign supreme.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
