import { Heading, Text, Link, Box } from '@chakra-ui/react';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import Event from '../components/Event';
import rawEvents from '../components/eventData.json';

function date(dateString) {
  return zonedTimeToUtc(dateString, 'America/New_York');
}

const events = rawEvents.map((evt) => ({
  ...evt,
  startDate: date(evt.startDate),
  endDate: date(evt.endDate),
}));

export default function ArchivedResources() {
  const currentDate = utcToZonedTime(new Date(), 'America/New_York');
  const previousEvents = events.filter((event) => event.endDate < currentDate);
  previousEvents.sort((a, b) => b.startDate - a.startDate);

  return (
    <>
      <Heading mb={5}>Archived Resources</Heading>
      <Box mb={8} p={4} borderRadius="md" bg="gray.700">
        <Text mb={2}>
          Access resources from our past events and meetings:
        </Text>
        <Link
          href="https://drive.google.com/drive/folders/1tmvBG6ZtPZRnaOj8D06ZS8E2D2KQMEZJ?usp=drive_link"
          isExternal
          color="blue.400"
          fontSize="lg"
          fontWeight="bold"
        >
          View Resources on Google Drive
        </Link>
      </Box>
      <Heading size="md" mb={5}>Previous Events</Heading>
      {previousEvents.map((event, index) => (
        <Event {...event} key={index} />
      ))}
    </>
  );
}
