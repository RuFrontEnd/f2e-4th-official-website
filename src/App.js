import React from "react";
import _ from "lodash";
import styles from "./app.module.css";
import Header from "section/header/Header";
import Main from "section/main/Main";
import Topic from "section/topic/Topic";
import Time from "section/time/Time";
import Reward from "section/reward/Reward";
import Share from "section/share/Share";
import Footer from "section/footer/Footer";
import Coder from "section/coder/Coder";
import paperTop from "assets/paper-top.png";
import paperLeft from "assets/paper-left.png";
import paperRight from "assets/paper-right.png";

function App() {
  const [windowScrollY, setWindowScrollY] = React.useState(0),
    [vHackerBottom, setVHackerBottom] = React.useState(window.scrollY),
    [topPaperTop, setTopPaperTop] = React.useState(0),
    [leftPaperBottom, setLeftPaperBottom] = React.useState(0),
    [rightPaperBottom, setRightPaperBottom] = React.useState(0);

  const handle = (e) => {
    return _.throttle(() => {
      const currentTargetScrollY = e.currentTarget.scrollY,
        maxVhackerBottom = 500,
        vHackerStartMovingScrollY = 800,
        vHackerSpeed = 1 / 2;

      console.log("currentTargetScrollY", currentTargetScrollY);

      setTopPaperTop((currentTargetScrollY * -1) / 37.5);
      setLeftPaperBottom((currentTargetScrollY * -1) / 42.5);
      setRightPaperBottom((currentTargetScrollY * -1) / 32.5);
      if (currentTargetScrollY >= vHackerStartMovingScrollY) {
        setVHackerBottom(
          (currentTargetScrollY - vHackerStartMovingScrollY) * vHackerSpeed
        );
      }
      if (
        currentTargetScrollY >=
        maxVhackerBottom / vHackerSpeed + vHackerStartMovingScrollY
      )
        return setVHackerBottom(maxVhackerBottom);
    }, 50)();
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handle);
    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, [windowScrollY]);

  return (
    <>
      <Header />
      <div
        className="d-flex justify-content-center position-fixed w-100 h-100"
        style={{ zIndex: 100000 }}
      >
        <img
          src={paperTop}
          className={`${styles["paper"]}`}
          style={{
            top: `${topPaperTop}%`,
          }}
        ></img>
        <img
          src={paperLeft}
          className={`${styles["paper"]}`}
          style={{
            width: "100%",
            height: "100%",
            position: "fixed",
            left: "0",
            bottom: `${leftPaperBottom}%`,
            zIndex: "30000",
          }}
        ></img>
        <img
          src={paperRight}
          className={`${styles["paper"]}`}
          style={{
            width: "100vw",
            height: "100vh",
            position: "fixed",
            right: "0%",
            bottom: `${rightPaperBottom}%`,
            zIndex: "10000",
          }}
        ></img>
      </div>

      <div className={`${styles["scroll-area"]}`}>
        <div className={`position-sticky top-0 ${styles["sticky-area"]}`}>
          <div className={`overflow-y-hidden`}>
            <Main vHackerBottom={vHackerBottom} />
          </div>
        </div>
      </div>

      <div className={styles.detail}>
        <Topic />
        <Time />
        <Reward />
        <Share />
        <Footer />
        <Coder />
      </div>
    </>
  );
}

export default App;
