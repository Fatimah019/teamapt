import React from "react";
import Routes from "./Routes";
import PhoneImage from "./Components/UI/phoneimage";
import Home from "./Components/Home";
import { useLocation } from "react-router-dom";
import Signup from "./Components/Signup";

function App() {
  const location = useLocation();

  const checkPhone =
    location.hash === "#welcome"
      ? "phone-container-visible"
      : "phone-container-invisible";

  return (
    <>
      <Signup />
      {window.innerWidth < 900 ? (
        <div
          style={{
            background: "#fff",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            textAlign: "center",
            margin: "auto",
            padding: "1rem 2rem",
          }}
        >
          <img
            src="/assets/images/oops.jpg"
            alt="oops"
            style={{ objectFit: "contain", marginBottom: "2rem" }}
          />
          <h3>
            Page Cannot Be Viewed On Screens Less Than 900px width, View On Your
            DeskTop, Laptop or Larger Screens For A Better Experience. Thank
            you.{" "}
          </h3>
        </div>
      ) : (
        <div className="main-home">
          <div className={checkPhone}>
            <PhoneImage />
          </div>
          <Home />

          <Routes />
        </div>
      )}
    </>
  );
}

export default App;
