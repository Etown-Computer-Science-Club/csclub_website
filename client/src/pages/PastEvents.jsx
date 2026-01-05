import { Heading } from '@chakra-ui/react';
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

export default function PastEvents() {
  const currentDate = utcToZonedTime(new Date(), 'America/New_York');
  const previousEvents = events.filter((event) => event.endDate < currentDate);
  previousEvents.sort((a, b) => b.startDate - a.startDate);

  return (
    <>
      <Heading mb={5}>Previous Events</Heading>
      {previousEvents.map((event, index) => (
        <Event {...event} key={index} />
      ))}
    </>
  );
}
