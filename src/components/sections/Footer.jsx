import React from "react";

const Footer = () => {
  return (
    <footer className="bg-mySecondary bg-opacity-15 border-t-2 border-lightPrimary dark:border-myPrimary py-12">
      <div className="container px-4 md:mx-auto text-center">
        © {new Date().getFullYear()} John Aaron Apayong. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
