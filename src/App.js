import React from "react";
import Routes from "./Components/Routes";
import PhoneImage from "./Components/UI/phoneimage";
import Home from "./Components/Home";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  
  
  

  const checkPhone = location.hash === "#welcome" ? "phone-container-visible" : "phone-container-invisible";
  return (
    <>
    {
       window.innerWidth<900?
      <div
     style={{display:"flex", alignItems:"center", justifyContent: "center", height: "100vh", width: "90%", margin:"auto"}}>
      <h2>Page Cannot Be Viewed On Screens Less Than 900px</h2>
      </div>: 

      
   
    <div className="main-home">
      
      <div className={checkPhone}>
        <PhoneImage />
      </div>
      <Home />
      <Routes />
    </div>}
    </>
  );
}

export default App;
