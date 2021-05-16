import React from "react";
import CardEdu from "./CardEdu";
import sppu from "../img/sppu.jpg";
import msbte from "../img/msbte.jpg";
import ssc from "../img/ssc.png";

const Education = () => {
  return (
    <>
      <CardEdu
        title='Bachelor of Engineering'
        univ='Savitribai Phule Pune Univercity'
        year='2017-2020'
        unitMrk='CGPA'
        marks='6.96'
        clgSch='College'
        clg='Sanghavi College of Engineering'
        logo={sppu}
      />
      <CardEdu
        title='Polytechnic / Diploma'
        univ='Maharashtra State Board of Technical Education'
        year='2014-2017'
        unitMrk='Percentage'
        marks='67.65%'
        clgSch='College'
        clg='Mahavir Polytechnic'
        logo={msbte}
      />
      <CardEdu
        title='10th Class'
        univ='SSC Maharashtra Board'
        year='2014'
        unitMrk='Percentage'
        marks='68.60%'
        clgSch='School'
        clg='St. Lawrence High School'
        logo={ssc}
      />
    </>
  );
};
export default Education;
