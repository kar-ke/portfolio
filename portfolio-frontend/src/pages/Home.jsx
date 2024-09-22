import React from 'react';
import Titletab from '../components/Titletab';
import quoteIcon from '../assets/icons/quotation.png';

const Home = () => {
    return (
        <main>
            <section className='hero-section'>
                <div className='hero-img'>
                    <p className='banner-content'>Hey, there I'm <span>Karthik_</span></p>
                    <a href="https://drive.google.com/file/d/1P-GAWP__1pKLdWtR2wIcijsoaSBl9t5S/view?usp=drive_link" target='blank' className='resume-link'>my resume <span className='arrow'>&#8599;</span></a>
                </div>
            </section>

            <section className='about-section'>
                <div className='about-wrapper'>
                    <Titletab title={'About'} />
                    <p className='about-content'>I am a passionate Front-End developer with a knack for solving complex challenges
                        and crafting creative solutions. I excel at quickly transforming designs into
                        real-world Full Stack projects using cutting-edge technologies and frameworks.</p>
                    <div className='quote-container'>
                        <img src={quoteIcon} alt="blockquote icon" /> 
                        <span className='quote-content'>Creativity without business is Victimization. <br /> 
                            Business without creativity is waste of time.</span>
                    </div>
                </div> 
            </section>

            <section className="experience-section">
                <Titletab title={'Experience'} />
                <h3 className='title-xl mt10'>Where I've worked</h3>
            </section>
        </main>
    )
}

export default Home