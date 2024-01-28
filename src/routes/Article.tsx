import { Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export const Article = () => {

	const { id } = useParams();
	return (
		<div>
			<Button as={NavLink} to="/articles">
				go Back
			</Button>
			ARTICLE: <b>ID: {id}</b>
		</div>
	);
};
