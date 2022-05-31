import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//components

const Coin = ({ name, symbol, image, price, marketCap, change }) => {
  return (
    <>
      <Container>
        <Row style={{ height: "auto" }} className="mb-1 mx-auto text-left bg-light text-dark">
          <Col>
            <img
              className="w-25"
              src={image}
              intrinsicsize="250 x 200"
              alt="coin"
            />
          </Col>
          <Col>{name}</Col>
          <Col>{symbol.toUpperCase()}</Col>
          <Col>{price.toLocaleString()}</Col>
          <Col>{marketCap.toLocaleString()}</Col>
          <Col>{change}</Col>
        </Row>
      </Container>
    </>
  );
};

export default Coin;
