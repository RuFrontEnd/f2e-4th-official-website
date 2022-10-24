import React from "react";
import styles from "./app.module.css";
import Header from "section/header/Header";
import Main from "section/main/Main";
import Topic from "section/topic/Topic";
import Time from "section/time/Time";
import Reward from "section/reward/Reward";
import Share from "section/share/Share";
import Footer from "section/footer/Footer";
import Coder from "section/coder/Coder";

function App() {
  const [prevScrollTop, setPrevScrollTop] = React.useState(null);
  const [parallax, setParallax] = React.useState(false);
  const [vHackerBottom, setVHackerBottom] = React.useState(-530);

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

  return (
    <>
      <Header />
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
    </>
  );
}

export default App;
