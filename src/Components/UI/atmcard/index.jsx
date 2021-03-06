import React from "react";
import "./index.css";

const Card = ({ card_first, card_second, currency_type, card_icon, coin_price, coin_percentage }) => {
  return (
    <div className="card-container">
      <div className={card_first ? "card-container-bottom-first" : "card-container-bottom-second"}>
        <div className="card-header">
          <i className="">
            <img src="/assets/icons/card-logo.png" alt="card-logo" className="card-logo" />
          </i>
          <p>.... 123456</p>
        </div>
        <div className="card-footer">
          <i className="bar-w">$24 388.45</i>
          <i className="">05/12</i>
        </div>
      </div>
      <div className={card_second ? "card-container-top-first" : "card-container-top-second"}>
        <div className="card-header">
          <i className="">
            <img src="/assets/icons/card-logo.png" alt="card-logo" className="card-logo" />
          </i>
          <p>.... 123456</p>
        </div>
        <div className="card-footer">
          <i className="bar-w">$24 388.45</i>
          <i className="">05/12</i>
        </div>
      </div>
    </div>
  );
};

export default Card;
