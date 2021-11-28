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

  // useEffect(() => {
  //   const tabs = document.querySelectorAll("my-tab");
  //   window.onscroll = () => {
  //     let current = "";
  //     tabs.forEach((tab) => {
  //       const activeSection = tab.offsetTop;

  //       // eslint-disable-next-line no-restricted-globals
  //       if (pageYOffset > activeSection - 60) {
  //       }
  //     });
  //   };
  // }, []);
  return (
    <div className="side-bar">
      <h3>
        Boom<span>.io</span>
      </h3>

      <ul>
        <li className={activeStyle("#welcome") ? "active-tab" : ""}>
          {/* <li className="my-tab"> */}
          <a href="#welcome">Welcome</a>
        </li>
        <li className={activeStyle("#cryptobank") ? "active-tab" : ""}>
          <a href="#cryptobank">Crypto Bank</a>
        </li>
        <li className={activeStyle("#exchange") ? "active-tab" : ""}>
          <a href="#exchange">Exchange</a>
        </li>
        <li className={activeStyle("#trading") ? "active-tab" : ""}>
          <a href="#exchange">Trading</a>
        </li>
        <li className={activeStyle("#about") ? "active-tab" : ""}>
          <a href="#exchange">About</a>
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
