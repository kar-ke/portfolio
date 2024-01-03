import React from "react";
import verifiedlogo from "../Asserts/verify.png";
import { frontendSkills, backendSkills } from "../Content/Menuitems.js";

const Skills = () => {
	return (
		<div
			name="Experience"
			className=" mobile:mt-16  desktop:mt-24 laptop:mt-14">
			<div className="flex flex-col justify-center items-center">
				<p className="text-[12px] font-medium text-[#454545]">
					explore my
				</p>
				<h1 className="text-3xl text-[#1D1D1D] font-semibold">
					Experience
				</h1>
			</div>

			<div className="flex flex-col justify-center items-center mobile:gap-8 tablet:flex-row mt-16 mx-6 laptop:mx-40 desktop:mx-80">
				<div className="flex flex-col flex-grow justify-center outline outline-offset-2 outline-1 outline-black-500 rounded-lg mx-4 w-full ">
					<h1 className=" text-xl text-[#1D1D1D] text-center font-semibold top-0 my-6">
						Frontend development
					</h1>

					<ul className="flex flex-wrap justify-start py-10 items-center gap-8 px-10">
						{frontendSkills.map(({ link, id }) => (
							<li key={id} className="flex align-baseline  my-4 ">
								<img
									className="h-5 mx-2"
									src={verifiedlogo}
									alt="verifylogo"></img>
								<p className="text-2 font-semibold text-[#454545]">
									{link}
								</p>
							</li>
						))}
					</ul>
				</div>

				<div className="flex flex-col flex-grow justify-start outline outline-offset-2 outline-1 outline-black-500 rounded-lg mx-4 w-full">
					<h1 className="text-xl text-[#1D1D1D] text-center font-semibold my-6">
						Backend development
					</h1>
					<ul className="flex flex-wrap justify-center py-10 items-center gap-8 px-10">
						{backendSkills.map(({ link, id }) => (
							<li key={id} className="flex align-baseline my-4">
								<img
									className="h-5 mx-2"
									src={verifiedlogo}
									alt="verifylogo"></img>
								<p className="text-2 font-semibold text-[#454545]">
									{link}
								</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Skills;
