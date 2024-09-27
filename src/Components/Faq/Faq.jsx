import { useState } from "react";
import "./Faq.css";

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (openQuestionIndex === index) {
      setOpenQuestionIndex(null);
    } else {
      setOpenQuestionIndex(index);
    }
  };

  const faqs = [
    {
      question: "What is a Canva and what sets it apart ?",
      answer:
        "Our digital Canva displays content in a digital and interactive way. It stands out for its ability to present NFTs from different blockchains, real-time cryptocurrency prices and even your personal pictures. Each picture is enclosed in a wooden frame handcrafted by a skilled cabinetmaker, marrying technology with traditional craftsmanship.",
    },
    {
      question: "How can I customize my Canva ?",
      answer:
        "We offer three basic models, but customization is at the heart of our offering. You can personalize your Canva by choosing different aspects such as size, frame and the features of our app. Contact us to discuss the available customization options.",
    },
    {
      question: "How do I connect my wallet ?",
      answer:
        "Connecting your wallet is a simple and secure procedure. On the configuration page of your Canva, you will find an option to connect your wallet. Follow the on-screen instructions to authorize access and easily display your NFTs or track your financial assets.",
    },
    {
      question: "Which blockchains are compatible ?",
      answer:
        "Designed to support a variety of blockchains. If you have NFTs on different blockchains, contact us to check compatibility and discuss how we can meet your specific needs.",
    },
    {
      question: "How is the security of my data and assets ensured ?",
      answer:
        "Security is our priority. We use robust security protocols to ensure the protection of your data and assets. Moreover, you have full control over the permissions granted when connecting your wallet, ensuring a high level of security.",
    },
    {
      question: "What payment methods are accepted on your site ?",
      answer:
        "We accept several payment methods, including payments by card, bank transfer, and certain cryptocurrencies.",
    },
    {
      question: "Where do you make your custom products ?",
      answer:
        "Our made-to-measure products are carefully designed and manufactured in our dedicated workshop in France. Each product is the result of an artisanal process where tradition and technology meet to create unique items. We work closely with local artisans to guarantee superior quality and support traditional skills. We pride ourselves on maintaining a high level of excellence and offering our customers pieces that fully reflect their personality and individual preferences.",
    },
    {
      question: "What is your shipping time ?",
      answer:
        "Shipping time is one month, as this is a premium product created from A to Z and made-to-measure by us.",
    },
    {
      question:
        "How can I get help in case of issues or for specific queries ?",
      answer:
        "We are here to help. You can contact us via our contact page on the site. Our support team is available to answer all your questions and resolve any issues you may encounter.",
    },
  ];

  return (
    <div className="faq">
      <h1>FAQ</h1>
      <div className="faq-section">
        {faqs.map((faq, index) => (
          <div className="faq-article" key={index}>
            <button
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {openQuestionIndex === index ? "-" : "+"}
              </span>
            </button>
            <div
              className={`faq-answer ${
                openQuestionIndex === index ? "active" : ""
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
