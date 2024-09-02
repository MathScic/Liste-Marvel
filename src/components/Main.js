import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Main.css";

export const Main = () => {
  const [url, setUrl] = useState(
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=c3f88b869095c1d08c53b64d07b424d2&hash=497664ebea48b9b6b48f20fb69f27d7b"
  );
  const [item, setItem] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setItem(res.data.data.results);
    };
    fetch();
  }, [url]);

  const searchMarvel = () => {
    setUrl(
      `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=c3f88b869095c1d08c53b64d07b424d2&hash=497664ebea48b9b6b48f20fb69f27d7b`
    );
  };

  return (
    <div className="container">
      <div className="header">
        <div className="bg">
          <img src="./Images/banner.png" alt="" />
        </div>
        <div className="search-bar">
          <img src="./Images/MARVEL.png" alt="logo" />
          <input
            type="search"
            placeholder="Recherchez"
            className="search"
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                searchMarvel();
              }
            }}
          />
        </div>
      </div>
      <div className="content">
        {!item ? <p>Not Found</p> : <Card data={item} />}
      </div>
    </div>
  );
};

export default Main;
