import React from "react";
import "./index.css";
import Card from "../UI/atmcard";

const CryptoBank = () => {
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
      <div className="right">
        <Card />
      </div>
    </div>
  );
};

export default CryptoBank;
