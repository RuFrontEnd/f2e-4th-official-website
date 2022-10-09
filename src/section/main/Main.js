import styles from "./main.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import VHacker from "assets/v-hacker.svg";

function Main() {
  return (
    <>
      <section className={`${styles.main} d-flex align-items-center`}>
        <Container fluid className="h-100">
          <Row className="h-100">
            <Col className="h-100">
              <div className={`${styles.wrapper} h-100 w-100`}>
                <div className={`${styles.content} w-100 h-100`}>
                  {/* <div>123</div>
                  <div>123</div>
                  <div>123</div> */}
                  <img src={VHacker} className={`${styles["v-hacker"]}`}></img>
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
