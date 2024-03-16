import { useEffect, useReducer, useState } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + 1 };
		case "decrement":
			return { ...state, count: state.count - 1 };
	}
};

const initialValue = {
	test: "jakis teksotwy",
	count: 1,
};

export const useCount = () => {
	const [state, dispatch] = useReducer(reducer, initialValue);

	const incrementNum = () => {
		dispatch({ type: "increment" });
	};

	const decrementNum = () => {
		dispatch({ type: "decrement" });
	};

	useEffect(() => {
		console.log("Log:state", state);
	}, [state]);

	return {
		state,
		incrementNum,
		decrementNum,

		// dispatch,
	};
};
