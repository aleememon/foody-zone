import React from "react";
import { menuItems } from "../data/data";
const Navbar = ({ setData, data }) => {
  const handleSearch = (e) => {
    const searchValue = e.target.value;

    const filter = menuItems?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    if (searchValue === "") {
      setData(menuItems);
    }
    setData(filter);
  };

  const filteredFood = (type) => {
    const filter = menuItems.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    if (type === "all") {
      setData(menuItems);
    } else {
      setData(filter);
    }
  };

  return (
    <div className="bg-[#323334] p-8 md:p-10 md:h-[28vh]">
      <div className="md:p-5 flex flex-col gap-4 md:flex-row justify-between items-center">
        <h1 className="text-white text-4xl font-semibold">
          F<span className="text-[#FF0909]">oo</span>dy Z
          <span className="text-[#FF0909]">o</span>ne
        </h1>
        <div>
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Enter Food..."
            className="bg-[#323334] pl-2 h-8 w-56 rounded-sm text-white placeholder:text-white outline-none border-[1px] border-[#FF0909]"
          />
        </div>
      </div>
      <div className="text-white flex justify-center items-center gap-3 mt-6 md:mt-8">
        <div
          onClick={() => filteredFood("all")}
          className="bg-[#FF4343] hover:bg-red-500 px-2 md:px-4 py-0.5 rounded cursor-pointer text-base md:text-xl"
        >
          All
        </div>
        <div
          onClick={() => filteredFood("breakfast")}
          className="bg-[#FF4343] hover:bg-red-500 px-2 md:px-4 py-0.5 rounded cursor-pointer text-base md:text-xl"
        >
          Break Fast
        </div>
        <div
          onClick={() => filteredFood("lunch")}
          className="bg-[#FF4343] hover:bg-red-500 px-2 md:px-4 py-0.5 rounded cursor-pointer text-base md:text-xl"
        >
          Lunch
        </div>
        <div
          onClick={() => filteredFood("dinner")}
          className="bg-[#FF4343] hover:bg-red-500 px-2 md:px-4 py-0.5 rounded cursor-pointer text-base md:text-xl"
        >
          Dinner
        </div>
      </div>
    </div>
  );
};

export default Navbar;
