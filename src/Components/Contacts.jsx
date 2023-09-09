import React from 'react'

const Contacts = () => {
  return (
    <div name="Contact" className='flex flex-col justify-cente items-center mobile:mt-16 laptop:mx-24 desktop:mx-44 desktop:mt-24 laptop:mt-14'>
        <div className='flex flex-col justify-center items-center w-[28rem] mobile:w-[22rem]'>
            <h1 className='text-3xl text-[rgb(29,29,29)] font-semibold mb-2'>Contact</h1>
            <p className='text-[12px]  text-center font-medium text-[#454545] mx-4'>Feel free to contact me by submitting the form below and i will get back to you as soon as possible.</p>
        </div>
        <div className='flex justify-center mt-16 '>
            <div className='flex flex-col outline outline-1 outline-gray-400 rounded-3xl p-6 mobile:p-4 mx-4 mobile:w-[20rem] tablet:w-[30rem] tablet:p-6 laptop:w-[27rem] desktop:p-6'>
            <form action='https://getform.io/f/8b1eb116-9713-4ab3-b576-263481f4d4d4' method="POST" className='flex flex-col justify-center items-center gap-6 mobile:gap-4 tablet:gap-6 desktop:gap-6'>
                <input type='text' name='name' placeholder=' name' className='mobile:p-2 tablet:p-3 desktop:p-3 outline outline-1 outline-gray-400 rounded-3xl w-full ' />
                <input type='email' name='email' placeholder=' email' className='mobile:p-2 tablet:p-3 desktop:p-3  outline outline-1 outline-gray-400 rounded-3xl w-full' />
                <textarea name='message'  rows={10}  placeholder=' leave me a note' className='mobile:p-2 tablet:p-3 desktop:p-3  outline outline-1 outline-gray-400 rounded-3xl w-full '></textarea>
                <button className='item-end text-l outline outline-gray-400 outline-1 rounded-full font-semibold text-[#363636]  w-24 mobile:py-1 tablet:py-2 desktop:py-2'>Submit</button>
            </form>
            </div>


        </div> 
    </div>
  )
}

export default Contacts