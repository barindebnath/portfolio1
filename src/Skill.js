import React from "react";
import { Title } from "./CardTitle";
import { Line } from "./CardLine";
//import Py from "./img/py.png";

export const Skill = () => {
  return (
    <>
      <div className="cW350 card mx-2 d-inline-block rounded-lg">
        <div className="card-body rounded-lg">
          <Title title="Programming Languages" />
          <hr />
          <Line small="React Framework" big="React Native" />
          <Line small="JavaScript  Library" big="React" />
          <Line small="Language" big="JavaScript" />
        </div>
        <i className="fab fa-react card-img-top fa-5x" style={{ color: "#61DBFB" }}></i>
      </div>
      {/* <div className="cW350 card mx-2 d-inline-block rounded-lg">
        <div className="card-body rounded-lg">
          <Title title="Front-End Technologies" />
          <hr />
          <Line small="Programming Language" big="TypeScript" />
          <Line small="Style Sheet Language" big="CSS3" />
          <Line small="Programming Language" big="SCSS" />
          <Line small="JavaScript  Library" big="jQuery" />
        </div>
        <i className="fab fa-sass card-img-top fa-5x" style={{ color: "#c69" }}></i>
      </div>
      <div className="cW350 card mx-2 d-inline-block rounded-lg">
        <div className="card-body rounded-lg">
          <Title title="Back-End Technologies" />
          <hr />
          <Line small="High-level programming language" big="Python" />
        </div>
        <img src={Py} className="card-img-top" alt="Python logo" style={{ color: "#FFE873", height: "auto", width: "90px" }} />
      </div>
      <div className="cW350 card mx-2 d-inline-block rounded-lg">
        <div className="card-body rounded-lg">
          <Title title="Other" />
          <hr />
          <Line small="Charting Library" big="Highcharts" />
          <Line small="JS Library" big="AJAX" />
        </div>
        <i className="fas fa-chart-pie card-img-top fa-5x text-primary"></i>
      </div>
      <div className="cW350 card mx-2 d-inline-block rounded-lg">
        <div className="card-body rounded-lg">
          <Title title="Upcoming in List" />
          <Line big="Redux" />
          <Line big="PostgreSQL" />
          <Line big="GraphQL" />
          <Line big="and more . . ." />
        </div>
        <i className="fab fa-git-alt card-img-top fa-5x text-dark"></i>
      </div> */}
    </>
  );
};