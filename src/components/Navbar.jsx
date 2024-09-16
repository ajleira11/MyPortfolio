import React from "react";
import Hamburger from "../common/Hamburger";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle click on the hamburger icon
  const toggleNav = () => {
    // Toggle the value of isOpen when the icon is clicked
    setIsOpen(!isOpen);
    // console.log(isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="relative flex items-center justify-between pt-8 mx-10 z-10">
      <a
        href="/"
        className="text-3xl font-semibold decoration-0 font-color-text"
      >
        Portfolio
      </a>
      <div className="flex">
        <div className="flex sm:hidden" onClick={toggleNav}>
          <Hamburger></Hamburger>
        </div>
        <ul
          className={`gap-5 md:gap-12 sm:flex ${
            isOpen
              ? "flex flex-col absolute top-20 -right-0 z-50 rounded-lg py-4 px-7 items-center bg-color-menu"
              : "hidden"
          }`}
          // style={{ backgroundColor: "rgba(25, 55, 109, 0.9)" }}
        >
          <li>
            <a href="#about" className="text-2xl">
              About
            </a>
          </li>
          <li>
            <a href="#exp" className="text-2xl">
              Experience
            </a>
          </li>
          <li>
            <a href="#proj" className="text-2xl">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-2xl">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
