import React from 'react'
import experience from '../Asserts/quality.png';
import educationLogo from '../Asserts/mortarboard.png';
import { BiDownArrowAlt } from 'react-icons/bi';



const About = () => {
  return (
    <section name="About" className='mobile:mt-16 laptop:mt-0 desktop:mt-16'>
        <div className='flex justify-center mb-6  animate-bounce'>
            <BiDownArrowAlt size={28} />
        </div>
        <div className='flex mobile:flex-col mt-16 '>
            <div className='flex flex-col justify-center items-center'>
                <p className='text-[12px] font-medium text-[#454545]'>get to know more</p>
                <h1 className='text-3xl text-[#1D1D1D] font-semibold'>About me</h1>
            </div>
            <div className='flex flex-col tablet:flex-row justify-center mobile:mt-6 mt-16 laptop:mt-8'>
                <div className='flex flex-col justify-center items-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg h-[140px] w-[350px] laptop:h-[170] laptop:w-[450px] desktop:w-[550px] desktop:h-[170px] mx-4 mt-12'>
                    <img className='h-10 w-10 mb-2' src={experience} alt='experience logo'></img>
                    <h1 className='text-xl font-semibold text-[#1D1D1D] '>Experience</h1>
                    <p>1+ years </p>
                    <p>in fullstack development</p>
                </div>
                <div className='flex flex-col justify-center items-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg h-[140px] w-[350px] laptop:h-[170] laptop:w-[450px] desktop:w-[550px] desktop:h-[170px] mobile:mx-4 mobile:my-6 tablet:mt-12 laptop:mt-12 desktop:mt-12'>
                    <img className='h-10 w-10 mb-2' src={educationLogo} alt='education logo'></img>
                    <h1 className='text-xl font-semibold text-[#1D1D1D] '>Education</h1>
                    <p>Bachelor's in Computer Science</p>
                    <p>Master's in Computer Application*</p>
                </div>
            </div>
            <div className=' my-8'>
                    <p className='mx-6 tablet:mx-16 laptop:mx-40 desktop:mx-96 text-justify'>I'm Karthik, a passionate frontend developer based in the thriving tech hub of Bangalore, India, with over an year of experience, primarily in growth-stage startups.My journey in frontend development began with a Bachelor's degree in Computer Science and evolved through hands-on experience as a fullstack developer, giving me a holistic understanding of web development and the ability to bridge the gap between frontend and backend teams seamlessly.This unique background has equipped me to thrive in fast-paced startup environments, where clear communication and adaptability are crucial.</p> <br/>
                    <p className='mx-6 tablet:mx-16 laptop:mx-40 desktop:mx-96 text-justify'>
                    In my role as a frontend developer, I thrive on turning design visions into functional, user-friendly code, pushing the boundaries of web development. I relish the opportunity to take ownership of projects, rapidly develop and iterate, and consistently aim for excellence in my work. My experience in startups has honed my ability to pivot quickly and create delightful user experiences, ultimately driving better business outcomes for clients.
                    </p>
            </div>
            
        </div>
    </section>
  )
}

export default About