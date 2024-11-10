import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-scroll";
import logo from "../../assets/svg/logo/logo.svg";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const tabs = ["home", "about", "project", "contact"];

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

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(handleSectionChange, {
      threshold: 0.6,
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
    <header className="fixed top-0 w-full z-50 transition-all duration-300 ease-in-out border-b-2 border-myAccent border-opacity-30">
      <nav
        className="bg-myBgColor p-4 md:px-10 lg:px-32"
        aria-label="Main Navigation"
      >
        <div className="flex items-center justify-between">
          <Link
            to="home"
            smooth={true}
            duration={300}
            offset={-56}
            className="text-white font-bold text-lg cursor-pointer"
            onClick={() => handleTabClick("home")}
          >
            <img src={logo} alt="Aaron" className="h-[5vh]" />
          </Link>

          <ul className="hidden md:flex space-x-4">
            {tabs.map((tab) => (
              <li key={tab}>
                <Link
                  to={tab}
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className={`${
                    activeTab === tab
                      ? "text-myPrimary font-bold"
                      : "text-white"
                  } hover:text-myPrimary hover:font-bold`}
                  onClick={() => handleTabClick(tab)}
                  aria-current={activeTab === tab ? "page" : undefined}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden"
            aria-label="Toggle navigation menu"
          >
            <FaBars className="fa-solid text-white text-2xl" />
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}
        >
          <ul
            className={`flex-col text-center md:hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            {tabs.map((tab) => (
              <li className="py-2 mt-3" key={tab}>
                <Link
                  to={tab}
                  smooth={true}
                  duration={300}
                  offset={-70}
                  className={`${
                    activeTab === tab
                      ? "text-myPrimary font-bold"
                      : "text-white"
                  } hover:text-myPrimary hover:font-bold cursor-pointer`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
