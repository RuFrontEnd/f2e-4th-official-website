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

  const picture = (
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

  React.useEffect(() => {
    const scroll = () => {
      const currentScrollTop = document.documentElement.scrollTop;
      const direction = currentScrollTop > prevScrollTop;

      if (direction && vHackerBottom < -30) {
        setVHackerBottom((vHackerBottom) => (vHackerBottom += 10));
      } else if (!direction && vHackerBottom > -530) {
        setVHackerBottom((vHackerBottom) => (vHackerBottom -= 10));
      }

      setPrevScrollTop(currentScrollTop);
      setParallax(currentScrollTop >= 3000);
    };

    document.addEventListener("scroll", scroll);

    return () => {
      document.removeEventListener("scroll", scroll);
    };
  }, [prevScrollTop]);

  return (
    <>
      <Header />
      <div
        style={{
          // height: "3000px",
          zIndex: "1000",
          position: "fixed",
          // opacity: "0.5",
          display: parallax ? "none" : "block",
        }}
        className="w-100"
      >
        {picture}
      </div>

      <div
        style={{
          height: "3000px",
        }}
        className="w-100"
      >
        123
      </div>

      {picture}
    </>
  );
}

export default App;
