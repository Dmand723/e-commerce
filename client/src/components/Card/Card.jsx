import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.title}`}>
      <div className="card">
        <div className="image">
          {item?.isNew && <span>New Season</span>}
          <img
            className="mainImg"
            src={process.env.REACT_APP_UPLOAD_URL + item?.img?.url}
            alt="mainImg"
          />
          {item.img2 ? (
            <img
              className="seccondImg"
              src={process.env.REACT_APP_UPLOAD_URL + item?.img2?.url}
              alt="seccondImg"
            />
          ) : (
            ""
          )}
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item.price + 10}</h3>
          <h3>${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
