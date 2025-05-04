import React from "react";
import { Collapse } from "antd";
import { RiCalendarScheduleLine } from "react-icons/ri";
const Features = () => {
  const text = `
  Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.
`;
  const items = [
    {
      key: "1",
      label: "Best useful links ?",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "How does this work ?",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "Why is Villa Agency the best ?",
      children: <p>{text}</p>,
    },
  ];
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
          <div>
            <Collapse accordion items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
