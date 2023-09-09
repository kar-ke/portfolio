import React from 'react'
import verifiedlogo from '../Asserts/verify.png';

const Skills = () => {

    const links = [
        {
            id: 1,
            link: "HTML"
        },
        {
            id: 2,
            link: "CSS"
        },
        {
            id: 3,
            link: "Javascript"
        },
        {
            id: 4,
            link: "Reactjs"
        },
        {
            id: 4,
            link: "Redux"
        },
        {
            id: 4,
            link: "tailwind"
        }
    ]

    const links2 = [
        {
            id: 1,
            link: "Vscode"
        },
        {
            id: 1,
            link: "Postman"
        },
        {
            id: 1,
            link: "Github"
        },
        {
            id: 1,
            link: "Figma"
        },
        {
            id: 1,
            link: "ChatGPT"
        }
    ]

    const links3 = [
        {
            id: 1,
            link: "Figma"
        },
        {
            id: 1,
            link: "Photoshop"
        },
        {
            id: 1,
            link: "AdobeXd"
        },
        {
            id: 1,
            link: "illustrator"
        }
    ]
  return (
    <div name="Experience" className=' mobile:mt-16  desktop:mt-24 laptop:mt-14'>
        <div className='flex flex-col justify-center items-center'>
                <p className='text-[12px] font-medium text-[#454545]'>explore my</p>
                <h1 className='text-3xl text-[#1D1D1D] font-semibold'>Experience</h1>
        </div>



        <div className='flex mobile:flex-col tablet:flex-row justify-center mobile:gap-8 tablet:gap-0 mt-16 laptop:mt-16 '>
            
            <div className='outline outline-offset-2 outline-1 outline-black-500 rounded-lg mx-4 tablet:h-[22.5rem] tablet:w-[25rem] laptop:w-[25rem] desktop:w-[34rem]'>
                    <h1 className='flex text-xl text-[#1D1D1D] font-semibold justify-center top-0 my-6'>Frontend development</h1>
                <ul className='flex flex-wrap justify-center py-10 items-center gap-8'>
                    {links.map(({link})=> (
                        <li className='flex align-baseline  my-4 '>
                            <img className='h-5 mx-2' src={verifiedlogo} alt='verifylogo'></img>
                            <p className='text-2 font-semibold text-[#454545]'>{link}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='justify-center items-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg mx-4 tablet:h-[22.5rem] tablet:w-[25rem] laptop:w-[25rem] desktop:w-[34rem]'>
                <h1 className='flex text-xl text-[#1D1D1D] justify-center font-semibold my-6'>Supporting tools</h1>
                <ul className='flex flex-wrap justify-center items-center py-10 gap-8  '>
                    {links2.map(({link})=> (
                        <li className='flex align-baseline my-4'>
                            <img className='h-5 mx-2' src={verifiedlogo} alt='verifylogo'></img>
                            <p className='text-2 font-semibold text-[#454545]'>{link}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className='flex mobile:flex-col tablet:flex-row justify-center mobile:gap-8 tablet:gap-0 mt-8 laptop:mt-6 '>
            <div className=' justify-center items-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg mx-4  tablet:w-[52rem] laptop:w-[52rem] desktop:w-[70rem]'>
                    <h1 className='flex text-xl text-[#1D1D1D] justify-center font-semibold my-6'>Designing tools</h1>
                    <ul className='flex flex-wrap justify-center items-center py-6 gap-8  '>
                        {links3.map(({link})=> (
                            <li className='flex align-baseline my-4'>
                                <img className='h-5 mx-2' src={verifiedlogo} alt='verifylogo'></img>
                                <p className='text-2 font-semibold text-[#454545]'>{link}</p>
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Skills