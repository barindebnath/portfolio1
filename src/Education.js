import React from "react";
import { CardEdu } from "./CardEdu";
import sppu from "./img/sppu.jpg";
import msbte from "./img/msbte.jpg";
import ssc from "./img/ssc.png";

export const Education = () => {
  return (
    <>
      <CardEdu title="Bachelor of Engineering" univ="Savitribai Phule Pune Univercity" year="2017-2020" unitMrk="CGPA" marks="6.6" clgSch="College" clg="Sanghavi College of Engineering" logo={sppu} />
      <CardEdu title="Polytechnic / Diploma" univ="Maharashtra State Board of Technical Education" year="2014-2017" unitMrk="Percentage" marks="68%" clgSch="College" clg="Mahavir Polytechnic" logo={msbte} />
      <CardEdu title="10th Class" univ="SSC Maharashtra Board" year="2014" unitMrk="Percentage" marks="69%" clgSch="School" clg="St. Lawrence High School" logo={ssc} />
    </>
  );
};
