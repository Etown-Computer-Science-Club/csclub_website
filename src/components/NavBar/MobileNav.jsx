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
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState, useRef } from "react";

const MobileNav = () => {
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
								<Link as={RouterLink} to="/" onClick={onClose}>
									Home
								</Link>
								<Link as={RouterLink} to="/about" onClick={onClose}>
									About Us
								</Link>
								<Link as={RouterLink} to="/resources" onClick={onClose}>
									Resources
								</Link>
							</VStack>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</>
	);
};

export default MobileNav;
