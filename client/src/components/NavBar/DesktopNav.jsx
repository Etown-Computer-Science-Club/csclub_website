import { Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function DesktopNav({ navItems }) {
  return (
    <Flex align="center">
      {navItems.map((item) => (
        <Link as={RouterLink} to={item.link} mr={5} key={item.link}>
          {item.title}
        </Link>
      ))}
    </Flex>
  );
}

DesktopNav.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DesktopNav;
