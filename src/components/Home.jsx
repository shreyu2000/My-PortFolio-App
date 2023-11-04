import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hey , My Name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccc6f6]">
          Shreya Dake
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          And I'm a Software Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          {" "}
          "I'm a skilled software developer with a passion for creating elegant and efficient solutions. My commitment to innovation and problem-solving drives me to craft software that not only meets user needs but also exceeds expectations."
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
