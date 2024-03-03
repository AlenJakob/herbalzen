import {
	Card,
	Heading,
	CardBody,
	Stack,
	Image,
	Text,
	CardFooter,
	Divider,
	Badge,
	Link,
} from "@chakra-ui/react";
import { IArticleCard } from "./HzArticles";
import temporaryImage from "../../assets/herbal-tea-tmp.jpg";
import { NavLink } from "react-router-dom";

const randomizeTagColor = () => {
	const TAG_COLORS = ["purple", "green", "teal", "yellow", "orange"];
	const randomNumber = Math.floor(Math.random() * TAG_COLORS.length);
	return TAG_COLORS[randomNumber];
};

export const HzArticleCard = ({ article }: { article: IArticleCard }) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// TODO: variables to use
	const { author, date, image, content, tags, category, source, url, id } =
		article;
	const { title, main, partial, properties, summary } = content;
	return (
		<Card maxW="sm">
			<CardBody>
				<Link as={NavLink} to={`/articles/${id}`}>
					<Image
						src={temporaryImage}
						alt="Green tea herbal zen"
						borderRadius="lg"
					/>
				</Link>
				<Stack mt="6" spacing="3">
					<Heading
						_hover={{ bg: "teal.200" }}
						size="md"
						as={NavLink}
						to={`/articles/${id}`}
					>
						{title}
					</Heading>
					<Text>{partial}</Text>
					<Stack direction="row">
						{tags.map((tag, i) => {
							return (
								<Badge colorScheme={randomizeTagColor()} key={i}>
									{tag}
								</Badge>
							);
						})}
					</Stack>
				</Stack>
			</CardBody>
			<Divider
				sx={{
					borderWidth: "1px",
					borderColor: "gray.100",
				}}
			/>
			<CardFooter padding="5px">tutaj data?</CardFooter>
		</Card>
	);
};
