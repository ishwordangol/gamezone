import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <nav
      data-aos="fade-up"
      className="w-full srchshadow grid grid-cols-2 xs:grid-cols-3 gap-4 md:gap-0 md:inline-flex md:flex-wrap justify-center"
    >
      <Link
        to="#"
        className="p-0 bg-white justify-between inline-block md:border-r w-full md:w-[140px] xl:w-[180px]"
      >
        <div className="flex items-center justify-center h-24 xl:h-32">
          <span class="nav-icon icon-cd text-4xl xl:text-6xl text-primary"></span>
          <div className="absolute ml-0 nav-text block flex-col items-center justify-center">
            <h1 className="text-primary text-xl md:text-3xl xl:text-4xl font-medium">
              260
            </h1>
            <span className="text-xs md:text-base block">Active Ads</span>
          </div>
        </div>
        <h4 className="text-center p-3 border-t text-sm font-medium">
          Video Games
        </h4>
      </Link>
      <Link
        to="#"
        className="p-0 bg-white justify-between inline-block md:border-r w-full md:w-[140px] xl:w-[180px]"
      >
        <div className="flex items-center justify-center h-24 xl:h-32">
          <span class="nav-icon icon-cd text-4xl xl:text-6xl text-primary"></span>
          <div className="absolute ml-0 nav-text block flex-col items-center justify-center">
            <h1 className="text-primary text-xl md:text-3xl xl:text-4xl font-medium">
              260
            </h1>
            <span className="text-xs md:text-base block">Active Ads</span>
          </div>
        </div>
        <h4 className="text-center p-3 border-t text-sm font-medium">
          Gaming System
        </h4>
      </Link>
      <Link
        to="#"
        className="p-0 bg-white justify-between inline-block md:border-r w-full md:w-[140px] xl:w-[180px]"
      >
        <div className="flex items-center justify-center h-24 xl:h-32">
          <span class="nav-icon icon-hard-disc text-4xl xl:text-6xl text-primary"></span>
          <div className="absolute ml-0 nav-text block flex-col items-center justify-center">
            <h1 className="text-primary text-xl md:text-3xl xl:text-4xl font-medium">
              260
            </h1>
            <span className="text-xs md:text-base block">Active Ads</span>
          </div>
        </div>
        <h4 className="text-center p-3 border-t text-sm font-medium">
          Computer Parts
        </h4>
      </Link>
      <Link
        to="#"
        className="p-0 bg-white justify-between inline-block md:border-r w-full md:w-[140px] xl:w-[180px]"
      >
        <div className="flex items-center justify-center h-24 xl:h-32">
          <span class="nav-icon icon-joystick text-4xl xl:text-6xl text-primary"></span>
          <div className="absolute ml-0 nav-text block flex-col items-center justify-center">
            <h1 className="text-primary text-xl md:text-3xl xl:text-4xl font-medium">
              260
            </h1>
            <span className="text-xs md:text-base block">Active Ads</span>
          </div>
        </div>
        <h4 className="text-center p-3 border-t text-sm font-medium">
          Accessories
        </h4>
      </Link>
      <Link
        to="#"
        className="p-0 bg-white justify-between inline-block md:border-r w-full md:w-[140px] xl:w-[180px]"
      >
        <div className="flex items-center justify-center h-24 xl:h-32">
          <span class="nav-icon icon-woofer text-4xl xl:text-6xl text-primary"></span>
          <div className="absolute ml-0 nav-text block flex-col items-center justify-center">
            <h1 className="text-primary text-xl md:text-3xl xl:text-4xl font-medium">
              260
            </h1>
            <span className="text-xs md:text-base block">Active Ads</span>
          </div>
        </div>
        <h4 className="text-center p-3 border-t text-sm font-medium">Others</h4>
      </Link>
    </nav>
  );
};

export default Navbar;
