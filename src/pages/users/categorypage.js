import React, { useEffect } from 'react';
import Header from "../../components/header";
import Footer from "../../components/footer";
import Categorylist from '../../components/categorylist';

export const Categorypage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Category list';
    }, []);
    return (
        <>
            <Header />
            <section className='py-4 sm:py-7 lg:py-14 bg-gray-50'>
                <div className='container'>
                    <Categorylist />
                </div>
            </section>
            <Footer />
        </>
    )
}
