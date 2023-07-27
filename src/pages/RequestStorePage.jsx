import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import AddRequest from "../components/AddRequest";
import requestCard from "../components/RequestCard";
const API_URL = "http://localhost:5005";

function RequestStorePage(props) {
  const [requests, setRequests] = useState([]);
  const [storeData, setStoreData] = useState(null); // To store the fetched store data
  const [shippingAddress, setShippingAddress] = useState(""); // To store the shipping address

  console.log("request", requests);
  const { storeId } = useParams();

  const getAllRequests = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/request`, {
        headers: { Authorization: `Bearer ${storedToken}` }
      })
      .then((response) => setRequests(response.data))
      .catch((error) => console.log(error));
  };

  const getStoreData = () => {
    // You need to implement the API endpoint to fetch store data based on storeId
    axios
      .get(`${API_URL}/api/store/${storeId}`)
      .then((response) => setStoreData(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllRequests();
    getStoreData(); // Fetch the store data when the component mounts
  }, []);

  useEffect(() => {
    // When storeData changes, construct the shipping address
    if (storeData) {
      const { firstName, lastName, streetName, houseNumber, postCode, city} = storeData;
      const shippingAddress = `${firstName}, ${lastName}, ${streetName} ${houseNumber}, ${postCode} ${city}`;
      setShippingAddress(shippingAddress);
    }
  }, [storeData]);

  return (
    <div className="RequestStorePage">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1>hallo request</h1>
            <AddRequest refreshRequests={getAllRequests} />
            {/* Rest of your JSX */}
            {/* You can display the shippingAddress or pass it to another component */}
            {/* For example, you can pass it to the DeliveryPage component */}
            {/* <DeliveryPage shippingAddress={shippingAddress} /> */}
            <Link to={`/delivery/${encodeURIComponent(shippingAddress)}`} className="btn btn-primary me-2">
              Delivery Page
            </Link>
            <Link to={"/"} className="btn btn-secondary me-2">
              Home Page
            </Link>
            <Link to="/stores" className="btn btn-info">
              Back to stores
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestStorePage;
