import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";

function App() {
	const shades = 10;
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [list, setList] = useState(new Values("#f15025").all(shades));

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let colors = new Values(color).all(shades);
			setList(colors);
			setError(false);
		} catch (error) {
			setError(true);
			console.log(error);
		}
	};

	return (
		<>
			<section className="container">
				<h3>Color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						onChange={(e) => setColor(e.target.value)}
						placeholder="#f15025"
						className={`${error ? "error" : null}`}
					/>
					<button className="btn" type="submit">
						Generate
					</button>
				</form>
			</section>
			<section className="colors">
				{list.map((color, index) => {
					return (
						<SingleColor
							key={index}
							{...color}
							index={index}
							hexColor={color.hex}
							shades={shades}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
