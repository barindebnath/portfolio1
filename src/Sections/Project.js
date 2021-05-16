import React from "react";
import Ps from "../img/prostoker.PNG";
import Wt2 from "../img/wtsppu2.jpg";
import Wt from "../img/wtsppu.PNG";
import Scoe from "../img/scoe.PNG";
import { Title, Line } from "./CardText";

const Project = () => {
  const aob = [
    {
      href: "http://scenashik.org/",
      src: Scoe,
      alt: "scoe",
      title: "Sanghavi College of Engineering",
      big: "April 2020 - June 2020",
    },
    {
      href: "https://barindebnath.pythonanywhere.com/",
      src: Ps,
      alt: "prostoker",
      title: "Stock Market Prediction",
      big: "Aug 2019 - April 2020",
    },
    {
      href: "https://barindebnath.github.io/wt2/",
      src: Wt2,
      alt: "wtsppu2",
      title: "Web Technology 2.0",
      big: "Jan 2019 - Feb 2019",
    },
    {
      href: "https://barindebnath.github.io/wt1/",
      src: Wt,
      alt: "wtsppu",
      title: "Web Technology",
      big: "Sept 2018 - Nov 2018",
    },
  ];
  return (
    <>
      {aob.map((item) => (
        <a href={item.href} target='_blank' rel='noopener noreferrer' key={item.href}>
          <div className='card mx-2 d-inline-block rounded-lg prj'>
            <img className='img-fluid rounded-top img-prj border-bottom' src={item.src} alt={item.alt} />
            <div className='card-body rounded-lg'>
              <Title title={item.title} />
              <Line big={item.big} />
            </div>
          </div>
        </a>
      ))}
    </>
  );
};

export default Project;
