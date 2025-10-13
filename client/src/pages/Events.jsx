import { Heading } from '@chakra-ui/react';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import Event from '../components/Event';

function date(dateString) {
  return zonedTimeToUtc(dateString, 'America/New_York');
}

// TODO: Replace with API or other call to not hardcode events
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
  {
    name: 'The "Hello World" of Machine Learning',
    description: 'Join us for our upcoming workshop! Alexander Fox will be hosting a workshop touching on the basics of Machine Learning. We hope to see you there!',
    startDate: date('2024-03-19 19:00'),
    endDate: date('2024-03-19 20:00'),
    location: 'E281',
  },
  {
    name: 'Python Go Fish Competition - Intro Workshop',
    description: 'Join us for our upcoming workshop! RMI will be hosting a Go Fish competition. Create a player in python and compete in live games. We hope to see you there!',
    startDate: date('2024-03-20 19:00'),
    endDate: date('2024-03-20 20:00'),
    location: 'E273',
    link: 'https://forms.office.com/r/kAuPACM8FC',
  },
  {
    name: 'Python Go Fish Competition - Open Lab',
    description: 'Join us for our upcoming lab! RMI will be hosting a Go Fish competition. Participants can drop in for guidance on their bots. We hope to see you there!',
    startDate: date('2024-03-21 19:00'),
    endDate: date('2024-03-21 20:00'),
    location: 'E273',
    link: 'https://forms.office.com/r/kAuPACM8FC',
  },
  {
    name: 'Spring Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Spring Coding Challenge participants will continue working on their projects. We hope to see you there!',
    startDate: date('2024-03-23 12:00'),
    endDate: date('2024-03-23 16:00'),
    location: 'E281',
  },
  {
    name: 'Spring Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Spring Coding Challenge participants will continue working on their projects. We hope to see you there!',
    startDate: date('2024-03-26 18:00'),
    endDate: date('2024-03-26 20:00'),
    location: 'E281',
  },
  {
    name: 'Python Go Fish Competition - Open Lab',
    description: 'Join us for our upcoming lab! RMI will be hosting a Go Fish competition. Participants can drop in for guidance on their bots. We hope to see you there!',
    startDate: date('2024-03-28 19:00'),
    endDate: date('2024-03-28 20:00'),
    location: 'E273',
    link: 'https://forms.office.com/r/kAuPACM8FC',
  },
  {
    name: 'Spring Coding Challenge Lab',
    description: 'Join us for our upcoming lab! Spring Coding Challenge participants will continue working on their projects. We hope to see you there!',
    startDate: date('2024-04-04 18:00'),
    endDate: date('2024-04-04 20:00'),
    location: 'E281',
  },
  {
    name: 'Spring Coding Challenge Judging and Presentations',
    description: 'Join us for our upcoming presentations! Spring Coding Challenge participants will present their coding challenge projects to the judges. We hope to see you there!',
    startDate: date('2024-04-06 11:00'),
    endDate: date('2024-04-06 16:00'),
    location: 'E281',
  },
  {
    name: 'Krunker.io',
    description: 'Join us for our upcoming meeting! We will be playing Krunker.io. We hope to see you there!',
    startDate: date('2024-04-11 19:00'),
    endDate: date('2024-04-11 20:00'),
    location: 'E281',
  },
  {
    name: 'End of Year and Award Celebration',
    description: 'Join us for our upcoming meeting! We will be holding an end-of-year celebration for the club. Refreshments provided! We hope to see you there!',
    startDate: date('2024-04-18 19:00'),
    endDate: date('2024-04-18 20:00'),
    location: 'E281',
  },
  {
    name: 'Portfolio Website Workshop',
    description: 'Join us for our upcoming workshop! This workshop will focus mostly on getting a basic portfolio setup and then hosting it for FREE on GitHub Pages. We hope to see you there!',
    startDate: date('2024-04-25 19:00'),
    endDate: date('2024-04-25 20:00'),
    location: 'E281',
  },
  {
    name: 'Krunker.io',
    description: 'Join us for our upcoming meeting! We will be playing Krunker.io with NO CHEATS and hopefully no unplanned updates this time around! We hope to see you there!',
    startDate: date('2024-04-30 19:00'),
    endDate: date('2024-04-30 20:00'),
    location: 'E281',
  },
  {
    name: 'Interest Meeting',
    description: 'Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we\'re offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!',
    startDate: date('2025-09-09 19:00'),
    endDate: date('2025-09-09 20:00'),
    location: 'E281',
  },
  {
    name: 'Git/GitHub Workshop',
    description: 'Join us for our workshop on the basics of using Git and GitHub! In this workshop, we will cover the fundamentals of version control using Git, as well as how to use GitHub for collaboration and project management. Whether you\'re new to Git or looking to brush up on your skills, this workshop is perfect for you. We will provide hands-on exercises and plenty of opportunities for questions and discussion. Don\'t miss out on this chance to learn more about one of the most important tools in modern software development!',
    startDate: date('2025-09-16 19:00'),
    endDate: date('2025-09-16 20:00'),
    location: 'E281',
  },
  {
    name: 'Professional Development Workshop 1',
    description: 'Join us for our upcoming Professional Development Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students develop the skills they need to succeed in their careers. We will cover topics such as resume writing, interview preparation, and networking strategies. Don\'t miss this opportunity to gain valuable insights and make connections with industry professionals!',
    startDate: date('2025-09-23 19:00'),
    endDate: date('2025-09-23 20:00'),
    location: 'E281',
  },
  {
    name: 'Professional Development Workshop 2',
    description: 'Join us for a continuation of our Professional Development Workshop series! The Computer Science Club is excited to announce that we will be hosting a second workshop focused on helping students further develop the skills they need to succeed in their careers.',
    startDate: date('2025-09-30 19:00'),
    endDate: date('2025-09-30 19:30'),
    location: 'E281',
  },
  {
    name: 'Basic Web Development Workshop',
    description: 'Join us for our workshop on the basics of web development! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students learn the fundamentals of building websites and web applications. We will cover topics such as HTML, CSS, JavaScript, and popular web development frameworks. Whether you\'re new to web development or looking to expand your skills, this workshop is perfect for you!',
    startDate: date('2025-09-30 19:30'),
    endDate: date('2025-09-30 20:30'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Check-In Lab #1',
    description: 'Join us for our upcoming Coding Challenge Check-In Lab! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students prepare their coding challenge projects. Don\'t miss this opportunity to gain valuable insights and make connections with industry professionals, as well as get help from our club officers with any questions you may have about your coding challenge project!',
    startDate: date('2025-10-02 18:30'),
    endDate: date('2025-10-02 19:30'),
    location: 'Networking Lab',
  },
  {
    name: 'WebFX Workshop',
    description: 'Join us for our upcoming WebFX Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop featuring a presentation by a current WebFX employee. Don\'t miss this opportunity to gain valuable insights and make connections with industry professionals!',
    startDate: date('2025-10-02 19:30'),
    endDate: date('2025-10-02 20:30'),
    location: 'E281',
  },
  {
    name: 'Trivia Night',
    description: 'Join us for our upcoming Trivia Night! The Computer Science Club is excited to host a fun evening of trivia, where you can test your knowledge on a variety of Computer Science related topics, including cybersecurity and data science. Compete against other students and meet new people! Prizes will be awarded to the top participant, so don\'t miss this opportunity to show off your trivia skills and have a great time!',
    startDate: date('2025-10-07 19:00'),
    endDate: date('2025-10-07 20:30'),
    location: 'E281',
  },
  {
    name: 'Advising and Class Schedules Workshop',
    description: 'Join us for our upcoming Advising and Class Schedules Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students navigate the advising process and plan their class schedules. We will cover topics such as how to choose the right classes, how to work with your advisor, and how to make the most of your academic experience. Don\'t miss this opportunity to gain valuable insights and make connections with fellow students!',
    startDate: date('2025-10-14 19:00'),
    endDate: date('2025-10-14 20:00'),
    location: 'E281',
  },
  {
    name: 'Basic Coding Practices Workshop',
    description: 'Join us for our upcoming Basic Coding Practices Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students prepare for their coding challenges. We will cover topics such as basic coding practices, problem-solving techniques, and how to approach coding challenges effectively. Don\'t miss this opportunity to gain valuable insights and make connections with fellow students!',
    startDate: date('2025-10-16 18:00'),
    endDate: date('2025-10-16 18:30'),
    location: 'E281',
  },
  {
    name: 'Coding Challenge Check-In Lab #2',
    description: 'Join us for our upcoming Coding Challenge Check-In Lab! The Computer Science Club is excited to announce that we will be hosting a lab session focused on helping students prepare for their coding challenges. We will provide guidance, answer questions, and offer support to ensure you are ready to tackle the challenges effectively. Don\'t miss this opportunity to gain valuable insights and make connections with fellow students!',
    startDate: date('2025-10-16 18:30'),
    endDate: date('2025-10-16 20:00'),
    location: 'E281',
  },
  {
    name: 'Generative AI / Prompt Engineering Workshop',
    description: 'Join us for our upcoming Generative AI Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students understand and work with generative AI technologies. We will cover topics such as how to run or access your own models, how to use them effectively, and how to prompt them for best results. Don\'t miss this opportunity to gain valuable insights and make connections with fellow students!',
    startDate: date('2025-10-21 19:00'),
    endDate: date('2025-10-21 20:00'),
    location: 'E281',
  },
  {
    id: 10,
    name: 'Coding Challenge Judging Day',
    description: 'Join us for our upcoming Coding Challenge Judging Day! The Computer Science Club is excited to announce that we will be hosting a day dedicated to judging the submissions from our recent coding challenge. Participants will have the opportunity to showcase their solutions and receive feedback from our panel of judges. Don\'t miss this chance to learn from your peers and improve your coding skills!',
    startDate: date('2025-10-25  13:00'),
    endDate: date('2025-10-25 18:00'),
    location: 'Gibble Auditorium',
  },
  {
    id: 11,
    name: 'C# / .NET Workshop',
    description: 'Join us for our C# / .NET Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students learn about C# and the .NET framework. We will cover topics such as getting started with C#, building web applications with ASP.NET, and working with databases using Entity Framework. Don\'t miss this opportunity to gain valuable skills and enhance your programming knowledge!',
    startDate: date('2025-10-28 19:00'),
    endDate: date('2025-10-28 20:00'),
    location: 'E281',
  },
  {
    id: 12,
    name: 'Ransomware in Cybersecurity Workshop',
    description: 'Join us for our Ransomware in Cybersecurity Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students learn about ransomware threats, prevention strategies, and response techniques. Don\'t miss this opportunity to gain valuable skills and enhance your cybersecurity knowledge!',
    startDate: date('2025-11-04 19:00'),
    endDate: date('2025-11-04 20:00'),
    location: 'E281',
  },
  {
    id: 13,
    name: 'TBD Workshop',
    description: 'Join us for our TBD Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop focused on a topic to be determined. Stay tuned for more details and don\'t miss this opportunity to learn and grow your skills!',
    startDate: date('2025-11-11 19:00'),
    endDate: date('2025-11-11 20:00'),
    location: 'E281',
  },
  {
    id: 14,
    name: 'Arduino Workshop',
    description: 'Join us for our upcoming Arduino Workshop! The Computer Science Club is excited to announce that we will be hosting a workshop focused on helping students learn about Arduino and how to create their own projects using this versatile platform. We will cover topics such as getting started with Arduino, basic electronics, and how to program your Arduino board. Don\'t miss this opportunity to gain hands-on experience and unleash your creativity!',
    startDate: date('2025-11-18 19:00'),
    endDate: date('2025-11-18 20:00'),
    location: 'E281',
  },
  {
    id: 15,
    name: 'Krunker Game Night',
    description: 'Join us for our Krunker Game Night! The Computer Science Club is excited to announce that we will be hosting a gaming night featuring Krunker, a fast-paced first-person shooter game. This is a great opportunity to relax, unwind, and connect with fellow students in a fun and casual setting. Don\'t miss this chance to showcase your skills and enjoy a night of friendly competition!',
    startDate: date('2025-12-02 19:00'),
    endDate: date('2025-12-02 20:00'),
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
