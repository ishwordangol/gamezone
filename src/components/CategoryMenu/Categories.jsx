import React from "react";
import menuItems from "../../components/data/menuItems";
import CategoryItems from "./CategoryItems";
import "./categorymenu.css";

const Categories = () => {
  return (
    <>
      <div className="grid grid-cols-7 gap-8">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <CategoryItems items={menu} key={index} depthLevel={depthLevel} />
          );
        })}
      </div>
    </>
  );
};

export default Categories;
