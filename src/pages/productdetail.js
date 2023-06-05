import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import Featured from "../components/productlistslider";
import FeaturedsliderDetail from '../components/featuredslider';
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
import { SiSony } from "react-icons/si";
import { BiMap, BiPhoneCall } from "react-icons/bi";

export const Productdetail = () => {

    const YoutubeEmbed = ({ embedId }) => (
        <div className="video-responsive">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${embedId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
        </div>
    );
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

    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    // const refContainer = useRef();
    // const [dimensions, setDimensions] =
    //     useState({ height: 0 });

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Product Detail";
        AOS.init({
            offset: 120,
            duration: 1200,
        });
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 150);
        });
        // if (refContainer.current) {
        //     setDimensions({
        //         height: refContainer.current.offsetHeight,
        //     });
        // }

    }, []);
    return (
        <>
            <div className="ProductdetailWrapper">
                <Header />

                <section className="py-4 sm:py-7 bg-gray-50">
                    <div className="container">
                        <div
                            className={` flex items-center justify-between ${scroll
                                ? "bg-gray-50 z-[45] sticky top-0 py-2 pr-4"
                                : ""
                                }`}>
                            <div className="w-full">
                                <div className="flex items-center justify-between">
                                    <h2 className="flex-1 text-2xl md:text-3xl font-semibold text-secondary">
                                        Sony PS5 Disc Japan

                                    </h2>

                                </div>
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="flex items-center">
                                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
                                            AED 330
                                        </h2>

                                        <span className="px-4 text-gray-300">|</span>
                                        <span className="text-sm">added 2 days ago</span>
                                    </div>
                                    <div className="w-full sm:w-auto flex items-center">
                                        <span className="mr-2 text-sm">Share:</span>
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
                            </div>

                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mt-4">
                            <div className="col-span-full lg:col-span-2">
                                <div className="relative">
                                    <ImageGallery
                                        items={images}
                                        showNav={false}
                                        showPlayButton={false}
                                        thumbnailPosition="bottom"
                                        additionalClass="imageGallery_Wrapper"
                                    />
                                    <div className="absolute flex items-center top-4 left-4">
                                        <button className="py-1 px-4 bg-primary text-white rounded-full text-xs mr-2">
                                            Featured
                                        </button>
                                        <button className="py-1 px-4 bg-white rounded-full text-xs">
                                            Urgent
                                        </button>
                                    </div>
                                </div>
                                <div className="mt-4 bg-white p-4 bg-shadow">
                                    <h4 className="text-lg font-semibold mb-4 block text-secondary">Details</h4>
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="w-full xs:w-auto flex items-center">
                                            <SiSony className="text-5xl mr-4 p-2 border rounded-lg"></SiSony>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <h3 className="font-semibold">Brand</h3>
                                                <span className="text-sm">Sony</span>

                                            </div>
                                        </div>

                                        <div className="w-full xs:w-auto flex items-center ">
                                            <SiSony className="text-5xl mr-4 p-2 border rounded-lg"></SiSony>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <h3 className="font-semibold">Brand</h3>
                                                <span className="text-sm">Sony</span>

                                            </div>
                                        </div>
                                        <div className="w-full xs:w-auto flex items-center ">
                                            <SiSony className="text-5xl mr-4 p-2 border rounded-lg"></SiSony>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <h3 className="font-semibold">Brand</h3>
                                                <span className="text-sm">Sony</span>

                                            </div>
                                        </div>
                                        <div className="w-full xs:w-auto flex items-center ">
                                            <SiSony className="text-5xl mr-4 p-2 border rounded-lg"></SiSony>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <h3 className="font-semibold">Brand</h3>
                                                <span className="text-sm">Sony</span>

                                            </div>
                                        </div>
                                        <div className="w-full xs:w-auto flex items-center ">
                                            <SiSony className="text-5xl mr-4 p-2 border rounded-lg"></SiSony>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <h3 className="font-semibold">Brand</h3>
                                                <span className="text-sm">Sony</span>

                                            </div>
                                        </div>
                                        <div className="w-full xs:w-auto flex items-center ">
                                            <SiSony className="text-5xl mr-4 p-2 border rounded-lg"></SiSony>
                                            <div className="inline-flex flex-col items-center justify-center">
                                                <h3 className="font-semibold">Brand</h3>
                                                <span className="text-sm">Sony</span>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="overviewWrapper bg-white mt-4 p-4 text-sm bg-shadow">
                                    <h4 className="text-lg font-semibold mb-2 block text-secondary">Overview</h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of
                                        type and scrambled it to make a type specimen book. It has
                                        survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <Link to="#" className="block underline font-bold mt-2">Show More</Link>
                                </div>
                                <div className="detailsWrapper mt-4 bg-white bg-shadow p-4 text-sm">
                                    <h4 className="text-lg font-semibold mb-4 block text-secondary">Specifications</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>

                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">GPU :</span>
                                            <span className="col-span-2">10.3 teraflop RDNA 2 GPU</span>
                                        </div>

                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">RAM :</span>
                                            <span className="col-span-2">16GB GDDR6</span>
                                        </div>

                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">Storage :</span>
                                            <span className="col-span-2">Custom 825GB SSD</span>
                                        </div>

                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">Expansion :</span>
                                            <span className="col-span-2">NVMe M.2 SSD slot</span>
                                        </div>

                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">Disc drive :</span>
                                            <span className="col-span-2">4K Blu-ray player</span>
                                        </div>

                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">Size :</span>
                                            <span className="col-span-2">15.4 x 10.2 x 4.1 inches</span>
                                        </div>

                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">Weight :</span>
                                            <span className="col-span-2">9.9 pounds</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                        <div className="flex flex-wrap sm:grid grid-cols-3 gap-1">
                                            <span className="font-semibold">CPU :</span>
                                            <span className="col-span-2">3.5GHz, 8-core AMD Zen 2</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="youtube-video mt-4 bg-white p-4 bg-shadow">
                                    <h4 className="text-lg font-semibold mb-2 block text-secondary">Video</h4>
                                    <YoutubeEmbed embedId="p_ykcr2ZaKo" />
                                </div>



                            </div>
                            <div className="right_section">
                                <div className="bg-white p-4 shadow-lg">
                                    <h4 className="text-lg font-semibold mb-4 block text-secondary">Contact Detail</h4>
                                    <div className="mt-4 flex pb-4 border-b">
                                        <Link to="#">
                                            <img src="/gamezone/assets/images/users/ishwor.jpg" alt="User" className='w-20 h-20 object-cover rounded-full mr-4' />
                                        </Link>
                                        <div className="userdetail">
                                            <Link to="#" className="hover:text-primary">
                                                <h4 className="font-semibold">Ishwor Dangol</h4>
                                            </Link>
                                            {isOpen &&
                                                <Link to="tel:+561 12 345 7" className="flex items-center text-sm hover:underline"><BiPhoneCall className="mr-2" />+561 12 345 7</Link>
                                            }
                                            <div className={` flex items-center text-sm ${isOpen
                                                ? "hidden"
                                                : ""
                                                }`}
                                            >
                                                <BiPhoneCall className="mr-2" />
                                                <span className="mr-2">+561 12 *** *</span>
                                                <button className="px-2 py-0.5 bg-secondary hover:bg-primary text-white" onClick={() => setIsOpen(!isOpen)}>Show</button>
                                            </div>
                                            {/* <Link to="mailto:info@gamezone.com" className="inline-flex items-center text-sm"><BiMailSend className="mr-2" />info@gamezone.com</Link> */}
                                            <Link to="#" className="flex items-center text-sm hover:underline"><BiMap className="mr-2" />Uptown, Mirdif</Link>
                                        </div>
                                    </div>
                                    <div className='mt-4'>
                                        <label className='font-semibold mb-2 block'>Name</label>
                                        <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Name" required /></div>

                                    </div>
                                    {/* <div className='mt-4'>
                                    <label className='font-semibold mb-2 block'>Address</label>
                                    <div><input type="text" id="address" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Name" required /></div>

                                </div>
                                <div className='mt-4'>
                                    <label className='font-semibold mb-2 block'>Email</label>
                                    <div><input type="text" id="email" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Name" required /></div>

                                </div> */}
                                    <div className='mt-4'>
                                        <label className='font-semibold mb-2 block'>Phone</label>
                                        <div><input type="number" id="phone" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Name" required /></div>

                                    </div>

                                    <div className='mt-4'>
                                        <label className='font-semibold mb-2 block'>Message</label>
                                        <div><textarea id="message" rows="8" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Name" required /></div>

                                    </div>

                                    <button className="mt-4 w-full btn btn-primary transition duration-500 ease-in-out">
                                        Send Message
                                    </button>

                                    <button className="mt-4 w-full border border-whatsapp text-whatsapp hover:bg-whatsapp hover:text-white py-2 px-6 rounded-lg transition duration-500 ease-in-out">
                                        WhatsApp
                                    </button>
                                </div>
                                <div className="mt-4 bg-white p-4 shadow-lg">
                                    <h4 className="text-lg font-semibold mb-4 block text-secondary">Featured Products</h4>
                                    <div className="detailfeaturedWrapper">
                                        <FeaturedsliderDetail productdata={featuredslides} />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

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
            </div>
        </>
    );
};
