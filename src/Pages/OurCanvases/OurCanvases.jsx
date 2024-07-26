import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./OurCanvases.css";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";

function OurCanvases() {
  useAnalytics();

  return (
    <div>
      <Header />
      <main className="OurCanvasesMain">
        <section className="product-section">
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
