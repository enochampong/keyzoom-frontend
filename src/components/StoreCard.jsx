import { Link } from "react-router-dom";

function storeCard ( { firstName,lastName, streetName, houseNumber, postCode,city, description,userAnswer, _id } ) {
  
  return (
    <div className="storeCard card">
      <Link to="/stores/:storeid">
      <h1>{firstName}</h1>  
            <h1>{lastName}</h1>
            <h1>{streetName}</h1>
            <h1>{houseNumber}</h1>
            <h1>{postCode}</h1>
            <h1>{city}</h1>
           <h1>{userAnswer}</h1>
      </Link>
'      <p style={{ maxWidth: "400px" }}>{description} </p>
'    </div>
  );
}

export default storeCard;