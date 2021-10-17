import React from "react";
import { Title, Line } from "./CardText";

const CardEdu = (props) => {
  return (
    <div className='cW400 card mx-2 d-inline-block rounded-lg'>
      <div className='card-body rounded-lg'>
        <Title title={props.title} />
        <hr />
        <Line small='University' big={props.univ} />
        <Line small='Year' big={props.year} />
        <Line small={props.unitMrk} big={props.marks} />
        <Line small={props.clgSch} big={props.clg} />
      </div>
      <img className='card-img-top rounded-lg' src={props.logo} alt='sppu' />
    </div>
  );
};

export default CardEdu;
