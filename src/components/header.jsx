import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

export default function Header(props) {
  const [scroll, setScroll] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
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
          <div className="flex items-center">
            <div className="block md:hidden mr-2" onClick={handleShowNavbar}>
              <GiHamburgerMenu
                size={24}
                className={scroll ? "text-white" : ""}
              />
            </div>
            <div
              className={`w-0 block md:hidden fixed left-0 top-0 bg-white h-screen nav-elements  ${
                showNavbar && "active"
              }`}
            >
              <div className="w-72 h-screen bg-white overflow-auto">
                <Nav />
              </div>
              <div
                className="close-icon fixed top-12 left-[310px] inline-flex items-center justify-center h-10 w-10 bg-white rounded-full md:hidden"
                onClick={handleShowNavbar}
              >
                <GrClose size={20} />
              </div>
            </div>
            <img
              src={
                scroll
                  ? "../../../assets/logo-white.png"
                  : "../../../assets/logo.png"
              }
              alt="GameZone Logo"
              className="h-16 md:h-auto"
            />
          </div>
          <nav>
            <div className="flex items-center">
              <Link
                href="/"
                className={`block mr-2 sm:mr-4 lg:mr-8 hover:text-primary ${
                  scroll ? "text-white" : ""
                }`}
              >
                <span class="icon-notification text-xl"></span>
              </Link>
              <Link
                href="/"
                className={`flex items-center mr-2 sm:mr-4 lg:mr-8 hover:text-primary ${
                  scroll ? " text-white" : ""
                }`}
              >
                <span class="icon-user text-xl"></span>
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
