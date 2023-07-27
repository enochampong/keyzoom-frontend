// import { useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/auth.context";



// function AddMap() {
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
  
  
 


//     return(
// <div>

// ironhackBCN  
// </div>
//     );
// }
// export default AddMap;

import React, { useState, useContext, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";
import GoogleMapReact from "google-map-react";

const API_KEY = "AIzaSyAJ5AWTXIMEnCAXuBOnWn5Pz17qbHtGZg4"; // Replace with your Google Maps API key
const API_URL = "http://localhost:5005";

function DeliveryPage(props) {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [stores, setStores] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user._id;
  const [userStores, setUserStores] = useState([]);

  const getAllStores = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/${userId}/stores`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => setStores(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllStores();
  }, []);

  useEffect(() => {
    getUserStores();
  }, [stores]);

  const getUserStores = () => {
    let oneStore = stores.filter((store) => store.user === userId);
    setUserStores(oneStore[0]);
  };

  useEffect(() => {
    if (userStores) {
      const { firstName, lastName, streetName, houseNumber, postCode, city } = userStores;
      const shippingAddress = `${firstName}, ${lastName}, ${streetName} ${houseNumber}, ${postCode} ${city}`;
      setDeliveryAddress(shippingAddress);
    }
  }, [userStores]);

  // Function to handle address input changes
  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  // Function to handle form submission for delivery
  const handleDeliverySubmit = (event) => {
    event.preventDefault();
    // You can use the deliveryAddress state to send the address to the Google Maps API for navigation
    // Implement your logic for navigation or delivery here
  };

  return (
    <div className="DeliveryPage">
      <h1>Delivery Page</h1>
      <form onSubmit={handleDeliverySubmit}>
        <input
          type="text"
          value={deliveryAddress}
          onChange={handleAddressChange}
          placeholder="Enter delivery address"
        />
        <button type="submit">Submit</button>
      </form>

      <p>Ready to send shipping address:</p>
      <p>{deliveryAddress}</p>

      {/* Google Maps Component */}
      <div style={{ height: "400px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }}
          defaultCenter={{ lat: 52.533080, lng: 13.453210 }} // Default center coordinates IRonHack
          defaultZoom={12} // Default zoom level
        >
          {/* Add a marker at the specified location */}
          <Marker lat={52.533080} lng={13.453210} text="I'm here" />
        </GoogleMapReact>
      </div>
    </div>
  );
}

// Custom Marker component
const Marker = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "red",
      padding: "5px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "50%",
    }}
  >
    {text}
  </div>
);

export default DeliveryPage;
