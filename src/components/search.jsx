import React from "react";

const search = () => {
  return (
    <div className="w-full lg:max-w-[800px]">
      <label
        htmlFor="search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
        <input
          type="search"
          id="search"
          className="srchshadow block w-full py-3 px-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white outline-none"
          placeholder="Search anything.."
          required
        />
        <button
          type="submit"
          className="flex items-center text-white absolute right-1.5 top-1/2 -translate-y-1/2 btn btn-primary text-sm px-4 py-2 transition duration-500 ease-in-out"
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
  );
};

export default search;
