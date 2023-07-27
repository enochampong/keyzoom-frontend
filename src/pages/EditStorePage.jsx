import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "http://localhost:5005";

function EditStorePage() {
  const [storeData, setStoreData] = useState({
    firstName: "",
    lastName: "",
    streetName: "",
    houseNumber: "",
    postCode: "",
    city: "",
    description: "",
  });

  const navigate = useNavigate();
  const { storeId } = useParams();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${API_URL}/api/stores/${storeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        const oneStore = response.data;
        setStoreData({
          firstName: oneStore.firstName,
          lastName: oneStore.lastName,
          streetName: oneStore.streetName,
          houseNumber: oneStore.houseNumber,
          postCode: oneStore.postCode,
          city: oneStore.city,
          description: oneStore.description,
        });
      })
      .catch((error) => console.log(error));
  }, [storeId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem("authToken");
    axios
      .put(`${API_URL}/api/stores/${storeId}`, storeData, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => navigate(`/stores/${storeId}`))
      .catch((error) => console.log(error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStoreData({ ...storeData, [name]: value });
  };

  const deleteStore = () => {
    const storedToken = localStorage.getItem("authToken");
    axios
      .delete(`${API_URL}/api/stores/${storeId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then(() => navigate("/stores"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="EditStorePage container">
      <h3>Edit the Store</h3>

      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label>FirstName:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={storeData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>LastName:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={storeData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Street:</label>
          <input
            type="text"
            className="form-control"
            name="streetName"
            value={storeData.streetName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>HouseNumber:</label>
          <input
            type="text"
            className="form-control"
            name="houseNumber"
            value={storeData.houseNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>PostCode:</label>
          <input
            type="text"
            className="form-control"
            name="postCode"
            value={storeData.postCode}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            className="form-control"
            name="city"
            value={storeData.city}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            type="text"
            className="form-control"
            name="description"
            value={storeData.description}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Update store
        </button>
      </form>

      <button onClick={deleteStore} className="btn btn-danger mt-3">
        Delete store
      </button>
    </div>
  );
}

export default EditStorePage;
