import React, { useState, useEffect } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Stepper, Step } from "react-form-stepper";
import ReactSelect from "../../components/Reactselect";

export const Categoryforms = () => {
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
                    <div className='bg-white p-4 lg:p-8 max-w-xl mx-auto'>
                        <h2 className='text-2xl md:text-3xl font-semibold text-secondary'>Gaming System</h2>
                        <Stepper styleConfig={stepStyleConfig} activeStep={activeStep}>
                            <Step label="Basic Details" />
                            <Step label="Specifications" />
                        </Stepper>
                        {activeStep === 0 &&
                            <div className='formWrapper'>
                                <div className='form-group mb-4'>
                                    <label className='font-semibold mb-2 block'>Advertisement Title*</label>
                                    <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Title" required /></div>
                                </div>

                                <div className='form-group mb-4'>
                                    <label className='font-semibold mb-2 block'>Descriptions</label>
                                    <div><textarea id="message" rows="8" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Name" required /></div>

                                </div>

                                <div className='form-grouo mb-4'>
                                    <ReactSelect
                                        options={conditons}
                                        label="Conditions"
                                        placeholder="Select Conditons"
                                    />
                                </div>

                                <div className='form-group mb-4'>
                                    <label className='font-semibold mb-2 block'>Purchase Year</label>
                                    <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Purchase Year" required /></div>
                                </div>

                                <div className='form-group mb-4'>
                                    <ReactSelect
                                        options={cities}
                                        label="City"
                                        placeholder="Select Cities"
                                    />
                                </div>

                                <div className='form-group mb-4'>
                                    <label className='font-semibold mb-2 block'>Locations</label>
                                    <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Your Location" required /></div>
                                </div>
                                <div className='form-group mb-4'>
                                    <label className='font-semibold mb-2 block'>Contact Number</label>
                                    <div><input type="number" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Contact number" required /></div>
                                </div>

                                <div className='form-group mb-4'>
                                    <label className='font-semibold mb-2 block'>Whatapp Number</label>
                                    <div><input type="number" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Whatsapp number" required /></div>
                                </div>

                                <div className='form-group mb-4'>
                                    <label className='font-semibold mb-2 block'>Price</label>
                                    <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Price" required /></div>
                                </div>

                            </div>}
                        {activeStep === 1 && <div className='formWrapper'>
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
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="CPU"
                                            placeholder="Select CPU"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Motherboard"
                                            placeholder="Select Motherboard"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Memory"
                                            placeholder="Select Memory"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Storage"
                                            placeholder="Select Storage"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Video Card"
                                            placeholder="Select Video Card"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Power Supply"
                                            placeholder="Select Power Supply"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Case"
                                            placeholder="Select Case"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Operating System"
                                            placeholder="Select Operating System"
                                        />
                                    </div>
                                </div>
                                <div className="radio-button" aria-hidden={selected !== "Intel" ? true : false}>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="CPU"
                                            placeholder="Select CPU"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Motherboard"
                                            placeholder="Select Motherboard"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Memory"
                                            placeholder="Select Memory"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Storage"
                                            placeholder="Select Storage"
                                        />
                                    </div>
                                    <div className='form-group mb-4'>
                                        <ReactSelect
                                            options={cities}
                                            label="Video Card"
                                            placeholder="Select Video Card"
                                        />
                                    </div>
                                </div>
                            </div></div>}

                        <div className='flex flex-wrap items-center justify-end'>
                            {activeStep === 0 && <button className="btn btn-primary transition duration-500 ease-in-out" onClick={handleNextStep}>
                                Next
                            </button>}
                            {activeStep === 1 && <>
                                <button className="btn bg-gray-300 text-white transition duration-500 ease-in-out mr-2 hover:bg-secondary" onClick={handleBackStep}>
                                    Back
                                </button>
                                <button className="btn btn-primary transition duration-500 ease-in-out">
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
