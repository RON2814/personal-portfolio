import React from "react";
import TypewriterEffect from "./TypewriterEffect";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import photo from "../assets/img/photo.png";
import background from "../assets/svg/background/blurry-gradient-bg.svg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home">
      <div className="h-[100vh]">
        {/*This div ↓ just remove the overlay (added space)*/}
        <div className="h-[3.5rem] bg-hero"></div>
        <div
          // for Background
          className="h-[95vh] md:h-[70vh] bg-hero"
        >
          <div
            // just to flex the 2 div to half
            className="flex flex-col lg:flex-row h-full"
          >
            <div
              // Header/Text
              className="flex flex-col items-center justify-center flex-3 text-white text-center p-4 md:p-10 my-10"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4 py-2">
                Hello! I'm{" "}
                <span className="text-myPrimary">John Aaron Apayong</span>
              </h1>
              <TypewriterEffect />
              <div className="md:flex">
                <a
                  href="#about"
                  className="flex items-center bg-myPrimary text-gray-900 py-2 px-6 rounded-md hover:bg-mySecondary transition hover:text-white mb-2 md:m-2"
                >
                  Download CV{" "}
                  <FaDownload className="ml-2 mt-[.2rem] text-[.9rem]" />
                </a>
                <Link
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={56}
                  className="flex items-center bg-myPrimary text-gray-900 py-2 px-6 rounded-md hover:bg-mySecondary transition hover:text-white md:m-2"
                >
                  View my work{" "}
                  <FaArrowRight className="ml-2 mt-[.2rem] text-[.9rem]" />
                </Link>
              </div>
            </div>
            <div
              // Image
              className="flex flex-2 items-center justify-center md:relative"
            >
              <img
                src={photo}
                alt="John Aaron Apayong"
                className="h-[13rem] md:h-max md:max-w-full md:max-h-full object-contain md:absolute bottom-0 right-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
