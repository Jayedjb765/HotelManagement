import React from "react";
import { RiCalendarScheduleLine } from "react-icons/ri";
const Features = () => {
  return (
    <div>
      <div className="ml-20">
        <img
          className="w-96 relative"
          src="https://i.ibb.co.com/gLv1DGNs/aranprime-Kbyt-Cp-I1i5-I-unsplash.jpg"
          alt=""
        />
        <RiCalendarScheduleLine className="text-9xl absolute -mt-16 -ml-20 rounded-full text-white bg-orange-500 p-4"></RiCalendarScheduleLine>
      </div>
    </div>
  );
};

export default Features;
