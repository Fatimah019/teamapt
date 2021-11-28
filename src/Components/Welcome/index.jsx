import React, { useEffect } from "react";
import "./index.css";
import Card from "../UI/atmcard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router";

const Welcome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const location = useLocation();

  const checkLocation =
    location.hash === "#cryptobank"
      ? "animate-card-to-crypto"
      : location.hash === "#exchange"
      ? "animate-card-to-welcome"
      : location.hash === "#welcome"
      ? "animate-card-to-welcome-n"
      : "";
  return (
    <div className="welcome-container" id="home-con">
      <p style={{ color: "gray" }}>Your CryptoBank for</p>
      <p className="text-animate">Buy + 70 crypto</p>
      <button>
        <i className="fa fa-angle-right"></i> Watch video
      </button>

      <div style={{ marginTop: "2rem" }} className={checkLocation}>
        <Card card_first card_second />
      </div>
    </div>
  );
};

export default Welcome;
