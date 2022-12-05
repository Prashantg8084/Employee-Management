import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ForgetPassword from "./components/ForgetPassword";
import ResetPassword from "./components/ResetPassword";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
 
  return (
    <>
      <div className="container">
        <BrowserRouter>
          {/* <div className="header">
            <div className="left half">
              <h3 onClick={() => homePage()}>Employee Management</h3>
            </div>
            <div className="right half">
              <Link to="/login">
                <button>Log In</button>
              </Link>
              <Link to="/signup">
                <button>Sign up</button>
              </Link>
            </div>
          </div> */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
