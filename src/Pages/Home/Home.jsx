import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";
import imagevitrine2 from "../../assets/imagevitrine2.png";

function HomePage() {
  return (
    <div className="containerMainHome">
      <Header />
      <main>
        {/* <div className="neon-wrapper">
          <h1 className="neon-text">
            Constelium, for a vision thats truly yours: canva, dashboard,
            customize.
          </h1> */}
        {/* <button className="our-canvases-btn">
            <a href="/OurCanvases">Our canvases</a>
          </button> */}
        <div className="title">
          <div className="content">
            <div className="section">
              <h2>Welcome to the World of Constelium</h2>
              <div className="caseImg">
                <img src="" alt="" />
              </div>
              <p>
                Discover a premium visual experience with Constelium: a perfect
                harmony between digital art and cutting-edge technology. Our
                digital canvases, crafted with the expertise of artisan
                cabinetmakers, are not just works of art; they are the pulsing
                heart of your passion for cryptocurrencies and NFTs.
              </p>
            </div>
            <div className="section">
              <h2>Display Your Passion</h2>
              <div className="caseImg">
                <img src={imagevitrine2} width="100%" height="300px" />
              </div>
              <p>
                With Constelium, your NFT collection comes to life in the most
                elegant setting imaginable. Each pixel on our screens is a
                window into the worlds you've chosen to embrace. Your digital
                works are no longer confined to ordinary displays; they are
                illuminated, enhanced by the brilliance and clarity of our
                high-end canvases.
              </p>
            </div>
            <div className="section">
              <h2>Monitor Your Cryptos</h2>
              <div className="caseImg">
                <img src="" alt="" />
              </div>
              <p>
                But Constelium isn't just for display; it's a dynamic dashboard
                for your crypto investments. Follow market fluctuations in
                real-time, and let your canvas inform you of trends without ever
                losing sight of elegance and beauty. With Constelium,
                performance meets art.
              </p>
            </div>
            <div className="section">
              <h2>Inclusive Technology</h2>
              <div className="caseImg">
                <img src="" alt="" />
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
                <img src="" alt="" />
              </div>
              <p>
                Constelium gives you the choice: one base model for those who
                appreciate simplicity, and customization options for those who
                desire a more personal touch. Do you dream of a canvas that
                reflects your identity ? We bring it to life for you.
              </p>
            </div>
            <div className="section">
              <h2>Join the Visual Revolution</h2>
              <div className="caseImg">
                <img src="" alt="" />
              </div>
              <p>
                With Constelium, step into an era where digital art and finance
                meet in a radiant dance, where every color and every number tell
                your story. Welcome to your new visual home, where your NFTs and
                cryptos reign supreme.
              </p>
            </div>
          </div>
        </div>
        {/* </div> */}
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
