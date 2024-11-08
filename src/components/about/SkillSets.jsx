import React from "react";
import getTechSkills from "../../data/technicalSkills";
import getSvgSkillURL from "../../utils/svg-skill-util";

const SkillSets = () => {
  const techSkills = getTechSkills();
  return (
    <div className="bg-myTrueSecondary bg-opacity-40 text-white p-4 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Technical Skills</h2>

      {/* Programming Language Skills */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2 text-center">
          Programming Language
        </h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techSkills.language.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center bg-myPrimary rounded-lg text-black font-medium"
            >
              <div className="p-2 bg-mySecondary bg-opacity-[.25] rounded-l">
                <img
                  src={getSvgSkillURL(skill.file)}
                  alt={skill.name}
                  className="bg-white rounded-lg p-1 h-auto w-[2rem] max-w-[100%] object-contain"
                />
              </div>
              <div className="p-3">
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Front End Skills */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2 text-center">Front-end</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techSkills.frontEnd.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center bg-myPrimary rounded-lg text-black font-medium"
            >
              <div className="p-2 bg-mySecondary bg-opacity-[.25] rounded-l">
                <img
                  src={getSvgSkillURL(skill.file)}
                  alt={skill.name}
                  className="bg-white rounded-lg p-1 h-auto w-[2rem] max-w-[100%] object-contain"
                />
              </div>
              <div className="p-3">
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back End Skills */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-2 text-center">Back-end</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techSkills.backEnd.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center bg-myPrimary rounded-lg text-black font-medium"
            >
              <div className="p-2 bg-mySecondary bg-opacity-[.25] rounded-l">
                <img
                  src={getSvgSkillURL(skill.file)}
                  alt={skill.name}
                  className="bg-white rounded-lg p-1 h-auto w-[2rem] max-w-[100%] object-contain"
                />
              </div>
              <div className="p-3">
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other Skills */}
      <div>
        <h3 className="font-semibold text-lg mb-2 text-center">Others</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {techSkills.others.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center bg-myPrimary rounded-lg text-black font-medium"
            >
              <div className="p-2 bg-mySecondary bg-opacity-[.25] rounded-l">
                <img
                  src={getSvgSkillURL(skill.file)}
                  alt={skill.name}
                  className="bg-white rounded-lg p-1 h-auto w-[2rem] max-w-[100%] object-contain"
                />
              </div>
              <div className="p-3">
                <span>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="p-4">
    //   {techSkills.frontEnd.map((skill, index) => (
    //     <div key={index} className="flex flex-col items-center">
    //       <img
    //         src={getSvgSkillURL(skill.file)}
    //         alt={skill.name}
    //         className="h-auto w-[2rem] max-w-[100%] object-contain"
    //       />
    //       <span className="mt-2 text-center">{skill.name}</span>
    //     </div>
    //   ))}
    // </div>
  );
};

export default SkillSets;
