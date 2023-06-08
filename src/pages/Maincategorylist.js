import React, { useEffect } from 'react';
// import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

export const Maincategorylist = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Categories';

    }, []);
    return (
        <>
            <Header />
            <section className='py-4 sm:py-7 lg:pt-7 lg:pb-14 bg-gray-100'>
                <div className='container'>
                </div>
            </section>
            <Footer />
        </>
    )
}
