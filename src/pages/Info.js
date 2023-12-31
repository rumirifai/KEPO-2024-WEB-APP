import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Record from "../components/info/Record";
import Booklet from "../components/info/Booklet";
import SliderPtn from "../components/info/SliderPtn";
import "../style/info/infoPage.css";

const Info = () => {
  return (
    <div>
      <div className="infoBG">
        <Navigation />
        <SliderPtn />
        <Record />
        <Booklet />
        <Footer />
      </div>
    </div>
  );
};

export default Info;
