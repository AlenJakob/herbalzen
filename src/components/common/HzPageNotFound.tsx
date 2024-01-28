import { Link, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const HzPageNotFound = () => {
	return (
		<>
			<Text>Page not found</Text>
			<Link
				as={NavLink}
				to="/"
				variant="outline"
				bg="teal.500"
				color="white"
				_hover={{ bg: "teal.200" }}
				borderRadius={4}
				padding="4px 8px"
			>
				Go back
			</Link>
		</>
	);
};
