import React from 'react';
import ig from '../Asserts/social/ig.png';
import git from '../Asserts/social/git.png';
import linkedin from '../Asserts/social/linkedin.png';
import twitter from '../Asserts/social/twitter.png';


const Footer = () => {
  return (
    <div className='bg-black mt-24 w-full  '>
        <div className='flex mobile:flex-col tablet:flex:col laptop:flex-row   justify-center items-center mobile:gap-28  desktop:gap-96
        '>
            <div className='flex flex-col justify-center mx-8 laptop:mt-10 '>
                <p className='text-2xl text-[#f1f1f1] font-semibold mobile:w-10 tablet:w-full py-8'>Karthikeyan ramesh</p>
                <p className=' text-[#f1f1f1] font-light'>A Frontend focused Web Developer building the Frontend of websites and <br />
                   Web Applications that leads to the success of the overall product.</p>
            </div>
            <div className='flex flex-col justify-center items-center '>
                <p className='flex text-xl text-[#f1f1f1] font-semibold justify-center items-center py-8'>Social</p>
                <div className='flex'>
                    <div className='flex flex-row gap-5'>
                        <a href='https://twitter.com/karke__'><img className='h-8' alt='icons' src={twitter}></img></a>
                        <a href='https://www.instagram.com/karke__'><img className='h-8' alt='icons' src={ig}></img></a>
                        <a href='https://github.com/kar-ke'><img className='h-8' alt='icons' src={git}></img></a>
                        <a href='https://www.linkedin.com/in/karke'><img className='h-8' alt='icons' src={linkedin}></img></a>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center'>
             <hr className='flex text-white mobile:w-60 tablet:w-[77rem] laptop:w-[58rem] desktop:w-[77rem] laptop:ml-6 mt-16'></hr>
             
        </div>
        <div className='flex justify-center items-center py-10'>
            <p className='text-sm text-[#f1f1f1] font-light'>&#169;  copyright 2023. Made by karke.</p>
        </div>
        
    </div>
  )
}

export default Footer