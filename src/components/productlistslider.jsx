import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { BiMap } from "react-icons/bi";

const Productlist = ({ productdata }) => {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
    });
    AOS.refresh();
  }, []);

  const settings = {
    dots: false,
    // centerMode: true,
    // centerPadding: "16px",
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings} className="ProductSlider">
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
      </Slider>
      <div className="mt-4 sm:mt-7 lg:mt-14 flex justify-center">
        <button className="btn btn-primary transition duration-500 ease-in-out">
          View all listing
        </button>
      </div>
    </>
  );
};

export default Productlist;
