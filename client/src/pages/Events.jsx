import { Heading } from '@chakra-ui/react';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import Event from '../components/Event';

function date(dateString) {
  return zonedTimeToUtc(dateString, 'America/New_York');
}

const events = [
  {
    name: 'Interest Meeting 01',
    description:
      'Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we\'re offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!',
    startDate: date('2023-08-28 19:00'),
    endDate: date('2023-08-28 20:00'),
    location: 'E281',
  },
  {
    name: 'Interest Meeting 02',
    description:
      'Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we\'re offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!',
    startDate: date('2023-08-29 19:00'),
    endDate: date('2023-08-29 20:00'),
    location: 'E281',
  },
  {
    name: 'Interest Meeting 03',
    description:
      'Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we\'re offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!',
    startDate: date('2023-08-30 19:00'),
    endDate: date('2023-08-30 20:00'),
    location: 'E281',
  },
  {
    name: 'Interest Meeting 04',
    description:
      'Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we\'re offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!',
    startDate: date('2023-08-31 19:00'),
    endDate: date('2023-08-31 20:00'),
    location: 'E281',
  },
  {
    name: 'First Official Club Meeting',
    description: 'Join us for our upcoming meeting! The Computer Science Club is excited to kick off the year with our first meeting of the 2023/2024 academic year. At this meeting, we will guide you through setting up the CS Club website on your local machine. We hope to see you there!',
    startDate: date('2023-09-05 19:00'),
    endDate: date('2023-09-05 20:00'),
    location: 'E281',
  },
  {
    name: 'Git & GitHub Workshop',
    description: 'Join us for our upcoming workshop! Learn the basics of contributing to Git repositories hosted on GitHub. A functional understanding of Git and GitHub will be extremely important for your future projects and career. We hope to see you there!',
    startDate: date('2023-09-07 19:00'),
    endDate: date('2023-09-07 20:00'),
    location: 'E281',
  },
  {
    name: 'Club Meeting',
    description: 'Join us for our upcoming meeting! We will begin to work on the CS Club website events API. We hope to see you there!',
    startDate: date('2023-09-12 19:00'),
    endDate: date('2023-09-12 20:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Members who signed up for our September coding challenge will meet their teams for the first time and begin working on their projects. We hope to see you there!',
    startDate: date('2023-09-14 18:00'),
    endDate: date('2023-09-14 20:00'),
    location: 'E281',
  },
  {
    name: 'Club Website API Development',
    description: 'Join us for our upcoming meeting! We will continue to work on the CS Club website events API. We hope to see you there!',
    startDate: date('2023-09-19 19:00'),
    endDate: date('2023-09-19 20:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Members who signed up for our September coding challenge will continue working on their projects. We hope to see you there!',
    startDate: date('2023-09-23 14:00'),
    endDate: date('2023-09-23 18:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Members who signed up for our September coding challenge will continue working on their projects. We hope to see you there!',
    startDate: date('2023-09-25 18:00'),
    endDate: date('2023-09-25 20:00'),
    location: 'E281',
  },
  {
    name: 'Club Website API Development',
    description: 'Join us for our upcoming meeting! We will finish the Events API and discuss the next steps for the club website. We hope to see you there!',
    startDate: date('2023-09-26 19:00'),
    endDate: date('2023-09-26 20:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Members who signed up for our September coding challenge will continue working on their projects. Food will be provided to challenge participants! We hope to see you there!',
    startDate: date('2023-09-30 10:00'),
    endDate: date('2023-09-30 14:00'),
    location: 'E281',
  },
].sort((a, b) => a.startDate - b.startDate);

function Events() {
  // Get the current date in EST timezone
  const currentDate = utcToZonedTime(new Date(), 'America/New_York');

  const previousEvents = events.filter((event) => event.endDate < currentDate);
  const upcomingEvents = events.filter((event) => event.startDate > currentDate);
  const currentEvents = events.filter(
    (event) => event.startDate <= currentDate && event.endDate >= currentDate,
  );

  return (
    <>
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
        <>
          <Heading mb={5}>Previous Events</Heading>
          {previousEvents.map((event, index) => (
            <Event {...event} key={index} />
          ))}
        </>
      )}
    </>
  );
}

export default Events;
