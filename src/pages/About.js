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
        <Dokumentasi data={slides.slides} />
        <Kepo />
        <Theme />
      </div>
      <Footer />
    </div>
  );
};

export default About;
