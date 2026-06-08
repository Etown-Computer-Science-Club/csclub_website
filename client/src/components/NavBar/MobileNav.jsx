import {
  Link,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { HamburgerIcon } from '@chakra-ui/icons';
import { useState, useRef } from 'react';

function MobileNav({ navItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const btnRef = useRef();

  return (
    <>
      <IconButton
        icon={<HamburgerIcon />}
        variant="outline"
        ref={btnRef}
        onClick={() => setIsOpen(true)}
      />
      <Drawer finalFocusRef={btnRef} isOpen={isOpen} placement="right" onClose={onClose} size="xs">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody py={4}>
              <VStack spacing={0} align="stretch" p={0}>
                {navItems.map((item) => (
                  item.external ? (
                    <Link href={item.link} key={item.link} isExternal onClick={onClose} py={4} px={3} fontSize={{ base: 'md', md: 'base' }} display="block" _hover={{ bg: 'gray.700' }} borderRadius="md">
                      {item.title}
                    </Link>
                  ) : (
                    <Link as={RouterLink} to={item.link} key={item.link} onClick={onClose} py={4} px={3} fontSize={{ base: 'md', md: 'base' }} display="block" _hover={{ bg: 'gray.700' }} borderRadius="md">
                      {item.title}
                    </Link>
                  )
                ))}
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}

MobileNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MobileNav;
