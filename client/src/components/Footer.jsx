import { Box, Text, Divider, Link } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" textAlign="center" mt={4} mb={4}>
      <Divider mb={3} />
      <Text mb={2}>
        <strong>Contact us:</strong>{' '}
        <Link href="mailto:csclub@etown.edu" color="teal.300">csclub@etown.edu</Link>
      </Text>
      <Text>
        &copy; {new Date().getFullYear()} Elizabethtown College CS Club
      </Text>
    </Box>
  );
}

export default Footer;
