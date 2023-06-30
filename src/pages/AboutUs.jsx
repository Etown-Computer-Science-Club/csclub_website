import { Box, Text, Heading, Table, Tbody, Tr, Th, Td, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
	return (
		<Box p={5}>
			<Heading mb={5}>About Us</Heading>
			<Box mb={5}>
				<Text>
					We are a club dedicated to computer science. We aim to provide an engaging,
					supportive environment where students can enhance their knowledge and skills in
					various aspects of computer science. We plan to attend hackathons, host
					workshops, and complete projects.
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
							<Td>Ethan Lajeunesse</Td>
						</Tr>
						<Tr>
							<Td>Vice President</Td>
							<Td>Michael Kennedy</Td>
						</Tr>
						<Tr>
							<Td>Treasurer</Td>
							<Td>Danielle Strausburger</Td>
						</Tr>
						<Tr>
							<Td>Secretary</Td>
							<Td>Giovanni Raso</Td>
						</Tr>
						<Tr>
							<Td>Webmaster</Td>
							<Td>Alexander Fox</Td>
						</Tr>
					</Tbody>
				</Table>
			</Box>
			<Heading mb={5}>Contact Us</Heading>
			<Box mb={5}>
				<Text>
					Email:{" "}
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
		</Box>
	);
};

export default AboutUs;
