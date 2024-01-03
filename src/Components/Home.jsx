import React from 'react';
import heroImage from '../Asserts/heroimg-removebg-preview.png';


const Home = () => {
  return (
		<div
			name="home"
			className="flex items-baseline justify-center laptop:min-h-min desktop:min-h-max  w-full bg-white">
			
            <div className="flex-wrap laptop:flex laptop:pt-14 desktop:flex ">
				<div className="items-center justify-center laptop:pr-10">
					<img
						className="skeleton w-[276px] h-[289px] mx-[45px] my-12 tablet:w-[356px] tablet:h-[369px] laptop:w-[376px] laptop:h-[389px] desktop:w-[476px] desktop:h-[489px]"
						src={heroImage}
						alt="heroimage"></img>
				</div>

				<div className="flex justify-center items-center laptop:pl-6 desktop:pl-8">
					<div className="flex flex-col justify-center items-center laptop:items-start h-[110px]">
						<h6 className="text-sm desktop:text-xl">
							Hello, i'm &nbsp; 
							<span className="text-[#1D1D1D] font-semibold text-2xl desktop:text-4xl mt-2 ">
								karthikeyan ramesh
							</span>
						</h6>
						<h4 className="text-sm font-normal desktop:text-xl desktop:mt-2 ">
							your passionate full-stack web developer.
						</h4>
						<div className="pt-6">
							<button className="shadow-lg bg-white hover:bg-[#1D1D1D] text-black hover:text-white text-sm duration-500 py-2 px-4 outline outline-1  rounded-full">
								Download CV
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}

export default Home