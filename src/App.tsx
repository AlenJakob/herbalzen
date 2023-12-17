import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { HzRoutes } from "./components/Routes/Routes";
import { Box, Container } from "@chakra-ui/react";

function App() {
	return (
		<Container p={4} maxW="5xl" m="2rem auto">
			<Box p={4} borderWidth="1px" borderRadius="lg">
				<Navigation />
			</Box>
			<HzRoutes />
		</Container>
	);
}

export default App;
