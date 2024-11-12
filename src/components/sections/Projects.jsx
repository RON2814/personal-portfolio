import React, { useState } from "react";
import Carousel from "../project/Carousel";
import projects from "../../data/projects";
import getProjectVideoURL from "../../utils/video-project-util";
import ReactPlayer from "react-player";
import getSvgSkillURL from "../../utils/svg-skill-util";
import { MdLaunch } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="project" className="p-4 md:px-10 lg:px-32">
      <h2 className="text-lightPrimary dark:text-myPrimary text-3xl mb-4 text-center md:text-start">
        <span className="border-b-2 border-lightAccent dark:border-myAccent font-semibold">
          PROJECTS
        </span>
      </h2>
      <div className="bg-lightTrueSecondary dark:bg-myTrueSecondary px-4 py-8 rounded-md text-center lg:relative lg:text-left">
        <div className="mb-8 project-lg">
          {projects[activeIndex] && (
            <>
              <ReactPlayer
                url={getProjectVideoURL(projects[activeIndex].video)}
                playing
                loop
                muted
                width="100%"
                className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 z-0"
                style={{ objectFit: "cover" }}
              />
            </>
          )}
          <div className="h-full transition duration-300 lg:hover:backdrop-blur-lg ">
            <div className="lg:absolute lg:bottom-1/2 lg:translate-y-1/2 lg:left-10">
              <div className="lg:relative lg:z-10 lg:w-[40vw] transition duration-300 lg:hover:backdrop-blur-lg">
                {projects[activeIndex] && (
                  <>
                    <h3 className="text-2xl font-medium my-4">
                      {projects[activeIndex].name}
                    </h3>
                    <p className="my-2">{projects[activeIndex].description}</p>
                  </>
                )}
                <h4 className="mt-4 text-lg">Tools Used:</h4>
                <div className="flex my-2 justify-center lg:justify-start">
                  {projects[activeIndex] &&
                    projects[activeIndex].tools.map((tool, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={getSvgSkillURL(tool.file)}
                          alt={tool.name}
                          width="32"
                          height="32"
                          loading="lazy"
                          className="w-8 h-8 mx-2 lg:mx-0 lg:mr-4 border-2 border-myBgColor dark:bg-lightBgColor rounded-md p-1 cursor-pointer"
                        />
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-mySecondary text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                          {tool.name}
                        </div>
                      </div>
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row lg:justify-center my-4">
                  <a
                    href={getProjectVideoURL(projects[activeIndex].video)}
                    className="flex button my-2 lg:my-0 lg:mx-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdLaunch className="my-auto mr-2 text-2xl" />
                    View Project
                  </a>
                  <a
                    href={projects[activeIndex].link}
                    className="flex button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="my-auto mr-2 text-2xl" />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-2xl text-center font-medium mb-2">Projects</h3>
        <Carousel activeIndex={activeIndex} onSlideChange={setActiveIndex} />
        {/* Pass props */}
        {/* <div className="mt-4">
            <p>Active Slide Index: {activeIndex}</p>
          </div> */}
      </div>
    </section>
  );
};

export default Projects;
