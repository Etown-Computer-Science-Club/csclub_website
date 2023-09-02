import {
  Box, Heading, Text, Divider, Link,
} from '@chakra-ui/react';
import { format, isSameDay } from 'date-fns';
import PropTypes from 'prop-types';

function Event({
  name, description, startDate, endDate, link, location,
}) {
  const isSingleDayEvent = isSameDay(startDate, endDate);
  const dateDisplay = isSingleDayEvent
    ? `${format(startDate, 'MM/dd/yyyy, h:mm a')} - ${format(endDate, 'h:mm a')}`
    : `${format(startDate, 'MM/dd/yyyy, h:mm a')} - ${format(endDate, 'MM/dd/yyyy, h:mm a')}`;

  return (
    <Box mb={5} alignItems="start">
      <Heading size="md" mb={2}>
        {name}
      </Heading>
      <Text fontSize="sm" color="gray.500" mb={2}>
        {dateDisplay}
      </Text>
      <Text mb={2}>{description}</Text>
      {location && (
        <Text fontSize="sm" mb={2}>
          Location:
          {' '}
          {location}
        </Text>
      )}
      {link && (
        <Link href={link} isExternal color="blue.500">
          More Info
        </Link>
      )}
      <Divider my={5} />
    </Box>
  );
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date).isRequired,
  endDate: PropTypes.instanceOf(Date).isRequired,
  link: PropTypes.string,
  location: PropTypes.string,
};

export default Event;
