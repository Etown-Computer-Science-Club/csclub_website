import {
	Link,
	IconButton,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerBody,
	VStack,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

const MobileNav = ({ navItems }) => {
	const [isOpen, setIsOpen] = useState(false);
	const onClose = () => setIsOpen(false);
	const btnRef = useRef();

	return (
		<>
			<IconButton
				icon={<HamburgerIcon />}
				variant={"outline"}
				ref={btnRef}
				onClick={() => setIsOpen(true)}
			/>
			<Drawer
				finalFocusRef={btnRef}
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				size="xs"
			>
				<DrawerOverlay>
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerBody>
							<VStack p={0}>
								{navItems.map((item) => (
									<Link
										as={RouterLink}
										to={item.link}
										mr={5}
										key={item.link}
										onClick={onClose}
									>
										{item.title}
									</Link>
								))}
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

MobileNav.propTypes = {
	navItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MobileNav;
