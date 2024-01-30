import { Grid } from "@chakra-ui/react";
import { HzArticleCard } from "./HzArticleCard";
import articlesList from "../../api/articles.json";
console.log("Log:articlesList", articlesList);

export interface IArticleCard {
	id: string;
	author: string;
	date: string;
	image: string;
	content: {
		title: string;
		main: string;
		properties: string;
		summary: string;
		partial: string;
	};
	tags: string[];
	category: string;
	source: string;
	url: string;
}

export const HzArticles = () => {
	const { articles } = articlesList;
	return (
		<Grid templateColumns="repeat(3, 1fr)" gap={"2rem"}>
			{articles.map((article: IArticleCard, i) => {
				return <HzArticleCard key={i} article={article}></HzArticleCard>;
			})}
		</Grid>
	);
};
