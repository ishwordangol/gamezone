import React from "react";
import Nav from "./navbar";

const breadcrumb = () => {
  return (
    <div className="relative">
      <img
        src="/gamezone/assets/inner-bg.jpg"
        alt="Banner 1"
        className="md:h-[400px] w-full object-cover"
      />
      <div className="images-icon">
        <img
          src="/gamezone/assets/images/sliderbanner/triangle-right.png"
          alt="triangle"
          className="icon-triangle h-[50px] md:h-[60px] lg:h-[70px] :xl:h-[85px]"
        />
        <div className="relative icon-circle">
          <img
            src="/gamezone/assets/images/sliderbanner/circle.png"
            alt="circle"
            className="icon-circle-img h-[50px] md:h-[60px] lg:h-[70px] :xl:h-[90px]"
          />
          <div className="absolute top-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300"></span>
            </span>
          </div>
        </div>

        <img
          src="/gamezone/assets/images/sliderbanner/diagonal.png"
          alt="diagonal"
          className="icon-diagonal h-[50px] md:h-[60px] lg:h-[70px] :xl:h-[80px]"
        />
        <img
          src="/gamezone/assets/images/sliderbanner/inclined-cross.png"
          alt="inclined-cross"
          className="icon-inclined-cross h-[50px] md:h-[60px] lg:h-[70px] :xl:h-[70px]"
        />
      </div>
      <div className="hidden container md:inline-flex md:justify-center absolute bottom-[68px] left-1/2 -translate-x-1/2">
        <div className="flex md:justify-center">
          <Nav />
        </div>
      </div>
    </div>
  );
};

export default breadcrumb;
