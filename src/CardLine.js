import React from "react";

export const Line = (props) => {
  return (
    <>
      <small className="text-secondary">{props.small}</small>
      <p className="card-text font-weight-bold text-dark">{props.big}</p>
    </>
  );
};
