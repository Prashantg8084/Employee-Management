import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import deleted from "../assests/images/delete.png";

const CMessageBar = (props) => {

    
  const closeMessage = (value) => {
    console.log("sucessssss");
    props.closeMessage();
  };
  return (
    <>
      <div
        className={
          props.type === "success" ? "message success-message" : "message"
        }
      >
        <p>
          {props.message}
          <span
          className="icon-class"
            onClick={() => closeMessage()}
            
          >
            <img src={deleted} style={{width:"20px" }} />
          </span>
        </p>
      </div>
    </>
  );
};

export default CMessageBar;
