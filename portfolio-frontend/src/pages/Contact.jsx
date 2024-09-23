import React from 'react';
import gitIcon from '../assets/icons/socials/git-black.svg';
import instaIcon from '../assets/icons/socials/insta.svg';
import linkedinIcon from '../assets/icons/socials/linkedin.svg';
import xIcon from '../assets/icons/socials/x-icon.svg';

const Contact = () => {
    return (
        <section className='contact-section'>
            <div className='stylebox-left'></div>
            <div className='form-wrapper'>
                <h3 className='mb50'>Let's work together</h3>
                <form action="POST" className='form-container'>
                    <input type="name" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <textarea rows={6} type="text" placeholder='leave me a note' />
                    <button className='submit-btn'>Submit</button>
                </form>
            </div>
            <div className='stylebox-right'></div>
            <ul className='socials-tab'>
                <li><a href="#"><img src={xIcon} alt="x icon" className='social-icon'/></a></li>
                <li><a href="#"><img src={linkedinIcon} alt="linkedin icon" className='social-icon'/></a></li>
                <li><a href="#"><img src={gitIcon} alt="github icon" className='social-icon'/></a></li>
                <li><a href="#"><img src={instaIcon} alt="instagram icon" className='social-icon'/></a></li>
            </ul>
        </section>
    )
}

export default Contact