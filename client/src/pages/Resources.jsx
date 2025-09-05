import { SimpleGrid, Heading } from '@chakra-ui/react';
import Resource from '../components/Resource';

function Resources() {
  return (
    <>
      <Heading mb={5}>Resources</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="stretch">
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
    title: 'Student Charge Clothing Form',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdXS9dQWAxydGCyRWJuYPorNUJTqQs_vOVCR0N7YQgdx8A9mA/viewform',
    image: '/shirt.png',
    description: ['Trucker-Hat Style Hats',
      'Bella Canvas Shirts',
      'Fleece Pullover Hooded Sweatshirts'],
  },
  {
    title: 'Credit Card Clothing Form',
    link: 'https://forms.gle/pJx51bMcaeHUUnQdA',
    image: '/sweatshirt.png',
    description: ['Trucker-Hat Style Hats',
      'Bella Canvas Shirts',
      'Fleece Pullover Hooded Sweatshirts'],
  },
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
    title: 'Perplexity AI',
    link: 'https://www.perplexity.ai/',
    image: '/Perplexity-Logo.png',
    description: [
      'AI-powered search tool that provides clear answers using real-time web results.',
      'Helps with research, learning, and quick fact-checking.',
    ],
  },
  {
    title: 'OpenAI',
    link: 'https://openai.com/',
    image: '/OpenAI-Logo.png',
    description: [
      'AI-Powered Learning Support for studying, writing, and problem-solving',
      'Enhances understanding and productivity with AI tools',
    ],
  },
  {
    title: 'Claude AI',
    link: 'https://claude.ai/new',
    image: '/Claude-Logo.png',
    description: [
      'Conversational AI built by Anthropic for safety and reliability.',
      'Helps with writing, coding, research, and summaries.',
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
