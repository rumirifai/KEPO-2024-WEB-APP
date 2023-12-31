import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Dokumentasi from "../components/about/Dokumentasi";
import Kepo from "../components/about/Kepo";
import Theme from "../components/about/Theme";
import "../style/about/aboutPage.css";
import slides from "../data/carouselData.json";

const About = () => {
  return (
    <div>
      <div className="aboutBG">
        <Navigation />
        <div className="aboutDesktop">
          <Dokumentasi data={slides.slides} />
        </div>
        <Kepo />
        <Theme />
        <Footer />
      </div>
    </div>
  );
};

export default About;
