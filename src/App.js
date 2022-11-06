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
  const [prevScrollTop, setPrevScrollTop] = React.useState(null),
    [windowScrollY, setWindowScrollY] = React.useState(0),
    [parallax, setParallax] = React.useState(false),
    [vHackerBottom, setVHackerBottom] = React.useState(-530),
    [topPaperTop, setTopPaperTop] = React.useState(0);

  // React.useEffect(() => {
  //   const scroll = () => {
  //     const currentScrollTop = document.documentElement.scrollTop;
  //     const direction = currentScrollTop > prevScrollTop;

  //     console.log("direction", direction);
  //     console.log("vHackerBottom", vHackerBottom);

  //     console.log("currentScrollTop", currentScrollTop);

  //     if (direction && vHackerBottom < -30 && currentScrollTop <= 1000) {
  //       setVHackerBottom((vHackerBottom) => (vHackerBottom += 10));
  //     } else if (
  //       !direction &&
  //       vHackerBottom > -530 &&
  //       currentScrollTop <= 1000
  //     ) {
  //       setVHackerBottom((vHackerBottom) => (vHackerBottom -= 10));
  //     }

  //     setPrevScrollTop(currentScrollTop);
  //     setParallax(currentScrollTop >= 3000);
  //   };

  //   document.addEventListener("scroll", scroll);

  //   return () => {
  //     document.removeEventListener("scroll", scroll);
  //   };
  // }, [prevScrollTop]);

  const content = (
    <div className={styles.picture}>
      <Main vHackerBottom={vHackerBottom} />
      <div className={styles.detail}>
        <Topic />
        <Time />
        <Reward />
        <Share />
        <Footer />
        <Coder />
      </div>
    </div>
  );

  const handle = (e) => {
    const currentTargetScrollY = e.currentTarget.scrollY;
    return _.throttle(() => {
      setTopPaperTop((currentTargetScrollY * -1) / 5);
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
        <div className={`position-sticky top-0 ${styles["sticky-area"]}`}>
          <div className={`${styles["sticky-content"]} overflow-y-hidden`}>
            {content}
          </div>
        </div>
      </div>

      <div className={styles.content}>{content}</div>
    </>
  );
}

export default App;
