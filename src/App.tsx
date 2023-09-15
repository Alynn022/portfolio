import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import IntroductionContainer from "./components/IntroductionContainer/IntroductionContainer";
import Quote from "./components/Quote/Quote";
import AboutMe from "./components/AboutMe/AboutMe";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <main>
        <IntroductionContainer />
        <Quote />
        <AboutMe />
      </main>
    </div>
  );
};

export default App;
