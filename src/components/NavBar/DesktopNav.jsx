import { Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const DesktopNav = () => (
	<Flex align={"center"}>
		<Link as={RouterLink} to="/" mr={5}>
			Home
		</Link>
		<Link as={RouterLink} to="/about" mr={5}>
			About Us
		</Link>
		<Link as={RouterLink} to="/resources">
			Resources
		</Link>
	</Flex>
);

export default DesktopNav;
