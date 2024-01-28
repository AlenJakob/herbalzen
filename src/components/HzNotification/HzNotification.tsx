import {
	Alert,
	AlertIcon,
	AlertTitle,
	AlertDescription,
	Button,
} from "@chakra-ui/react";
import { useState } from "react";

export const HzNotification = () => {
	const [isOpen, setIsOpen] = useState(false);
	const close = () => {
		setIsOpen(false);
	};

	return (
		<>
			{isOpen && (
				<Alert
					status="success"
					variant="subtle"
					flexDirection="column"
					alignItems="center"
					justifyContent="center"
					textAlign="center"
					height="200px"
					position="absolute"
					bottom="0"
				>
					<AlertIcon boxSize="40px" mr={0} />
					<AlertTitle mt={4} mb={1} fontSize="lg">
						Application submitted!
					</AlertTitle>
					<AlertDescription maxWidth="sm">
						Thanks for submitting your application. Our team will get back to
						you soon.
					</AlertDescription>
					<Button onClick={close}>Close</Button>
				</Alert>
			)}
		</>
	);
};
