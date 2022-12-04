import React from "react";
import styles from "./main.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import vHacker from "assets/v-hacker.svg";
import bounty from "assets/bounty.svg";
import mouseMiddleBtn from "assets/mouse-middle-button.svg";
import mouseBody from "assets/mouse-body.svg";
import NavHeight from "components/navHeight/NavHeight";

const Main = React.forwardRef((props, ref) => {
  return (
    <>
      <section className={`${styles.main}`} ref={ref}>
        <NavHeight />
        <Container>
          <Row>
            <Col>
              <div className={`${styles["content-container"]}`}>
                <div className={"position-relative"}>
                  <div className={`${styles.content}`}>
                    <img
                      style={{ bottom: `${props.vHackerBottom}px` }}
                      src={vHacker}
                      alt={"v-hacker"}
                      className={`${styles["v-hacker"]} position-absolute`}
                      width={630}
                      height={530}
                    ></img>
                    <div className={`${styles.copywritings} h-100 d-grid`}>
                      <div className="d-flex flex-column justify-content-lg-between justify-content-md-start">
                        <h1
                          className={`${styles.F2E} d-flex align-items-center`}
                        >
                          THE F2E<div>4th</div>
                        </h1>
                        <h2 className={`${styles.copywriting}`}>
                          前端工程師和介面
                          <br className="d-md-none d-lg-block" />
                          設計師, 攜手合作
                          <br className="d-md-none d-lg-block" />
                          拿獎金
                        </h2>
                        <h3
                          className={`${styles["vice-copywriting"]} d-md-none  d-lg-block`}
                        >
                          羨慕別人的酷酷網頁動
                          <br />
                          畫？ 滿足不了同事的許
                          <br />
                          願？ 動畫技能樹太雜無從
                          <br />
                          下手？
                        </h3>
                      </div>
                      <div
                        className={`d-flex flex-column justify-content-center d-md-none d-md-none`}
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
                      <div>
                        <h5 className={`text-center`}>
                          個人獎<span>$3,000</span>&nbsp;&nbsp;團體獎
                          <span>$10,000</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                  <img
                    src={bounty}
                    alt={"bounty"}
                    className={`${styles.bounty} position-absolute`}
                    width={340}
                    height={210}
                  ></img>
                  <div className={`${styles["mouse"]} position-absolute`}>
                    <div className={`d-flex flex-column align-items-center`}>
                      <img
                        src={mouseMiddleBtn}
                        className={`${styles["mouse-middle-btn"]}`}
                        width={14}
                        height={14}
                      ></img>
                      <img src={mouseBody} width={30} height={44}></img>
                      <p className={`${styles["scroll-down"]}`}>向下滾動</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* </div>
      </div> */}
    </>
  );
});

export default Main;
