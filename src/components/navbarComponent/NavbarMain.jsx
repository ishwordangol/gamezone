import React from "react";
import menuItems from "../../components/data/menuItems";
import MenuItems from "./MenuItems";
import "./navbar.css";

const NavbarMain = () => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </nav>
  );
};

export default NavbarMain;
