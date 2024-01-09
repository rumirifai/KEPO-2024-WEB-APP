import { Container, Col, Row } from "react-bootstrap";
import "../../style/info/beasiswa.css";

const Beasiswa = () => {
  return (
    <div className="aboutBeasiswa">
      <Container className="d-none d-md-flex">
        <Row>
          <Col xs={8}>
            <div className="titleBeasiswa">Booklet Beasiswa</div>
            <div className="descBeasiswa">
              Booklet beasiswa berisi berbagai informasi umum mengenai beasiswa
              di Indonesia. Hal ini dapat kalian jadikan acuan sebagai informasi
              dasar dan juga motivasi untuk mendapatkan beasiswa yang nantinya
              dapat sangat membantu kalian di dunia perkuliahan.
            </div>
            <button className="buttonBeasiswa">
              <a
                href="https://bit.ly/BookletBeasiswaKepo2024"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>Lihat Booklet Beasiswa</strong>
              </a>
            </button>
          </Col>
          <Col xs={4}>
            <div className="fotoBeasiswa">
              <img
                src="/img/kepo/beasiswa.png"
                alt="Beasiswa"
                width="100%"
                height="auto"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="d-md-none">
        <Row>
          <Col xs={12}>
            <div className="title">Booklet Beasiswa</div>
            <div className="fotoBeasiswa">
              <img
                src="/img/kepo/beasiswa.png"
                alt="Beasiswa"
                width="100%"
                height="auto"
              />
            </div>
          </Col>
          <Col xs={12}>
            <div className="descBeasiswa">
              Booklet beasiswa berisi berbagai informasi umum mengenai beasiswa
              di Indonesia. Hal ini dapat kalian jadikan acuan sebagai informasi
              dasar dan juga motivasi untuk mendapatkan beasiswa yang nantinya
              dapat sangat membantu kalian di dunia perkuliahan.
            </div>
            <button className="buttonBeasiswa">
              <a
                href="https://bit.ly/BookletBeasiswaKepo2024"
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>Lihat Booklet Beasiswa</strong>
              </a>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Beasiswa;
