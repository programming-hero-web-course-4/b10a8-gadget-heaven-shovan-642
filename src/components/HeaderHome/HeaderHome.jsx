import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import BannerImg from '../BannerImg/BannerImg';

const HeaderHome = () => {
    return (
        <div className='m-9'>
            <div className="border border-gray-200 rounded-3xl p-3">
                <div className='navbar-container bg-color-01 rounded-3xl text-white'>

                    <Navbar></Navbar>
                    <Banner></Banner>

                </div>
            </div>
            
            <div className="relative top-[-200px]">
                <BannerImg></BannerImg>
            </div>
        </div>
    );
};

export default HeaderHome;