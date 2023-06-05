import React, { useState } from "react";
import ReactSelect from "../components/Reactselect";
import { CiSliderVertical } from "react-icons/ci";
import { TbZoomReset, TbStar } from "react-icons/tb";

const Advancesearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cities = [
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

  const makers = [
    { value: "Abc", label: "Abc" },
    { value: "All Cities", label: "All Cities" },
    { value: "Abu Dhabhi", label: "Abu Dhabhi" },
    { value: "Ras Al Khaimah", label: "Ras Al Khaimah" },
  ];
  return (
    <>
      <div className="mb-4">
        <label className="font-semibold mb-2 block">Keywords</label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-100 text-gray-700 text-sm rounded-lg block w-full pl-10 p-2.5 outline-none"
            placeholder="Search your keyword"
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <ReactSelect
          options={cities}
          label="City"
          placeholder="Select Cities"
        />
      </div>
      <div className="mb-4">
        <ReactSelect
          options={makers}
          label="Makers"
          placeholder="Select Makers"
        />
      </div>
      <div className="mb-4">
        <label className="font-semibold mb-2 block">Price Range</label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            {" "}
            <input
              type="text"
              id="simple-search"
              className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none"
              placeholder="0"
              required
            />
          </div>
          <div>
            {" "}
            <input
              type="text"
              id="simple-search"
              className="bg-gray-100 text-sm text-gray-700  rounded-lg block w-full p-2.5 outline-none"
              placeholder="Any"
              required
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="font-semibold mb-2 block">Year</label>
        <div className="grid grid-cols-2 gap-2">
          <div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none"
              placeholder="From"
              required
            />
          </div>
          <div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none"
              placeholder="To"
              required
            />
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="font-semibold mb-2 block">Feature1</label>
        <div className="checkbox mb-2">
          <input
            id="product-category"
            name="product-category"
            type="checkbox"
            value="yes"
          />
          <label htmlFor="product-category">Game1</label>
        </div>
        <div className="checkbox mb-2">
          <input
            id="product-category"
            name="product-category"
            type="checkbox"
            value="yes"
          />
          <label htmlFor="product-category">Game2</label>
        </div>
        <div className="checkbox mb-2">
          <input
            id="product-category"
            name="product-category"
            type="checkbox"
            value="yes"
          />
          <label htmlFor="product-category">Game3</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="font-semibold mb-2 block">Feature2</label>
        <div className="checkbox mb-2">
          <input
            id="product-category"
            name="product-category"
            type="checkbox"
            value="yes"
          />
          <label htmlFor="product-category">Game1</label>
        </div>
        <div className="checkbox mb-2">
          <input
            id="product-category"
            name="product-category"
            type="checkbox"
            value="yes"
          />
          <label htmlFor="product-category">Game2</label>
        </div>
        <div className="checkbox mb-2">
          <input
            id="product-category"
            name="product-category"
            type="checkbox"
            value="yes"
          />
          <label htmlFor="product-category">Game3</label>
        </div>
      </div>
      <div className="mb-8">
        <button
          type="button"
          className="btn-toggle mb-4 font-semibold flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="icon-toggleSlide bg-gray-100 flex items-center justify-center w-10 h-10 rounded-full mr-2">
            <CiSliderVertical />
          </span>
          <span className="toggletext">Other Features</span>
        </button>
        {isOpen && (
          <div>
            <label className="font-semibold mb-2 block">Others</label>
            <div className="grid grid-cols-2 gap-2">
              <div className="checkbox">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label htmlFor="product-category">Game1</label>
              </div>
              <div className="checkbox">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label htmlFor="product-category">Game2</label>
              </div>
              <div className="checkbox">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label htmlFor="product-category">Game3</label>
              </div>
              <div className="checkbox">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label htmlFor="product-category">Game4</label>
              </div>
              <div className="checkbox">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label htmlFor="product-category">Game5</label>
              </div>
              <div className="checkbox">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label htmlFor="product-category">Game6</label>
              </div>
              <div className="checkbox">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label htmlFor="product-category">Game7</label>
              </div>
              <div className="checkbox">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label htmlFor="product-category">Game8</label>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="relative mb-4">
        <button
          type="submit"
          className="w-full flex items-center justify-center text-white rounded-lg btn-primary text-sm px-4 py-2.5 transition duration-500 ease-in-out"
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
      <div className="flex justify-between items-center">
        <button className="flex items-center hover:text-primary">
          <TbZoomReset />
          <span className="ml-2">Reset Search</span>
        </button>
        <button className="flex items-center hover:text-primary">
          <TbStar />
          <span className="ml-2">Save Search</span>
        </button>
      </div>
    </>
  );
};

export default Advancesearch;
