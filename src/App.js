import styles from "./app.module.css";
import Header from "section/header/Header";
import Main from "section/main/Main";
import Topic from "section/topic/Topic";
import Time from "section/time/Time";

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className={styles.detail}>
        <Topic />
        <Time />
      </div>
    </>
  );
}

export default App;
