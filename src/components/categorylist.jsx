import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Stepper, Step } from "react-form-stepper";

const Categorylist = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const handleNextStep = () =>
    activeStep <= 1 ? setActiveStep(activeStep + 1) : "";
  const handleBackStep = () =>
    activeStep >= 1 ? setActiveStep(activeStep - 1) : "";
  const stepStyleConfig = {
    activeBgColor: "#ff4159",
    completedBgColor: "#00ee99",
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-8">
        <button
          className="bg-white category-link hover:shadow-lg"
          onClick={() => setShowModal(true)}
        >
          <div className="relative flex items-center justify-center h-24 xl:h-32">
            <span className="nav-icon icon-gaming-system text-4xl xl:text-6xl text-primary"></span>
          </div>
          <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
            Gaming PC
          </h4>
        </button>
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
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[999] outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-3 border-b border-solid rounded-t">
                  <h3 className="text-xl font-semibold">Gaming System</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-50 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto min-w-[600px]">
                  <Stepper
                    styleConfig={stepStyleConfig}
                    activeStep={activeStep}
                  >
                    <Step label="Basic Details" />
                    <Step label="Specifications" />
                  </Stepper>
                  {activeStep === 0 && (
                    <div className="form-groupWrapper mt-4">
                      <div className="form-group">
                        <label className="font-semibold mb-2 block">
                          Advertisement Title*
                        </label>
                        <div>
                          <input
                            type="text"
                            id="name"
                            className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none"
                            placeholder="Enter Title"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {activeStep === 1 && <h1>step two</h1>}
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-gray-200 btn  transition duration-500 ease-in-out mr-2"
                    onClick={handleBackStep}
                  >
                    Back
                  </button>
                  <button
                    className="btn btn-primary transition duration-500 ease-in-out"
                    onClick={handleNextStep}
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-50 fixed inset-0 z-[99] bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Categorylist;
