import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text container">
          &copy; Все права защищены.{" "}
          <a href="index.html">
            WEBC<span className="accent-color accent-width-small">O</span>RN.PRO
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
