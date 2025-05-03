import React from "react";
import Navbar from "./Navbarr/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

const Root = () => {
  return (
    <div>
      <div className="ml-3 mr-3">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Root;
