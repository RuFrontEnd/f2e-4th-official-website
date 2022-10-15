import styles from "./topicCard.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import blockStudio from "assets/block-studio.svg";
import parallex from "assets/parallex.svg";
import Button from "react-bootstrap/Button";

function TopicCard(props) {
  return (
    <div className={`${styles["topic-card"]} ${props.className}`}>
      <Container>
        {/* <p className={`${styles["title"]}`}>視差滾動 Parallax Scrolling</p>
        <img src={blockStudio} width={327} height={69}></img>
        <img src={parallex} width={320} height={290}></img>
        <p>The F2E 活動網站設計</p>
        <p>
          請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign 本頁面來設計。
        </p>
        <Button variant="primary rounded-pill">關卡攻略</Button>
        <Button variant="primary rounded-pill">投稿</Button> */}
        {/* <header className={styles.header}>
        <Container>
          <Row>
            <Col xs={2}>
              <div className="d-flex align-items-center h-100">
                <img src={hexLogo} alt="hex-logo" width="145" height="35"></img>
              </div>
            </Col>
            <Col xs={6}></Col>
            <Col xs={1}>
              <div className={`${styles.item} d-flex align-items-center h-100`}>
                關卡任務
              </div>
            </Col>
            <Col xs={1}>
              <div className={`${styles.item} d-flex align-items-center h-100`}>
                競賽說明
              </div>
            </Col>
            <Col xs={2}>
              <div className={`${styles.item}`}>
                <button
                  className={`${styles["sign-up-btn"]} rounded-pill h-100 w-100`}
                >
                  立即報名
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </header> */}
      </Container>
    </div>
  );
}

export default TopicCard;
