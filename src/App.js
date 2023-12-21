import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Maskot from "./components/Maskot";
import Timeline from "./components/Timeline";
import "./App.css";
import "./style/landingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigation />
        <Intro />
        <Maskot />
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

export default App;
