import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  // const [visible, setVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setIsMenuOpen(false);
  };

  const handleSectionChange = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveTab(entry.target.id); // Set active tab based on visible section
      }
    });
  };

  /*
  ** it detect when page is scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setVisible(currentScrollY <= lastScrollY); // Hide on scroll down
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  */

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Adjust if your sections are different

    const observer = new IntersectionObserver(handleSectionChange, {
      threshold: 0.6, // Trigger when 60% of the section is visible
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    /*
    ** old header
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
    */
    <header className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b-2 border-myAccent border-opacity-30">
      <nav className="bg-myBgColor p-4 md:px-10">
        <div className="flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={300}
            offset={-56}
            className="text-white font-bold"
          >
            Aaron
          </Link>

          <ul className="hidden md:flex space-x-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={300}
                offset={-56}
                className={`${
                  activeTab === "home"
                    ? "text-myPrimary font-bold"
                    : "text-white"
                } hover:text-myPrimary hover:font-bold`}
                onClick={() => handleTabClick("home")}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={300}
                offset={-56}
                className={`${
                  activeTab === "about"
                    ? "text-myPrimary font-bold"
                    : "text-white"
                } hover:text-myPrimary hover:font-bold`}
                onClick={() => handleTabClick("about")}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={300}
                offset={-56}
                className={`${
                  activeTab === "project"
                    ? "text-myPrimary font-bold"
                    : "text-white"
                } hover:text-myPrimary hover:font-bold`}
                onClick={() => handleTabClick("project")}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={300}
                offset={-56}
                className={`${
                  activeTab === "contact"
                    ? "text-myPrimary font-bold"
                    : "text-white"
                } hover:text-myPrimary hover:font-bold`}
                onClick={() => handleTabClick("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>

          <button onClick={toggleMenu} className="md:hidden">
            <FaBars className="fa-solid text-white text-2xl" />
          </button>
        </div>
        {isMenuOpen ? (
          <ul className="flex-col items-center md:hidden">
            <li className="py-2 mt-3">
              <Link
                to="home"
                smooth={true}
                duration={300}
                offset={-56}
                className={`${
                  activeTab === "contact"
                    ? "text-myPrimary font-bold"
                    : "text-white"
                } hover:text-myPrimary hover:font-bold`}
                onClick={() => handleTabClick("home")}
              >
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="about"
                smooth={true}
                duration={300}
                offset={-56}
                className={`${
                  activeTab === "contact"
                    ? "text-myPrimary font-bold"
                    : "text-white"
                } hover:text-myPrimary hover:font-bold`}
                onClick={() => handleTabClick("about")}
              >
                About
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="project"
                smooth={true}
                duration={300}
                offset={-56}
                className={`${
                  activeTab === "contact"
                    ? "text-myPrimary font-bold"
                    : "text-white"
                } hover:text-myPrimary hover:font-bold`}
                onClick={() => handleTabClick("project")}
              >
                Project
              </Link>
            </li>
            <li className="py-2">
              <Link
                to="contact"
                className={`${
                  activeTab === "contact"
                    ? "text-myPrimary font-bold"
                    : "text-white"
                } hover:text-myPrimary hover:font-bold`}
                onClick={() => handleTabClick("contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        ) : null}
      </nav>
    </header>
  );
};

export default NavBar;
