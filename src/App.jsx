import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <>
      <div className="bg-blue-950 w-screen h-screen text-color-text">
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
    </>
  );
}
