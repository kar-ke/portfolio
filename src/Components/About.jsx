import React from 'react'
import experience from '../Asserts/quality.png';
import educationLogo from '../Asserts/mortarboard.png';
import { BiDownArrowAlt } from 'react-icons/bi';



const About = () => {
  return (
		<section
			name="About"
			className="mobile:mt-16 laptop:mt-0 desktop:mt-16">
			<div className="flex justify-center mb-6  animate-bounce">
				<BiDownArrowAlt size={28} />
			</div>
			<div className="flex mobile:flex-col mt-16 ">
				<div className="flex flex-col justify-center items-center">
					<p className="text-[12px] font-medium text-[#454545]">
						get to know more
					</p>
					<h1 className="text-3xl text-[#1D1D1D] font-semibold">
						About me
					</h1>
				</div>
				<div className="flex flex-col tablet:flex-row justify-center items-center mx-6 mobile:mt-6 mt-16 laptop:mt-8 desktop:mx-80 laptop:mx-40 tablet:mx-14">
					<div className="flex flex-col flex-grow justify-center items-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg h-[170px] w-full  mx-4 mt-12 mobile:mt-6">
						<img
							className="h-10 w-10 mb-2"
							src={experience}
							alt="experience logo"></img>
						<h1 className="text-xl font-semibold text-[#1D1D1D] ">
							Experience
						</h1>
						<p>2 years </p>
						<p>in fullstack development</p>
					</div>
					<div className="flex flex-col flex-grow justify-center items-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg h-[170px] w-full mx-4 mt-12 mobile:mt-6">
						<img
							className="h-10 w-10 mb-2"
							src={educationLogo}
							alt="education logo"></img>
						<h1 className="text-xl font-semibold text-[#1D1D1D] ">
							Education
						</h1>
						<p>Bachelor's in Computer Science</p>
						<p>Master's in Computer Application*</p>
					</div>
				</div>
				<div className="my-12">
					<p className="mx-6 tablet:mx-16 laptop:mx-44 desktop:mx-[330px] text-justify">
						I'm Karthik, a results-driven Full-Stack Web Developer
						from Tamil Nadu, India, with a solid two-year track
						record in the startup ecosystem. My coding journey
						evolved from a personal exploration into a thriving
						career, marked by a passion for overcoming challenges in
						web development. Proficient in HTML, CSS, JavaScript,
						React, and Node.js, I excel in crafting seamless user
						experiences and architecting robust server-side
						solutions.
					</p>{" "}
					<br />
					<p className="mx-6 tablet:mx-16 laptop:mx-44 desktop:mx-[330px] text-justify">
						I'm collaborative by nature, I've honed effective
						communication and adaptability while working with
						cross-functional teams. Beyond writing efficient code,
						my goal is to create impactful solutions for users and
						businesses alike. I Committed to continuous learning in the
						evolving tech landscape, I'm excited about contributing
						my skills to new ventures. Let's connect and explore the
						vast potential of web development together!
					</p>
				</div>
			</div>
		</section>
  );
}

export default About