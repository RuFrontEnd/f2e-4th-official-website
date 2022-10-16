import styles from "./reward.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hexScholl from "assets/hex-school.svg";
import bounty from "assets/bounty.svg";
import mouseMiddleBtn from "assets/mouse-middle-button.svg";
import mouseBody from "assets/mouse-body.svg";
import Title from "components/title/Title";
import Schedule from "components/schedule/Schedule";

function Reward() {
  return (
    <>
      <section className={`${styles.topic}`}>
        <Title title="獎項" />
        <Container>
          <Row>
            <Col xs={12} md={6} lg={4}>
              <img
                className={`${styles["medal"]} w-100`}
                width={386}
                height={374}
              ></img>
              每個關卡各 2 名， 設計 1 名、前端 1 名
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img
                className={`${styles["medal"]} w-100`}
                width={386}
                height={374}
              ></img>
              每個關卡各 2 名， 設計 1 名、前端 1 名
            </Col>
            <Col xs={12} md={6} lg={4}>
              <img
                className={`${styles["medal"]} w-100`}
                width={386}
                height={374}
              ></img>
              每個關卡各 2 名， 設計 1 名、前端 1 名
            </Col>
            <Col xs={12} md={6} lg={12}>
              以上皆提供完賽數位獎狀
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Reward;
