import React from "react";
import "./index.css";
import Card from "../UI/atmcard";
import { useLocation } from "react-router";

const CryptoBank = () => {
  const location = useLocation();
  console.log(location.hash);

  if (location.hash === "#cryptobank") {
    console.log("yay");
  }

  const checkLocation = location.hash === "#cryptobank" ? "right-animate" : "no-right-animate";
  return (
    <div className="crypto-container">
      <div className="left">
        <div className="left-inner">
          <p className="top-p">Cryptobank</p>
          <h1>Card with up to 5% Cashback</h1>
          <p className="inner-text">Start to use your crypto in your daily basis</p>
          <button>Get started</button>
        </div>
      </div>
      <div className={checkLocation}>
        <Card />
      </div>
    </div>
  );
};

export default CryptoBank;
