import React, { useState } from "react";
import CMessageBar from "./CMessageBar";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const [hasSuccess, setHasSuccess] = useState(false);

  const validatePassword = (e) => {
    e.preventDefault();
    if (newPassword === "" || confirmPassword === "") {
      setHasError(true);
      setHasSuccess(false);
      return false;
    }
    if (newPassword === confirmPassword) {
      setHasSuccess(true);
      setHasError(false);
    } else {
      setHasSuccess(false);
      setHasError(true);
    }
  };

  const closeMessanger = () => {
    setHasError(false);
    setHasSuccess(false);
  };

  return (
    <>
      <div className="main">
        {hasError && (
          <CMessageBar
          
            message=" Password didn't Match."
            closeMessage={closeMessanger}
          />
        )}
        {hasSuccess && (
          <>
            {/* <div className="message success-message">
            <p>
              Password set Successfully .
              <span
                onClick={() => closeMessage()}
                style={{ marginLeft: "10px" }}
              >
                X
              </span>
            </p>
          </div> */}
            <CMessageBar
              message=" Password set Successfully ."
              closeMessage={closeMessanger}
              type="success"
            />
          </>
        )}
        <div className="form-container">
          <form action="">
            <div className="row">
              <label>New Password</label>
              <input
                name="new-password"
                type="text"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="row">
              <label>Confirm New Password</label>
              <input
                name="confirm-new-password"
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="button">
              <button className="submit" onClick={(e) => validatePassword(e)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
