const reducer = (state, action) => {
	// clear cart
	if (action.type === "CLEAR_CART") {
		return { ...state, cart: [] };
	}
	// delete item
	if (action.type === "DELETE_ITEM") {
		const newItems = state.cart.filter((item) => {
			return item.id !== action.payload;
		});
		return { ...state, cart: newItems };
	}
	// increase item
	if (action.type === "INCREASE") {
		const newCart = state.cart.map((item) => {
			if (item.id === action.payload) {
				return { ...item, amount: item.amount + 1 };
			}
			return item;
		});

		return { ...state, cart: newCart };
	}
	// decrease item
	if (action.type === "DECREASE") {
		const newCart = state.cart
			.map((item) => {
				if (item.id === action.payload) {
					return { ...item, amount: item.amount - 1 };
				}
				return item;
			})
			.filter((item) => item.amount !== 0); // removendo os itens com quantidade menor que 1.

		return { ...state, cart: newCart };
	}
	// Tootle Amount in one function
	if (action.type === "TOGGLE_AMOUNT") {
		const newCart = state.cart
			.map((item) => {
				if (item.id === action.payload.id) {
					if (action.payload.type === "inc") {
						return { ...item, amount: item.amount + 1 };
					}
					if (action.payload.type === "dec") {
						return { ...item, amount: item.amount - 1 };
					}
				}
				return item;
			})
			.filter((item) => item.amount !== 0);
		return { ...state, cart: newCart };
	}

	// cart totals
	if (action.type === "GET_TOTALS") {
		let { total, amount } = state.cart.reduce(
			(cartTotal, cartItem) => {
				const { price, amount } = cartItem;
				cartTotal.amount += amount;
				cartTotal.total += amount * price;
				return cartTotal;
			},
			{
				total: 0,
				amount: 0,
			}
		);
		total = parseFloat(total.toFixed(2));
		return { ...state, total, amount };
	}
	// loaging
	if (action.type === "LOADING") {
		return { ...state, loading: true };
	}
	//
	if (action.type === "DISPLAY_ITEMS") {
		return { ...state, cart: action.payload, loading: false };
	}
	// return  default state
	// return state;
	throw new Error("No matching action type");
};

export default reducer;
