import React, {useState, useEffect} from "react";
import Routes from "./Components/Routes";
import PhoneImage from "./Components/UI/phoneimage";
import Home from "./Components/Home";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState("")
  const [styleWeb, setStyleWeb] = useState({ 
    display: "block"
  })
  
  useEffect (()=>{
      if(window.innerWidth < 900){
        setWindowWidth(<div style={{display:"flex", alignItems:"center", justifyContent: "center", height: "100vh"}}><h2>Page Cannot Be Viewed On Screens Less Than 900px</h2></div>)
        setStyleWeb({display: "none"})
      }
      else{
        setWindowWidth("")

        setStyleWeb({display: "block"})
      }
  },[windowWidth])

  const checkPhone = location.hash === "#welcome" ? "phone-container-visible" : "phone-container-invisible";
  return (
    <>
    {windowWidth}
    <div className="main-home" style={{styleWeb}}>
      
      <div className={checkPhone}>
        <PhoneImage />
      </div>
      <Home />
      <Routes />
    </div>
    </>
  );
}

export default App;
