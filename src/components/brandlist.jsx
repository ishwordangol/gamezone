import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Brandlist = ({ branddata }) => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-1 sm:gap-2 lg:gap-4">
        {branddata.map((item, idx) => {
          return (
            <Link
              data-aos="fade-up"
              data-aos-offset="200"
              to="#"
              key={idx}
              className="p-4 h-28 sm:h-42 bg-white flex items-center justify-center border hover:border-primary"
            >
              <img src={item.src} alt={item.alt} key={idx} className="h-auto" />
            </Link>
          );
        })}
      </div>
      <div className="mt-4 sm:mt-7 lg:mt-14 flex justify-center">
        <button className="btn btn-primary transition duration-500 ease-in-out">
          View all listing
        </button>
      </div>
    </>
  );
};

export default Brandlist;
