import { SimpleGrid, Heading } from '@chakra-ui/react';
import Resource from '../components/Resource';

function Resources() {
  return (
    <>
      <Heading size={{ base: 'lg', md: 'xl' }} mb={5}>Resources</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 10 }} alignItems="stretch">
        {resources.map((resource, index) => (
          <Resource key={index} {...resource} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Resources;

// Microsoft Forms: https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Microsoft_Forms_%282019-present%29.svg/2203px-Microsoft_Forms_%282019-present%29.svg.png

const resources = [
  {
    title: 'GitHub Education Pack',
    link: 'https://education.github.com/pack',
    image: '/GitHub-Logo.png',
    description: [
      'Free access to premium developer tools and services',
      'Learn new skills with hands-on tutorials',
    ],
  },
  {
    title: 'NotebookLM',
    link: 'https://notebooklm.google/',
    image: '/notebooklm.png',
    description: [
      'AI tool for studying and organizing notes.',
      'Creates study guides, summaries, and review materials from your sources.',
    ],
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/',
    image: '/linkedin.png',
    description: [
      'Professional networking platform for students and careers',
      'Build your profile, connect with professionals, and find opportunities',
    ],
  },
  {
    title: 'Handshake',
    link: 'https://joinhandshake.com/',
    image: '/handshake.png',
    description: [
      'College career platform for career events, internships, and jobs',
      'Find opportunities tailored to students and connect with employers',
    ],
  },
  {
    title: 'Refer Me',
    link: 'https://refer.me',
    image: '/Referme-Logo.png',
    description: ['Find job referrals from employees working at top tech companies'],
  },
  {
    title: 'LeetCode',
    link: 'https://leetcode.com',
    image: '/Leetcode-Logo.png',
    description: ['Practice coding challenges', 'Prepare for technical interviews'],
  },
  {
    title: 'Glassdoor',
    link: 'https://www.glassdoor.com',
    image: '/Glassdoor-Logo.png',
    description: [
      'Get insights about companies, salaries, and interviews',
      'Discover new job opportunities',
    ],
  },
  {
    title: 'Levels.fyi',
    link: 'https://www.levels.fyi',
    image: '/Levelsfyi-Logo.png',
    description: [
      'Search 300k+ salaries for different companies, jobs, careers, and locations',
      'Explore tools to help you get paid more',
    ],
  },
];
