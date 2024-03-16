import { NavLink } from "react-router-dom";
import "./HzNavigation.scss";
import { Link as ChakraLink, ButtonGroup, Box } from "@chakra-ui/react";
import logo from "@assets/logo.svg";
import herbalZen from "@assets/herbal-zen.svg";
import { HzAccountButtonCta } from "../settings/HzAccountButtonCta";

export const HzNavigation = () => {
	const NAVIGATION_LINKS = [
		{ id: 3, url: "/", name: "Artykuły" },
		{ id: 4, url: "/herbals", name: "Zioła" },
		{ id: 5, url: "/tips", name: "Porady" },
		{ id: 6, url: "/contact", name: "Kontakt" },
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
							as={NavLink}
							key={id}
							to={url}
						>
							{name}
						</ChakraLink>
					))}
					<HzAccountButtonCta />
				</Box>
			</Box>
		</ButtonGroup>
	);
};
