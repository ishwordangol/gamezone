import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Mainmenu from "../components/navbarComponent/NavbarMain";

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const navigate = useNavigate();

  const navigateToCategoryPage = () => {
    // 👇️ navigate to /categorypage
    navigate("/gamezone/user/catgorypage");
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  return (
    <header
      className={` header_wrapper w-full z-50 ${
        scroll
          ? "bg-secondary animate__animated animate__fadeInDown fixed top-0"
          : "relative"
      }`}
    >
      <div className={scroll ? "pt-3 pb-3.5" : "py-1.5"}>
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
                className={`${scroll ? "h-12 md:h-16" : "h-16 md:h-auto"}`}
              />
            </Link>
            <nav>
              <div className="flex items-center">
                <Link
                  href="/"
                  className={`hidden lg:block mr-4 lg:mr-8 hover:text-primary ${
                    scroll ? "text-white" : ""
                  }`}
                >
                  <span className="icon-notification text-xl"></span>
                </Link>
                <Link
                  href="/"
                  className={`hidden lg:flex items-center mr-4 lg:mr-8 hover:text-primary ${
                    scroll ? " text-white" : ""
                  }`}
                >
                  <span className="icon-user text-xl"></span>
                  <span className="hidden sm:block ml-2 lg:ml-3 text-sm">
                    Login/ Signup
                  </span>
                </Link>
                <button
                  className="btn btn-primary transition duration-500 ease-in-out"
                  onClick={navigateToCategoryPage}
                >
                  Post your Ads
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="hidden lg:block headerbottom border-t border-b bg-white">
        <div className="container">
          <div>
            <Mainmenu />
          </div>
        </div>
      </div>
    </header>
  );
}
