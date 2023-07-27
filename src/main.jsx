import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProviderWrapper } from "./context/auth.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
// main.js
// const myMarker = new google.maps.Marker({
//   position: {
//   	lat: 41.3977381,
//   	lng: 2.190471916
//   },
//   map: map,
//   title: "I'm here"
// });

// function startMap() {
//     const ironhackBCN = {
//         lat: 41.3977381,
//         lng: 2.190471916};
//     const map = new google.maps.Map(
//       document.getElementById('map'),
//       {
//         zoom: 5,
//         center: ironhackBCN
//       }
//     );
//   }
  
//   startMap();


root.render(

  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <App />
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
 
);
