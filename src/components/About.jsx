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
              Hi , I'm Shreya Dake , nice to meet you. Please take a look
              around.
            </p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Expedita, aspernatur iste eligendi dolorem neque asperiores magni
              aliquam minus ea? Beatae distinctio blanditiis amet magnam
              similique reprehenderit accusantium voluptatem rerum officia?
              Neque voluptatum blanditiis fuga exercitationem numquam assumenda
              ipsam, tenetur vel sunt quis perspiciatis error, optio.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
