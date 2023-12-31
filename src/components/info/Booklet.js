import { Container, Col, Row } from "react-bootstrap";
import "../../style/info/booklet.css";

const Booklet = () => {
  return (
    <div className="aboutBooklet">
      <Container className="d-none d-md-flex">
        <Row>
          <Col xs={4}>
            <div className="fotoBooklet">
              <img
                src="/img/kepo/booklet.png"
                alt="Booklet"
                width="100%"
                height="auto"
              />
            </div>
          </Col>
          <Col xs={8}>
            <div className="titleBooklet">Booklet Jurusan</div>
            <div className="descBooklet">
              Booklet jurusan berisi detail-detail dari semua jurusan yang kamu
              tuju. Mulai dari kampus, mata kuliah hingga prospek kerja. Hal ini
              dapat kalian jadikan motivasi dan juga persiapan sebelum memulai
              perjalanan di dunia perkuliahan nanti.
            </div>
            <button className="buttonBooklet">
              <a
                href="https://bit.ly/BookletKepo2024"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>Lihat Booklet</strong>
              </a>
            </button>
          </Col>
        </Row>
      </Container>

      <Container className="d-md-none">
        <Row>
          <Col xs={12}>
            <div className="title">Booklet Jurusan</div>
            <div className="fotoBooklet">
              <img
                src="/img/kepo/booklet.png"
                alt="Booklet"
                width="100%"
                height="auto"
              />
            </div>
          </Col>
          <Col xs={12}>
            <div className="descBooklet">
              Booklet jurusan berisi detail-detail dari semua jurusan yang kamu
              tuju. Mulai dari kampus, mata kuliah hingga prospek kerja. Hal ini
              dapat kalian jadikan motivasi dan juga persiapan sebelum memulai
              perjalanan di dunia perkuliahan nanti.
            </div>
            <button className="buttonBooklet">
              <a
                href="https://bit.ly/BookletKepo2024"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>Lihat Booklet</strong>
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Booklet;
