import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";


function AddTerms ({ onTermsAccepted }){
  const [useInfo, setUseInfo] = useState(false);
  const [storeInfo, setStoreInfo] = useState(false);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === "useInfo") {
      setUseInfo(checked);
    } else if (name === "storeInfo") {
      setStoreInfo(checked);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (useInfo && storeInfo) {
      onTermsAccepted(true);
    } else {
      alert("Please agree to both use and store of information.");
    }
  };

  return (
    <div className="AddTerms">
      <h3>Terms and Conditions</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            name="useInfo"
            checked={useInfo}
            onChange={handleCheckboxChange}
          />
          I agree that my information will be used for legitimate purposes.
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="storeInfo"
            checked={storeInfo}
            onChange={handleCheckboxChange}
          />
          I agree that my information will be stored securely.
        </label>
        <br />
       
      </form>
    </div>
  );
};

export default AddTerms;
