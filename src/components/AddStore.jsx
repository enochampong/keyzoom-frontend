import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";
const questions = [
  "What is your favorite teacher's name?",
  "What is your favorite color?",
  "What is your favorite movie?",
  "What is your favorite uncle's name?",
  "What is your favorite city?",
];

function AddStore(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [streetName, setStreetName] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [termsChecked, setTermsChecked] = useState(false); // State variable for checkbox

  const { user } = useContext(AuthContext);
  const userId = user._id;

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      user,
      firstName,
      lastName,
      streetName,
      houseNumber,
      postCode,
      city,
      description,
      userAnswer,
    };

    const storedToken = localStorage.getItem("authToken");
    console.log("this is working", requestBody);
    axios
      .post(`${API_URL}/api/stores`, requestBody, {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        setFirstName("");
        setLastName("");
        setStreetName("");
        setHouseNumber("");
        setPostCode("");
        setCity("");
        setDescription("");
        setUserAnswer("");
        props.refreshStores();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <h3>Add Personal Details</h3>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Street Name:</label>
              <input
                type="text"
                className="form-control"
                name="streetName"
                value={streetName}
                onChange={(e) => setStreetName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>House Number:</label>
              <input
                type="number"
                className="form-control"
                name="houseNumber"
                value={houseNumber}
                onChange={(e) => setHouseNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Post Code:</label>
              <input
                type="number"
                className="form-control"
                name="postCode"
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>City:</label>
              <input
                type="text"
                className="form-control"
                name="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description:</label>
              <textarea
                type="text"
                className="form-control"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Select a Question:</label>
              <select
                className="form-control"
                value={selectedQuestion}
                onChange={(e) => setSelectedQuestion(e.target.value)}
              >
                <option value="">Select a question</option>
                {questions.map((question, index) => (
                  <option key={index} value={question}>
                    {question}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label>Your Answer:</label>
              <input
                type="text"
                className="form-control"
                name="userAnswer"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="termsCheck"
                checked={termsChecked}
                onChange={() => setTermsChecked(!termsChecked)}
              />
              <label className="form-check-label" htmlFor="termsCheck">
                Agree to terms and conditions
              </label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStore;
