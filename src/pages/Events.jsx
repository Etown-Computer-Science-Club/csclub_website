import { Heading } from "@chakra-ui/react";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import Event from "../components/Event";

function date(dateString) {
	return zonedTimeToUtc(dateString, "America/New_York");
}

const events = [
	{
		name: "Interest Meeting 01",
		description: "Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we're offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!",
		startDate: date("2023-08-28 19:00"),
		endDate: date("2023-08-28 20:00"),
		location: "E281",
	},
	{
		name: "Interest Meeting 02",
		description: "Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we're offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!",
		startDate: date("2023-08-29 19:00"),
		endDate: date("2023-08-29 20:00"),
		location: "E281",
	},
	{
		name: "Interest Meeting 03",
		description: "Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we're offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!",
		startDate: date("2023-08-30 19:00"),
		endDate: date("2023-08-30 20:00"),
		location: "E281",
	},
	{
		name: "Interest Meeting 04",
		description: "Join us for our upcoming interest meetings! The Computer Science Club is excited to announce that we will be hosting multiple meetings each week, each with a different focus. We want to find the best times for our potential members, so we're offering several options. Come and learn more about what our club has to offer and how you can get involved. We hope to see you there!",
		startDate: date("2023-08-31 19:00"),
		endDate: date("2023-08-31 20:00"),
		location: "E281",
	},
].sort((a, b) => a.startDate - b.startDate);

const Events = () => {
	// Get the current date in EST timezone
	const currentDate = utcToZonedTime(new Date(), "America/New_York");

	const previousEvents = events.filter((event) => event.endDate < currentDate);
	const upcomingEvents = events.filter((event) => event.startDate > currentDate);
	const currentEvents = events.filter(
		(event) => event.startDate <= currentDate && event.endDate >= currentDate
	);

	return (
		<>
			{currentEvents.length > 0 && (
				<>
					<Heading mb={5}>Current Events</Heading>
					{currentEvents.map((event, index) => (
						<Event {...event} key={index}></Event>
					))}
				</>
			)}

			{upcomingEvents.length > 0 && (
				<>
					<Heading mb={5}>Upcoming Events</Heading>
					{upcomingEvents.map((event, index) => (
						<Event {...event} key={index}></Event>
					))}
				</>
			)}

			{previousEvents.length > 0 && (
				<>
					<Heading mb={5}>Previous Events</Heading>
					{previousEvents.map((event, index) => (
						<Event {...event} key={index}></Event>
					))}
				</>
			)}
		</>
	);
};

export default Events;
