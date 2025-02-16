import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();
// const [loading, setLoading] = useState(false);

const initialState = {
	loading: false,
	cart: cartItems,
	total: 0,
	amount: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};
	const deleteItem = (id) => {
		dispatch({ type: "DELETE_ITEM", payload: id });
	};
	const increase = (id) => {
		dispatch({ type: "INCREASE", payload: id });
	};
	const decrease = (id) => {
		dispatch({ type: "DECREASE", payload: id });
	};
	// increase e decrease in one function:
	const toggleAmount = (id, type) => {
		dispatch({ type: "TOGGLE_AMOUNT", payload: { id, type } });
	};
	//
	useEffect(() => {
		dispatch({ type: "GET_TOTALS" });
	}, [state.cart]);

	const getData = async () => {
		dispatch({ type: "LOADING" });
		try {
			const response = await fetch(url);
			const cart = await response.json();
			dispatch({ type: "DISPLAY_ITEMS", payload: cart });
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				deleteItem,
				increase,
				decrease,
				toggleAmount,
			}}
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
