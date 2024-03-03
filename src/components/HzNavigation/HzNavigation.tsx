import { NavLink } from "react-router-dom";
import "./HzNavigation.scss";
import { Link as ChakraLink, ButtonGroup, Box } from "@chakra-ui/react";
import logo from "@assets/logo.svg";
import herbalZen from "@assets/herbal-zen.svg";

export const HzNavigation = () => {
	const NAVIGATION_LINKS = [
		{ id: 1, url: "/", name: "Home" },
		{ id: 3, url: "/articles", name: "Articles" },
		{ id: 4, url: "/herbals", name: "Herbals" },
		{ id: 5, url: "/tips", name: "Tips" },
		{ id: 6, url: "/contact", name: "Contact" },
		{ id: 7, url: "/account", name: "Account" },
	];

	return (
		<ButtonGroup display="flex" maxHeight={30}>
			<Box gap="4" display="flex" justifyContent="space-between" width="100%">
				<Box
					style={{
						margin: 0,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "5px",
					}}
					transform="translateY(-40px)"
				>
					<img style={{ maxWidth: "35px" }} src={logo} alt="herbal zen logo" />
					<img src={herbalZen} alt="herbal zen text logo" />
				</Box>
				<Box
					style={{
						display: "flex",
						gap: "8px",
					}}
				>
					{NAVIGATION_LINKS.map(({ url, name, id }) => (
						<ChakraLink
							display="flex"
							alignItems="center"
							borderRadius={4}
							padding="4px 8px"
							bg="teal.500"
							color="white"
							_hover={{ bg: "teal.200" }}
							className={({ isActive }) => (isActive ? "active" : "")}
							as={NavLink}
							key={id}
							to={url}
						>
							{name}
						</ChakraLink>
					))}
				</Box>
			</Box>
		</ButtonGroup>
	);
};
