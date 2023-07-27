import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <nav>
      <h1>keyzoom</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/about">
            <button>About</button>
            </Link>  

      {isLoggedIn && (
        <>
          <Link to="/stores">
            <button>Stores</button>
          </Link>

         
          <Link to="/request">
            <button>Request</button>
          </Link>

            <Link to="/delivery">
            <button>Delivery</button>
            </Link>  
          <button onClick={logOutUser}>Logout</button>
          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/signup">
            {" "}
            <button>Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button>Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
