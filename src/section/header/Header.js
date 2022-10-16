import styles from "./header.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hexLogo from "assets/hex-logo.png";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Row>
            <Col xs={2}>
              <div className="d-flex align-items-center h-100">
                <img src={hexLogo} alt="hex-logo" width="145" height="35"></img>
              </div>
            </Col>
            <Col xs={6} />
            <Col xs={1}>
              <div className={`${styles.item} d-flex align-items-center h-100`}>
                關卡任務
              </div>
            </Col>
            <Col xs={1}>
              <div className={`${styles.item} d-flex align-items-center h-100`}>
                競賽說明
              </div>
            </Col>
            <Col xs={2}>
              <div className={`${styles.item}`}>
                <button
                  className={`${styles["sign-up-btn"]} rounded-pill h-100 w-100`}
                >
                  立即報名
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header;
