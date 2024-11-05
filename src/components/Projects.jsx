import React, { useState } from "react";
import Carousel from "./Carousel";
import projects from "../data/projects";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="project" className="p-4 md:px-10 lg:px-32">
      <div className="">
        <h2 className="text-myPrimary text-3xl mb-4 text-center md:text-start">
          <span className="border-b-2 border-myAccent font-semibold">
            PROJECTS
          </span>
        </h2>
        <div className="bg-myTrueSecondary px-4 py-8 rounded-md text-center">
          <div className="mb-8">
            {projects[activeIndex] && (
              <>
                <div className="h-[10rem] bg-slate-500">
                  <img src="" alt="project" />
                </div>
                <h3>{projects[activeIndex].name}</h3>
                <p>{projects[activeIndex].description}</p>
                {/* Other content */}
              </>
            )}
            <h4>Tools used:</h4>
            <div>{/* tools */}</div>
            <div className="flex flex-col">
              <a
                href={projects[activeIndex].link}
                className="button my-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
              <a
                href={projects[activeIndex].link}
                className="button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
          <h3>Projects</h3>
          <Carousel activeIndex={activeIndex} onSlideChange={setActiveIndex} />
          {/* Pass props */}
          {/* <div className="mt-4">
            <p>Active Slide Index: {activeIndex}</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
