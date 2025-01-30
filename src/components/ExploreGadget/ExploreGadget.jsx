
import SideBar from '../SideBar/SideBar';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';

const ExploreGadget = () => {

 const [categories, setCategories] =  useState([])

 useEffect(()=>{
    fetch('../category.json')
        .then(res => res.json())
        .then(data=> setCategories(data))
        .catch(error => console.error('error=', error))
 },[])

    

    return (
        <div>
            <div className='w-10/12 mx-auto ExploreGadget-container relative top-[-200px]'>
                <h1 className='font-bold text-3xl text-center pb-10'>Explore Cutting-Edge Gadgets</h1>
                <div className='flex gap-5'>
                    <div className='w-2/12'>
                        <SideBar categories={categories}></SideBar>
                    </div>
                    <div className='w-10/12'>
                        <Outlet></Outlet>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ExploreGadget;