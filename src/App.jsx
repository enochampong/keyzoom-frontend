import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import StoreListPage from "./pages/StoreListPage";
import StoreDetailsPage from "./pages/StoreDetailsPage";
import EditStorePage from "./pages/EditStorePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
 import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import RequestStorePage from "./pages/RequestStorePage";
import AboutPage from "./pages/AboutPage";
import DeliveryPage from "./pages/deliveryPage";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>      
        <Route path="/" element={<HomePage />} />
        <Route
          path="/about"
          element={ <IsPrivate><AboutPage /> </IsPrivate> } 
        />
        <Route
          path="/stores"
          element={ <IsPrivate> <StoreListPage /> </IsPrivate> } 
        />

        <Route
           path="stores/:storeid" 
           element={ <IsPrivate> <StoreDetailsPage /> </IsPrivate>  }
            /> 

        

        <Route
          path="/stores/edit/:storeid"
          element={ <IsPrivate>  <EditStorePage /> </IsPrivate>  } 
        />
          <Route
          path="/request"
          element={ <IsPrivate>  <RequestStorePage /> </IsPrivate>   } 
        /> 
       
          <Route
          path="/delivery"
          element={ <IsPrivate>  <DeliveryPage /> </IsPrivate>   } 
        /> 
        <Route path="/signup" element={<IsAnon> <SignupPage /> </IsAnon>} />
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />

      </Routes>
    </div>
  );
}

export default App;
