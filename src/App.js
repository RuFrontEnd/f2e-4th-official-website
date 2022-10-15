import styles from "./app.module.css";
import Header from "section/header/Header";
import Main from "section/main/Main";
import Topic from "section/topic/Topic";

function App() {
  return (
    <>
      <Header />
      <Main />
      <div className={styles.detail}>
        <Topic />
      </div>
    </>
  );
}

export default App;
