import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from '../components/header';
import Footer from '../components/footer';
// import Mainmenu from '../components/mainmenu';
import ProductGrid from '../components/productlistgrid';
import categorylistingproduct from '../data/categoryproductlisting.json';
// import Innerbanner from '../components/innerbanner';
import { Link } from "react-router-dom";
import InnerpageSearch from "../components/innerpagesearch";
import AdvanceFilter from "../components/advancesearch";
// import Nav from '../components/navbar';
import ReactSelect from "../components/Reactselect";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { BsFillFilterCircleFill } from "react-icons/bs";

export const CategoryProductlisting = () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    const sorting = [
        { value: 'Default', label: 'Default' },
        { value: 'Oldest to Newest', label: 'Oldest to Newest' },
        { value: 'Newest to Oldest', label: 'Newest to Oldest' },
        { value: 'Highest to Lowest', label: 'Highest to Lowest' },
        { value: 'Lowest to Highest', label: 'Lowest to Highest' }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Category Product list';
        AOS.init({
            offset: 120,
            duration: 1200,
        });
    }, []);
    return (
        <>
            <Header />

            <section className='py-4 sm:py-7'>
                <div className='container'>
                    <div className='flex justify-center'>
                        <InnerpageSearch />
                    </div>
                </div>
            </section>

            <section className='pt-4 sm:pt-7 bg-gray-100'>
                <div className='container'>
                    <div className='breadcrumb mb-7'>
                        <h2 className='text-2xl md:text-3xl font-semibold text-secondary'>Video Games</h2>
                        <div className='flex mt-2'>
                            <Link to="/gamezone" className='text-sm hover:text-primary'>Home</Link>
                            <span className='text-sm px-2'>/</span>
                            <span className='text-sm'>Video Games</span>
                        </div>
                    </div>

                    <div>
                        {/* <h3 className='text-xl font-semibold block mb-4'>Video Games - <span className='text-primary'>400 Ads</span></h3> */}
                        <div className='flex flex-wrap gap-2'>
                            <Link className='flex justify-between items-center py-0.5 px-4 bg-white border rounded-full whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary'>
                                <h2 className='mr-4 text-sm'>GameZone1</h2>
                                <h2 className='font-bold text-sm'>50Ads</h2>
                            </Link>
                            <Link className='flex justify-between items-center py-0.5 px-4 bg-white border rounded-full whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary'>
                                <h2 className='mr-4 text-sm'>GameZone1</h2>
                                <h2 className='font-bold text-sm'>50Ads</h2>
                            </Link>
                            <Link className='flex justify-between items-center py-0.5 px-4 bg-white border rounded-full whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary'>
                                <h2 className='mr-4 text-sm'>GameZone Areas</h2>
                                <h2 className='font-bold text-sm'>50Ads</h2>
                            </Link>
                            <Link className='flex justify-between items-center py-0.5 px-4 bg-white border rounded-full whitespace-nowrap hover:bg-primary hover:text-white hover:border-primary'>
                                <h2 className='mr-4 text-sm'>GameZone Section</h2>
                                <h2 className='font-bold text-sm'>50Ads</h2>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>


            <section className='py-4 sm:py-7 lg:py-14 bg-gray-100'>
                <div className='container'>
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-16'>
                        <div className='bg-white p-8 hidden lg:block'>
                            <h3 className="text-xl font-semibold mb-2 block">Filters</h3>
                            <AdvanceFilter />
                        </div>
                        <div className='col-span-full lg:col-span-2'>
                            <div className="sorting flex flex-wrap justify-between items-center mb-4 lg:mb-8">
                                <div className='flex items-center'>
                                    <button onClick={toggleDrawer} className='mr-2 block lg:hidden'>
                                        <div className='flex items-center'>
                                            <BsFillFilterCircleFill className='text-xl text-secondary' />
                                            <span className='px-1 text-sm lg:text-base'>Filter</span>
                                        </div>
                                    </button>

                                    <p className="hidden xs:block text-sm lg:text-base">12 results found</p>
                                </div>
                                <div className='flex items-center'>
                                    <span className='mr-2 text-sm lg:text-base'>Sort By: </span>
                                    <div className='w-auto sm:min-w-[180px] Sortingselect'>
                                        <ReactSelect options={sorting} placeholder="Default" isSearchable={false} label={null} />
                                    </div>
                                </div>
                            </div>
                            <ProductGrid productdata={categorylistingproduct} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='drawerRight p-8'
            >
                <h3 className="text-xl font-semibold mb-2 block">Filters</h3>
                <div><AdvanceFilter /></div>
            </Drawer>
        </>
    )
}
