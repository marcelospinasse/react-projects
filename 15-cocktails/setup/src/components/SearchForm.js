import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { SetSearchTerm, isChecked, setIsChecked } = useGlobalContext();
	const searchValue = React.useRef("");

	React.useEffect(() => {
		searchValue.current.focus();
	}, []);

	const searchCocktail = () => {
		SetSearchTerm(searchValue.current.value);
	};

	const handleCheckbox = (e) => {
		setIsChecked(!isChecked);
		searchValue.current.value = "";
		SetSearchTerm("gin");
	};

	const handleSubmit = (e) => {
		// e.preventDefault(); // previne reload da aplicação ao dar enter sem digitar nada
	};
	return (
		<section className="section search">
			<form className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">
						Search your favorite {isChecked ? "Ingredient" : "Cocktail"}
						<input
							type="checkbox"
							checked={isChecked}
							onChange={handleCheckbox}
						></input>
					</label>
					<input
						type="text"
						id="name"
						ref={searchValue}
						onChange={searchCocktail}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
