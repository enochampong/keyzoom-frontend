import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

const API_KEY = "AIzaSyAJ5AWTXIMEnCAXuBOnWn5Pz17qbHtGZg4"; 
const API_URL = "http://localhost:5005";

function DeliveryPage(props) {
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [stores, setStores] = useState([]);
  const { user } = useContext(AuthContext);
  const userId = user._id;
  const [userStores, setUserStores] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 52.533080, lng: 13.453210 });
  const { shippingAddress } = useParams();

  const updateMapCenter = (latitude, longitude) => {
    setMapCenter({ lat: latitude, lng: longitude });
  };

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

  const handleAddressChange = (e) => {
    setDeliveryAddress(e.target.value);
  };

  const handleDeliverySubmit = (event) => {
    event.preventDefault();
    console.log("req triggered")
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: deliveryAddress,
          key: "AIzaSyAJ5AWTXIMEnCAXuBOnWn5Pz17qbHtGZg4", 
        },
      })
      .then((response) => {
        const { results } = response.data;
        console.log(response)
        if (results.length > 0) {
          const { lat, lng } = results[0].geometry.location;
          console.log("Coordinates:", lat, lng);
          updateMapCenter(lat, lng);
        } else {
          console.log("Address not found.");
        }
      })
      .catch((error) => {
        console.log("Error while geocoding:", error);
      });
  };

  return (
    <div className="DeliveryPage">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1>Delivery Page</h1>
            <form onSubmit={handleDeliverySubmit}>
              <input
                type="text"
                value={deliveryAddress}
                onChange={handleAddressChange}
                placeholder="Enter delivery address"
              />
              <button type="submit" className="btn btn-primary me-2">
                Submit
              </button>
            </form>

            <p>Ready to send shipping address:</p>
            <p>{deliveryAddress}</p>

           
            <div style={{ height: "400px", width: "100%" }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={{ lat: 52.533080, lng: 13.453210 }} 
                defaultZoom={12} 
              >
                <Marker lat={mapCenter.lat} lng={mapCenter.lng} text="I'm here" />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
