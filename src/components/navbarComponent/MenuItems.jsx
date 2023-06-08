import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { HiChevronDown, HiChevronDoubleRight } from "react-icons/hi";

const MenuItems = ({ items, depthLevel }) => {
  let ref = useRef();
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.name}{" "}
            {depthLevel > 0 ? (
              <HiChevronDoubleRight className="text-xs" />
            ) : (
              <HiChevronDown className="text-base" />
            )}
          </button>
          <Dropdown
            depthLevel={depthLevel}
            dropdown={dropdown}
            submenus={items.submenu}
          />
        </>
      ) : (
        <Link to={items.link}>{items.name}</Link>
      )}
    </li>
  );
};

export default MenuItems;
