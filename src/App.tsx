import "./App.css";
import { HzModal } from "./components/Modal/HzModal";
import { HzNavigation } from "./components/HzNavigation/HzNavigation";
import { HzRoutes } from "./components/Routes/Routes";
import { Box, Container } from "@chakra-ui/react";
import { useModalStore } from "./store/modal";
import { HzFooter } from "./components/common/HzFooter";

function App() {
	const { isOpen, onClose } = useModalStore();

	return (
		<Container p={4} maxW="5xl" m="2rem auto">
			<Box p={4} marginBottom="2rem" borderWidth="1px" borderRadius="lg">
				<HzNavigation />
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
