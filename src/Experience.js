import React from "react";
import { Title } from "./CardTitle";
import { Line } from "./CardLine";

export const Experience = () => {
  return (
    <>
      <div className='card mx-2 d-inline-block rounded-lg'>
        <div className='card-body rounded-lg'>
          <Title title='Web Developer' />
          <hr />
          <Line small='Company' big='AxelBuzz Tech Solutions' />
          <Line small='From - To' big='Dec 2020 - Present' />
          <Line small='Location' big='Nashik, Maharashtra, India' />
          <Line small='Technology' big='JavaScript, React.js' />
        </div>
      </div>
      <div className='card mx-2 d-inline-block rounded-lg'>
        <div className='card-body rounded-lg'>
          <Title title='Frontend Developer' />
          <hr />
          <Line small='Company' big='Puspendu Studio' />
          <Line small='From - To' big='Sep 2019 - Sep 2020' />
          <Line small='Location' big='Nashik, Maharashtra, India' />
          <Line small='Technology' big='CSS3, Bootstrap4, JavaScript, jQuery' />
        </div>
      </div>
    </>
  );
};
