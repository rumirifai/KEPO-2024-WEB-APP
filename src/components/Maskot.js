import { Col, Container, Row } from "react-bootstrap";
import "../style/maskot.css";

const Maskot = () => {
  return (
    <div className="maskot">
      <Container>
        <Row>
          <Col xs={7}>
            <div className="name">okky is here!</div>
          </Col>
          <Col className="okky" xs={5}>
            <img
              src="/img/kepo/okky.png"
              alt="okky"
              width=" 358.9875px"
              height="286.095px"
            />
          </Col>
        </Row>
        <div className="desc">
          Okky, sang gurita dari lautan yang penuh misteri, mengajak para
          siswa/i SMAN 12 Jakarta untuk merangkak ke dalam keindahan pengetahuan
          seperti ia menari di dalam gelombang. Melalui pesonanya yang alami dan
          kebijakannya, Okky membimbing mereka untuk menjadi penjelajah yang
          tangguh dan mampu mengatasi tantangan di lautan ilmu pengetahuan.
        </div>
      </Container>
    </div>
  );
};

export default Maskot;
