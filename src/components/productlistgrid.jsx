import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";

const Productlist = ({ productdata }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {productdata.map((item, idx) => {
          return (
            <div
              key={idx}
              className="relative bg-white border outline-none aspect-[6/4]"
              data-aos="fade-up"
              data-aos-offset="200"
            >
              <Link
                to="/gamezone/product-detail"
                className="block overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[6/4] w-full object-cover ease-in duration-300 hover:scale-[1.05]"
                />
              </Link>
              <div className="relative px-4 pt-4 pb-8">
                <div className="absolute -top-4 right-4 -mt-0.5">
                  <img
                    src={item.userImg}
                    alt={item.useralt}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                </div>
                <h1 className="text-lg text-primary uppercase">{item.price}</h1>
                <Link
                  to="/gamezone/product-detail"
                  className="hover:text-primary"
                >
                  <h2 className="text-sm font-medium">{item.title}</h2>
                </Link>
                <div className="mt-2 flex items-center opacity-50">
                  <BiMap className="mr-2" />
                  <h4 className="text-xs">{item.location}</h4>
                </div>
              </div>
              <div className="absolute flex items-center top-4 left-4">
                <button className="py-1 px-4 bg-primary text-white rounded-full text-xs mr-2">
                  Featured
                </button>
                <button className="py-1 px-4 bg-white rounded-full text-xs">
                  Urgent
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 sm:mt-7 lg:mt-14 flex justify-center">
        <button className="btn btn-primary transition duration-500 ease-in-out">
          Load More
        </button>
      </div>
    </>
  );
};

export default Productlist;
