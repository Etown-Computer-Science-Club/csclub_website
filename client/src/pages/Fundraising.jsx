import { SimpleGrid, Heading } from '@chakra-ui/react';
import Resource from '../components/Resource';

function Fundraising() {
  return (
    <>
      <Heading mb={5}>Fundraising</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="stretch">
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
];
