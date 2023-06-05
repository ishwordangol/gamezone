import React from "react";
import { Link } from "react-router-dom";

const Categorylist = () => {
  return (
    <div className="grid grid-cols-4 gap-8">
      <Link
        to="/gamezone/user/categoryforms"
        className="bg-white category-link hover:shadow-lg"
      >
        <div className="relative flex items-center justify-center h-24 xl:h-32">
          <span className="nav-icon icon-gaming-system text-4xl xl:text-6xl text-primary"></span>
        </div>
        <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
          Gaming PC
        </h4>
      </Link>
      <Link
        to="/gamezone/user/categoryforms"
        className="bg-white category-link hover:shadow-lg"
      >
        <div className="relative flex items-center justify-center h-24 xl:h-32">
          <span className="nav-icon icon-gaming-system text-4xl xl:text-6xl text-primary"></span>
        </div>
        <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
          Gaming Laptops
        </h4>
      </Link>
      <Link
        to="/gamezone/user/categoryforms"
        className="bg-white category-link hover:shadow-lg"
      >
        <div className="relative flex items-center justify-center h-24 xl:h-32">
          <span className="nav-icon icon-hard-disc text-4xl xl:text-6xl text-primary"></span>
        </div>
        <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
          PC/Laptops Parts
        </h4>
      </Link>
      <Link
        to="/gamezone/user/categoryforms"
        className="bg-white category-link hover:shadow-lg"
      >
        <div className="relative flex items-center justify-center h-24 xl:h-32">
          <span className="nav-icon icon-cd text-4xl xl:text-6xl text-primary"></span>
        </div>
        <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
          Consoles
        </h4>
      </Link>
      <Link
        to="/gamezone/user/categoryforms"
        className="bg-white category-link hover:shadow-lg"
      >
        <div className="relative flex items-center justify-center h-24 xl:h-32">
          <span className="nav-icon icon-joystick text-4xl xl:text-6xl text-primary"></span>
        </div>
        <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
          Accessories
        </h4>
      </Link>
      <Link
        to="/gamezone/user/categoryforms"
        className="bg-white category-link hover:shadow-lg"
      >
        <div className="relative flex items-center justify-center h-24 xl:h-32">
          <span className="nav-icon icon-cd text-4xl xl:text-6xl text-primary"></span>
        </div>
        <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
          Console Games
        </h4>
      </Link>
      <Link
        to="/gamezone/user/categoryforms"
        className="bg-white category-link hover:shadow-lg"
      >
        <div className="relative flex items-center justify-center h-24 xl:h-32">
          <span className="nav-icon icon-woofer text-4xl xl:text-6xl text-primary"></span>
        </div>
        <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
          Others
        </h4>
      </Link>
    </div>
  );
};

export default Categorylist;
