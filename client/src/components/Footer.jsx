import { Box, Text, Divider } from '@chakra-ui/react';

function Footer() {
  return (
    <Box as="footer" textAlign="center" mt={4} mb={4}>
      <Divider mb={3} />
      <Text>
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
