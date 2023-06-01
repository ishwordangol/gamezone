import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Innerbanner from "../components/innerbanner";
import { Link } from "react-router-dom";
import Featured from "../components/productlistslider";
import featuredslides from "../data/featuredproductdata.json";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
    FacebookIcon,
    LinkedinIcon,
    LinkedinShareButton,
    TwitterIcon,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { RiShareFill, RiPhoneFill, RiWhatsappFill } from "react-icons/ri";

export const Productdetail = () => {
    const images = [
        {
            original: "/gamezone/assets/images/products/original/product1.jpg",
            thumbnail: "/gamezone/assets/images/products/thumbnail/product1.jpg",
            thumbnailClass: "imagegallery_thumbnail",
        },
        {
            original: "/gamezone/assets/images/products/original/product2.jpg",
            thumbnail: "/gamezone/assets/images/products/thumbnail/product2.jpg",
            thumbnailClass: "imagegallery_thumbnail",
        },
        {
            original: "/gamezone/assets/images/products/original/product3.jpg",
            thumbnail: "/gamezone/assets/images/products/thumbnail/product3.jpg",
            thumbnailClass: "imagegallery_thumbnail",
        },
        {
            original: "/gamezone/assets/images/products/original/product1.jpg",
            thumbnail: "/gamezone/assets/images/products/thumbnail/product1.jpg",
            thumbnailClass: "imagegallery_thumbnail",
        },
        {
            original: "/gamezone/assets/images/products/original/product2.jpg",
            thumbnail: "/gamezone/assets/images/products/thumbnail/product2.jpg",
            thumbnailClass: "imagegallery_thumbnail",
        },
        {
            original: "/gamezone/assets/images/products/original/product3.jpg",
            thumbnail: "/gamezone/assets/images/products/thumbnail/product3.jpg",
            thumbnailClass: "imagegallery_thumbnail",
        },
    ];

    useEffect(() => {
        document.title = "Product Detail";
        AOS.init({
            offset: 120,
            duration: 1200,
        });
    }, []);
    return (
        <>
            <Header />
            <Innerbanner />
            <section className="pt-4 sm:pt-7">
                <div className="container">
                    <div className="breadcrumb">
                        <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
                            Sony PS5 Disc Japan
                        </h2>
                        <div className="flex mt-2">
                            <Link to="/gamezone" className="text-sm hover:text-primary">
                                Home
                            </Link>
                            <span className="text-sm px-2">/</span>
                            <Link
                                to="/gamezone/category-product-listing"
                                className="text-sm hover:text-primary"
                            >
                                Video Games
                            </Link>
                            <span className="text-sm px-2">/</span>
                            <span className="text-sm">Sony PS5 Disc Japan</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-4 sm:py-7 lg:py-14">
                <div className="container">
                    <div className="grid grid-cols-5 gap-8">
                        <div className="col-span-2">
                            <ImageGallery
                                items={images}
                                showNav={false}
                                showPlayButton={false}
                                thumbnailPosition="bottom"
                                additionalClass="imageGallery_Wrapper"
                            />
                        </div>
                        <div className="col-span-2">
                            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">
                                Sony PS5 Disc Japan
                            </h1>
                            <h2 className="text-lg md:text-xl font-semibold text-primary mt-4">
                                AED 330
                            </h2>
                            <div className="mt-4 grid grid-cols-3 gap-4">
                                <div className="p-4  bg-gray-50 inline-flex flex-col items-center justify-center boxShadowcustom border">
                                    <h3 className="font-bold mb-4">Brand</h3>
                                    <h4>Sony</h4>
                                </div>

                                <div className="p-4  bg-gray-50  inline-flex flex-col items-center justify-center boxShadowcustom border">
                                    <h3 className="font-bold mb-4">Brand</h3>
                                    <h4>Sony</h4>
                                </div>

                                <div className="p-4  bg-gray-50  inline-flex flex-col items-center justify-center boxShadowcustom border">
                                    <h3 className="font-bold mb-4">Brand</h3>
                                    <h4>Sony</h4>
                                </div>
                                <div className="p-4  bg-gray-50  inline-flex flex-col items-center justify-center boxShadowcustom border">
                                    <h3 className="font-bold mb-4">Brand</h3>
                                    <h4>Sony</h4>
                                </div>
                                <div className="p-4  bg-gray-50  inline-flex flex-col items-center justify-center boxShadowcustom border">
                                    <h3 className="font-bold mb-4">Brand</h3>
                                    <h4>Sony</h4>
                                </div>
                                <div className="p-4  bg-gray-50  inline-flex flex-col items-center justify-center boxShadowcustom border">
                                    <h3 className="font-bold mb-4">Brand</h3>
                                    <h4>Sony</h4>
                                </div>
                            </div>


                        </div>
                        <div className="border p-2">
                            <div className="mb-2 block bg-primarylight p-4">
                                <h4 className="font-medium mb-2 flex items-center"><RiShareFill className="mr-1" />Share</h4>
                                <div className="flex items-center">
                                    <FacebookShareButton url={"https://www.facebook.com"}>
                                        <FacebookIcon size={32} round className="mr-1" />
                                    </FacebookShareButton>
                                    <TwitterShareButton url={"https://www.twitter.com"}>
                                        <TwitterIcon
                                            size={32}
                                            round={true}
                                            className="mr-1"
                                        />
                                    </TwitterShareButton>
                                    <LinkedinShareButton url={"https://www.linkedin.com"}>
                                        <LinkedinIcon size={32} round={true} className="mr-1" />
                                    </LinkedinShareButton>
                                    <WhatsappShareButton url={"https://www.whatsapp.com"}>
                                        <WhatsappIcon size={32} round={true} />
                                    </WhatsappShareButton>
                                </div>

                            </div>
                            <div className="mb-2 block bg-primarylight p-4">
                                <h4 className="font-medium mb-2 flex items-center"><RiPhoneFill className="mr-1" />Contact us</h4>
                                <Link to="tel:+561 12 345 7" className="font-bold">+561 12 345 7</Link>
                            </div>

                            <div className="mb-2 block bg-primarylight p-4">
                                <h4 className="font-medium mb-2 flex items-center"><RiWhatsappFill className="mr-1 font-bold" />WhatsApp</h4>
                                <Link to="tel:+561 12 345 7" className="font-bold">+561 12 345 7</Link>
                            </div>
                            <button className="w-full btn btn-primary transition duration-500 ease-in-out">
                                Message
                            </button>
                        </div>
                    </div>

                    <div className="overviewWrapper mt-8 border bg-gray-50 p-4 text-sm">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
                            Overview
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap into
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                        <br />
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap intogrid
                            electronic typesetting, remaining essentially unchanged. It was
                            popularised in the 1960s with the release of Letraset sheets
                            containing Lorem Ipsum passages, and more recently with desktop
                            publishing software like Aldus PageMaker including versions of
                            Lorem Ipsum.
                        </p>
                    </div>
                    <div className="detailsWrapper mt-8 border bg-gray-50 p-4 text-sm">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
                            Details
                        </h1>

                        <div className="grid grid-cols-3 gap-2">
                            <div className="grid grid-cols-3 gap-1">
                                <span className="font-semibold">CPU :</span>
                                <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                            </div>

                            <div className="grid grid-cols-3 gap-1">
                                <span className="font-semibold">GPU :</span>
                                <span className="col-span-2">10.3 teraflop RDNA 2 GPU</span>
                            </div>

                            <div className="grid grid-cols-3 gap-1">
                                <span className="font-semibold">RAM :</span>
                                <span className="col-span-2">16GB GDDR6</span>
                            </div>

                            <div className="grid grid-cols-3 gap-1">
                                <span className="font-semibold">Storage :</span>
                                <span className="col-span-2">Custom 825GB SSD</span>
                            </div>

                            <div className="grid grid-cols-3 gap-1">
                                <span className="font-semibold">Expansion :</span>
                                <span className="col-span-2">NVMe M.2 SSD slot</span>
                            </div>

                            <div className="grid grid-cols-3 gap-1">
                                <span className="font-semibold">Disc drive :</span>
                                <span className="col-span-2">4K Blu-ray player</span>
                            </div>

                            <div className="grid grid-cols-3 gap-1">
                                <span className="font-semibold">Size :</span>
                                <span className="col-span-2">15.4 x 10.2 x 4.1 inches</span>
                            </div>

                            <div className="grid grid-cols-3 gap-1">
                                <span className="font-semibold">Weight :</span>
                                <span className="col-span-2">9.9 pounds</span>
                            </div>

                        </div>

                    </div>
                </div>
            </section >
            <section className="py-4 sm:py-7 lg:py-14 bg-gray-50">
                <div className="title text-center mb-4 lg:mb-8" data-aos="fade-down">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-secondary">
                        Related <span className="text-stroke"> Products</span>
                    </h1>
                    <h3 className="text-base md:text-lg font-extralight">
                        Buy & Sell Anything
                    </h3>
                </div>
                <div className="container">
                    <Featured productdata={featuredslides} />
                </div>
            </section>
            <Footer />
        </>
    );
};
