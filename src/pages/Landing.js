import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
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
        <div className="landingDesktop">
          <Maskot />
          <Timeline />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Landing;
