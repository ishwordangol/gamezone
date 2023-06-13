import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import CategoyChild from "./CategoryChild";

const CategoryItems = ({ items, depthLevel }) => {
  let ref = useRef();
  const [childItems, setChildItems] = useState(true);

  useEffect(() => {
    const handler = (event) => {
      if (childItems && ref.current && !ref.current.contains(event.target)) {
        setChildItems(true);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [childItems]);

  return (
    <>
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={childItems ? "false" : "true"}
            onClick={() => setChildItems((prev) => !prev)}
            className={`bg-white hover:shadow-lg w-full ${
              childItems ? "block" : "hidden"
            }`}
            ref={ref}
          >
            <div className="relative flex items-center justify-center h-24 xl:h-32">
              <span
                className={`nav-icon text-4xl xl:text-6xl text-primary ${items.icon}`}
              ></span>
            </div>
            <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
              {items.name}
            </h4>
          </button>
          <CategoyChild
            depthLevel={depthLevel}
            categorychild={childItems}
            submenus={items.submenu}
          />
        </>
      ) : (
        <Link to={items.link} className="bg-white hover:shadow-lg" ref={ref}>
          <div className="relative flex items-center justify-center h-24 xl:h-32">
            <span
              className={`nav-icon text-4xl xl:text-6xl text-primary ${items.icon}`}
            ></span>
          </div>
          <h4 className="text-center pt-8 px-3 pb-3 md:p-3 border-t text-sm font-semibold">
            {items.name}
          </h4>
        </Link>
      )}
    </>
  );
};

export default CategoryItems;
