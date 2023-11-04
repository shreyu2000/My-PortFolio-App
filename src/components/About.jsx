import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>

        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi , I'm Shreya Dake. Nice to meet you. Please take a look
              around.
            </p>
          </div>

          <div>
            <i className="py-5"> You striked on my About Me page so let me tell you my story.</i><br/><br/>
            <p>
              Born on 1st of April 2000 . Born and brought up in Maharashtra .
              I completed my BTECH in Information Technology  in 2021 from Walchand College of Engineering ,Sangli .<br/>
              I have dedicated two years for Government exam Preparation which has developed in me the valuable skills of critical analysis ,problem solving ,discipline ,patience ,persevernce.
              Meanwhile I kept my passion for technology.<br/>
              I'm also proficient in Front end, back end and coding has become my major hobby .....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
