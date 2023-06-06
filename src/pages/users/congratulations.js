import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { RiCheckboxCircleFill } from 'react-icons/ri'

export const Congratulations = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Congratulations';
    }, []);
    return (
        <>
            <Header />
            <section className='py-4 sm:py-7 lg:py-14 bg-gray-100'>
                <div className='container'>
                    <div className='text-center max-w-3xl mx-auto'>
                        <RiCheckboxCircleFill className='text-5xl text-green-500 inline-block' />
                        <h2 className='text-2xl md:text-3xl font-semibold text-secondary mt-4'>Congratulations!!</h2>
                        <p className='mt-4 text-sm xs:text-base'>Your advertisement have been submitted successfully. Your advertisement is in review and will be emailed to you once its published after approval. If you have any queries, email at queries@gameads.ae</p>
                        <div className='flex flex-wrap justify-center gap-2 xs:gap-4 mt-8 mb-8'>
                            <Link to="/gamezone" className="inline-block btn btn-primary transition duration-500 ease-in-out">Vist Homepage</Link>
                            <Link to="/gamezone" className="inline-block btn btn-secondary transition duration-500 ease-in-out">Manage my ads</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
