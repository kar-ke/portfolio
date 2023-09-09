import React from 'react';
import proj1 from '../Asserts/projects/project-1.png';
import proj2 from '../Asserts/projects/project-2.png';
import proj3 from '../Asserts/projects/project-3.png';
import gitLogo from '../Asserts/github.png'

const Projects = () => {
  return (
    <div name="Projects" className='mobile:mt-16 laptop:mx-24 desktop:mx-44  desktop:mt-24 laptop:mt-14'>
        <div className='flex flex-col justify-center items-center'>
            <p className='text-[12px] font-medium text-[#454545]'>Browse my recent</p>
            <h1 className='text-3xl text-[#1D1D1D] font-semibold'>Projects</h1>
        </div>
        <div className='flex flex-col tablet:flex-row  justify-center mobile:gap-8 tablet:gap-0 desktop:gap-4 mt-16 mx-2'>
            <div className='flex flex-col outline outline-1 outline-gray-400 rounded-3xl mx-4 py-4 tablet:mx-2 '>
                <img src={proj1} alt='project-1-img' className=' rounded-3xl mx-8 my-8 '></img>
                <div className='flex justify-center align-baseline pb-4'>
                    <img src={gitLogo}  alt='proj img' className='h-12 px-6'></img>
                    <button className='text-xl outline  outline-gray-400 outline-1  py-3 px-8 tablet:px-4 rounded-full font-semibold text-[#1D1D1D] hover:text-[20pxc] duration-200'>demo</button>
                </div>
            </div>

            <div className='flex flex-col outline  outline-1 outline-gray-400 rounded-3xl mx-6 py-4 tablet:mx-2'>
                <img src={proj2} alt='project-1-img' className=' rounded-3xl  mx-8 my-8'></img>
                <div className='flex justify-center align-baseline pb-4'>
                <img src={gitLogo} alt='proj img'  className='h-12 px-6'></img>
                    <button className='text-xl outline  outline-gray-400 outline-1 py-3 px-8 tablet:px-4 rounded-full font-semibold text-[#1D1D1D] hover:text-[20pxc] duration-200'>demo</button>
                </div>
            </div>

            <div className='flex flex-col outline  outline-1 outline-gray-400 rounded-3xl mx-6 py-4 tablet:mx-2'>
                <img src={proj3} alt='project-1-img' className=' rounded-3xl  mx-8 my-8'></img>
                <div className='flex justify-center align-baseline pb-4'>
                <img src={gitLogo} alt='proj img'  className='h-12 px-6'></img>
                    <button className='text-xl outline  outline-gray-400 outline-1  py-3 px-8 tablet:px-4 rounded-full font-semibold text-[#1D1D1D] hover:text-[20pxc] duration-200'>demo</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects