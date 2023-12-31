import { Container, Col, Row } from "react-bootstrap";
import "../../style/about/theme.css";

const Theme = () => {
  return (
    <div className="aboutTheme">
      <Container className="d-none d-md-flex">
        <Row>
          <Col xs={5}>
            <div className="fotoTheme">
              <img
                src="/img/kepo/logo.png"
                alt="logo"
                width="462.12px"
                height="455.28px"
              />
            </div>
          </Col>
          <Col xs={7}>
            <div className="title">Our Theme</div>
            <div className="descTheme">
              Tema Kedubes Expo 2024 adalah ocean dengan tagline{" "}
              <strong>“Find your endless ocean”</strong>. Tema tersebut
              menggambarkan KEPO 2024 sebagai sarana untuk mencari informasi dan
              pengetahuan yang akan digunakan untuk meraih tujuan siswa/i SMAN
              12 Jakarta.
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="d-md-none">
        <Row>
          <Col xs={12}>
            <div className="title">Our Theme</div>
            <div className="fotoTheme">
              <img
                src="/img/kepo/logo.png"
                alt="logo"
                width="462.12px"
                height="455.28px"
              />
            </div>
          </Col>
          <Col xs={12}>
            <div className="descTheme">
              Tema Kedubes Expo 2024 adalah ocean dengan tagline{" "}
              <strong>“Find your endless ocean”</strong>. Tema tersebut
              menggambarkan KEPO 2024 sebagai sarana untuk mencari informasi dan
              pengetahuan yang akan digunakan untuk meraih tujuan siswa/i SMAN
              12 Jakarta.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Theme;
