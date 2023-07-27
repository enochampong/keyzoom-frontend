import { useState } from "react";
import axios from "axios";
import { Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';
import 'bootstrap/dist/css/bootstrap.min.css';
const API_URL = "http://localhost:5005";

function AddRequest(props) {
 const [ firstName,setFirstName      ] =useState("");
 const [ lastName, setLastName] =useState("");
 const [ streetName, setStreetName] =useState("");
 const [houseNumber,setHouseNumber] =useState("");
 const [ postCode, setPostCode] =useState("");
 const [city, setCity] = useState('');
 const  [description, setDescription] =useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {firstName,lastName, streetName, houseNumber, postCode, city,description };

    const storedToken = localStorage.getItem('authToken');

    axios
      .post(
        `${API_URL}/api/stores`,
        requestBody,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )
      .then((response) => {
        setFirstName("");
        setLastName("");
        setStreetName("");
        setHouseNumber("");
        setPostCode("");
        setCity("");
        setDescription("");
        props.refreshStores();
      })
      .catch((error) => console.log(error));
  };


  return (
    <div className="AddRequest">
      <h3>Add New Address</h3>

      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
  <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
          <label>Street Name:</label>
        <input
          type="text"
          name="streetName"
          value={streetName}
          onChange={(e) => setStreetName(e.target.value)}
        />
       
        
          <label>House Number:</label>
        <input
          type="text"
          name="houseNumber"
          value={houseNumber}
          onChange={(e) => setHouseNumber(e.target.value)}
        />
          <label>Post Code:</label>
        <input
          type="text"
          name="postCode"
          value={postCode}
          onChange={(e) => setPostCode(e.target.value)}
        />
          <label>City:</label>
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
     
        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />



          <button type="submit">Request</button>
      </form>
    </div>
  );
}

export default AddRequest;
