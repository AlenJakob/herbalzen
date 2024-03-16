import { getUsers } from "@/api/typicodeApi";
import { useEffect, useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "FETCH_INIT":
			return { ...state, isLoading: true, error: null };
		case "FETCH_SUCCESS":
			return { ...state, isLoading: false, users: action.payload };
		case "FETCH_ERROR":
			return { ...state, isLoading: false, error: action.payload };
		default:
			throw new Error("Unhandled action type");
	}
};

const initialValue = {
	isLoading: false,
	users: null,
	error: null,
};

export const useGetUsers = () => {
	const [state, dispatch] = useReducer(reducer, initialValue);
	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: "FETCH_INIT" });

			try {
				const response = await getUsers();
				const result = await response.json();

				dispatch({ type: "FETCH_SUCCESS", payload: result });
			} catch (error) {
				dispatch({ type: "FETCH_ERROR", payload: error.message });
			}
		};

		fetchData();
	}, []);

	return state;
};
