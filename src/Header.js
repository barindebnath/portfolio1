import React from "react";
import Dp from "./img/DP.jpg";
import { Sections } from "./Sections";

export const Header = () => {
  return (
    <div id="main">
      <section id="Head" className="position-relative">
        <div className="head">
          <img src={Dp} className="dp shadow" alt="barin" />
          <h2 className="d-block mt-4 text-dark name">Barin Debnath</h2>
          <a className="btn mt-5 btn-outline-dark py-3 rounded-pill" href="#Project">
            <i className="fas fa-chevron-down down small"></i>
          </a>
        </div>
      </section>
      <Sections />
    </div>
  );
};
