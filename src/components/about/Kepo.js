import { Container, Col, Row } from "react-bootstrap";
import "../../style/about/kepo.css";

const Kepo = () => {
  return (
    <div className="aboutKepo">
      <Container className="d-none d-md-flex">
        <Row>
          <Col xs={7}>
            <div className="title">About Us</div>
            <div className="descKepo">
              Kedubes Expo 2024 atau biasa disingkat KEPO adalah acara tahunan
              yang menjadi sarana pemberian informasi kepada siswa/i SMAN 12
              Jakarta terkait berbagai program studi di perguruan tinggi.
              Kedubes Expo 2024 bertujuan untuk memudahkan dalam menentukan
              pilihan masa depan untuk ke jenjang berikutnya dan diselenggarakan
              oleh Alumni SMAN 12 Jakarta.
            </div>
          </Col>
          <Col xs={5}>
            <div className="fotoKepo">
              <img
                src="/img/kepo/kepo.jpg"
                alt="kepo"
                width="419.25px"
                height="344.25px"
              />
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="d-md-none">
        <Row>
          <Col xs={12}>
            <div className="title">About Us</div>
            <div className="fotoKepo">
              <img
                src="/img/kepo/kepo.png"
                alt="kepo"
                width="419.25px"
                height="344.25px"
              />
            </div>
          </Col>
          <Col xs={12}>
            <div className="descKepo">
              Kedubes Expo 2024 atau biasa disingkat KEPO adalah acara tahunan
              yang menjadi sarana pemberian informasi kepada siswa/i SMAN 12
              Jakarta terkait berbagai program studi di perguruan tinggi.
              Kedubes Expo 2024 bertujuan untuk memudahkan dalam menentukan
              pilihan masa depan untuk ke jenjang berikutnya dan diselenggarakan
              oleh Alumni SMAN 12 Jakarta.
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kepo;
