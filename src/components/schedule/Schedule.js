import styles from "./schedule.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import blockStudio from "assets/block-studio.svg";
import { ReactComponent as Diamond } from "assets/diamond.svg";
import Button from "react-bootstrap/Button";

function Schedule(props) {
  const _width = props.width ? props.width : 48,
    _height = props.height ? props.height : 48,
    _leftBorderWith = props.leftBorderWith ? props.leftBorderWith : 0,
    _rightBorderWith = props.leftBorderWith ? props.leftBorderWith : 0;

  return (
    <div
      className={`${styles.schedule} ${props.className} d-inline-flex flex-column align-items-center`}
    >
      <p className={`${styles.activity}`}>{props.activity}</p>
      <div className={`${styles.mark} position-relative`}>
        <div
          style={{
            width: _width,
            height: _height,
          }}
          className={`${styles.placeholder}`}
        ></div>

        <Diamond
          width={_width}
          height={_height}
          className={`${styles.diamond} position-absolute ${
            props.red && styles.red
          }`}
        />
        <div
          style={{ width: `${_leftBorderWith}px` }}
          className={`${styles["left-border"]} position-absolute`}
        ></div>

        <div
          style={{ width: `${_rightBorderWith}px` }}
          className={`${styles["right-border"]} position-absolute`}
        ></div>
      </div>
      <p>{props.children}</p>
    </div>
  );
}

export default Schedule;
