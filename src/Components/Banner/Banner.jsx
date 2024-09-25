import "./Banner.css";
import bannerImage from "../../assets/videoConstLogo.gif";

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-content">
        <div className="banner-title">
          <h1>
            Transform <br /> your space <br /> with Constelium
          </h1>
        </div>
        <div className="banner-subtitle">
          <p>Your canvas to highlight everything</p>
        </div>
      </div>
      <div className="banner-image">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
