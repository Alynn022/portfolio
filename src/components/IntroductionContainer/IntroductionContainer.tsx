import "./IntroductionContainer.css";
import image from "../../images/profilePicture.jpeg";

const IntroductionContainer = () => {
  return (
    <div className="introduction-container">
      <div>
        <img src={image} className="profile-picture" alt="profile picture" />
      </div>
      <div className="intro-text">
        Hello! It’s nice to meet you! I’m the designer and developer behind this
        portfolio. Designed utilizing Figma and built in React.js. This single
        page application is also mobile friendly! I’m passionate about creating
        and learning, with absolute positivity! Hoping that you find this page
        well.
      </div>
    </div>
  );
};

export default IntroductionContainer;
