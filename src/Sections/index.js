import React from "react";
import Project from "./Project";
import Skill from "./Skill";
import Experience from "./Experience";
import Education from "./Education";
import About from "./About";

const Sections = () => {
  return (
    <>
      <section className='centerWrap' id='Project'>
        <div className='w-100'>
          <h1 className='display-4 mb-4 ml-4 text-dark'>Project</h1>
          <div className='position-relative'>
            <div className='scrolls p-2'>
              <Project />
            </div>
          </div>
        </div>
      </section>
      <section className='centerWrap' id='Skill'>
        <div className='w-100'>
          <h1 className='display-4 mb-4 ml-4 text-dark'>Skill</h1>
          <div className='position-relative'>
            <div className='scrolls p-2'>
              <Skill />
            </div>
          </div>
        </div>
      </section>
      <section className='centerWrap' id='Experience'>
        <div className='w-100'>
          <h1 className='display-4 mb-4 ml-4 text-dark'>Experience</h1>
          <div className='position-relative'>
            <div className='scrolls p-2'>
              <Experience />
            </div>
          </div>
        </div>
      </section>
      <section className='centerWrap' id='Education'>
        <div className='w-100'>
          <h1 className='display-4 mb-4 ml-4 text-dark'>Education</h1>
          <div className='position-relative'>
            <div className='scrolls p-2'>
              <Education />
            </div>
          </div>
        </div>
      </section>
      <section className='centerWrap' id='About'>
        <div className='w-100'>
          <h1 className='display-4 mb-4 ml-4 text-dark'>About</h1>
          <div className='position-relative'>
            <div className='scrolls p-2'>
              <About />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Sections;
