import React, { useRef } from "react";
import "./index.css";

import { useLocation } from "react-router";

const CryptoBank = () => {
  const location = useLocation();
  const myLeft = useRef();

  {/*
  
 const checkLocation = location.hash =
 == "#cryptobank" ? "right-animate" : "no-right-animate";*/}
  const checkLocation2 = location.hash === "#cryptobank" ? "left-animate" : "left";
  return (
    <div className="crypto-container">
      <div className={checkLocation2} ref={myLeft}>
        <div className="left-inner">
          <p className="top-p">Cryptobank</p>
          <h1>Card with up to 5% Cashback</h1>
          <p className="inner-text">Start to use your crypto in your daily basis</p>
          <button>Get started</button>
        </div>
      </div>
      {/* <div className={checkLocation}>
        <Card />
      </div> */}
    </div>
  );
};

export default CryptoBank;
