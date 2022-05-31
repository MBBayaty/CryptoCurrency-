import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

//api
import { getData } from "../services/api";

//components
import Coin from "./Coin";
import Loader from "./Loader";
import Search from "./Search";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getData());
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchCoin = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Form
              className="mb-3 mt-3 w-50 mx-auto d-block"
            >
              <Form.Control
                value={search}
                onChange={searchHandler}
                className="text-center"
                type="text"
                placeholder="Search"
              />
            </Form>
          </Col>
        </Row>
      </Container>

      <div>
        {coins.length ? (
          searchCoin.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              image={coin.image}
              marketCap={coin.market_cap}
              change={coin.market_cap_change_24h}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default Landing;
