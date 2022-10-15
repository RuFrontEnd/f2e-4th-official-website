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
            <Col xs={4} md={6} lg={4}>
              <img
                className={`${styles["medal"]} w-100`}
                width={386}
                height={374}
              ></img>
              每個關卡各 2 名， 設計 1 名、前端 1 名
            </Col>
            <Col xs={4} md={6} lg={4}>
              <img
                className={`${styles["medal"]} w-100`}
                width={386}
                height={374}
              ></img>
              每個關卡各 2 名， 設計 1 名、前端 1 名
            </Col>
            <Col xs={4} md={6} lg={4}>
              <img
                className={`${styles["medal"]} w-100`}
                width={386}
                height={374}
              ></img>
              每個關卡各 2 名， 設計 1 名、前端 1 名
            </Col>
          </Row>
        </Container>
        <Container>
          初選：將由六角學院前端、UI 評審進行第一波篩選，並於
          12/5（五）公布初選佳作名單 。
          <br />
          決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於
          12/23（五）公布企業得獎名單。
        </Container>
      </section>
    </>
  );
}

export default Reward;
