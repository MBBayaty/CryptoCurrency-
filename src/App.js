import React from "react";
import Landing from "./components/Landing";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Landing />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
