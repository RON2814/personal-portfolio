import React from "react";

const skills = [
  { name: "HTML", level: "100%" },
  { name: "CSS", level: "80%" },
  { name: "JavaScript", level: "80%" },
  { name: "React", level: "70%" },
  { name: "Java", level: "90%" },
  { name: "Node.js", level: "60%" },
  { name: "Photoshop", level: "80%" },
  { name: "Python", level: "40%" },
  { name: "Flutter", level: "85%" },
  { name: "Figma", level: "65%" },
];

const SkillChart = () => {
  return (
    <div className="max-w-2xl mx-auto md:p-4 md:flex-2 mt-8">
      <h2 className="text-2xl font-bold mb-6">My Skills</h2>
      {skills.map((skill) => (
        <div className="mb-4 flex" key={skill.name}>
          <div className="font-bold mb-1 bg-myAccent px-2 w-[35%] text-center md:w-[25%]">
            {skill.name}
          </div>
          <div className="bg-myPrimary bg-opacity-20 h-6 flex-auto text-end">
            <div
              className="bg-mySecondary h-6 transition-all duration-300 ease-in-out px-4"
              style={{ width: skill.level }}
            >
              {skill.level}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillChart;
