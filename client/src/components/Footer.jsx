import {
  Box,
  Text,
  Divider,
  Link,
} from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" textAlign="center" mt={{ base: 3, md: 4 }} mb={{ base: 3, md: 4 }}>
      <Divider mb={3} />
      <Text fontSize={{ base: 'sm', md: 'base' }} mb={2}>
        <strong>
          Contact us:
        </strong>
        {' '}
        <Link href="mailto:csclub@etown.edu" color="teal.300">
          csclub@etown.edu
        </Link>
      </Text>
      <Text fontSize={{ base: 'sm', md: 'base' }}>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Elizabethtown College CS Club
      </Text>
    </Box>
  );
}

export default Footer;
