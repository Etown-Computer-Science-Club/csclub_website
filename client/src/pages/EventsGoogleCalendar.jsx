import {
  Box,
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';

function EventsGoogleCalendar() {
  const calendarId = 'ZXRvd25jc0BnbWFpbC5jb20';

  return (
    <VStack align="stretch" spacing={6}>
      <Box>
        <Heading mb={3}>Events Calendar</Heading>
        <Text mb={4} fontSize="sm" color="gray.400">
          View all CS Club events in our Google Calendar below
        </Text>
      </Box>

      <Box
        as="iframe"
        src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=America%2FNew_York`}
        width="100%"
        height="600px"
        frameBorder="0"
        scrolling="no"
        borderRadius="md"
        sx={{
          border: 'none',
        }}
      />

      <Text fontSize="sm" color="gray.500" textAlign="center">
        Calendar may require you to be signed in to your Google account for full functionality.
      </Text>
    </VStack>
  );
}

export default EventsGoogleCalendar;
