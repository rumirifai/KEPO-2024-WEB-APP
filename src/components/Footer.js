import { Container, Row, Col } from "react-bootstrap";
import "../style/footer.css";

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row className="d-none d-md-flex">
        <Col className="kepo">
          <div className="text">© 2023</div>
          <div className="text">Kedubes Expo 2024</div>
        </Col>
        <Col className="logo">
          <img src="/img/kepo/logo.png" alt="Logo" width="91px" height="95px" />
        </Col>
        <Col className="findUs">
          <div className="text">Find us on social Media</div>
          <div className="icon">
            <a
              href="https://www.instagram.com/kepokedubes/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/kepo/insta.png"
                alt="Instagram"
                width="32px"
                height="33px"
              />
            </a>
            <a
              href="https://www.tiktok.com/@kepokedubes"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/kepo/tiktok.png"
                alt="TikTok"
                width="32px"
                height="32px"
              />
            </a>
          </div>
        </Col>
      </Row>

      <Row className="d-md-none">
        <Col>
          <div className="taglineFooter">
            find your <br />
            endless ocean
          </div>
        </Col>
      </Row>
      <Row className="d-md-none">
        <Col className="kepo">
          <div className="text">© 2023 Kedubes Expo</div>
        </Col>
      </Row>
      <Row className="d-md-none">
        <Col className="findUs">
          <div className="text">Find us on social Media</div>
          <div className="icon">
            <a
              href="https://www.tiktok.com/@kepokedubes"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/kepo/tiktok.png"
                alt="TikTok"
                width="12px"
                height="12px"
              />
            </a>
            <a
              href="https://www.instagram.com/kepokedubes/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/img/kepo/insta.png"
                alt="Instagram"
                width="12px"
                height="13px"
              />
            </a>
            <p className="socialText">@kepokedubes</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
