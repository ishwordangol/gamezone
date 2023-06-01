import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <header
      className={`fixed top-0 w-full z-50 ${
        scroll
          ? "pt-3 pb-3.5 bg-secondary animate__animated animate__fadeInDown"
          : "py-1.5"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link className="flex items-center" to="/gamezone">
            <img
              src={
                scroll
                  ? "/gamezone/assets/logo-white.png"
                  : "/gamezone/assets/logo.png"
              }
              alt="GameZone Logo"
              className="h-16 md:h-auto"
            />
          </Link>
          <nav>
            <div className="flex items-center">
              <Link
                href="/"
                className={`block mr-4 lg:mr-8 hover:text-primary ${
                  scroll ? "text-white" : ""
                }`}
              >
                <span className="icon-notification text-xl"></span>
              </Link>
              <Link
                href="/"
                className={`flex items-center mr-4 lg:mr-8 hover:text-primary ${
                  scroll ? " text-white" : ""
                }`}
              >
                <span className="icon-user text-xl"></span>
                <span className="hidden sm:block ml-2 lg:ml-3 text-sm">
                  Login/ Signup
                </span>
              </Link>
              <button className="btn btn-primary transition duration-500 ease-in-out">
                Post your Ads
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
