import React from "react";
import SkillSets from "../about/SkillSets";

const About = () => {
  return (
    <section id="about" className="font-montserrat my-14 md:my-5 bg-wavyline">
      <div className="px-4 md:px-10 lg:px-32 flex flex-col md:flex-row items-start">
        {/* Left Side: Text Content */}
        <div className="md:w-1/2">
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-myPrimary text-3xl mb-4">
              <span className="border-b-2 border-myAccent font-semibold">
                ABOUT ME
              </span>
            </h2>
            <div className="mt-4 md:text-left text-[1.05rem] text-center">
              <p>
                I am a 3rd-year BS Computer Science student at Cavite State
                University - Bacoor Campus, driven to become a skilled Software
                Developer/Engineer with a strong foundation in programming
                languages and technologies.
              </p>
            </div>
          </div>

          <div className="md:hidden md:w-1/2 mt-4">
            <SkillSets />
          </div>

          <div className="my-8 text-center md:text-start">
            <h2 className="font-semibold text-lg mb-2">Passionate About</h2>
            <p className="text-[1.05rem]">
              Developing scalable and user-friendly web apps, creating seamless
              mobile experiences with Flutter, and collaborating with teams to
              deliver high-quality solutions.
            </p>
          </div>

          <div className="my-8 text-center md:text-start">
            <h2 className="font-semibold text-lg mb-2">Career Aspirations</h2>
            <p className="text-[1.05rem]">
              My goal is to become a proficient Software Developer/Engineer,
              committed to continuous learning, skill enhancement, and
              delivering efficient, reliable, and innovative software solutions.
            </p>
          </div>

          <div className="my-8 text-center md:text-start">
            <h2 className="font-semibold text-lg mb-2">Core Strengths</h2>
            <p className="text-[1.05rem]">
              Problem-solving and analytical thinking, effective teamwork and
              collaboration, adaptability, and strong communication and
              interpersonal skills.
            </p>
          </div>

          <div className="text-center mt-8">
            <h3 className="font-semibold text-lg">
              Let's connect and explore opportunities!
            </h3>
          </div>
        </div>

        {/* Right Side: SkillSets */}
        <div className="hidden md:block md:w-1/2 md:mt-4 md:ml-8">
          <SkillSets />
        </div>
      </div>
    </section>
  );
};

export default About;