import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import StoreCard from "../components/StoreCard";
import AddSepa from "../components/AddSepa";
import StoreListPage from "./StoreListPage";

const API_URL = "http://localhost:5005";

function StoreDetailsPage(props) {
  const [store, setStore] = useState([]);
  const { storeid } = useParams();

  const getStore = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/stores/${storeid}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneStore = response.data;
        setStore(oneStore);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getStore();
  }, []);

  return (
    <div className="storeDetailsPage">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="mb-4">Store Details</h2>
            {/* Render store details using StoreCard component */}
            <StoreCard {...store} />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="mb-4">Add Sepa</h2>
            {/* Render AddSepa component to add Sepa details */}
            <AddSepa />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            {/* Navigation buttons */}
            <Link to="/stores" className="btn btn-primary me-2">
              Back to stores
            </Link>
            <Link to={`/stores/edit/${storeid}`} className="btn btn-secondary me-2">
              Edit store
            </Link>
            <Link to={`/request`} className="btn btn-info">
              Request Key
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreDetailsPage;
