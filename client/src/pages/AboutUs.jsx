import {
  Box, Text, Heading, Table, Tbody, Tr, Th, Td, Link,
} from '@chakra-ui/react';

function AboutUs() {
  return (
    <>
      <Heading size={{ base: 'lg', md: 'xl' }} mb={5}>About Us</Heading>
      <Box mb={5}>
        <Text fontSize={{ base: 'sm', md: 'base' }}>
          We are a club dedicated to computer science. We aim to provide an engaging, supportive
          environment where students can enhance their knowledge and skills in various aspects of
          computer science. We plan to attend hackathons, host workshops, and complete projects.
        </Text>
      </Box>
      <Heading size={{ base: 'lg', md: 'xl' }} mb={5}>2025-2026 Officers</Heading>
      <Box mb={3} overflowX="auto">
        <Table variant="simple" fontSize={{ base: 'sm', md: 'base' }}>
          <Tbody>
            <Tr>
              <Th>Position</Th>
              <Th>Name</Th>
            </Tr>
            <Tr>
              <Td>President</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/kana-ueda-0b0783289/" isExternal>
                  Kylie Ueda
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Vice President</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/isabella-la-face-76b148300/" isExternal>
                  Isabella la Face
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Treasurer</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/brian-duva-software-dev/" isExternal>
                  Brian Duva
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Social Media Chair</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/kaiden-miller/" isExternal>
                  Kaiden Miller
                </Link>
              </Td>
            </Tr>
            <Tr>
              <Td>Outreach Lead</Td>
              <Td>
                <Link href="https://www.linkedin.com/in/aaronfrist/" isExternal>
                  Aaron Frist
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
    </>
  );
}

export default AboutUs;
