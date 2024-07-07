import { useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Faq.css";
import useAnalytics from "../../Components/useAnalytics/useAnalytics";

function Faq() {
  useAnalytics();
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestionIndex(activeQuestionIndex === index ? null : index);
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
    <div>
      <Header />
      <main className="faq">
        <h3>FAQ</h3>
        <section className="faq-section">
          {faqs.map((faq, index) => (
            <article key={index} className="faq-article">
              <h5
                className="faq-question"
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </h5>
              <p
                className={`faq-answer ${
                  activeQuestionIndex === index ? "active" : ""
                }`}
              >
                {faq.answer}
              </p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Faq;

// {/* <div className="section">
//           <h2>Welcome to the World of Constelium</h2>
//           {/* J'ai déjà réglé les tailles d'images pour quelle rentre dans les cases (width,height) à changer si besoin*/}
//           <div className="caseImg">
//             <img src={ImageVanGogh} alt="" width="100%" height="300px" />
//           </div>
//           <p>
//             Discover a premium visual experience with Constelium: a perfect
//             harmony between digital art and cutting-edge technology. Our digital
//             canvases, crafted with the expertise of artisan cabinetmakers, are
//             not just works of art; they are the pulsing heart of your passion
//             for cryptocurrencies and NFTs.
//           </p>
//         </div>
//         <div className="section">
//           <h2>Display Your Passion</h2>
//           <div className="caseImg">
//             <img
//               src={ImageNFT}
//               alt="Product on wall"
//               width="100%"
//               height="300px"
//             />
//           </div>
//           <p>
//             With Constelium, your NFT collection comes to life in the most
//             elegant setting imaginable. Each pixel on our screens is a window
//             into the worlds you've chosen to embrace. Your digital works are no
//             longer confined to ordinary displays; they are illuminated, enhanced
//             by the brilliance and clarity of our high-end canvases.
//           </p>
//         </div>
//         <div className="section">
//           <h2>Monitor Your Cryptos</h2>
//           <div className="caseImg">
//             <img src="" alt="" width="100%" height="300px" />
//           </div>
//           <p>
//             But Constelium isn't just for display; it's a dynamic dashboard for
//             your crypto investments. Follow market fluctuations in real-time,
//             and let your canvas inform you of trends without ever losing sight
//             of elegance and beauty. With Constelium, performance meets art.
//           </p>
//         </div>
//         <div className="section">
//           <h2>Inclusive Technology</h2>
//           <div className="caseImg">
//             <img src={imagevitrine5} alt="" width="100%" height="300px" />
//           </div>
//           <p>
//             We understand the importance of accessibility. That's why our
//             canvases accept various wallets, allowing you to connect and
//             interact with your portfolio in an intuitive and secure way.
//           </p>
//         </div>
//         <div className="section">
//           <h2>Limitless Customization</h2>
//           <div className="caseImg">
//             <img src={ImagePerso} alt="" width="100%" height="300px" />
//           </div>
//           <p>
//             Constelium gives you the choice: one base model for those who
//             appreciate simplicity, and customization options for those who
//             desire a more personal touch. Do you dream of a canvas that reflects
//             your identity ? We bring it to life for you.
//           </p>
//         </div>
//         <div className="section">
//           <h2>Join the Visual Revolution</h2>
//           <div className="caseImg">
//             <img src={imagevitrine5} alt="" width="100%" height="300px" />
//           </div>
//           <p>
//             With Constelium, step into an era where digital art and finance meet
//             in a radiant dance, where every color and every number tell your
//             story. Welcome to your new visual home, where your NFTs and cryptos
//             reign supreme.
//           </p>
//         </div> */}
