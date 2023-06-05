import React from "react";
import { Link } from "react-router-dom";

const Mainmenu = () => {
  return (
    <div className="flex items-center overflow-auto">
      <Link
        to="/gamezone/category-product-listing"
        className="whitespace-nowrap font-medium mr-4 hover:text-primary"
      >
        Gaming PC
      </Link>
      <Link
        to="/gamezone/category-product-listing"
        className="whitespace-nowrap font-medium mr-4 hover:text-primary"
      >
        Gaming laptop
      </Link>
      <Link
        to="/gamezone/category-product-listing"
        className="whitespace-nowrap font-medium mr-4 hover:text-primary"
      >
        PC/Laptop Parts
      </Link>
      <Link
        to="/gamezone/category-product-listing"
        className="whitespace-nowrap font-medium mr-4 hover:text-primary"
      >
        Consoles
      </Link>
      <Link
        to="/gamezone/category-product-listing"
        className="whitespace-nowrap font-medium mr-4 hover:text-primary"
      >
        Accessories
      </Link>
      <Link
        to="/gamezone/category-product-listing"
        className="whitespace-nowrap font-medium mr-4 hover:text-primary"
      >
        Console Games
      </Link>
      <Link
        to="/gamezone/category-product-listing"
        className="whitespace-nowrap font-medium mr-4 hover:text-primary"
      >
        Others
      </Link>
    </div>
  );
};

export default Mainmenu;
