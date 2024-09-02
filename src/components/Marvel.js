import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Marvel.css";

const Marvel = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=c3f88b869095c1d08c53b64d07b424d2&hash=497664ebea48b9b6b48f20fb69f27d7b`
        );
        setItem(res.data.data.results[0]);
      } catch (error) {
        console.error("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {item ? (
        <div className="box-content">
          <div className="right-box">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt={item.name}
              className="marvel-picture"
            />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            {item.description ? <h4>{item.description}</h4> : null}
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default Marvel;
