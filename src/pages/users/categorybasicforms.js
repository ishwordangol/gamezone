import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Stepper, Step } from "react-form-stepper";
import ReactSelect from "../../components/Reactselect";
import DropZone from "../../components/imageupload";
import { RiPriceTag3Line, RiBankCard2Fill, RiAppleFill } from "react-icons/ri";

export const Categoryforms = () => {
    const navigate = useNavigate();

    const navigateToCongratulationPage = () => {
        // 👇️ navigate to /categorypage
        navigate("/gamezone/user/congratulations");
    };
    const [selected, setSelected] = useState('AMD');
    const [activeStep, setActiveStep] = useState(0);
    const handleNextStep = () => activeStep <= 1 ? setActiveStep(activeStep + 1) : "";
    const handleBackStep = () => activeStep >= 1 ? setActiveStep(activeStep - 1) : "";
    const stepStyleConfig = {
        activeBgColor: "#ff4159",
        completedBgColor: "#00ee99"
    };


    const changeHandler = e => {
        setSelected(e.target.value);
    };

    const conditons = [
        { value: "Good", label: "Good" },
        { value: "Bad", label: "Bad" },
        { value: "Excellent", label: "Excellent" },
    ];

    const year = [
        { value: "2018", label: "2018" },
        { value: "2019", label: "2019" },
        { value: "2020", label: "2020" },
        { value: "2021", label: "2021" },
        { value: "2022", label: "2022" },
        { value: "2023", label: "2023" },
    ];

    const cities = [
        { value: "Dubai", label: "Dubai" },
        { value: "All Cities", label: "All Cities" },
        { value: "Abu Dhabhi", label: "Abu Dhabhi" },
        { value: "Ras Al Khaimah", label: "Ras Al Khaimah" },
        { value: "Sharjah", label: "Sharjah" },
        { value: "Fujairah", label: "Fujairah" },
        { value: "Ajman", label: "Ajman" },
        { value: "Umm Al Quwain", label: "Umm Al Quwain" },
        { value: "Al Ain", label: "Al Ain" },
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Category Forms';
    }, []);
    return (
        <>
            <Header />
            <section className='py-4 sm:py-7 lg:py-14 bg-gray-50'>
                <div className='container'>
                    <div className='bg-white p-4 lg:p-8 max-w-3xl mx-auto'>
                        <h2 className='text-2xl md:text-3xl font-semibold text-secondary'>Gaming System</h2>
                        <Stepper styleConfig={stepStyleConfig} activeStep={activeStep}>
                            <Step label="Basic Details" />
                            <Step label="Additional Informations" />
                            <Step label="Confirmation" />
                        </Stepper>
                        {activeStep === 0 &&
                            <div className='formWrapper'>
                                <div className='grid sm:grid-cols-2 gap-4'>
                                    <div className='col-span-full form-group'>
                                        <label className='font-semibold mb-2 block'>Advertisement Title*</label>
                                        <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Title" required /></div>
                                    </div>



                                    <div className='form-group'>
                                        <ReactSelect
                                            options={conditons}
                                            label="Conditions"
                                            placeholder="Select Conditons"
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <ReactSelect
                                            options={year}
                                            label="Purchase Year"
                                            placeholder="Select Year"
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <ReactSelect
                                            options={cities}
                                            label="City"
                                            placeholder="Select Cities"
                                        />
                                    </div>

                                    <div className='form-group'>
                                        <label className='font-semibold mb-2 block'>Locations</label>
                                        <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Location" required /></div>
                                    </div>
                                    <div className='form-group'>
                                        <label className='font-semibold mb-2 block'>Contact Number</label>
                                        <div><input type="number" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Contact number" required /></div>
                                    </div>

                                    <div className='form-group'>
                                        <label className='font-semibold mb-2 block'>Whatapp Number</label>
                                        <div><input type="number" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Whatsapp number" required /></div>
                                    </div>

                                    <div className='form-group'>
                                        <label className='font-semibold mb-2 block'>Price</label>
                                        <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Price" required /></div>
                                    </div>



                                    <div className='col-span-full form-group'>
                                        <DropZone label="Upload" className="border border-dashed rounded-lg p-8 hover:border-primary hover:text-primary cursor-pointer" />

                                    </div>

                                    <div className='col-span-full form-group'>
                                        <label className='font-semibold mb-2 block'>Descriptions</label>
                                        <div><textarea id="message" rows="8" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Name" required /></div>

                                    </div>
                                </div>

                            </div>}
                        {activeStep === 1 && <div className='additionalinfoWrapper'>
                            <div className='flex items-center w-full'>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="AMD"
                                    id="AMD"
                                    checked={selected === "AMD"}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="AMD" className='ml-2'>AMD</label>
                            </div>

                            <div className='flex items-center w-full'>
                                <input
                                    type="radio"
                                    value="Intel"
                                    id="Intel"
                                    checked={selected === "Intel"}
                                    name="Intel"
                                    onChange={changeHandler}
                                />
                                <label htmlFor="Intel" className='ml-2'>Intel</label>
                            </div>
                            <div className='mt-4'>
                                <div className="radio-button" aria-hidden={selected !== "AMD" ? true : false}>
                                    <div className='grid sm:grid-cols-2 gap-4'>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="CPU"
                                                placeholder="Select CPU"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Motherboard"
                                                placeholder="Select Motherboard"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Memory"
                                                placeholder="Select Memory"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Storage"
                                                placeholder="Select Storage"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Video Card"
                                                placeholder="Select Video Card"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Power Supply"
                                                placeholder="Select Power Supply"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Case"
                                                placeholder="Select Case"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Operating System"
                                                placeholder="Select Operating System"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="radio-button" aria-hidden={selected !== "Intel" ? true : false}>
                                    <div className='grid sm:grid-cols-2 gap-4'>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="CPU"
                                                placeholder="Select CPU"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Motherboard"
                                                placeholder="Select Motherboard"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Memory"
                                                placeholder="Select Memory"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Storage"
                                                placeholder="Select Storage"
                                            />
                                        </div>
                                        <div className='form-group'>
                                            <ReactSelect
                                                options={cities}
                                                label="Video Card"
                                                placeholder="Select Video Card"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div></div>}

                        {activeStep === 2 && <div className='confirmationWrapper'>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                                <img src="/gamezone/assets/images/products/original/product1.jpg" alt="Product" />
                                <div className='col-span-2'>
                                    <div>
                                        <h4 className='text-lg font-semibold block text-secondary'>Intel i10 64GB RAM 5TB Harddisk</h4>
                                        <p className='text-sm'>1 year old intel i10 with 64GB DDR6 RAM and 5TB SSD Harddisk with inbuilt 512MB Graphics Card.This system have water cooler and not even a single scratch.</p>
                                        <div className='flex items-center mt-4'>
                                            <button type="button" className='hover:text-primary'>
                                                <RiPriceTag3Line className='text-2xl mr-4' />
                                            </button>
                                            <div className='price'><span className='text-primary text-lg font-semibold'>6000.00 AED</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-8'>
                                <div className='flex items-center justify-between mb-1'>
                                    <div className="checkbox">
                                        <input
                                            id="listing-website"
                                            name="listing-website"
                                            type="checkbox"
                                            value="yes"
                                            checked
                                        />
                                        <label htmlFor="product-category" className='text-xs xs:text-sm'>Listing in Website</label>
                                    </div>
                                    <span className='text-sm xs:text-lg font-medium'>50.00 AED</span>
                                </div>
                                <div className='flex items-center justify-between mb-1'>
                                    <div className="checkbox">
                                        <input
                                            id="listing-website"
                                            name="listing-website"
                                            type="checkbox"
                                            value="yes"
                                        />
                                        <label htmlFor="product-category" className='text-xs xs:text-sm'>Publish as Featured Ads</label>
                                    </div>
                                    <span className='text-sm xs:text-lg font-medium'>00.00 AED</span>
                                </div>
                                <div className='flex items-center justify-between mb-1'>
                                    <div className="checkbox">
                                        <input
                                            id="listing-website"
                                            name="listing-website"
                                            type="checkbox"
                                            value="yes"
                                        />
                                        <label htmlFor="product-category" className='text-xs xs:text-sm'>Publish as Urgent Ads</label>
                                    </div>
                                    <span className='text-sm xs:text-lg font-medium'>00.00 AED</span>
                                </div>

                                <div className='py-1 flex items-center justify-between border-t'>
                                    <span className='text-base xs:text-lg font-semibold'>Total Cost</span>
                                    <span className='text-base xs:text-lg font-semibold'>50.00 AED</span>
                                </div>

                                <div className='flex flex-wrap gap-2 itmes-center mt-8'>
                                    <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block p-2.5 outline-none" placeholder="Coupen code" required /></div>
                                    <button className="btn btn-primary transition duration-500 ease-in-out">
                                        Apply
                                    </button>
                                </div>

                                <div className='payment flex items-center gap-4 mt-8'>
                                    <button type='button' className='w-40 h-24 bg-gray-100 p-2 xs:p-4 rounded-lg text-secondary hover:border hover:border-primary hover:text-primary'>
                                        <div className='flex flex-col justify-center'>
                                            <div className='flex justify-center'>
                                                <RiBankCard2Fill className='text-2xl' />
                                            </div>
                                            <p className='mt-2 text-xs xs:text-sm font-medium'>Card payment</p>
                                        </div>
                                    </button>
                                    <button type='button' className='w-40 h-24 bg-gray-100 p-2 xs:p-4 rounded-lg text-secondary hover:border hover:border-primary hover:text-primary'>
                                        <div className='flex flex-col justify-center'>
                                            <div className='flex justify-center'>
                                                <RiAppleFill className='text-2xl' />
                                            </div>
                                            <p className='mt-2 text-xs xs:text-sm font-medium'>Apple Pay</p>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        }

                        <div className='pt-4 border-t mt-12 flex flex-wrap items-center justify-end'>
                            {activeStep === 0 && <button className="btn btn-primary transition duration-500 ease-in-out" onClick={handleNextStep}>
                                Next
                            </button>}
                            {activeStep === 1 && <>
                                <button className="btn bg-gray-300 text-white transition duration-500 ease-in-out mr-2 hover:bg-secondary" onClick={handleBackStep}>
                                    Back
                                </button>
                                <button className="btn btn-primary transition duration-500 ease-in-out" onClick={handleNextStep}>
                                    Next
                                </button>
                            </>
                            }
                            {activeStep === 2 && <>
                                <button className="btn bg-gray-300 text-white transition duration-500 ease-in-out mr-2 hover:bg-secondary" onClick={handleBackStep}>
                                    Back
                                </button>
                                <button className="btn btn-primary transition duration-500 ease-in-out" onClick={navigateToCongratulationPage}>
                                    Save
                                </button>
                            </>
                            }
                        </div>
                    </div>




                </div>
            </section>
            <Footer />
        </>
    )
}
