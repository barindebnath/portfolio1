import React from "react";
import { Title, Line } from "./CardText";

const Experience = () => {
  const experiences = [
    {
      title: "React.js Developer",
      lines: [
        { small: "Company", big: "Adroit Coders" },
        { small: "From - To", big: "Sep 2021 - Present" },
        { small: "Location", big: "Nashik, Maharashtra, India" },
        { small: "Technology", big: "React.js, TypeScript" },
      ],
    },
    {
      title: "React.js Developer",
      lines: [
        { small: "Company", big: "AxelBuzz Tech Solutions" },
        { small: "From - To", big: "Dec 2020 - Sep 2021 (9 Months)" },
        { small: "Location", big: "Nashik, Maharashtra, India" },
        { small: "Technology", big: "React.js, JavaScript" },
      ],
    },
    {
      title: "Frontend Developer",
      lines: [
        { small: "Company", big: "Puspendu Studio" },
        { small: "From - To", big: "Sep 2019 - Aug 2020 (1 Year)" },
        { small: "Location", big: "Nashik, Maharashtra, India" },
        { small: "Technology", big: "CSS3, Bootstrap4, JavaScript, jQuery" },
      ],
    },
  ];

  return experiences.map((exp) => {
    return (
      <div key={exp.title} className='card mx-2 d-inline-block rounded-lg'>
        <div className='card-body rounded-lg'>
          <Title title={exp.title} />
          <hr />
          {exp.lines.map((line) => {
            return <Line key={line.small} small={line.small} big={line.big} />;
          })}
        </div>
      </div>
    );
  });
};

export default Experience;
