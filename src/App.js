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

function App() {
  const [windowScrollY, setWindowScrollY] = React.useState(0),
    [vHackerBottom, setVHackerBottom] = React.useState(-530),
    [topPaperTop, setTopPaperTop] = React.useState(0);

  const handle = (e) => {
    const currentTargetScrollY = e.currentTarget.scrollY;
    return _.throttle(() => {
      setTopPaperTop((currentTargetScrollY * -1) / 2);
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
      <img
        src={paperTop}
        alt="paper-top"
        style={{ top: `${topPaperTop}px` }}
        className={` ${styles["paper-top"]} position-fixed w-100`}
      ></img>

      <div className={`${styles["scroll-area"]}`}>
        <div className={` position-sticky top-0 ${styles["sticky-area"]}`}>
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
