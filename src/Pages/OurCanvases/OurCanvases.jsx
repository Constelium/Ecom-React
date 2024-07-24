import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Slider from "react-slick";
import "./OurCanvases.css";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";

function OurCanvases() {
  useAnalytics();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header />
      <main className="OurCanvasesMain">
        <section className="product-section">
          <div className="carousel-container">
            <Slider {...settings}>
              <div>
                <img src="image1.jpg" alt="Product 1" />
              </div>
              <div>
                <img src="image2.jpg" alt="Product 2" />
              </div>
              <div>
                <img src="image3.jpg" alt="Product 3" />
              </div>
            </Slider>
          </div>
          <div className="product-details">
            <h1>Our Canvases</h1>
            <p>
              Discover the premium digital canvases by Constelium, blending art
              and technology to offer a unique visual experience. Perfect for
              displaying NFTs, financial charts, personal photos, and videos.
            </p>
            <ul>
              <li>Display NFTs from different blockchains</li>
              <li>Real-time financial charts</li>
              <li>Personal photos and videos</li>
              <li>Customizable and elegant design</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default OurCanvases;
