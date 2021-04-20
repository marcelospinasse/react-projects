import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
	const { id } = useParams();
	const [loading, setIsLoading] = React.useState(true);
	const [cocktail, setCocktail] = React.useState([]);

	useEffect(() => {
		setIsLoading(true);
		try {
			async function getCocktail() {
				const response = await fetch(`${url}${id}`);
				const data = await response.json();
				if (data.drinks) {
					const {
						strDrink: name,
						strDrinkThumb: image,
						strAlcoholic: info,
						strCategory: category,
						strGlass: glass,
						strIngredient1: ingredient1,
						strIngredient2: ingredient2,
						strIngredient3: ingredient3,
						strIngredient4: ingredient4,
						strIngredient5: ingredient5,
						strIngredient6: ingredient6,
						strIngredient7: ingredient7,
						strIngredient8: ingredient8,
						strIngredient9: ingredient9,
						strIngredient10: ingredient10,
						strInstructions: instructions,
					} = data.drinks[0];
					const ingredients = [
						ingredient1,
						ingredient2,
						ingredient3,
						ingredient4,
						ingredient5,
						ingredient6,
						ingredient7,
						ingredient8,
						ingredient9,
						ingredient10,
					];
					const newCocktail = {
						name,
						image,
						info,
						category,
						glass,
						instructions,
						ingredients,
					};
					setCocktail(newCocktail);
				} else {
					setCocktail(null);
				}

				setIsLoading(false);
			}
			getCocktail();
		} catch (error) {
			console.log(error);
			setIsLoading(false);
		}
	}, [id]);

	// console.log(cocktail);

	if (loading) {
		return <Loading></Loading>;
	}
	if (!cocktail) {
		return <h2 className="section-title">No cacktail to display</h2>;
	}
	const {
		name,
		image,
		category,
		info,
		glass,
		instructions,
		ingredients,
	} = cocktail;
	return (
		<section className="section cocktail-section">
			<div className="section-title">
				<h2>{name}</h2>
				<div className="underline"></div>
			</div>
			<div className="drink">
				<img src={image} alt={name}></img>
				<div className="drink-info">
					<p>
						<span className="drink-data">name:</span>
						{name}
					</p>
					<p>
						<span className="drink-data">category:</span>
						{category}
					</p>
					<p>
						<span className="drink-data">info:</span>
						{info}
					</p>
					<p>
						<span className="drink-data">glass:</span>
						{glass}
					</p>
					<p>
						<span className="drink-data">ingredients</span>
						{ingredients.map((item, index) => {
							return item ? <span key={index}>{item} </span> : null;
						})}
					</p>
					<p>
						<span className="drink-data">instructions:</span>
						{instructions}
					</p>
				</div>
			</div>
			<Link to="/" className="btn btn-primary btn-mt">
				Back Home
			</Link>
		</section>
	);
};

export default SingleCocktail;
