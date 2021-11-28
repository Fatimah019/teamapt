import React from "react";
import "./index.css";
import { useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation();

  const activeStyle = (locationHashName) => {
    if (location.hash === locationHashName) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="side-bar">
      <h3>
        Boom<span>.io</span>
      </h3>

      <ul>
        <li className={activeStyle("#welcome") ? "active-tab" : ""}>
          <a href="#welcome">Welcome</a>
        </li>
        <li className={activeStyle("#cryptobank") ? "active-tab" : ""}>
          <a href="#cryptobank">Crypto Bank</a>
        </li>
        <li className={activeStyle("#exchange") ? "active-tab" : ""}>
          <a href="#exchange">Exchange</a>
        </li>
        <li className={activeStyle("#trading") ? "active-tab" : ""}>
          <a href="#trading">Trading</a>
        </li>
        <li className={activeStyle("#about") ? "active-tab" : ""}>
          <a href="#about">About</a>
        </li>
      </ul>
      <div className="socials">
        <a href="/">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="/">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fa fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
