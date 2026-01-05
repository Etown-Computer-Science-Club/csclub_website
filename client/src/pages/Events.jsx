import { Heading, Link, VStack } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import Event from '../components/Event';
import EventsCalendar from '../components/EventsCalendar';
import rawEvents from '../components/eventData.json';

function date(dateString) {
  return zonedTimeToUtc(dateString, 'America/New_York');
}

// TODO: Replace with API or other call to not hardcode events
const events = rawEvents.map((evt) => ({
  ...evt,
  startDate: date(evt.startDate),
  endDate: date(evt.endDate),
}));

function Events() {
  // Get the current date in EST timezone
  const currentDate = utcToZonedTime(new Date(), 'America/New_York');

  const previousEvents = events.filter((event) => event.endDate < currentDate);
  const upcomingEvents = events.filter((event) => event.startDate > currentDate);
  const currentEvents = events.filter(
    (event) => event.startDate <= currentDate && event.endDate >= currentDate,
  );
  previousEvents.sort((a, b) => b.startDate - a.startDate);
  upcomingEvents.sort((a, b) => a.startDate - b.startDate);

  return (
    <>
      <EventsCalendar events={events} />
      {currentEvents.length > 0 && (
        <>
          <Heading mb={5}>Current Events</Heading>
          {currentEvents.map((event, index) => (
            <Event {...event} key={index} />
          ))}
        </>
      )}

      {upcomingEvents.length > 0 && (
        <>
          <Heading mb={5}>Upcoming Events</Heading>
          {upcomingEvents.map((event, index) => (
            <Event {...event} key={index} />
          ))}
        </>
      )}
      {previousEvents.length > 0 && (
        <VStack align="start" spacing={2} mt={6}>
          <Heading size="md">Previous Events</Heading>
          <Link as={RouterLink} to="/events/past" color="blue.400">View all previous events</Link>
        </VStack>
      )}
    </>
  );
}

export default Events;
