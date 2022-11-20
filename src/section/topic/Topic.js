import React from "react";
import styles from "./topic.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hexScholl from "assets/hex-school.svg";
import bounty from "assets/bounty.svg";
import mouseMiddleBtn from "assets/mouse-middle-button.svg";
import mouseBody from "assets/mouse-body.svg";
import TopicCard from "components/topicCard/TopicCard";
import blockStudio from "assets/block-studio.svg";
import kdan from "assets/kdan.svg";
import titan from "assets/titan.svg";
import parallex from "assets/parallex.svg";
import pdf from "assets/pdf.svg";
import scrum from "assets/scrum.svg";

function Topic() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section className={`${styles.topic}`}>
        <Container>
          <Row>
            <Col sm={12} md={6} lg={12}>
              <div
                className={`d-flex flex-column justify-content-center align-items-center`}
              >
                <img
                  src={hexScholl}
                  width={590}
                  height={146}
                  className={styles["hex-scholl"]}
                ></img>
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
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-offset="500"
              >
                <TopicCard
                  className={styles["topic-card"]}
                  title="視差滾動  Parallax Scrolling"
                  company={{ src: blockStudio, width: 327 }}
                  img={parallex}
                  project={"The F2E 活動網站設計"}
                  illustrate={
                    "請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign 本頁面來設計。"
                  }
                />
              </div>
            </Col>
            <Col sm={12} md={6} lg={12}>
              <div
                data-aos="fade-left"
                data-aos-duration="500"
                data-aos-offset="500"
              >
                <TopicCard
                  className={styles["topic-card"]}
                  title="線上簽署  Canvas"
                  company={{ src: kdan, width: 160 }}
                  img={pdf}
                  project={"今晚，我想來點點簽"}
                  illustrate={
                    "每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web 版本的簽名服務吧！"
                  }
                />
              </div>
            </Col>
            <Col sm={12} md={6} lg={12}>
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                data-aos-offset="500"
              >
                <TopicCard
                  className={styles["topic-card"]}
                  title="Scrum  JS draggable"
                  company={{ src: titan, width: 299 }}
                  img={scrum}
                  project={"Scrum 新手村"}
                  illustrate={
                    "設計關卡內容與網頁互動效果，透過頁面關卡來呈現知識點，讓挑戰者藉由你設計的內容更了解 Scrum。"
                  }
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Topic;
