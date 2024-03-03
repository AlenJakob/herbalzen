import { Route, Routes } from "react-router-dom";
import { Home } from "../../routes/Home";
import { Contact } from "../../routes/Contact";
import { Articles } from "../../routes/Articles";
import { Article } from "../../routes/Article";
import { HzPageNotFound } from "../common/HzPageNotFound";
import { Account } from "@/routes/Account";

export const HzRoutes = () => {
	return (
		<Routes>
			<Route path="/" Component={Home}></Route>
			<Route path="/contact" Component={Contact}></Route>
			<Route path="/articles" Component={Articles}></Route>
			<Route path="/articles/:id" Component={Article}></Route>
			<Route path="/account" Component={Account}></Route>
			<Route path="*" Component={HzPageNotFound}></Route>
		</Routes>
	);
};
