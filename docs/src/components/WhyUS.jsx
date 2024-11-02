import React from "react";
import logo from "../assets/logo.png";
import wintertwo from "../assets/wintertwo.png";

const WhyUS = () => {
  return (
    <div className="bg-black text-white py-20" id="whyus">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={wintertwo}
            alt=""
            className="w-90 h-80 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-center mb-12 ">Why US</h2>
            <p className="text-lg mb-8 align-middle">
              With 25 years of sales experience and an additional 10 years
              specializing in OPC (Off Premise Contact) and Lead Generation, CMK
              Marketing brings a wealth of expertise to every engagement. We
              connect with hundreds of potential buyers at each event, reaching
              thousands throughout the year. Our approach is strategic and
              adaptable; we customize our booth setup for each event, ensuring
              it captures attention and invites interaction. By creating
              eye-catching displays and engaging experiences, we maximize
              visibility and make a lasting impression on everyone who passes
              by.
            </p>
            <div className="space-y-4"></div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                ></h3>
                <p></p>
              </div>
              <div>
                <h3
                  className="text-6xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                >
                  25+
                </h3>
                <p className="text-4xl">Years of Experience</p>
              </div>
              <div>
                <h3
                  className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500"
                ></h3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
