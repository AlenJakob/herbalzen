const apiUrl = "https://jsonplaceholder.typicode.com/";

export const getUsers = () => {
	return fetch(`${apiUrl}/users`);
};
