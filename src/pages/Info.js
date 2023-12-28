import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Record from "../components/info/Record";
import Booklet from "../components/info/Booklet";
import "../style/info/infoPage.css";

const Info = () => {
  return (
    <div>
      <div className="infoBG">
        <Navigation />
        <Record />
        <Booklet />
      </div>
      <Footer />
    </div>
  );
};

export default Info;
