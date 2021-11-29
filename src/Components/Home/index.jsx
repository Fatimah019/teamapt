import React, { useEffect, useRef } from "react";
import "./index.css";
import SideBar from "../SideBar";
import CryptoBank from "../CryptoBank";
import Exchange from "../Exchange";
import Header from "../Header";
import Welcome from "../Welcome";
import AOS from "aos";
import "aos/dist/aos.css";
import { useHistory } from "react-router";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const welcomeRef = useRef(null);
  const cryptoBankRef = useRef(null);
  const exchangeRef = useRef(null);

  let history = useHistory();

  const handleScroll = (evt) => {
    const scroll_y_value = evt.target.scrollTop;
    if (scroll_y_value > cryptoBankRef.current.offsetTop + 150) {
      history.push("/#exchange");
    } else if (scroll_y_value > welcomeRef.current.offsetTop + 200) {
      history.push("/#cryptobank");
    } else {
      history.push("/#welcome");
    }
  };

  return (
    <div className="home" onScroll={handleScroll}>
      <SideBar />
      <div className="main">
        <Header />

        <div className="main-inner">
          <div id="welcome" ref={welcomeRef}>
            <Welcome />
          </div>
          <div id="cryptobank" ref={cryptoBankRef}>
            <CryptoBank />
          </div>
          <div id="exchange" ref={exchangeRef}>
            <Exchange />
          </div>
        </div>
      </div>
      <button
        className="support_btn"
        style={{
          position: "absolute",
          bottom: "30px",
          right: "30px",
          padding: "0.5rem 1.5rem",
          borderRadius: "20px",
          border: "none",
          background: "rgb(155, 13, 136)",
          color: "#fff",
        }}
      >
        Support
      </button>
    </div>
  );
};

export default Home;
