import React from "react";

export const Title = ({ title }) => {
  return <h4 className='card-title text-dark'>{title}</h4>;
};

export const Line = ({ small, big }) => {
  return (
    <>
      <small className='text-secondary'>{small}</small>
      <p className='card-text font-weight-bold text-dark'>{big}</p>
    </>
  );
};
