import { CalendarOutlined } from "@ant-design/icons";
import { Button, Flex, Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const Navlinks = (
    <>
      <Link className="hover:text-orange-400">Home</Link>
      <Link className="hover:text-orange-400">Properties</Link>
      <Link className="hover:text-orange-400">Property Details</Link>
      <Link className="hover:text-orange-400">Conatct Us</Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-x-4"
          >
            {Navlinks}
          </ul>
        </div>
        <Link className="ml-64 text-3xl  font-extrabold"> VILLA</Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 space-x-16 font-bold text-xl  ">
          {Navlinks}
        </ul>
      </div>
      <div className="navbar-end text-xl">
        <button className="group relative flex items-center bg-black text-white px-6 py-2 rounded-full mr-96 overflow-visible">
          <span className="absolute -left-4 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
            <CalendarOutlined className="text-white text-lg" />
          </span>

          <span className="ml-6 group-hover:text-orange-400 text-lg font-medium">
            Schedule a visit
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
