import React from "react";
import "./index.css";
import { useLocation } from "react-router";

const CryptoBank = () => {
  const location = useLocation();

  const checkLocation =
    location.hash === "#exchange"
      ? "left-inner-from-up"
      : location.hash === "#cryptobank"
      ? "left-inner-from-down"
      : "";
  return (
    <div className="crypto-container">
      <div>
        <div className={checkLocation}>
          <p className="top-p">Cryptobank</p>
          <h1>Card with up to 5% Cashback</h1>
          <p className="inner-text">Start to use your crypto in your daily basis</p>
          <button id="get-started-crypto-btn">Get started</button>
        </div>
      </div>
      <div className="right-animate" style={{ background: "red" }}></div>
    </div>
  );
};

export default CryptoBank;
