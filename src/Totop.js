import React, { useState } from "react";

export const Totop = () => {
  const [disp, setDisp] = useState({ display: "none" });

  window.onscroll = function () {
    if (window.pageYOffset > document.querySelector("#Head").scrollHeight / 2) {
      setDisp({ display: "block" });
    } else {
      setDisp({ display: "none" });
    }
  };

  return (
    <a href="#Head" type="button" id="myBtn" style={disp} className="btn" title="Go to top">
      <i className="fas fa-chevron-up topfa"></i>
    </a>
  );
};
