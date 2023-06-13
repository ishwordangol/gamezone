import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/header";
import Footer from "../components/footer";
import { RiPhoneLine, RiMapPinLine, RiMailSendLine } from 'react-icons/ri'

export const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Contact';
        AOS.init({
            offset: 120,
            duration: 1200,
        });
    }, []);
    return (
        <>
            <Header />
            <section className='py-4 sm:py-7 lg:pt-7 lg:pb-14 bg-gray-100'>
                <div className='container'>
                    <div className='breadcrumb mb-7'>
                        <h2 className='text-2xl md:text-3xl font-semibold text-secondary'>Contact Us</h2>
                        <div className='flex mt-2'>
                            <Link to="/gamezone" className='text-sm hover:text-primary'>Home</Link>
                            <span className='text-sm px-2'>/</span>
                            <span className='text-sm'>Contact Us</span>
                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-5 lg:gap-8 bg-white'>
                        <div className='col-span-full lg:col-span-2'>
                            {/* <div className='w-full p-4 bg-white flex items-center'>
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primarylight mr-4">
                                    <RiPhoneLine className='text-2xl text-primary' />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='text-lg font-semibold block'>Phone</h4>
                                    <Link to="tel:+971-123456789" className='font-semibold block hover:text-primary'>+971-123456789</Link>
                                </div>
                            </div>
                            <div className='w-full p-4 bg-white flex items-center'>
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primarylight mr-4">
                                    <RiMailSendLine className='text-2xl text-primary' />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='text-lg font-semibold block'>Email Address</h4>
                                    <Link to="mailto:info@gamezone.com.ae" className='font-semibold block hover:text-primary'>info@gamezone.com.ae</Link>
                                </div>
                            </div>
                            <div className='w-full p-4 bg-white flex items-center'>
                                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primarylight mr-4">
                                    <RiMapPinLine className='text-2xl text-primary' />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='text-lg font-semibold block'>Location</h4>
                                    <span className='font-semibold block'>Uptown, Mirdif</span>
                                </div>
                            </div> */}

                            <img src="/gamezone/assets/contact.jpg" alt="Contact" />
                        </div>
                        <div className='col-span-full lg:col-span-3 p-8'>
                            <h3 className='text-2xl font-semibold mb-2 block'>Send Message</h3>
                            <p>Any Questions or remarks? Just write us a message!</p>
                            <div className='mt-8 ContactformWrapper grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                <div className='form-group col-span-1'>
                                    <label className='font-semibold mb-2 block'>First Name</label>
                                    <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter First Name" required /></div>
                                </div>

                                <div className='form-group col-span-1'>
                                    <label className='font-semibold mb-2 block'>Last Name</label>
                                    <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Last Name" required /></div>
                                </div>

                                <div className='form-group col-span-1'>
                                    <label className='font-semibold mb-2 block'>Email Addresse</label>
                                    <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Email Address" required /></div>
                                </div>

                                <div className='form-group col-span-1'>
                                    <label className='font-semibold mb-2 block'>Phone Number</label>
                                    <div><input type="number" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Phone Number" required /></div>
                                </div>

                                <div className='form-group col-span-full'>
                                    <label className='font-semibold mb-2 block'>Message</label>
                                    <div><textarea id="message" rows="4" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Message" required /></div>

                                </div>
                            </div>
                            <button className="mt-4 btn btn-primary transition duration-500 ease-in-out">
                                Send Message
                            </button>
                        </div>

                    </div>
                </div>
            </section>
            {/* <section className='py-4 sm:py-7 lg:py-14 bg-gray-50'>
                <div className='title text-center mb-4 lg:mb-8' data-aos="fade-down">
                    <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-secondary'>Find us on <span className='text-stroke text-stroke-gray'> Google Map</span></h1>
                    <h3 className='text-base md:text-lg font-extralight'>Our office location</h3>
                </div>
                <div className='container'>
                    <iframe title="googlemap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.4576525415114!2d55.41825968721148!3d25.221506173218536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f61b620a3e0bd%3A0x67f5ee00e1401025!2sUptown%20Mirdif%20Villas!5e0!3m2!1sen!2snp!4v1686039889857!5m2!1sen!2snp" width="100%" height="300" allowFullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='rounded grayscale'></iframe>
                </div>
            </section> */}
            <Footer />
        </>
    )
}
