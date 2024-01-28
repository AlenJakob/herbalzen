import {
	Card,
	Heading,
	CardBody,
	Stack,
	Image,
	Text,
	ButtonGroup,
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
	const { author, date, image, content, tags, category, source, url, id } =
		article;
	const { title, main, properties, summary } = content;
	return (
		<Card maxW="sm">
			<CardBody>
				<Image
					src={temporaryImage}
					alt="Green tea herbal zen"
					borderRadius="lg"
				/>
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text>{main}</Text>
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
			<CardFooter padding="10px">
				<ButtonGroup spacing="1">
					<Link
						as={NavLink}
						size="sm"
						variant="outline"
						display="flex"
						alignItems="center"
						borderRadius={4}
						padding="4px 8px"
						bg="teal.500"
						color="white"
						_hover={{ bg: "teal.200" }}
						to={`/articles/${id}`}
					>
						read more
					</Link>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};
