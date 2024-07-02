import "./Banner.css";
import bannerImage from "../../assets/videoConstLogo.gif";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-news">
          <a href="/support/#rewards">
            Coming Soon! Earn ME Rewards with Wallet —<span> Learn more</span>
          </a>
        </div>
        <div className="banner-title">
          <h1>
            Your Wallet For <br />
            All Things <br />
            NFTs & Ordinals
          </h1>
        </div>
        <div className="banner-subtitle">
          <p>
            Collect across chains with native bridging, instant swaps, and
            seamless Magic Eden integration - all in one wallet.
          </p>
        </div>
        <div className="banner-button">
          <a
            href="https://chrome.google.com/webstore/detail/magic-eden-wallet/mkpegjkblkkefacfmkajcjmajbjhlclg"
            target="_blank"
            rel="noopener noreferrer"
            className="button chrome-button"
          >
            <img
              src="https://cdn.prod.website-files.com/65c8c9b4.../chrome.png"
              alt="Download for Chrome"
            />
            Download for Chrome
          </a>
        </div>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
