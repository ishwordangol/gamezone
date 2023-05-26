import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

const footer = () => {
  return (
    <footer>
      <div className="pt-5 pb-4 sm:pt-10 sm:pb-8 lg:pt-20 lg:pb-16">
        <div className="container">
          <div className="grid grid-cols-5 gap-8 lg:gap-16">
            <div className="col-span-full lg:col-span-3 grid grid-cols-4 gap-4 lg:gap-8">
              <div className="col-span-full sm:col-span-2 widget widgetOne">
                <h2 className="text-xl font-medium">Browse By Areas</h2>
                <ul className="flex flex-wrap mt-6">
                  <li className="w-1/2">
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Abu Dhabi
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Fujairah
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Al Ain
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Ras al Khaimah
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Ajman
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Sharjah
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Dubai
                    </Link>
                  </li>
                  <li className="w-1/2">
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Umm al Quwain
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1 widget widgetTwo">
                <h2 className="text-xl font-medium">Quick Links</h2>
                <ul className="mt-6">
                  <li>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      How it works?
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Browse Ads
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Packages
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1 widget widgetThree">
                <h2 className="text-xl font-medium">Company</h2>
                <ul className="mt-6">
                  <li>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Contact us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="text-sm text-gray-400 hover:text-primary hover:underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-span-full lg:col-span-2 subscriptionSection">
              <h2 className="text-xl font-medium">
                Subscribe to our newsletter
              </h2>
              <div className="flex items-center mt-6 newsletter">
                <input
                  type="search"
                  id="search"
                  className="block w-full py-4 px-8 text-xs text-gray-900 rounded-tl-full rounded-bl-full rounded-tr-none rounded-br-none bg-gray-100 outline-none"
                  placeholder="Enter your email id"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center text-white text-xs uppercase px-4 py-4 bg-primary rounded-none rounded-tr-full rounded-br-full hover:bg-secondary transition duration-500 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
              <div className="flex items-center checkbox mt-4">
                <input
                  id="product-category"
                  name="product-category"
                  type="checkbox"
                  value="yes"
                />
                <label
                  htmlFor="product-category"
                  className="text-xs text-gray-400"
                >
                  By subscribing to our newsletter you agree to our{" "}
                  <Link to="#" className="underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
              <div className="flex items-center mt-9">
                <Link
                  to="#"
                  target="_blank"
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary mr-1 hover:bg-twitter"
                >
                  <FaTwitter size={16} className="text-white" />
                </Link>
                <Link
                  to="#"
                  target="_blank"
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary mr-1 hover:bg-linkedin"
                >
                  <FaLinkedinIn size={16} className="text-white" />
                </Link>
                <Link
                  to="#"
                  target="_blank"
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary mr-1 hover:bg-instagram"
                >
                  <FaInstagram size={16} className="text-white" />
                </Link>
                <Link
                  to="#"
                  target="_blank"
                  className="flex items-center justify-center w-6 h-6 rounded-full bg-secondary mr-1 hover:bg-facebook"
                >
                  <FaFacebookF size={16} className="text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copywrite pb-12 sm:pb-24 lg:pb-48">
        <div className="container">
          <div className="pt-6 flex border-t">
            <p className="text-sm text-gray-400">
              Copyright © All Rights reserved | Gaming ZONE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
