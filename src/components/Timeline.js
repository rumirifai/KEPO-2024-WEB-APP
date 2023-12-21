import { Container } from "react-bootstrap";
import "../style/timeline.css";

const Timeline = () => {
  return (
    <div className="timeline">
      <Container>
        <div className="title">timeline</div>
        <img src="/img/kepo/timeline.png" alt="Logo" width="904px" height="225px" className="time" />
      </Container>
    </div>
  );
};

export default Timeline;
