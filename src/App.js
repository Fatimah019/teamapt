import React from "react";
import Routes from "./Components/Routes";
import PhoneImage from "./Components/UI/phoneimage";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const checkPhone = location.hash === "#welcome" ? "phone-container-visible" : "phone-container-invisible";
  return (
    <div className="main-home">
      <div className={checkPhone}>
        <PhoneImage />
      </div>
      <Routes />
    </div>
  );
}

export default App;
