import styles from "./share.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hexScholl from "assets/hex-school.svg";
import bounty from "assets/bounty.svg";
import mouseMiddleBtn from "assets/mouse-middle-button.svg";
import mouseBody from "assets/mouse-body.svg";
import Title from "components/title/Title";
import Schedule from "components/schedule/Schedule";

function Share() {
  return (
    <>
      <section className={`${styles.topic}`}>
        <Title title="各界大神直播分享" />
        <Container>
          <Row>
            <Col xs={12} md={6} lg={6}>
              <div className={`${styles.sharer}`}>1</div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className={`${styles.sharer}`}>2</div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className={`${styles.sharer}`}>3</div>
            </Col>
            <Col xs={12} md={6} lg={6}>
              <div className={`${styles.sharer}`}>4</div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Share;
