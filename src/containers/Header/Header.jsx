import "./header.scss";

const Header = () => {
  return (
    <header className="header__container">
      <a className="header__logo accent-width-small" href="index.html">
        Webc<span className="accent-color accent-width-small">o</span>rn
      </a>
      <a className="header__phone" href="tel:+380500659990">
        <img
          src="./images/icons/phone.png"
          alt="green phone icon"
          width={20}
          height={20}
        />
        <span> +38-050-065-99-90</span>
      </a>
    </header>
  );
};

export default Header;
