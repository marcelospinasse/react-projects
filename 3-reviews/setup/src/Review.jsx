import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
	const [index, setIndex] = useState(0);
	const { id, name, job, image, text } = people[index];

	const prevPerson = () => {
		index === 0 ? setIndex(people.length - 1) : setIndex(index - 1);
	};
	const nextPerson = () => {
		index === people.length - 1 ? setIndex(0) : setIndex(index + 1);
	};
	const surprise = () => {
		setIndex(Math.floor(Math.random() * people.length));
	};
	// const [person, setPerson]  = useState(id, name, job, image, text);
	return (
		<article className="review">
			<div className="img-container">
				<img src={image} alt={name} className="person-img"></img>
				<span className="quote-icon">
					<FaQuoteRight />
				</span>
			</div>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="text">{text}</p>
			<div>
				<button className="prev-btn" onClick={prevPerson}>
					<FaChevronLeft />
				</button>
				<button className="next-btn" onClick={nextPerson}>
					<FaChevronRight />
				</button>
			</div>
			<button className="random-btn" onClick={surprise}>
				Surprise me!
			</button>
		</article>
	);
};

export default Review;
