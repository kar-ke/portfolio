import React from 'react';
import heroImage from '../Asserts/heroimg-removebg-preview.png';

const Home = () => {
  return (
    <div name="home" className='flex items-baseline justify-center h-screen w-full bg-white'>
        <div className='flex-wrap laptop:flex laptop:pt-14 desktop:flex '>
            <div className='items-center justify-center laptop:pr-10'>
                <img className='w-[276px] h-[289px] mx-[45px] my-12 laptop:w-[376px] laptop:h-[389px] desktop:w-[476px] desktop:h-[489px]' src={heroImage} alt='heroimage'></img>
            </div>

            <div className='flex justify-center items-center laptop:pl-6'>
                <div className='sm:flex flex-col justify-center items-center laptop:items-start h-[110px]'>
                    <h6 className='py-1 text-[#454545] desktop:text-m desktop:py-2'>Hello, i'm</h6>
                    <h1 className='text-2xl text-[#1D1D1D] font-semibold desktop:text-3xl' >karthikeyan ramesh</h1>
                    <h4 className='py-1 text-l font-medium text-[#454545] desktop:text-xl'>frontend developer</h4>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home