import React from "react";
import "./index.css";
import PhoneImage from "../UI/phoneimage";
import { useLocation } from "react-router";

const Exchange = () => {
  const location = useLocation();

  const checkLocation = location.hash === "#exchange" ? "exchange-container" : "no-exchange-animate";

  return (
    <div className={checkLocation}>
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
