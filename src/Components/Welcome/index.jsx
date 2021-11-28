import React, { useEffect } from "react";
import "./index.css";
import Card from "../UI/atmcard";
import AOS from "aos";
import "aos/dist/aos.css";

const Welcome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="welcome-container">
      <p style={{ color: "gray" }}>Your CryptoBank for</p>
      <p className="text-animate">Buy + 70 crypto</p>
      <button>
        <i className="fa fa-angle-right"></i> Watch video
      </button>

      <div style={{ marginTop: "2rem" }}>
        <Card card_first card_second />
      </div>
    </div>
  );
};

export default Welcome;
