import React, { useState } from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { LiaTimesSolid } from "react-icons/lia"

const NavBar = () => {

    const [nav, setNav] = useState(false)
    
    const links = [
        {
            id: 1,
            link: "About"
        },
        {
            id: 2,
            link: "Experience"
        },
        {
            id: 3,
            link: "Projects"
        },
        {
            id: 4,
            link: "contact"
        }
    ]

  return (
    <div className='flex justify-between items-center w-full h-20  lg:px-24 md:px-16 px-4 text-black bg-white'>
        <div>
            <h1 className='text-xl font-semibold'>karke.</h1>
        </div>
        <ul className='hidden md:flex lg:flex'>
            {links.map(({link, id}) => (
                <li 
                key={id} 
                className='px-4 cursor-pointer capitalize font-normal hover:text-purple-600 text-black hover:scale-105'>
                {link}
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-2 z-10 text-black md:hidden lg:hidden'>
            {nav ? <LiaTimesSolid size={30} /> : <RxHamburgerMenu size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center content-end items-center absolute top-0 left-0 w-full h-screen '>
            {links.map(({link, id}) => (
                    <li 
                    key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                    {link}
                    </li>
                ))}
            </ul>
        )}
        
    </div>
  )
}

export default NavBar