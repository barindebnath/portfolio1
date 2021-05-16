import React from "react";
import { Title, Line } from "./CardText";

const Experience = () => {
  const experiences = [
    {
      title: "Web Developer",
      lines: [
        { small: "Company", big: "AxelBuzz Tech Solutions" },
        { small: "From - To", big: "Dec 2020 - Present" },
        { small: "Location", big: "Nashik, Maharashtra, India" },
        { small: "Technology", big: "JavaScript, React.js" },
      ],
    },
    {
      title: "Frontend Developer",
      lines: [
        { small: "Company", big: "Puspendu Studio" },
        { small: "From - To", big: "Sep 2019 - Sep 2020" },
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
