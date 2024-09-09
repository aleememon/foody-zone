import React from "react";
import bg from "../data/images/bg.png";
import { menuItems } from "../data/data";

const HeroSection = ({ data }) => {
  return (
    <div
      className="min-h-screen md:h-[72vh] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex justify-center items-center p-10 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-white">
          {data.map((item) => (
            <div
              className="relative p-[2px] bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg"
              key={item.id}
            >
              <div className="flex items-center bg-gray-900 rounded-lg p-5">
                <div>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-16 h-16 mr-4"
                  />
                </div>
                <div>
                  <h1 className="font-semibold text-lg">{item.name}</h1>
                  <h1 className="w-48">{item.text}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
