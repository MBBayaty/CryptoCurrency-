import React from "react";
import { Button, Col, Container, Row, Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Button className="mx-auto d-block" variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>{" "}
            <Button className="mx-auto d-block" variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Loader;
