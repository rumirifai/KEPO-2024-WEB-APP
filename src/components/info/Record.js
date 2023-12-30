import { Container, Col, Row } from "react-bootstrap";
import "../../style/info/record.css";

const Record = () => {
  return (
    <div className="aboutRecord">
      <Container>
        <Row>
          <Col xs={8}>
            <div className="titleRecord">Track Record</div>
            <div className="descRecord">
              Track Record berisi data keberhasilan alumni SMAN 12 Jakarta dalam
              rentang waktu 2 tahun terakhir. Hal tersebut dapat kamu jadikan
              gambaran, motivasi, ataupun strategi dalam perjalanan ini. Silakan
              dibaca pada dokumen dapat kamu lihat di bawah ini!
            </div>
            <button className="buttonRecord">
              <a
                href="https://bit.ly/TrackRecordSMAN12"
                target="_blank"
                style={{ textDecoration: "none", color: "black" }}
              >
                <strong>Lihat Track Record</strong>
              </a>
            </button>
          </Col>
          <Col xs={4}>
            <div className="fotoRecord">
              <img
                src="/img/kepo/record.png"
                alt="Track Record"
                width="100%"
                height="auto"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Record;
