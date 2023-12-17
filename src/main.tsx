import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../src/styles/reset.scss";

import { BrowserRouter } from "react-router-dom";
import {
	ChakraBaseProvider,
	extendBaseTheme,
	theme as chakraTheme,
} from "@chakra-ui/react";
const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
	components: {
		Button,
	},
});

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ChakraBaseProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ChakraBaseProvider>
	</React.StrictMode>
);
