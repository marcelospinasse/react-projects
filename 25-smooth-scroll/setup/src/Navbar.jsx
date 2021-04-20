import React from "react";
import logo from "./logo.svg";
import { links } from "./data";
const Navbar = () => {
	const handleClick = (e) => {
		e.preventDefault();
		const target = e.target.getAttribute("href");
		const location = document.querySelector(target).offsetTop;
		window.scrollTo({
			left: 0,
			top: location - 64 /* 64 é a altura do navbar */,
		});
	};

	return (
		<nav className="navbar sticky">
			<div className="nav-center">
				<img src={logo} alt="smooth scroll" />
				<div>
					<ul>
						{links.map((link) => {
							const { id, text, url } = link;
							return (
								<a key={id} href={url} onClick={handleClick}>
									{text}
								</a>
							);
						})}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
