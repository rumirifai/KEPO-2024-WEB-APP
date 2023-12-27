import { Container } from "react-bootstrap";
import "../../style/landing/timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <Container>
        <div className="title">timeline</div>
        <img
          src="/img/kepo/timeline.png"
          alt="Logo"
          width="678px"
          height="168.75px"
          className="time"
        />
      </Container>
    </div>
  );
};

export default Timeline;
