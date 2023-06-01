import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../components/header';
import { TypeAnimation } from 'react-type-animation';
import Footer from '../components/footer';
import Search from "../components/search";
import Featured from '../components/productlistslider';
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
          <img src="/gamezone/assets/images/sliderbanner/banner1.jpg" alt="Banner 1" className='main-banner h-[80vh] md:h-[768px] w-full object-cover' />
          <div className='images-icon'>
            <img src="/gamezone/assets/images/sliderbanner/triangle-right.png" alt="triangle" className='icon-triangle h-[50px] md:h-[60px] lg:h-[70px] :xl:h-[85px]' />
            <div className='relative icon-circle'>
              <img src="/gamezone/assets/images/sliderbanner/circle.png" alt="circle" className='icon-circle-img h-[50px] md:h-[60px] lg:h-[70px] :xl:h-[90px]' />
              <div className='absolute top-4'>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gray-300"></span>
                </span>
              </div>
            </div>

            <img src="/gamezone/assets/images/sliderbanner/diagonal.png" alt="diagonal" className='icon-diagonal h-[50px] md:h-[60px] lg:h-[70px] :xl:h-[80px]' />
            <img src="/gamezone/assets/images/sliderbanner/inclined-cross.png" alt="inclined-cross" className='icon-inclined-cross h-[50px] md:h-[60px] lg:h-[70px] :xl:h-[70px]' />
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
          <div className='hidden container md:inline-flex md:justify-center absolute bottom-[68px] left-1/2 -translate-x-1/2'>
            <div className='flex md:justify-center'>
              <Nav />
            </div>
          </div>
        </div>
      </section>
      <section className='block py-4 sm:py-7 lg:py-14 md:hidden'>
        <div className='container'>
          <Nav />
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

