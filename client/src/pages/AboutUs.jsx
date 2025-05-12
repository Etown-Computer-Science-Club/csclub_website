import {
  Box, Text, Heading, Table, Tbody, Tr, Th, Td, Link, Icon,
} from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

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
      <Heading mb={5}>2024-25 Officers</Heading>
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
                <Link href="https://www.linkedin.com/in/mattsmith46/" isExternal>
                    Matthew Smith
                  </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Vice President</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/james-m-hutchins/" isExternal>
                  James Hutchins
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Treasurer</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/isabella-la-face-76b148300/" isExternal>
                  Isabella la Face
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Secretary</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/kanade-ueda-0b0783289/" isExternal>
                  Kylie Ueda
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Tech Lead</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/brian-duva-software-dev/" isExternal>
                  Brian Duva
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Presidential Advisor</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/james-buck-799175290/" isExternal>
                  James Buck
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Faculty Advisor</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/peilongli/" isExternal>
                  Dr. Peilong Li
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Faculty Advisor</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/jingwen-jessica-wang/" isExternal>
                  Dr. Jingwen Wang
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
          <Link href="https://github.com/Etown-Computer-Science-Club" isExternal mr={3}>
            <Icon as={FaGithub} boxSize={8} />
          </Link>
          <Link href="https://www.instagram.com/etowncsclub" isExternal mr={3}>
            <Icon as={FaInstagram} boxSize={8} />
          </Link>
          <Link href="https://www.linkedin.com/in/cs-club-etown/" isExternal>
            <Icon as={FaLinkedin} boxSize={8} />
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
