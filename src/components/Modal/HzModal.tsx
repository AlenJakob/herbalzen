import {
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
} from "@chakra-ui/react";
import { ReactElement } from "react";

export const HzModal = ({
	isOpen,
	onClose,
	children,
}: {
	isOpen: boolean;
	onClose: () => void;
	children: ReactElement | string;
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Modal Title</ModalHeader>
				<ModalCloseButton />
				{!children ? (
					<ModalBody>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
						laborum ducimus est!
					</ModalBody>
				) : (
					<ModalBody>{children}</ModalBody>
				)}

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={onClose}>
						Close
					</Button>
					<Button variant="ghost">Secondary Action</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};
