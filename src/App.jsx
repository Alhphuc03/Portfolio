import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import IntroductionSection from "./components/IntroductionSection/IntroductionSection";
import Skills from "./components/Skills/Skills";
import Project from "./components/Projects/Project";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MeteorShower from "./components/MeteorShower";

function App() {
  return (
    <Router>
     <MeteorShower   /> 
      <Navbar />
      <IntroductionSection />
      <Skills />
      <Project />
      <Education />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
