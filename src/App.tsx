import "./App.css";
import { HzModal } from "./components/Modal/HzModal";
import { Navigation } from "./components/Navigation/Navigation";
import { HzRoutes } from "./components/Routes/Routes";
import { Box, Container } from "@chakra-ui/react";
import { useModalStore } from "./store/modal";
import { HzFooter } from "./components/HzFooter";

function App() {
	const { isOpen, onClose } = useModalStore();

	return (
		<Container p={4} maxW="5xl" m="2rem auto">
			<Box p={4} borderWidth="1px" borderRadius="lg">
				<Navigation />
			</Box>
			<HzRoutes />
			<HzModal isOpen={isOpen} onClose={onClose}>
				Modal Content
			</HzModal>
			<HzFooter />
		</Container>
	);
}

export default App;
