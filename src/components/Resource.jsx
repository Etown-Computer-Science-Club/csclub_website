import {
	Card,
	Box,
	Heading,
	Link,
	ListItem,
	Image,
	UnorderedList,
	Flex,
	useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Resource = ({ title, link, image, description }) => {
	const bg = useColorModeValue("white", "gray.800");
	const hoverBg = useColorModeValue("gray.100", "gray.700");

	return (
		<Link href={link} isExternal _hover={{ textDecoration: "none" }}>
			<Card
				border="1px"
				borderRadius="md"
				p={5}
				bg={bg}
				_hover={{ bg: hoverBg }}
				transition="background 0.3s"
				userSelect="none"
			>
				<Flex direction={{ base: "column", md: "row" }} align="center">
					<Image src={image} alt={title} boxSize="100px" mr={5} objectFit="contain" />
					<Box>
						<Heading size="md" mb={3}>
							{title}
						</Heading>
						<UnorderedList stylePosition="inside">
							{description.map((item, index) => (
								<ListItem key={index}>{item}</ListItem>
							))}
						</UnorderedList>
					</Box>
				</Flex>
			</Card>
		</Link>
	);
};

Resource.propTypes = {
	title: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	description: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Resource;
