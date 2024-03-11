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
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! This will be the final lab for members who signed up for our September coding challenge. Food will be provided to challenge participants! We hope to see you there!',
    startDate: date('2023-10-03 18:00'),
    endDate: date('2023-10-03 20:00'),
    location: 'E281',
  },
  {
    name: 'Club Website Development',
    description: 'Join us for our upcoming meeting! We will work on completing tasks from the Trello board. We hope to see you there!',
    startDate: date('2023-10-12 19:00'),
    endDate: date('2023-10-12 20:00'),
    location: 'E281',
  },
  {
    name: 'YCP Hacks',
    description: 'Join us for an upcoming hackathon! York College is hosting a hackathon that will take place November 3-5. Contact our club president, Ethan Lajeunesse for more details. We hope to see you there!',
    startDate: date('2023-11-03 17:00'),
    endDate: date('2023-11-05 12:00'),
    location: 'York College Willman Business Center',
    link: 'https://ycphacks.io/',
  },
  {
    name: 'React Workshop',
    description: 'Join us for our upcoming meeting! Learn the foundational concepts necessary for building a React application. We hope to see you there!',
    startDate: date('2023-10-17 19:00'),
    endDate: date('2023-10-17 20:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! This will be the first lab for our October-November coding challenge. This would be a great time to  put together a team or come up with a project idea. We hope to see you there!',
    startDate: date('2023-10-19 18:00'),
    endDate: date('2023-10-19 20:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Members who signed up for our October-November coding challenge will continue working on their projects. We hope to see you there!',
    startDate: date('2023-10-24 18:00'),
    endDate: date('2023-10-24 20:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Members who signed up for our October-November coding challenge will continue working on their projects. We hope to see you there!',
    startDate: date('2023-10-28 13:00'),
    endDate: date('2023-10-28 16:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Members who signed up for our October-November coding challenge will continue working on their projects. We hope to see you there!',
    startDate: date('2023-11-07 18:00'),
    endDate: date('2023-11-07 20:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Members who signed up for our October-November coding challenge will continue working on their projects. We hope to see you there!',
    startDate: date('2023-11-16 18:00'),
    endDate: date('2023-11-16 20:00'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Lab Presentations',
    description: 'Join us for our upcoming lab! Members who signed up for our October-November coding challenge will present their projects for judging. We hope to see you there!',
    startDate: date('2023-11-18 08:00'),
    endDate: date('2023-11-18 20:00'),
    location: 'E281',
  },
  {
    name: '2024 Google Solution Challenge Discussion',
    description: 'Join us for our upcoming meeting! The Solution Challenge is where all Google Developer Student Club chapters create a solution to problems related to the 17 Sustainable Development Goals of the United Nations. We will be brainstorming ideas for a solution to start during the Spring semester. We hope to see you there!',
    startDate: date('2023-11-21 19:00'),
    endDate: date('2023-11-21 20:00'),
    location: 'E281',
    link: 'https://developers.google.com/community/gdsc-solution-challenge',

  },
  {
    name: 'Play Krunker.io',
    description: 'Join us for our upcoming meeting! We will be playing Krunker.io. We hope to see you there!',
    startDate: date('2023-11-28 19:00'),
    endDate: date('2023-11-28 20:00'),
    location: 'E281',
    link: 'https://krunker.io/',

  },
  {
    name: 'Secret Santa Gift Exchange',
    description: 'Join us for our upcoming holiday celebration! We will be exchanging gifts, playing games, and enjoying refreshments. We hope to see you there!',
    startDate: date('2023-11-30 19:00'),
    endDate: date('2023-11-30 20:00'),
    location: 'E281',
  },
  {
    name: 'Hoya Hacks Hackathon Discussion - (Cancelled due to weather)',
    description: 'Join us for our first meeting of the spring semester! Participants in the Hoya Hacks competition will be planning projects, carpooling, and groups. We hope to see you there!',
    startDate: date('2024-01-16 19:00'),
    endDate: date('2024-01-16 20:00'),
    location: 'E273',
  },
  {
    name: 'GDSC Solution Challenge Discussion',
    description: 'Join us for our upcoming meeting! This meeting will entail breaking into groups and planning the project in greater detail. We hope to see you there!',
    startDate: date('2024-01-18 19:00'),
    endDate: date('2024-01-18 20:00'),
    location: 'E281',
    link: 'https://developers.google.com/community/gdsc-solution-challenge',
  },
  {
    name: 'GDSC Solution Challenge Discussion',
    description: 'Join us for our upcoming meeting! This meeting will entail breaking into groups and planning the project in greater detail. We hope to see you there!',
    startDate: date('2024-01-23 19:00'),
    endDate: date('2024-01-23 20:00'),
    location: 'E281',
    link: 'https://developers.google.com/community/gdsc-solution-challenge',
  },
  {
    name: 'Firebase Workshop Series - Firestore',
    description: 'Join us for our upcoming meeting! This workshop will teach participants how to create a NoSQL database and connect directly to is via the client side, no API needed! Firebase is a product of Google and can be used to meet a requirement of the GDSC Solution Challenge. We hope to see you there!',
    startDate: date('2024-01-25 19:00'),
    endDate: date('2024-01-25 20:00'),
    location: 'E281',
  },
  {
    name: 'Spring Coding Challenge Kickoff',
    description: 'Join us for our upcoming meeting! We are kicking off our spring coding challenge which will last the entire spring semester. We hope to see you there!',
    startDate: date('2024-01-30 18:00'),
    endDate: date('2024-01-30 20:00'),
    location: 'E281',
  },
  {
    name: 'GDSC Solution Challenge Lab',
    description: 'Join us for our upcoming lab! GDSC Solution Challenge participants will be working on their projects. We hope to see you there!',
    startDate: date('2024-02-01 18:00'),
    endDate: date('2024-02-01 20:00'),
    location: 'E281',
  },
  {
    name: 'GDSC Solution Challenge Lab',
    description: 'Join us for our upcoming lab! GDSC Solution Challenge participants will continue working on their projects. We hope to see you there!',
    startDate: date('2024-02-13 18:00'),
    endDate: date('2024-02-13 20:00'),
    location: 'E281',
  },
  {
    name: 'Spring Coding Challenge Lab + Git Workshop',
    description: 'Join us for our upcoming lab! Spring Coding Challenge participants will continue working on their projects and we will host a Git + Github Workshop at 7pm. We hope to see you there!',
    startDate: date('2024-02-15 18:00'),
    endDate: date('2024-02-15 20:00'),
    location: 'E281',
  },
  {
    name: 'GDSC Solution Challenge Lab',
    description: 'Join us for our upcoming lab! GDSC Solution Challenge participants will continue working on their projects. We hope to see you there!',
    startDate: date('2024-02-20 18:00'),
    endDate: date('2024-02-20 20:00'),
    location: 'E281',
  },
  {
    name: 'GDSC Solution Challenge Lab',
    description: 'Join us for our upcoming lab! GDSC Solution Challenge participants will continue working on their projects. We hope to see you there!',
    startDate: date('2024-02-22 18:00'),
    endDate: date('2024-02-22 20:00'),
    location: 'E281',
  },
  {
    name: 'Computer Science Trivia Night',
    description: 'Join us for our upcoming meeting! After the GDSC Solution Challenge lab, Giovanni Raso will be hosting a trivia night including refreshments and Google swag. We hope to see you there!',
    startDate: date('2024-02-22 20:00'),
    endDate: date('2024-02-22 21:00'),
    location: 'E281',
  },
  {
    name: 'ChatGPT Prompt Engineering Workshop',
    description: 'Join us for our upcoming workshop! We will be learning how to unlock ChatGPT\'s full potential! We hope to see you there!',
    startDate: date('2024-02-27 18:00'),
    endDate: date('2024-02-27 20:00'),
    location: 'E281',
  },
  {
    name: 'Hen Hacks Meeting',
    description: 'Join us for our upcoming meeting! We will be discussing information related to University of Delaware\'s hackathon. We hope to see you there!',
    startDate: date('2024-03-01 19:00'),
    endDate: date('2024-03-01 20:00'),
    location: 'E281',
  },
  {
    name: 'Hen Hacks Meeting',
    description: 'Join us for our upcoming meeting! We will be discussing information related to University of Delaware\'s hackathon. We hope to see you there!',
    startDate: date('2024-03-02 19:00'),
    endDate: date('2024-03-02 20:00'),
    location: 'E281',
  },
  {
    name: 'Hen Hacks Meeting',
    description: 'Join us for our upcoming meeting! We will be discussing information related to University of Delaware\'s hackathon. We hope to see you there!',
    startDate: date('2024-03-03 19:00'),
    endDate: date('2024-03-03 20:00'),
    location: 'E281',
  },
  {
    name: 'Unity and You Workshop',
    description: 'Join us for our upcoming workshop! Joshua Stoner will be hosting a workshop touching on the basics of working in a 3D space within Unity.',
    startDate: date('2024-03-12 18:00'),
    endDate: date('2024-03-12 20:00'),
    location: 'E281',
  },
  {
    name: 'Spring Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Spring Coding Challenge participants will continue working on their projects. We hope to see you there!',
    startDate: date('2024-03-14 18:00'),
    endDate: date('2024-03-14 20:00'),
    location: 'E281',
  },
];

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
