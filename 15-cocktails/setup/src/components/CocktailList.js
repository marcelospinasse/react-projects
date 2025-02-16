import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";
// import SearchForm from "./SearchForm";

const CocktailList = () => {
	const { loading, cocktails } = useGlobalContext();

	if (loading) {
		return <Loading></Loading>;
	}
	if (cocktails.length < 1) {
		return (
			<h2 className="section-title">No cocktail matched your criteria!</h2>
		);
	}

	return (
		<section className="section">
			<h2 className="section-title">{cocktails.length} Cocktails</h2>
			<div className="cocktails-center">
				{cocktails.map((item) => {
					return <Cocktail key={item.id} {...item}></Cocktail>;
				})}
			</div>
		</section>
	);

	// return <main>hello</main>;
};

export default CocktailList;
