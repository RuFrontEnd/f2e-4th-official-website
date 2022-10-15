import styles from "./time.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hexScholl from "assets/hex-school.svg";
import bounty from "assets/bounty.svg";
import mouseMiddleBtn from "assets/mouse-middle-button.svg";
import mouseBody from "assets/mouse-body.svg";
import Title from "components/title/Title";
import Schedule from "components/schedule/Schedule";

function Topic() {
  return (
    <>
      <section className={`${styles.topic}`}>
        <Title title="賽程時間" />
        <Schedule activity={"開始報名"} red>
          10/13(四) 早上 11:00
          <br /> 至 11/6(日) 晚上 23:59
        </Schedule>
      </section>
    </>
  );
}

export default Topic;
