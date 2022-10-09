import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import hexLogo from "assets/hex-logo.png";

function App() {
  return (
    <header className="header main-color">
      <Container>
        <Row>
          <Col>
            <img src={hexLogo} alt="hexLogo"></img>
          </Col>
          <Col>123</Col>
          <Col>123</Col>
        </Row>
      </Container>
    </header>
  );
}

export default App;
