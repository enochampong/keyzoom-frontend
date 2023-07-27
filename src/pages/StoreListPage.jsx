import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import StoreCard from "../components/StoreCard";
import AddStore from "../components/AddStore";

const API_URL = "http://localhost:5005";

function StoreListPage() {
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

  const getUserStores = () => setUserStores(stores.filter((store) => store.user === userId));

  return (
    <div className="StoreListPage">
      <AddStore />
      <div className="row">
        {userStores.map((store) => (
          <div className="col-12 col-md-6 col-lg-4" key={store._id}>
            <div className="card mb-3">
              <div className="card-body">
                <StoreCard {...store} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-3">
        {/* <Link to={`/request`}>
          <button className="btn btn-primary">Request</button>
        </Link> */}
      </div>
      <div>
        <Link to={`/delivery`}>
          <button className="btn btn-primary">Delivery</button>
        </Link>
      </div>
      Send your Details and keys together to adress down below. 
    </div>
  );
}

export default StoreListPage;
