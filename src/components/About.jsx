import React from "react";
import { FaSchool } from "react-icons/fa";

const About = () => {
  const social = [{ link: "a", icon: "a" }];

  return (
    <section
      id="about"
      className="h-[85vh] text-white my-10 md:my-5 bg-wavyline"
    >
      <div className="px-4 md:px-32 md:flex">
        <div className="flex-[55%] mr-10">
          <h1 className="text-myPrimary text-3xl">
            <span className="border-b-2 border-myAccent">ABOUT ME</span>
          </h1>
          <div className="my-4">
            As a 3rd-year BS Computer Science student at Cavite State University
            - Bacoor Campus, I'm driven to become a skilled Software
            Developer/Engineer. With a strong foundation in programming
            languages and technologies.
          </div>
        </div>
        {/* <SkillSets /> */}
      </div>
    </section>
  );
};

export default About;
