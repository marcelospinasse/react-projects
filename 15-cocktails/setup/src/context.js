import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const urlCocktail = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const urlIngredient =
	"https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [searchTerm, SetSearchTerm] = useState("a");
	const [cocktails, setCocktails] = useState([]);
	const [isChecked, setIsChecked] = useState(false);

	const fetchDrinks = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(
				`${isChecked ? urlIngredient + searchTerm : urlCocktail + searchTerm} `
			);
			// const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			const { drinks } = data;
			if (drinks) {
				const newCocktails = drinks.map((item) => {
					const {
						idDrink,
						strDrink,
						strDrinkThumb,
						strAlcoholic,
						strGlass,
					} = item;
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});
				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [searchTerm, isChecked]);

	useEffect(() => {
		fetchDrinks();
	}, [searchTerm, fetchDrinks, isChecked]);

	return (
		<AppContext.Provider
			value={{ loading, SetSearchTerm, cocktails, isChecked, setIsChecked }}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
