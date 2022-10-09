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
            <Col>
              <div
                className={`${styles.wrapper} d-flex justify-content-between align-items-center`}
              >
                <img src={hexLogo} alt="hex-logo" width="145" height="35"></img>
                <ul
                  className={`${styles.items} items d-flex justify-content-end align-items-center`}
                >
                  <li className={`${styles.item} ms-4`}>關卡任務</li>
                  <li className={`${styles.item} ms-4`}>競賽說明</li>
                  <li className={`${styles.item} ms-4`}>
                    <button
                      className={`${styles["sign-up-btn"]} pt-2 pb-2 ps-4 pe-4 rounded-pill`}
                    >
                      立即報名
                    </button>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}

export default Header;
