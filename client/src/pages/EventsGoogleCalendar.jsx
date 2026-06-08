import {
  Box,
  Heading,
  VStack,
  Text,
  Link,
} from '@chakra-ui/react';

function EventsGoogleCalendar() {
  const calendarId = 'ZXRvd25jc0BnbWFpbC5jb20';

  return (
    <VStack
      align="stretch"
      spacing={{ base: 6, md: 8 }}
    >
      {/* Header */}
      <Box>
        <Heading size={{ base: 'lg', md: 'xl' }} mb={2}>
          Events Calendar
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'base' }} color="gray.400">
          View all CS Club events in our Google Calendar below
        </Text>
      </Box>

      {/* Calendar */}
      <Box borderRadius="md" overflow="hidden">
        <Box
          as="iframe"
          src={`https://calendar.google.com/calendar/embed?src=${encodeURIComponent(calendarId)}&ctz=America%2FNew_York`}
          width="100%"
          height="600px"
          frameBorder="0"
          scrolling="no"
          sx={{ border: 'none' }}
        />
      </Box>

      {/* Footer note */}
      <Text
        fontSize={{ base: 'xs', md: 'sm' }}
        color="gray.500"
        textAlign="center"
      >
        Calendar may require you to be signed in to your Google account for full functionality.
      </Text>

      {/* Archived Events card */}
      <Box
        p={{ base: 3, md: 4 }}
        borderRadius="md"
        bg="gray.700"
      >
        <Text fontSize={{ base: 'sm', md: 'base' }} mb={2}>
          Access a list of events and meetings pre-2026 here,
          along with resources from those events:
        </Text>

        <Link
          href="/events/archived"
          isExternal
          color="blue.400"
          fontWeight="bold"
          fontSize={{ base: 'base', md: 'md' }}
        >
          View Archived Events
        </Link>
      </Box>
    </VStack>
  );
}

export default EventsGoogleCalendar;
