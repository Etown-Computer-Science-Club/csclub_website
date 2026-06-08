import {
  Box,
  Text,
  Divider,
  Link,
  Icon,
  Tooltip,
} from '@chakra-ui/react';
import {
  FaGithub, FaInstagram, FaLinkedin, FaFacebook, FaDiscord, FaGoogleDrive, FaCalendarAlt, FaWpforms,
} from 'react-icons/fa';

function Footer() {
  return (
    <Box
      as="footer"
      textAlign="center"
      mt={{ base: 3, md: 4 }}
      mb={{ base: 3, md: 4 }}
    >
      <Divider mb={3} />

      <Text fontSize={{ base: 'sm', md: 'base' }} mb={3}>
        <strong>Contact us:</strong>
        {' '}
        <Link href="mailto:csclub@etown.edu" color="teal.300">
          csclub@etown.edu
        </Link>
      </Text>

      <Box
        display="flex"
        justifyContent="center"
        gap={{ base: 3, md: 4 }}
        flexWrap="wrap"
        mb={3}
      >
        <Tooltip label="GitHub" hasArrow>
          <Link href="https://github.com/Etown-Computer-Science-Club" isExternal>
            <Icon as={FaGithub} boxSize={{ base: 5, md: 6 }} />
          </Link>
        </Tooltip>

        <Tooltip label="Instagram" hasArrow>
          <Link href="https://www.instagram.com/etowncsclub" isExternal>
            <Icon as={FaInstagram} boxSize={{ base: 5, md: 6 }} />
          </Link>
        </Tooltip>

        <Tooltip label="LinkedIn" hasArrow>
          <Link href="https://www.linkedin.com/in/cs-club-etown/" isExternal>
            <Icon as={FaLinkedin} boxSize={{ base: 5, md: 6 }} />
          </Link>
        </Tooltip>

        <Tooltip label="Facebook" hasArrow>
          <Link href="https://www.facebook.com/profile.php?id=61574682497514" isExternal>
            <Icon as={FaFacebook} boxSize={{ base: 5, md: 6 }} />
          </Link>
        </Tooltip>

        <Text>|</Text>

        <Tooltip label="Discord" hasArrow>
          <Link href="https://discord.com/invite/2qeFUwWfF8" isExternal>
            <Icon as={FaDiscord} boxSize={{ base: 5, md: 6 }} />
          </Link>
        </Tooltip>

        <Tooltip label="Google Drive" hasArrow>
          <Link
            href="https://drive.google.com/drive/folders/1tmvBG6ZtPZRnaOj8D06ZS8E2D2KQMEZJ?usp=drive_link"
            isExternal
          >
            <Icon as={FaGoogleDrive} boxSize={{ base: 5, md: 6 }} />
          </Link>
        </Tooltip>

        <Tooltip label="Google Calendar" hasArrow>
          <Link
            href="https://calendar.google.com/calendar/u/3?cid=ZXRvd25jc0BnbWFpbC5jb20"
            isExternal
            aria-label="Google Calendar"
          >
            <Icon as={FaCalendarAlt} boxSize={{ base: 5, md: 6 }} />
          </Link>
        </Tooltip>

        <Tooltip label="Google Form" hasArrow>
          <Link
            href="https://forms.gle/dsD54bsbjDkfm52F6"
            isExternal
            aria-label="Google Form"
          >
            <Icon as={FaWpforms} boxSize={{ base: 5, md: 6 }} />
          </Link>
        </Tooltip>
      </Box>

      <Text fontSize={{ base: 'sm', md: 'base' }}>
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        <Link
          href="https://www.etown.edu/"
          isExternal
          color="teal.300"
        >
          Elizabethtown College
        </Link>
        {' '}
        CS Club. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
