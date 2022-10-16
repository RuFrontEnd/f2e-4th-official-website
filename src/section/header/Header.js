import styles from "./header.module.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hexLogo from "assets/hex-logo.png";
import { ReactComponent as Menu } from "assets/menu.svg";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Row>
            <Col>
              <div
                className={`${styles["header-items"]} d-flex justify-content-between`}
              >
                <div className="d-flex align-items-center h-100">
                  <Menu />
                  <img
                    src={hexLogo}
                    className={styles["hex-logo"]}
                    alt="hex-logo"
                    width="145"
                    height="35"
                  ></img>
                </div>

                <ul className="d-flex">
                  <li
                    className={`${styles.item} d-md-flex d-sm-none align-items-center h-100 me-4`}
                  >
                    關卡任務
                  </li>

                  <li
                    className={`${styles.item} d-md-flex d-sm-none align-items-center h-100 me-4`}
                  >
                    競賽說明
                  </li>

                  <li className={`${styles.item}`}>
                    <button
                      className={`${styles["sign-up-btn"]} rounded-pill h-100`}
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
