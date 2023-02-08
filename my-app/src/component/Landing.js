import React from "react";
import { getCoin } from "../servises/api";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import Coin from "./Coin";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Container } from "react-bootstrap";
import "./styles/Coin.css";
const Landing = () => {
  const [coins, setCoin] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await getCoin();
      setCoin(data);
    };
    fetchAPI();
  }, []);

  const searchHandler = (event) => {
    setSearch(event.target.value);
  };

  const searchedCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <Container className="d-flex searchcontainer  justify-content-center">
        <div className="search">
          <InputGroup
            className=" p-2 w-25  searchinput"
            value={search}
            onChange={searchHandler}
          >
            <InputGroup.Text id="inputGroup-sizing-sm">search</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </div>
      </Container>
      {coins.length ? (
        <div className="cardcontianer">
          {searchedCoins.map((coin) => (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol.toUpperCase()}
              price={coin.current_price.toLocaleString()}
              marketCap={coin.market_cap.toLocaleString()}
              priceChange={coin.price_change_percentage_24h}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Landing;
