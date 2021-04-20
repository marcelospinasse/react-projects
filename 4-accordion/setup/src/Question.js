import React, { useState } from "react";
import {
	AiFillAlipaySquare,
	AiOutlineMinus,
	AiOutlinePlus,
} from "react-icons/ai";

const Question = ({ title, info }) => {
	const [showAnswer, setshowAnswer] = useState(false);
	return (
		<article className="question">
			<header>
				<h4 className="question h4">{title}</h4>{" "}
				<button
					className="btn"
					onClick={() => {
						setshowAnswer(!showAnswer);
					}}
				>
					{showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			<p>{showAnswer && info}</p>
		</article>
	);
};

export default Question;
