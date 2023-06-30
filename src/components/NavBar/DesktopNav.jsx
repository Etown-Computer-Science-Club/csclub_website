import { Link, Flex } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";

const DesktopNav = ({ navItems }) => (
	<Flex align={"center"}>
		{navItems.map((item) => (
			<Link as={RouterLink} to={item.link} mr={5} key={item.link}>
				{item.title}
			</Link>
		))}
	</Flex>
);

DesktopNav.propTypes = {
	navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DesktopNav;
