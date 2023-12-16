import "./App.css";
import { Link, Route, Routes, useSearchParams } from "react-router-dom";
import { Home } from "./routes/Home";
import { Contact } from "./routes/Contact";
import { useEffect } from "react";

const NAVIGATION_LINKS = [
	{ id: 1, url: "/", name: "Home" },
	{ id: 2, url: "/about", name: "About" },
];

function App() {
	const [searchParams, setSearchParams] = useSearchParams({
		query: "",
	});

	const query = searchParams.get("query") as string;

	useEffect(() => {
		console.log("Log:searchParams", searchParams);
	}, [searchParams]);

	return (
		<>
			<input
				type="text"
				value={query}
				onChange={(e) => {
					console.log();
					setSearchParams((prev) => {
						prev.set("query", e.target.value);
						return prev;
					});
				}}
			/>

			<ul>
				{NAVIGATION_LINKS.map((menu) => (
					<li key={menu.id}>
						<Link to={menu.url}>{menu.name}</Link>
					</li>
				))}
			</ul>
			<Routes>
				<Route path="/" Component={Home}></Route>
				<Route path="/about" Component={Contact}></Route>
			</Routes>
		</>
	);
}

export default App;
