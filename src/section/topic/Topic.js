import styles from "./topic.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hexScholl from "assets/hex-school.svg";
import bounty from "assets/bounty.svg";
import mouseMiddleBtn from "assets/mouse-middle-button.svg";
import mouseBody from "assets/mouse-body.svg";
import TopicCard from "components/topicCard/TopicCard";

function Topic() {
  return (
    <>
      <section className={`${styles.topic}`}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={12}>
              <div
                className={`d-flex flex-column justify-content-center align-items-center`}
              >
                <img src={hexScholl} width={590} height={146} className={styles['hex-scholl']}></img>
                <div
                  className={`${styles.copyWriting} d-flex justify-content-center`}
                >
                  年度最強合作，三大關卡來襲
                </div>
                <div className={`${styles.divider} w-100`}>
                  <hr />
                  <hr />
                </div>
              </div>
            </Col>
            <Col sm={12} md={6} lg={12}>
              <TopicCard className={styles["topic-card"]} />
            </Col>
            <Col sm={12} md={6} lg={12}>
              <TopicCard className={styles["topic-card"]} />
            </Col>
            <Col sm={12} md={6} lg={12}>
              <TopicCard className={styles["topic-card"]} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Topic;
