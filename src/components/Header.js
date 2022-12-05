import React from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
    Link,
    useNavigate,
  } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate();
    const homePage = () => {
      navigate("/");
    };
  return (
    <>
        <div className="header">
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
          </div>
    </>
  )
}

export default Header