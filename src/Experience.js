import React from "react";
import { Title } from "./CardTitle";
import { Line } from "./CardLine";

export const Experience = () => {
  return (
    <>
      <div className="card mx-2 d-inline-block rounded-lg">
        <div className="card-body rounded-lg">
          <Title title="Frontend Developer" />
          <hr />
          <Line small="Company" big="Puspendu Studio" />
          <Line small="From - To" big="Sep 2019 - Present" />
          <Line small="Location" big="Nashik, Maharashtra, India" />
          <Line small="Technology" big="CSS3, Bootstrap4, JavaScript, jQuery" />
        </div>
      </div>
    </>
  );
};
