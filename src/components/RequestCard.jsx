import { Link } from "react-router-dom";
function requestCard ( { firstName,lastName, streetName, houseNumber, postCode,city,  _id } ) {

    return (
        <div className="requestCard card">
          <Link to={`/requests/${_id}`}>
            <h1>{firstName}</h1>  
            <h1>{lastName}</h1>
            <h1>{streetName}</h1>
            <h1>{houseNumber}</h1>
            <h1>{postCode}</h1>
            <h1>{city}</h1>
            </Link>
          <p style={{ maxWidth: "400px" }}>{description} </p>
        </div>
      );
    }
    
    export default requestCard;