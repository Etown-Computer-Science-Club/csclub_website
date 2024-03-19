import {
  Box, Text, Heading, Table, Tbody, Tr, Th, Td, Link, Icon,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function AboutUs() {
  return (
    <>
      <Heading mb={5}>About Us</Heading>
      <Box mb={5}>
        <Text>
          We are a club dedicated to computer science. We aim to provide an engaging, supportive
          environment where students can enhance their knowledge and skills in various aspects of
          computer science. We plan to attend hackathons, host workshops, and complete projects.
        </Text>
      </Box>
      <Heading mb={5}>2023-24 Officers</Heading>
      <Box mb={5}>
        <Table variant="simple">
          <Tbody>
            <Tr>
              <Th>Position</Th>
              <Th>Name</Th>
            </Tr>
            <Tr>
              <Td>President</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/ethan-lajeunesse-aa0992253/" isExternal>
                  Ethan Lajeunesse
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Vice President</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/michaelpkennedy1/" isExternal>
                  Michael Kennedy
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Treasurer</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/danistrausburger/" isExternal>
                  Danielle Strausburger
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Secretary</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/giovanni-raso1/" isExternal>
                  Giovanni Raso
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Webmaster</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/alexander-fox-etown/" isExternal>
                  Alexander Fox
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Outreach Lead</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/muzahidul-islam-3aa567289/" isExternal>
                  Muzahidul Islam
                </Link>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
      <Heading mb={5}>Contact Us</Heading>
      <Box mb={5}>
        <Text>
          Email:
          {' '}
          <Link href="mailto:csclub@etown.edu" color="blue.500">
            csclub@etown.edu
          </Link>
        </Text>
        <Box display="flex" mt={5}>
          <Link href="https://www.facebook.com/yourclub" isExternal mr={3}>
            <Icon as={FaFacebook} boxSize={8} />
          </Link>
          <Link href="https://www.twitter.com/yourclub" isExternal mr={3}>
            <Icon as={FaTwitter} boxSize={8} />
          </Link>
          <Link href="https://www.linkedin.com/yourclub" isExternal>
            <Icon as={FaLinkedin} boxSize={8} />
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
