import React from "react";
import { Link } from "react-router-dom";
import MenuItems from "../components/data/menuItems";

const Mainmenu = () => {
  return (
    <div className="flex items-center overflow-auto">
      {MenuItems.map((menu, index) => {
        return (
          <Link
            to={menu.path}
            key={index}
            className="whitespace-nowrap font-medium mr-8 xl:mr-12 hover:text-primary"
          >
            {menu.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Mainmenu;
