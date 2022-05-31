import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

const Search = () => {
  const [search, setSearch] = useState("");
  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Form
            className="mb-3 mt-3 w-50 mx-auto d-block"
            onClick={searchHandler}
          >
            <Form.Control
              className="text-center"
              type="text"
              placeholder="Search"
            />
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
