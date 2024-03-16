import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
export const HzAccountButtonCta = () => {
	return (
		<div>
			<Link
				display="flex"
				alignItems="center"
				borderRadius={4}
				padding="4px 8px"
				bg="teal.500"
				color="white"
				_hover={{ bg: "teal.200" }}
				as={NavLink}
				to="/account"
			>
				Zaloguj się
			</Link>
		</div>
	);
};
