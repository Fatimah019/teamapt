import React from "react";
import "./index.css";
import PhoneImage from "../UI/phoneimage";

const Exchange = () => {
  return (
    <div className="exchange-container">
      <div className="left">
        <PhoneImage />
      </div>
      <div className="right">
        <div className="right-inner">
          <p className="top-p">Exchange</p>
          <h1>Buy and sell more... </h1>
          <p className="inner-text">We have a big crypto portfolio and we add one new crypto every 15 days.</p>
          <button>Kow more</button>
        </div>
      </div>
    </div>
  );
};

export default Exchange;
