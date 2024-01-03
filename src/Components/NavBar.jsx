import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaTimesSolid } from "react-icons/lia";
import logo from "../Asserts/logo-black-removebg-preview.png";
import { Link } from "react-scroll";
import links from "../Content/Menuitems.js";

const NavBar = () => {
	const [nav, setNav] = useState(false);

	return (
		<div className="flex justify-between items-center w-full h-20  desktop:px-24 laptop:px-16 px-4 text-black bg-white">
			<div>
				<img loading="lazy" className="w-[80px] pb-1.5" src={logo} alt="logo"  ></img>
			</div>
			<ul className="hidden laptop:flex desktop:flex">
				{links.map(({ link, id }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize font-normal hover:text-purple-600 text-black hover:scale-105">
						<Link to={link} smooth duration={500}>
							{link}
						</Link>
					</li>
				))}
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-2 z-10 text-black  laptop:hidden desktop:hidden">
				{nav ? (
					<LiaTimesSolid size={30} />
				) : (
					<RxHamburgerMenu size={30} />
				)}
			</div>

			{nav && (
				<ul className="flex flex-col justify-center content-end items-center absolute bg-white   top-0 left-0 w-full h-screen divide-y divide-grey">
					{links.map(({ link, id }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-2xl">
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth
								duration={500}>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavBar;
