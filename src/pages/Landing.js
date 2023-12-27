import Navigation from "../components/landing/Navigation";
import Footer from "../components/landing/Footer";
import Intro from "../components/landing/Intro";
import Maskot from "../components/landing/Maskot";
import Timeline from "../components/landing/Timeline";
import "../style/landing/landingPage.css";

const Landing = () => {
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

export default Landing;
