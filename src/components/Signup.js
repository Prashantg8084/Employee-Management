import React, { useState } from "react";
import CRequired from "./CRequired";

const Signup = () => {
  const [isRequired, setIsRequired] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateSignup = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true)
    
  };
  return (
    <>
      <div className="main">
        <div className="form-container">
          <form action="">
            <div className="row">
              <label>User name</label>
              <input
                name="username"
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              {(isFormSubmitted && !userName) && <CRequired message="User Name is Required" />}
            </div>

            <div className="row">
              <label>Mobile no.</label>
              <input
                name="mobile"
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {(isFormSubmitted && !phoneNumber )&& <CRequired message="Phone Number is Required" />}

            </div>
            <div className="row">
              <label>E-mail</label>
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {(isFormSubmitted && !email )&& <CRequired message="Email is Required" />}

            </div>
            <div className="row">
              <label>Password</label>
              <input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {(isFormSubmitted && !password )&& <CRequired message="Password is Required" />}

            </div>
            <div className="button">
              <button className="submit" onClick={(e) => validateSignup(e)}>
                Sign-up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
