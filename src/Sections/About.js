import React from "react";
import { Contact } from "./Contact";
import { Title, Line } from "./CardText";

const About = () => {
  return (
    <>
      <div className='card mx-2 d-inline-block rounded-lg'>
        <div className='card-body rounded-lg'>
          <Title title='Bio' />
          <hr />
          <Line small='Name' big='Barin Debnath' />
          <Line small='Email' big='barindebnath@gmail.com' />
          <Line small='Location' big='Nashik, Maharashtra, India' />
          <div style={{ height: "47px" }}></div>
          <Title title='Connect' />
          <a
            href='https://in.linkedin.com/in/barin-d'
            className='btn btn-light rounded-circle mr-3'
            title='LinkedIn'
            target='_blank'
            style={{ border: "1px solid #0e76a8", color: "#0e76a8" }}
            rel='noopener noreferrer'
          >
            <i className='fab fa-linkedin-in'></i>
          </a>
          <a
            href='https://github.com/barindebnath'
            className='btn btn-light rounded-circle mr-3'
            title='GitHub'
            target='_blank'
            style={{ border: "1px solid #211F1F", color: "#211F1F" }}
            rel='noopener noreferrer'
          >
            <i className='fab fa-github'></i>
          </a>
          <a
            href='https://www.instagram.com/barinjitu'
            className='btn btn-light rounded-circle mr-3'
            title='Instagram'
            target='_blank'
            style={{ border: "1px solid #833AB4", color: "#833AB4" }}
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default About;
