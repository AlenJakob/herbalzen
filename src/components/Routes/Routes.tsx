import { Route, Routes } from "react-router-dom";
import { Home } from "../../routes/Home";
import { Contact } from "../../routes/Contact";
import { Articles } from "../../routes/Articles";

export const HzRoutes = () => {
	return (
		<Routes>
			<Route path="/" Component={Home}></Route>
			<Route path="/contact" Component={Contact}></Route>
			<Route path="/articles" Component={Articles}></Route>
		</Routes>
	);
};
