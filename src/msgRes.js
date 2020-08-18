import React from "react";

export const MsgRes = (props) => {
  const handleAlert = () => {
    document.getElementById(props.id).style.display = "none";
  };
  return (
    <div id={props.id}>
      <div className="alert alert-info alert-dismissible fade show text-center d-inline-block" role="alert">
        <strong>{props.res}</strong>
        <button type="button" className="close" aria-label="Close" onClick={handleAlert}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
};
