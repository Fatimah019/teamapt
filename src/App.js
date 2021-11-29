import React, {useState, useEffect} from "react";
import Routes from "./Components/Routes";
import PhoneImage from "./Components/UI/phoneimage";
import Home from "./Components/Home";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState("")
  
  useEffect (()=>{
      if(window.innerWidth < 900){
        setWindowWidth(<h1>Page Cannot Be Viewed On Screens Less Than 90px</h1>)
      }
  },[windowWidth])

  const checkPhone = location.hash === "#welcome" ? "phone-container-visible" : "phone-container-invisible";
  return (
    <div className="main-home">
      {windowWidth}
      <div className={checkPhone}>
        <PhoneImage />
      </div>
      <Home />
      <Routes />
    </div>
  );
}

export default App;
