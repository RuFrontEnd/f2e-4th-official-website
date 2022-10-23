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
            >
              10/13(四) 早上 11:00
              <br /> 至 11/6(日) 晚上 23:59
            </Schedule>
            <Schedule
              activity={"開賽"}
              className={styles.schedule}
              rightBorderWith={100}
              leftBorderWith={100}
            >
              UI組、團體組開賽 10/31
              <br /> 前端組開賽 11 /7
            </Schedule>
            <Schedule
              activity={"登陸作品"}
              className={styles.schedule}
              rightBorderWith={100}
              leftBorderWith={100}
            >
              10/31(一) 中午 12:00
              <br /> 至11/28(一) 中午 12:00
            </Schedule>
            <Schedule
              activity={"線上直播"}
              className={styles.schedule}
              leftBorderWith={100}
            >
              11/3 至 11/24(每週四)
            </Schedule>
            <Schedule
              activity={"初選"}
              className={styles.schedule}
              rightBorderWith={100}
            >
              12/05(五)
            </Schedule>
            <Schedule
              activity={"決選"}
              className={styles.schedule}
              leftBorderWith={100}
            >
              12/05(五)
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
