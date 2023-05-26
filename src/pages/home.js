import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../components/header';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../components/footer';
import Search from "../components/search";
import Featured from '../components/productlist';
import featuredslides from '../data/featuredproductdata.json';
import Brand from '../components/brandlist';
import brands from '../data/brand.json';
import Nav from '../components/navbar';


export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 120,
      duration: 1200,
    });
  }, []);
  return (
    <>
      <Header />
      <section>
        <div className='relative'>
          <img src="../../../assets/images/banner/banner1.jpg" alt="Banner 1" className='main-banner h-[80vh] w-full object-cover' />
          <div className='images-icon'>
            <img src="../../../assets/images/banner/triangle-right.png" alt="triangle" className='icon-triangle' />
            <img src="../../../assets/images/banner/circle.png" alt="circle" className='icon-circle animate-ping' />
            <img src="../../../assets/images/banner/diagonal.png" alt="diagonal" className='icon-diagonal' />
            <img src="../../../assets/images/banner/inclined-cross.png" alt="inclined-cross" className='icon-inclined-cross' />
          </div>
          <div className='container bannerDescription absolute left-1/2 top-1/2 -translate-y-1/2 md:top-1/3 -translate-x-1/2 md:-translate-y-1/3'>
            <h1 data-aos="fade-down" data-aos-offset="40" className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-secondary text-center'>
              Get The Things for <br />
              Best Gaming&nbsp;
              <TypeAnimation className='text-stroke'
                sequence={['Experience', 2000, 'Products', 2000,]}
                speed={50}
                repeat={Infinity}
              />

            </h1>
            <div className='mt-12 flex justify-center'>
              <Search />
            </div>
            <div className='tag flex flex-wrap justify-center items-center mt-7'>
              <span className='text-primary block mr-2.5 mb-2'>Suggests:</span>
              <button className='mb-2 text-xs font-semibold rounded-full border border-primary px-7 py-3 mr-2.5 hover:bg-primary hover:text-white transition duration-500 ease-in-out'>Console</button>
              <button className='mb-2 text-xs font-semibold rounded-full border border-primary px-7 py-3 mr-2.5 hover:bg-primary hover:text-white active transition duration-500 ease-in-out'>Gaming PC</button>
              <button className='mb-2 text-xs font-semibold rounded-full border border-primary px-7 py-3 mr-2.5 hover:bg-primary hover:text-white transition duration-500 ease-in-out'>Video Games</button>
              <button className='mb-2 text-xs font-semibold rounded-full border border-primary px-7 py-3 mr-2.5 hover:bg-primary hover:text-white transition duration-500 ease-in-out'>AMD Ryzen 5 5600X</button>
            </div>

          </div>
          <div className='hidden left-0 top-0 bottom-0 container md:inline-flex md:justify-center absolute md:top-[inherit] md:bottom-[68px] md:left-1/2 md:-translate-x-1/2'>
            <div className='flex md:justify-center'>
              <Nav />
            </div>
          </div>
        </div>
      </section>
      <section className='py-4 sm:py-7 lg:py-14 bg-gray-50'>
        <div className='title text-center mb-4 lg:mb-8' data-aos="fade-down">
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-secondary'>Featured <span className='text-stroke text-stroke-gray'> Ads</span></h1>
          <h3 className='text-base md:text-lg font-extralight'>Buy & Sell Anything</h3>
        </div>
        <div className='container'>
          <Featured productdata={featuredslides} />
        </div>
      </section>
      <section className='py-4 sm:py-7 lg:py-14'>
        <div className='title text-center mb-4 lg:mb-8' data-aos="fade-down">
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-secondary'>Popular in <span className='text-stroke'> Consoles</span></h1>
          <h3 className='text-base md:text-lg font-extralight'>Buy & Sell Anything</h3>
        </div>
        <div className='container'>
          <Featured productdata={featuredslides} />
        </div>
      </section>
      <section className='py-4 sm:py-7 lg:py-14 bg-gray-50'>
        <div className='title text-center mb-4 lg:mb-8' data-aos="fade-down">
          <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-secondary'>Browse by <span className='text-stroke text-stroke-gray'> Brands</span></h1>
          <h3 className='text-base md:text-lg font-extralight'>Buy & Sell Anything</h3>
        </div>
        <div className='container'>
          <Brand branddata={brands} />
        </div>
      </section>
      <Footer />
    </>
  )
}

