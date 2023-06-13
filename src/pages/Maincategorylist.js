import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/header";
import Footer from "../components/footer";
import Categories from '../components/navbarComponent/NavbarMain';

export const Maincategorylist = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Categories';

    }, []);
    return (
        <>
            <Header />
            <section className='py-4 sm:py-7 lg:pt-7 lg:pb-14 border-t border-b'>
                <div className='container'>
                    <div className='breadcrumb mb-7'>
                        <h2 className='text-2xl md:text-3xl font-semibold text-secondary'>Video Games</h2>
                        <div className='flex mt-2'>
                            <Link to="/gamezone" className='text-sm hover:text-primary'>Home</Link>
                            <span className='text-sm px-2'>/</span>
                            <span className='text-sm'>Video Games</span>
                        </div>
                    </div>
                    <Categories />
                </div>
            </section>

            <Footer />
        </>
    )
}
