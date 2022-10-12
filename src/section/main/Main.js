import styles from "./main.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import vHacker from "assets/v-hacker.svg";
import bounty from "assets/bounty.svg";

function Main() {
  return (
    <>
      <section className={`${styles.main} d-flex align-items-center`}>
        <Container className="h-100">
          <Row className="h-100">
            <Col className="h-100">
              <div className={`${styles["content-container"]} h-100`}>
                <div className={"h-100 position-relative"}>
                  <div className={`${styles.content} h-100`}>
                    <Row className={"h-100"}>
                      <Col xs={6}>
                        <h1 className={`${styles.F2E} mb-4`}>THE F2E</h1>
                        <h2 className={`${styles.copywriting} mb-3`}>
                          前端工程師和介面
                          <br />
                          設計師, 攜手合作
                          <br />
                          拿獎金
                        </h2>
                        <h3 className={`${styles["vice-copywriting"]}`}>
                          羨慕別人的酷酷網頁
                          <br />
                          動畫？ 滿足不了同事的許
                          <br />
                          願？ 動畫技能樹太雜無從
                          <br />
                          下手？
                        </h3>
                      </Col>
                      <Col xs={6}>
                        <div
                          className={`${styles["num-of-person-wrapper"]} d-flex justify-content-end align-items-center h-100`}
                        >
                          <div className={`${styles["num-of-person"]}`}>
                            <h4>
                              報名總人數 <span>1854</span>人
                            </h4>
                            <h4>
                              報名總人數 <span>1615</span>人
                            </h4>
                            <h4>
                              報名總人數 <span>92</span>人
                            </h4>
                          </div>
                        </div>
                      </Col>
                      <div>
                        <img
                          src={vHacker}
                          alt={"v-hacker"}
                          className={`${styles["v-hacker"]}`}
                          width={630}
                          height={530}
                        ></img>
                      </div>
                    </Row>
                  </div>
                  <img
                    src={bounty}
                    alt={"bounty"}
                    className={styles.bounty}
                    width={340}
                    height={210}
                  ></img>
                </div>
              </div>

              {/* <div className="d-flex justify-content-center align-items-center w-100 h-100"> */}
              {/* <div className={`${styles.wrapper} w-100 h-100`}> */}
              {/* <div className={`${styles.content} w-100 h-100`}>
                    123
                  </div> */}
              {/* <Row>
                    <Col>
                      <Row>
                        <Col>THE F2E</Col>
                      </Row>
                      <Row>
                        <Col>前端工程師和介面設計師, 攜手合作拿獎金</Col>
                      </Row>
                      <Row>
                        <Col>
                          羨慕別人的酷酷網頁動畫？ 滿足不了同事的許願？
                          動畫技能樹太雜無從下手？
                        </Col>
                      </Row>
                    </Col>

                    <Col>
                      <Row>
                        <Col>報名總人數 1854人</Col>
                      </Row>
                      <Row>
                        <Col>報名總人數 1615人</Col>
                      </Row>
                      <Row>
                        <Col>報名總人數 92人</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col>個人獎$3,000 團體獎$10,000</Col>
                  </Row> */}
              {/* </div> */}
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Main;
