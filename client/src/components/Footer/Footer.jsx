import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categoies</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet libero
            dolorum expedita laudantium. Optio commodi sequi dolorum rem,
            dolorem saepe. Odio quasi maiores, earum laboriosam cupiditate
            similique sequi commodi. Debitis.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
            quisquam magni, perferendis similique rerum beatae explicabo aliquid
            est? Nisi distinctio earum consequuntur voluptates rerum aliquid
            perferendis ea veritatis laboriosam! Ducimus.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Lamastore</span>
          <span className="copyright">
            &copy; Copyright 2025. All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="PaymentTypes" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
