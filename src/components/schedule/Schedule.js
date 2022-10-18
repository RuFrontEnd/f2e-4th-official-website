import styles from "./schedule.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import blockStudio from "assets/block-studio.svg";
import { ReactComponent as Diamond } from "assets/diamond.svg";
import Button from "react-bootstrap/Button";

function Schedule(props) {
  const length = props.length ? props.length : 48,
    _leftBorderWith = props.leftBorderWith ? props.leftBorderWith : 0,
    _rightBorderWith = props.rightBorderWith ? props.rightBorderWith : 0;

  return (
    <div
      style={props.style}
      className={`${styles.schedule} ${props.className} d-inline-flex flex-column align-items-center`}
    >
      <p className={`${styles.activity}`}>{props.activity}</p>
      <div className={`${styles.mark} position-relative w-100 `}>
        <div
          style={{
            width: `${length}px`,
            height: `${length}px`,
          }}
          className={`${styles.placeholder}`}
        ></div>

        <Diamond
          width={length}
          height={length}
          className={`${styles.diamond} position-absolute ${
            props.red && styles.red
          }`}
        />
        <div
          style={{ width: `calc(${_leftBorderWith}% - 50%)` }}
          className={`${styles["left-border"]} position-absolute`}
        ></div>

        <div
          style={{ width: `calc(${_rightBorderWith}% - 50%)` }}
          className={`${styles["right-border"]} position-absolute`}
        ></div>
      </div>
      <p>{props.children}</p>
    </div>
  );
}

export default Schedule;
