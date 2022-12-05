import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assests/css/login.css";
import CMessageBar from "./CMessageBar";


const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const navigate =useNavigate()

  useEffect(() => {
    if (hasError) {
      setTimeout(() => {
        // setHasError(false);
      }, 5000);
    }
  }, [hasError]);

  const validateLogin = (e) => {
    e.preventDefault();
    if (username === "test" && password === "test") {
      navigate("/dashboard")
    } else {
      setHasError(true);
    }
  };
  const closeMessageBar =() =>{
    setHasError(false)
  }
  return (
    <>
      <div className="main">
        {hasError && (
          <CMessageBar message="Invalid Username or Password. Please try again. " 
            closeMessage={closeMessageBar}
          />
        )}
        <div className="form-container">
          <form action="">
            <div className="row">
              <label>User name</label>
              <input
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="row">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div className="button">
            <span onClick={()=>navigate("/forget-password")}>forget password ?</span>
              <button className="submit" onClick={(e) => validateLogin(e)}>
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
