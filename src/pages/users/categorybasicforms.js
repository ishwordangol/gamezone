import React, { useState, useEffect } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import { Stepper, Step } from "react-form-stepper";

export const Categoryforms = () => {

    const [activeStep, setActiveStep] = useState(0);
    const handleNextStep = () => activeStep <= 1 ? setActiveStep(activeStep + 1) : "";
    const handleBackStep = () => activeStep >= 1 ? setActiveStep(activeStep - 1) : "";
    const stepStyleConfig = {
        activeBgColor: "#ff4159",
        completedBgColor: "#00ee99"
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Category Forms';
    }, []);
    return (
        <>
            <Header />
            <section className='py-4 sm:py-7 lg:py-14 bg-gray-50'>
                <div className='container'>

                    <Stepper styleConfig={stepStyleConfig} activeStep={activeStep}>
                        <Step label="Basic Details" />
                        <Step label="Specifications" />
                    </Stepper>
                    {activeStep === 0 ? <div className='form-group'>
                        <label className='font-semibold mb-2 block'>Advertisement Title*</label>
                        <div><input type="text" id="name" className="bg-gray-100 text-sm text-gray-700 rounded-lg block w-full p-2.5 outline-none" placeholder="Enter Title" required /></div>

                    </div> : ""}
                    {activeStep === 1 ? <h1>step two</h1> : ""}
                    <button className="mt-4 w-full btn btn-primary transition duration-500 ease-in-out" onClick={handleBackStep}>
                        Back
                    </button>
                    <button className="mt-4 w-full btn btn-primary transition duration-500 ease-in-out" onClick={handleNextStep}>
                        Next
                    </button>




                </div>
            </section>
            <Footer />
        </>
    )
}
