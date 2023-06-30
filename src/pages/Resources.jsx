import { SimpleGrid, Heading } from "@chakra-ui/react";
import Resource from "../components/Resource";

const Resources = () => {
	return (
		<>
			<Heading mb={5}>Resources</Heading>
			<SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="stretch">
				{resources.map((resource, index) => (
					<Resource key={index} {...resource} />
				))}
			</SimpleGrid>
		</>
	);
};

export default Resources;

const resources = [
	{
		title: "Refer Me",
		link: "https://refer.me",
		image: "https://s3.amazonaws.com/refer.me/site/logos/logo.png",
		description: ["Find job referrals from employees working at top tech companies"],
	},
	{
		title: "LeetCode",
		link: "https://leetcode.com",
		image: "https://assets.leetcode.com/static_assets/public/webpack_bundles/images/LeetCode_nav.4d940ca72.png",
		description: ["Practice coding challenges", "Prepare for technical interviews"],
	},
	{
		title: "GitHub Education Pack",
		link: "https://education.github.com/pack",
		image: "/GitHub-Mark.png",
		description: [
			"Free access to premium developer tools and services",
			"Learn new skills with hands-on tutorials",
		],
	},
	{
		title: "Glassdoor",
		link: "https://www.glassdoor.com",
		image: "https://logos-world.net/wp-content/uploads/2021/08/Glassdoor-Logo.png",
		description: [
			"Get insights about companies, salaries, and interviews",
			"Discover new job opportunities",
		],
	},
	{
		title: "Levels.fyi",
		link: "https://www.levels.fyi",
		image: "https://www.levels.fyi/assets/logo/full_grey/full_logo.svg",
		description: [
			"Search 300k+ salaries for different companies, job titles, career levels, and locations",
			"Explore tools to help you get paid more",
		],
	},
];
