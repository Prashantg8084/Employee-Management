import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CMessageBar from "./CMessageBar";
import CRequired from "./CRequired";

const ForgetPassword = () => {
  const [emailId, setEmailId] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [submitOtp, setSubmitOtp] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpText, setOtpText] = useState("Get OTP");
  const [displayOtpButton, setDisplayOtpButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (successMessage || hasError) {
      setTimeout(() => {
        // setSuccessMessage(false);
        // setHasError(false)
      }, 5000);
    }
  }, [successMessage, hasError]);

  useEffect(() => {
    if (otp.length === 6) {
      setDisplayOtpButton(true);
    } else {
      setDisplayOtpButton(false);
    }
  }, [otp]);
  const getOtp = (e) => {
    e.preventDefault();

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailId) {
      setIsRequired(false);
    } else {
      setIsRequired(true);
    }
    if (emailId && emailId.match(validRegex)) {
      setHasError(false);
      setSuccessMessage(true);
      setSubmitOtp(true);
      setOtpText("Resend OTP");
    } else {
      setHasError(true);

      setSuccessMessage(false);
    }
  };

  const closeMessage = () => {
    setHasError(false);
    setSuccessMessage(false);
  };

  const resetPassword = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };
  const closeMessageBar = () => {
    setHasError(false);
    setSuccessMessage(false);
  };
  return (
    <>
      <div className="main">
        {hasError && (
          <>
            {/* <div className="message">
            <p>
              Invalid Email Addresss.
              <span
                onClick={() => closeMessage()}
                style={{ marginLeft: "10px" }}
              >
                X
              </span>
            </p>
          </div> */}
            <CMessageBar
              message="Invalid Email Addresss."
              closeMessage={closeMessageBar}
            />
          </>
        )}
        {successMessage && (
          <>
            <CMessageBar
              type="success"
              message=" OTP sent successfully. Please check your Email."
              closeMessage={closeMessageBar}
            />
          </>
        )}
        <div className="form-container">
          <form action="">
            <div className="row">
              <label>Email</label>
              <input
                // className={isRequired ? "required" : ""}
                name="email"
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                autoComplete="off"
                required
              />
              {isRequired && (
              <>
                {/* <p className="error-message">Email field is required</p> */}
                <CRequired message="Email field is required"/>
              </>
            )}
            </div>
            
            <div className="button">
              <button className="submit" onClick={(e) => getOtp(e)}>
                {otpText}
              </button>
            </div>
          </form>
        </div>
        {submitOtp && (
          <div className="form-container">
            <form action="">
              <div className="row">
                <label>Enter OTP</label>
                <input
                  name="otp"
                  type="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              {/* {displayOtpButton && ( */}
              <div className="button">
                <button
                  disabled={displayOtpButton ? false : "disabled"}
                  className="submit"
                  onClick={(e) => resetPassword(e)}
                >
                  Submit OTP
                </button>
              </div>
              {/* )} */}
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default ForgetPassword;
