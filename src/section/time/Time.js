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

// overflow-x-scroll

function Time() {
  return (
    <>
      <section className={`${styles.topic}`}>
        <Title title="賽程時間" />
        <Container>
          <div className={`${styles.schedules} d-flex justify-content-center`}>
            <Schedule
              activity={"開始報名"}
              red
              className={styles.schedule}
              rightBorderWith={100}
              leftBorderWith={100}
            >
              10/13(四) 早上 11:00
              <br /> 至 11/6(日) 晚上 23:59
            </Schedule>
            <Schedule activity={"開始報名"} className={styles.schedule}>
              10/13(四) 早上 11:00
              <br /> 至 11/6(日) 晚上 23:59
            </Schedule>
            <Schedule activity={"開始報名"} className={styles.schedule}>
              10/13(四) 早上 11:00
              <br /> 至 11/6(日) 晚上 23:59
            </Schedule>
            <Schedule activity={"開始報名"} className={styles.schedule}>
              10/13(四) 早上 11:00
              <br /> 至 11/6(日) 晚上 23:59
            </Schedule>
            <Schedule activity={"開始報名"} className={styles.schedule}>
              10/13(四) 早上 11:00
              <br /> 至 11/6(日) 晚上 23:59
            </Schedule>
            <Schedule activity={"開始報名"} className={styles.schedule}>
              10/13(四) 早上 11:00
              <br /> 至 11/6(日) 晚上 23:59
            </Schedule>
          </div>
          初選：將由六角學院前端、UI 評審進行第一波篩選，並於
          12/5（五）公布初選佳作名單 。
          <br />
          決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於
          12/23（五）公布企業得獎名單。
        </Container>
      </section>
    </>
  );
}

export default Time;
