import { Box, Button, Image, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import articlesList from "../api/articles.json";
import { IArticleCard } from "@/components/articles/HzArticles";
import { CalendarIcon } from "@chakra-ui/icons";
import temporaryImage from "../assets/herbal-tea-tmp.jpg";

export const Article = () => {
	const { articles } = articlesList;
	const findArticleById = (id?: string) => {
		return articles.find((article: IArticleCard) => {
			return id === article.id;
		});
	};

	const { id } = useParams();

	const { author, date, image, content, tags, category, source, url } =
		findArticleById(id);
	const { title, main, partial } = content;
	return (
		<div>
			<Button as={NavLink} to="/">
				go Back
			</Button>
			{/* ARTICLE: <b>ID: {id}</b> */}

			<Box display="flex" justifyContent="space-between" my="3rem">
				<Box>
					<Heading>{title}</Heading>
					<Text>{partial}</Text>
				</Box>
				<Box>
					<Text>{author}</Text>
					<Text fontSize="sm" sx={{ display: "flex", alignItems: "center" }}>
						<CalendarIcon color="teal.300" marginRight="5px" />
						{date}
					</Text>
				</Box>
			</Box>

			<Box>
				<Image
					src={temporaryImage}
					alt="Green tea herbal zen"
					borderRadius="md"
				/>
			</Box>
			<Box>
				<Text>{main}</Text>
			</Box>
		</div>
	);
};
