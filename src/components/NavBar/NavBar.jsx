import { Box, Heading, Flex, Image, useMediaQuery } from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

const navItems = [
	{ title: "Home", link: "/" },
	{ title: "Events", link: "/events" },
	{ title: "About Us", link: "/about" },
	{ title: "Resources", link: "/resources" },
];

const NavBar = () => {
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

	return (
		<Box bg="blue.900" px={4} color="white">
			<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
				<Flex align={"center"}>
					<Image
						src="CS_CLUB_LOGO.png"
						alt="CS Club Logo"
						boxSize="50px"
						mr={3}
						objectFit="cover"
					/>
					<Heading>CS Club</Heading>
				</Flex>
				{isLargerThan768 ? (
					<DesktopNav navItems={navItems} />
				) : (
					<MobileNav navItems={navItems} />
				)}
			</Flex>
		</Box>
	);
};

export default NavBar;
