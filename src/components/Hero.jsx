import React from "react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-between mt-12 z-10 mx-24">
      <div className="flex flex-col items-start z-10 mr-24">
        <h1 className="text-7xl font-bold mb-8 font-robot ">
          {/* bg-gradient-to-r from-white via-white to-transparent text-transparent bg-clip-text */}
          Hi! I'm Ariel
        </h1>
        <p className="text-3xl mb-14">
          Check out my portfolio to see how I combine front-end design and
          back-end development. With a Bachelor's in Information Technology and
          a mission-ready certificate (levels 4-6), I create dynamic web
          solutions that look great and work smoothly.
        </p>
        <a
          className="bg-color-primary text-color-text text-3xl font-semibold py-4 px-7 rounded-3xl "
          href="mailto:arieljosephamano@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center">
        <img
          src="./profile.jpeg"
          alt="Profile Picture"
          className="w-full h-auto max-w-full rounded-xl"
        />
      </div>

      <div />
      <div />
    </section>
  );
}
