import React, { useState } from "react";
import data from "./data";
function App() {
	const [count, setCount] = useState(1);
	const [text, setText] = useState([]);

	const numData = data.length - 1;
	console.log(numData);

	const handleSubmit = (e) => {
		e.preventDefault();
		let amount = parseInt(count);

		if (amount <= 0) {
			amount = 1;
		}
		if (amount > numData) {
			amount = numData;
		}
		console.log(count);
		setText(data.slice(0, amount));
	};

	return (
		<section className="section-center">
			<h3>Tired of a Boring Lorem Ipsum?</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="amount">Paragraphs:</label>
				<input
					type="number"
					name="name"
					id="amount"
					value={count}
					onChange={(e) => setCount(e.target.value)}
				></input>
				<button type="submit" className=" btn">
					Generate
				</button>
			</form>
			<article className="lorem-text">
				{text.map((item, index) => {
					return <p key={index}>{item}</p>;
				})}
			</article>
		</section>
	);
}

export default App;
