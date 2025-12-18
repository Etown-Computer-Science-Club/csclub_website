import React, { useMemo, useState } from 'react';
import { utcToZonedTime } from 'date-fns-tz';
import { format } from 'date-fns';
import { Box, Button, Grid, Text, VStack, HStack } from '@chakra-ui/react';

function toKey(date) {
  return date.toLocaleDateString('en-CA'); // YYYY-MM-DD
}

function monthRange(startMonth, endMonth) {
  const months = [];
  const cur = new Date(startMonth.getFullYear(), startMonth.getMonth(), 1);
  const end = new Date(endMonth.getFullYear(), endMonth.getMonth(), 1);
  while (cur <= end) {
    months.push(new Date(cur));
    cur.setMonth(cur.getMonth() + 1);
  }
  return months;
}

export default function EventsCalendar({ events }) {
  const tz = 'America/New_York';

  const { months, eventsByDay } = useMemo(() => {
    if (!events || events.length === 0) return { months: [], eventsByDay: {} };

    // Compute earliest and latest months from events
    let earliest = events[0].startDate;
    let latest = events[0].endDate;
    events.forEach((e) => {
      if (e.startDate < earliest) earliest = e.startDate;
      if (e.endDate > latest) latest = e.endDate;
    });

    const startMonth = new Date(utcToZonedTime(earliest, tz).getFullYear(), utcToZonedTime(earliest, tz).getMonth(), 1);
    const endMonth = new Date(utcToZonedTime(latest, tz).getFullYear(), utcToZonedTime(latest, tz).getMonth(), 1);

    const monthsArr = monthRange(startMonth, endMonth);

    // Map events to calendar day keys
    const map = {};
    events.forEach((evt) => {
      // Iterate from start to end inclusive
      let cur = new Date(evt.startDate);
      const end = new Date(evt.endDate);
      while (cur <= end) {
        const zoned = utcToZonedTime(cur, tz);
        const key = toKey(zoned);
        if (!map[key]) map[key] = [];
        map[key].push(evt);
        cur.setDate(cur.getDate() + 1);
      }
    });

    return { months: monthsArr, eventsByDay: map };
  }, [events]);

  const today = utcToZonedTime(new Date(), tz);
  const defaultIndex = Math.min(Math.max(months.findIndex((m) => m.getFullYear() === today.getFullYear() && m.getMonth() === today.getMonth()), 0), months.length - 1);
  const [index, setIndex] = useState(defaultIndex >= 0 ? defaultIndex : 0);

  if (!months || months.length === 0) return null;

  const month = months[index];
  const monthLabel = month.toLocaleString('en-US', { month: 'long', year: 'numeric' });

  // build calendar grid (Sunday-first)
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1);
  const startOffset = firstDay.getDay();
  const days = [];
  // 6 weeks (42 cells)
  for (let i = 0; i < 42; i++) {
    const dayNum = i - startOffset + 1;
    const cellDate = new Date(month.getFullYear(), month.getMonth(), dayNum);
    days.push(cellDate);
  }

  const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <VStack align="stretch" spacing={4} mb={6}>
      <HStack justify="space-between">
        <Button onClick={() => setIndex((i) => i - 1)} isDisabled={index <= 0} size="sm">
          Prev
        </Button>
        <Text fontSize="lg" fontWeight="semibold">{monthLabel}</Text>
        <Button onClick={() => setIndex((i) => i + 1)} isDisabled={index >= months.length - 1} size="sm">
          Next
        </Button>
      </HStack>

      <Box borderWidth={1} borderRadius="md" p={3}>
        <Grid templateColumns="repeat(7, 1fr)" gap={2}>
          {weekdayNames.map((d) => (
            <Box key={d} textAlign="center" fontSize="sm" fontWeight="semibold">
              {d}
            </Box>
          ))}
          {days.map((d, idx) => {
            const thisMonth = d.getMonth() === month.getMonth();
            const zoned = utcToZonedTime(d, tz);
            const key = toKey(zoned);
            const evts = eventsByDay[key] || [];
            const evt = evts[0];
            return (
              <Box
                key={idx}
                minH="64px"
                borderWidth={1}
                borderColor={thisMonth ? 'gray.200' : 'transparent'}
                borderRadius="md"
                p={2}
              >
                <Text fontSize="sm" color={thisMonth ? 'gray.800' : 'gray.400'}>{d.getDate()}</Text>
                {evt && (
                  <>
                    <Text fontSize="xs" fontWeight="semibold" isTruncated title={evt.title}>
                      {evt.title}
                    </Text>
                    <Text fontSize="xs" color="gray.600">
                      {format(utcToZonedTime(evt.startDate, tz), 'h:mm a')}
                      {evt.endDate && evt.endDate > evt.startDate && ` - ${format(utcToZonedTime(evt.endDate, tz), 'h:mm a')}`}
                    </Text>
                    {evt.location && (
                      <Text fontSize="xs" color="gray.600" isTruncated>
                        {evt.location}
                      </Text>
                    )}
                  </>
                )}
              </Box>
            );
          })}
        </Grid>
      </Box>
    </VStack>
  );
}
