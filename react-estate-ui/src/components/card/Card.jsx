import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Card.scss";
export default function Card({ item }) {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div onClick={navigate(`/${item.id}`)} className="imageContainer">
        <img src={item.img} alt="" />
      </div>
      <div className="textContainer">
        <div className="titleContainer">
          <h2 className="title">
            <Link to={`/${item.id}`}>{item.title}</Link>
          </h2>
          <div className="icons">
            <div className=" icon">
              <img src="/save.png" alt="" />
            </div>
          </div>
        </div>

        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} Bedroom{item.bedroom>1 ? 's':''}</span>
            </div>
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bathroom} Bathroom{item.bathroom>1 ? 's':''}</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
