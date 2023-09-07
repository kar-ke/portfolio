import React from 'react'
import experience from '../Asserts/quality.png';
import educationLogo from '../Asserts/mortarboard.png';

const About = () => {
  return (
    <div name="About" className='mobile:mt-16'>
        <div className='flex mobile:flex-col '>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-[12px] font-medium text-[#454545]'>get to know more</p>
                <h1 className='text-3xl text-[#1D1D1D] font-semibold'>About me</h1>
            </div>
            <div className='flex mobile:flex-col tablet:flex-row justify-center '>
                <div className='flex flex-col justify-center items-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg h-[140px] w-[350px] laptop:w-[400px] desktop:w-[500px] desktop:h-[160px] mx-4 mt-12'>
                    <img className='h-10 w-10 mb-2' src={experience} alt='experience logo'></img>
                    <h1 className='text-xl font-semibold text-[#1D1D1D] '>Experience</h1>
                    <p>2+ years </p>
                    <p>in fullstack development</p>
                </div>
                <div className='flex flex-col justify-center items-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg h-[140px] w-[350px] laptop:w-[400px] desktop:w-[500px] desktop:h-[160px] before:mx-4 mobile:my-6 tablet:mt-12 laptop:mt-12 desktop:mt-12'>
                    <img className='h-10 w-10 mb-2' src={educationLogo} alt='education logo'></img>
                    <h1 className='text-xl font-semibold text-[#1D1D1D] '>Education</h1>
                    <p>Bachelor's in Computer Science</p>
                    <p>Master's in Computer Application*</p>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default About