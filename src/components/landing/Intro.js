import {Container} from "react-bootstrap";
import "../../style/landing/intro.css";

const Intro = () => {
  return (
    <div className="intro">
      <Container>
        <img src="/img/kepo/logo.png" alt="Logo" width="400px" height="400px" className="introLogo" />
        <div className="titleName">kedubes expo</div>
        <div className="titleYear">2024</div>
        <div className="tagline">find your endless ocean</div>
      </Container>
    </div>
  );
};

export default Intro;
