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
    title: 'Students Clothing Form',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSdXS9dQWAxydGCyRWJuYPorNUJTqQs_vOVCR0N7YQgdx8A9mA/viewform',
    image: '/New-Logo-BG.png',
    description: ['Trucker-Hat Style Hats',
      'Bella Canvas Shirts',
      'Fleece Pullover Hooded Sweatshirts'],
  },
  {
    title: 'Alumni/Others Clothing Form',
    link: 'https://forms.gle/pJx51bMcaeHUUnQdA',
    image: '/New-Logo-BG.png',
    description: ['Trucker-Hat Style Hats',
      'Bella Canvas Shirts',
      'Fleece Pullover Hooded Sweatshirts'],
  },
  {
    title: 'OpenAI',
    link: 'https://openai.com/',
    image: '/OpenAI-Logo.jpg',
    description: [
      'AI-Powered Learning Support for studying, writing, and problem-solving',
      'Enhances understanding and productivity with AI tools',
    ],
  },
  {
    title: 'GitHub Education Pack',
    link: 'https://education.github.com/pack',
    image: '/GitHub-Mark.png',
    description: [
      'Free access to premium developer tools and services',
      'Learn new skills with hands-on tutorials',
    ],
  },
  {
    title: 'Refer Me',
    link: 'https://refer.me',
    image: '/Refer-Logo.jpeg',
    description: ['Find job referrals from employees working at top tech companies'],
  },
  {
    title: 'LeetCode',
    link: 'https://leetcode.com',
    image: 'https://assets.leetcode.com/static_assets/public/webpack_bundles/images/LeetCode_nav.4d940ca72.png',
    description: ['Practice coding challenges', 'Prepare for technical interviews'],
  },
  {
    title: 'Glassdoor',
    link: 'https://www.glassdoor.com',
    image: 'https://logos-world.net/wp-content/uploads/2021/08/Glassdoor-Logo.png',
    description: [
      'Get insights about companies, salaries, and interviews',
      'Discover new job opportunities',
    ],
  },
  {
    title: 'Levels.fyi',
    link: 'https://www.levels.fyi',
    image: 'https://www.levels.fyi/assets/logo/full_grey/full_logo.svg',
    description: [
      'Search 300k+ salaries for different companies, jobs, careers, and locations',
      'Explore tools to help you get paid more',
    ],
  },
];
