import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='bg-color-01 min-h-screen w-full mx-auto'>
            <div className='flex flex-col justify-center text-center py-48'>
                <h1 className='text-black text-center text-white font-extrabold text-7xl'>404 page not found</h1>
                <div>
                <Link to="/"><button className="btn w-52 bg-white color-01 border-none rounded-4xl my-12 px-7">Back to Home Page</button></Link>
                </div>
            
            </div>
        </div>
    );
};

export default ErrorPage;