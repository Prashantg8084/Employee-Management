import React from "react";

const CRequired = (props) => {
  return (
    <>
      <p className="error-message">{props.message}</p>
    </>
  );
};

export default CRequired;
