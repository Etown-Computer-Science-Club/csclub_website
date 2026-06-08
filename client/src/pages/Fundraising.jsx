import { SimpleGrid, Heading } from '@chakra-ui/react';
import Resource from '../components/Resource';

function Fundraising() {
  return (
    <>
      <Heading size={{ base: 'lg', md: 'xl' }} mb={5}>Fundraising</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 10 }} alignItems="stretch">
        {fundraisingItems.map((item, index) => (
          <Resource key={index} {...item} />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Fundraising;

const fundraisingItems = [
  {
    title: 'Student Charge Clothing Form',
    link: 'https://forms.gle/FaTXdbPvJTex6pF18',
    image: '/shirt.png',
    description: ['Trucker-Hat Style Hats',
      'Bella Canvas Shirts',
      'Fleece Pullover Hooded Sweatshirts'],
  },
  {
    title: 'Student Charge Customizable (7 Logos) Print Services Form',
    link: 'https://forms.gle/tXWyqkmDE2X2iRNEA',
    image: '/mug.jpg',
    description: ['Mugs (11 or 15 oz)',
      'Shirts (White, Gray, Light Blue)',
      'Mousepads (9" by 8")',
      'Ornaments (Rectangle or Snowflake)',
      'Skinny White Tumbler (20 oz)',
      'Canvas Pillow (16" by 16")',
      'Dog Bandana and Collar',
    ],
  },
];
