import React from "react";
import photo from "../assets/img/photo.png";
import TypewriterEffect from "./TypewriterEffect";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home">
      <div className="bg-myBgColor top-0">
        <div
          className="md:flex pt-8"
          style={{ backgroundColor: "rgba(135, 34, 57, 0.15)" }}
        >
          <div className="flex flex-col items-center justify-center h-[37.5rem] text-white text-center px-4 md:w-[60%] md:h-[32rem]">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 py-2">
              Hello! I'm{" "}
              <span className="text-myPrimary">John Aaron Apayong</span>
            </h1>
            {/* <p className="mb-6 text-lg md:text-xl max-w-xl py-2">
            a dedicated software developer in my 3rd year of college. I love
            transforming concepts into reality using technologies like HTML,
            CSS, JavaScript, Java, Dart, and more. Let's create something
            amazing together.
          </p> */}
            <TypewriterEffect />
            <a
              href="#about"
              className="flex items-center bg-myPrimary text-gray-900 py-2 px-6 rounded-md hover:bg-mySecondary transition hover:text-white"
            >
              View my work{" "}
              <FaArrowRight className="ml-2 mt-[.2rem] text-[.9rem]" />
            </a>
          </div>
          <div className="hidden md:block text-white flex-auto relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[80%] h-auto">
              <img src={photo} alt="John Aaron Apayong" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
