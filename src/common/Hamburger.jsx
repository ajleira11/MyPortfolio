import React from "react";
import { useState } from "react";

export default function Hamburger({ handleBurger }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle click on the hamburger icon
  const handleClick = () => {
    // Toggle the value of isOpen when the icon is clicked
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  return (
    <div className="w-10 h-10 relative cursor-pointer" onClick={handleClick}>
      <span
        className={`w-full bg-white h-1 block absolute top-1/2 left-1/2 transform  ${
          isOpen
            ? "-translate-x-1/2 -translate-y-0.5 -rotate-45"
            : "-translate-x-1/2 -translate-y-3"
        }`}
      ></span>
      <span
        className={`bg-white h-1 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          isOpen ? "w-0" : "w-full"
        }`}
      ></span>
      <span
        className={`w-full bg-white h-1 block absolute top-1/2 left-1/2 transform  ${
          isOpen
            ? "-translate-x-1/2 -translate-y-0.5 rotate-45"
            : "-translate-x-1/2 translate-y-2"
        }`}
      ></span>

      <h1>
        {/* <span className="w-full bg-white h-1 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 -rotate-45"></span>
        <span className="w-full bg-white h-1 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
        <span className="w-full bg-white h-1 block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0.5 rotate-45">

        </span> */}
      </h1>
    </div>
  );
}
