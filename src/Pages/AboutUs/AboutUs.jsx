import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./AboutUs.css";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";

function AboutUs() {
  useAnalytics();
  return (
    <div>
      <Header />
      <main>
        <div className="aboutus">
          <div>
            <h3>ABOUT US</h3>
          </div>
          <div>
            <h5>Introduction :</h5>
            <p>
              Welcome to our artistic universe where digital art meets authentic
              craftsmanship. At [Your Company Name], we believe in the power of
              creativity and artisanal mastery to bring forth unique creations.
              Discover our story and passion for digital art.
            </p>
          </div>
          <div>
            <h5>Story :</h5>
            <p>
              Since our inception in [Year of your company's establishment], we
              have had the privilege of merging contemporary digital art with
              the tradition of craftsmanship. Each digital artwork we create is
              a result of collaboration between talented digital artists and
              skilled artisan woodworkers. Our company was born from the belief
              that art can transcend boundaries and seamlessly integrate into
              our living spaces.
            </p>
          </div>
          <div>
            <h5>Handcrafted Digital Art :</h5>
            <p>
              What sets our creations apart is meticulous attention to detail
              and the dedication of our artisans. Each digital artwork is
              thoughtfully designed by our artists and then handcrafted by our
              woodworkers. The wooden frame, expertly shaped, adds an authentic
              touch to each piece.
            </p>
          </div>
          <div>
            <h5>Our Commitment :</h5>
            <p>
              We take pride in promoting digital art as a contemporary artistic
              expression while preserving traditional craftsmanship skills. Our
              commitment to quality and individuality is reflected in every
              artwork we create.
            </p>
          </div>
          <div>
            <h5>Our Journey :</h5>
            <p>
              We invite you to explore our unique collection of digital
              artworks. Each piece tells a story and offers an immersive
              artistic experience. We look forward to sharing our passion with
              you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
