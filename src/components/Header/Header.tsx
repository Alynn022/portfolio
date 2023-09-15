import Logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="logo-container">
        <img src={Logo} className="logo" alt="L N logo" />
      </div>
      <div className="title-container">
        <p className="name">Hi, I'm Lynn</p>
        <p className="title">Front End Engineer</p>
      </div>
    </>
  );
};

export default Header;
