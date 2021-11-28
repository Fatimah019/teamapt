import React, { useEffect } from "react";
import "./index.css";
import SideBar from "../SideBar";
import CryptoBank from "../CryptoBank";
import Exchange from "../Exchange";
import Header from "../Header";
import Welcome from "../Welcome";
import PhoneImage from "../UI/phoneimage";
import AOS from "aos";
import "aos/dist/aos.css";
// import { useLocation } from "react-router";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // const location = useLocation();
  // if(location!=="#welcome"){

  // }

  // const [offset, setOffset] = useState(0);
  // useEffect(() => {
  //   // window.onscroll = () => {
  //   //   setOffset(window.pageYOffset);
  //   // };
  // }, []);

  // const cryptoRef = useRef(null);

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // const handleScroll = useCallback(() => {
  //   console.log(cryptoRef);
  // });

  // useEffect(() => {
  //   const d = cryptoRef.current;
  //   console.log(d);
  //   // d.addEventListener("scroll", handleScroll);
  // }, [handleScroll]);

  // console.log(offset);
  return (
    <div className="home">
      <SideBar />
      <div className="main">
        <Header />
        <div id="welcome" data-aos="fade-top-right">
          <Welcome />
        </div>
        <div id="cryptobank">
          <CryptoBank />
        </div>
        <div id="exchange">
          <Exchange />
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
