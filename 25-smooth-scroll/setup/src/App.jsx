import React from "react";
import Navbar from "./Navbar";
// set id
// setup links with href="#idValue"
// add in css -  scroll-behavior: smooth
function App() {
	return (
		<main id="home">
			<Navbar />
			<section className="home">
				<h1>home</h1>
			</section>
			<section className="about" id="about">
				<h1>about</h1>
			</section>
			<section className="projects" id="projects">
				<h1>projects</h1>
			</section>
			<section className="contact" id="contact">
				<h1>contact</h1>
			</section>
			<section className="rest"></section>
		</main>
	);
}

export default App;
