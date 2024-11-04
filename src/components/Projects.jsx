import React from "react";
import Carousel from "./Carousel";

const Projects = () => {
  const project = [{ link: "", name: "", description: "" }];
  return (
    <section id="project" className="p-4">
      <div className="h-[90vh]">
        <div className="bg-myTrueSecondary px-4 py-8 rounded-md text-center">
          {/* project container */}
          <div className="h-[10rem] bg-slate-500">
            <img src="" alt="project" />
          </div>
          <h3>Project Name</h3>
          <p>Project description</p>
          <h4>Tools used:</h4>
          <div>{/* tools */}</div>
          <div className="flex flex-col">
            <a href="" className="button my-2">
              View Project
            </a>
            <a href="" className="button">
              View Code
            </a>
          </div>
          <h3>Projects</h3>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Projects;
