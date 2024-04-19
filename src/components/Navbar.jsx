import React from "react";
import Hamburger from "../common/Hamburger";

export default function Navbar() {
  // Function to handle hamburger click

  return (
    <nav className="relative flex items-center justify-between pt-8 mx-10">
      <a
        href="/"
        className="text-3xl font-semibold decoration-0 font-color-text"
      >
        Portfolio
      </a>
      <div className="flex">
        <div className="flex sm:hidden">
          <Hamburger></Hamburger>
        </div>
        <ul className="hidden gap-5 md:gap-12 sm:flex">
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
