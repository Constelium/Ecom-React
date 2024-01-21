import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Faq.css";

function Faq() {
  return (
    <div>
      <Header />
      <main>
        <div className="faq">
          <div>
            <h3>FAQ</h3>
          </div>
          <div>
            <h5>What is a digital board and what sets it apart ?</h5>
            <p>
              A digital board displays content in a digital and interactive
              manner. It stands out for its ability to showcase NFTs from
              different blockchains, as well as real-time cryptocurrency prices.
              Each board is encased in a wooden frame handcrafted by a skilled
              cabinetmaker, thus marrying technology with traditional
              craftsmanship.
            </p>
          </div>
          <div>
            <h5>How can I customize my digital board ?</h5>
            <p>
              We offer three basic models, but customization is at the heart of
              our offering. You can personalize your board by choosing different
              aspects such as size, frame and the features of our app. Contact
              us to discuss the available customization options.
            </p>
          </div>
          <div>
            <h5>How do I connect my wallet to my digital board ?</h5>
            <p>
              Connecting your wallet is a simple and secure procedure. On the
              configuration page of your board, you will find an option to
              connect your wallet. Follow the on-screen instructions to
              authorize access and easily display your NFTs or track your
              financial assets.
            </p>
          </div>
          <div>
            <h5>Which blockchains are compatible with the digital board ?</h5>
            <p>
              Our digital boards are designed to support a variety of
              blockchains. If you have NFTs on different blockchains, contact us
              to check compatibility and discuss how we can meet your specific
              needs.
            </p>
          </div>
          <div>
            <h5>How is the security of my data and assets ensured ?</h5>
            <p>
              Security is our priority. We use robust security protocols to
              ensure the protection of your data and assets. Moreover, you have
              full control over the permissions granted when connecting your
              wallet, ensuring a high level of security.
            </p>
          </div>
          <div>
            <h5>What payment methods are accepted on your site ?</h5>
            <p>
              We accept several payment methods, including payments by card,
              bank transfer, and certain cryptocurrencies. Visit our payment
              page for more information.
            </p>
          </div>
          <div>
            <h5>
              How can I get help in case of issues or for specific queries ?
            </h5>
            <p>
              We are here to help. You can contact us via our contact page on
              the site. Our support team is available to answer all your
              questions and resolve any issues you may encounter.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Faq;
