import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";
import "../Pages/Home/Home.css";

const HomeSection = ({ title, text, subtitle, imgSrc, altText, direction }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });

  return (
    <div
      ref={ref}
      className={`section ${inView ? `visible ${direction}` : ""}`}
    >
      <div className="content">
        <div className="caseImg">
          <img src={imgSrc} alt={altText} width="100%" height="300px" />
        </div>
        <h2>{title}</h2>
        {subtitle && <h4>{subtitle}</h4>}
        <p>{text}</p>
      </div>
    </div>
  );
};

HomeSection.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
};

export default HomeSection;
