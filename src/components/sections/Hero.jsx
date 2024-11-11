import React from "react";
import TypewriterEffect from "../hero/TypewriterEffect";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import myPhoto from "../../assets/images/photo.webp";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section id="home">
      <div className="h-[100vh]">
        {/*This div ↓ just remove the overlay (added space)*/}
        <div className="h-[3.5rem] bg-hero"></div>
        <div
          // for Background
          className="h-auto md:h-[70vh] bg-hero"
        >
          <div
            // just to flex the 2 div to half
            className="flex flex-col md:flex-row h-full"
          >
            <div
              // Header/Text
              className="flex flex-col items-center justify-center flex-3  text-center p-4 md:p-10 my-10"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-4 py-2">
                Hello! I'm{" "}
                <span className="text-myPrimary">John Aaron Apayong</span>
              </h1>
              <TypewriterEffect />
              <div className="md:flex">
                <a
                  href="/resume-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center button mb-2 md:m-2"
                >
                  <FaDownload className="mr-2 mb-[.18rem] text-[.9rem]" />{" "}
                  Download CV
                </a>
                <Link
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className="flex items-center button md:m-2"
                  href="#about"
                >
                  View my work <FaArrowRight className="ml-2 text-[.9rem]" />
                </Link>
              </div>
            </div>
            <div
              // Image
              className="flex flex-2 items-center justify-center md:relative"
            >
              <img
                src={myPhoto}
                height="200"
                width="200"
                alt="John Aaron Apayong"
                className="w-full max-w-[13rem] md:h-max md:max-w-full md:max-h-full object-contain md:absolute bottom-0 right-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
