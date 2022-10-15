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
            <Col>
              <div
                className={`${styles.hexSchool} d-flex justify-content-center`}
              >
                <img src={hexScholl} width={590} height={146}></img>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className={`${styles.title} d-flex justify-content-center`}>
                年度最強合作，三大關卡來襲
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className={`${styles.divider}`}>
            <hr />
            <hr />
          </div>
        </Container>
        <div className={`${styles.space}`}>
          <Container>
            <Row>
              <Col>
                <TopicCard className={styles["topic-card"]} />
              </Col>
            </Row>
            <Row>
              <Col>
                <TopicCard className={styles["topic-card"]} />
              </Col>
            </Row>
            <Row>
              <Col>
                <TopicCard className={styles["topic-card"]} />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
}

export default Topic;
