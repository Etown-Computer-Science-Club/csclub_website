import { Heading } from '@chakra-ui/react';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import Event from '../components/Event';
import rawEvents from '../components/eventData.json';

// DEPRECATED: This component is no longer used,
// but is kept for reference and potential future
// use if we want to revert back to the old archived
// events page design. The new archived events page
// can be found called 'ArchivedEvents'. It includes
// a link to resources from past events and meetings,
// in addition to the list of previous events. The
// old 'PastEvents' component only listed previous
// events without the additional resources section.

function date(dateString) {
  return zonedTimeToUtc(dateString, 'America/New_York');
}

const events = rawEvents.map((evt) => ({
  ...evt,
  startDate: date(evt.startDate),
  endDate: date(evt.endDate),
}));

export default function PastEvents() {
  const currentDate = utcToZonedTime(new Date(), 'America/New_York');
  const previousEvents = events.filter((event) => event.endDate < currentDate);
  previousEvents.sort((a, b) => b.startDate - a.startDate);

  return (
    <>
      <Heading size={{ base: 'lg', md: 'xl' }} mb={5}>Previous Events</Heading>
      {previousEvents.map((event, index) => (
        <Event {...event} key={index} />
      ))}
    </>
  );
}
