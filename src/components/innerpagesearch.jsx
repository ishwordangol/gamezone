import React from "react";
import ReactSelect from "../components/Reactselect";
import { RiAlignLeft } from "react-icons/ri";

const InnerpageSearch = () => {
  const categories = [
    { value: "Gaming PC", label: "Gaming PC" },
    { value: "Gaming Laptops", label: "Gaming Laptops" },
    { value: "PC/Laptop Parts", label: "PC/Laptop Parts" },
    { value: "Consoles", label: "Consoles" },
    { value: "Accessories", label: "Accessories" },
    { value: "Console Games", label: "Console Games" },
    { value: "Others", label: "Others" },
  ];

  const areas = [
    { value: "Dubai", label: "Dubai" },
    { value: "All Cities", label: "All Cities" },
    { value: "Abu Dhabhi", label: "Abu Dhabhi" },
    { value: "Ras Al Khaimah", label: "Ras Al Khaimah" },
    { value: "Sharjah", label: "Sharjah" },
    { value: "Fujairah", label: "Fujairah" },
    { value: "Ajman", label: "Ajman" },
    { value: "Umm Al Quwain", label: "Umm Al Quwain" },
    { value: "Al Ain", label: "Al Ain" },
  ];
  return (
    <>
      <div className="srchshadow block w-full py-1 px-1.5 border border-gray-300 rounded-lg bg-white">
        <div className="flex flex-wrap gap-1 lg:gap-0 items-center">
          <div className="w-full lg:w-auto flex items-center searchdropdown relative lg:border-r">
            <RiAlignLeft className="hidden lg:block absolute left-1.5 top-1/2 -translate-y-1/2 text-2xl" />
            <ReactSelect options={categories} placeholder="All Categories" />
          </div>

          <div className="w-full lg:w-auto flex-1 rounded-lg lg:rounded-none lg:border-r">
            <div className="relative">
              <input
                type="search"
                id="search"
                className="rounded-lg lg:rounded-none bg-gray-100 lg:bg-transparent w-full py-2 px-8 text-sm text-black outline-none placeholder-black"
                placeholder="Search anything.."
                required
              />
            </div>
          </div>
          <div className="w-full lg:w-auto flex items-center searchdropdown relative lg:mr-8">
            <ReactSelect options={areas} placeholder="Select Areas" />
          </div>
          <button
            type="submit"
            className="mt-1 w-full lg:w-auto justify-center lg:mt-0 lg:justify-normal flex items-center text-white btn btn-primary text-sm px-4 py-2 transition duration-500 ease-in-out"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span>Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default InnerpageSearch;
