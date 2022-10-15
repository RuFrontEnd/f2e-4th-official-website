import styles from "./title.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import blockStudio from "assets/block-studio.svg";
import parallex from "assets/parallex.svg";
import Button from "react-bootstrap/Button";

function Title(props) {
  return (
    <div className={`${styles["title"]} ${props.className}`}>
      <Container fluid>
        <div className="d-flex justify-content-center">{props.title}</div>
      </Container>
    </div>
  );
}

export default Title;
