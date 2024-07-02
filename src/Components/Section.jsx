import PropTypes from "prop-types";
import { useInView } from "react-intersection-observer";

const Section = ({ title, text, imgSrc, altText }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className={`section ${inView ? "visible" : ""}`}>
      <h2>{title}</h2>
      <div className="caseImg">
        <img src={imgSrc} alt={altText} width="100%" height="300px" />
      </div>
      <p>{text}</p>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default Section;
