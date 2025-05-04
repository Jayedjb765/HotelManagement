import React from "react";
import { RiCalendarScheduleLine } from "react-icons/ri";
const Features = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <img
            className="w-[500px] relative"
            src="https://i.ibb.co.com/gLv1DGNs/aranprime-Kbyt-Cp-I1i5-I-unsplash.jpg"
            alt=""
          />
          <RiCalendarScheduleLine className="text-9xl absolute -mt-16 -ml-20 rounded-full text-white bg-orange-500 p-4"></RiCalendarScheduleLine>
        </div>
        <div>
          <div>
            <h3 className="text-2xl text-pink-400 font-bold">| Featured</h3>
            <h1 className="text-7xl font-semibold">
              Best Appartment <br /> & Sea view
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
