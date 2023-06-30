import { Heading } from "@chakra-ui/react";
import { utcToZonedTime, zonedTimeToUtc } from "date-fns-tz";
import Event from "../components/Event";

function date(dateString) {
	return zonedTimeToUtc(dateString, "America/New_York");
}

const events = [
	{
		name: "Hackathon 2023",
		description: "An event to showcase your coding skills.",
		startDate: date("2023-06-16 18:00"),
		endDate: date("2023-06-18 10:00"),
		location: "New York",
		link: "https://hackathon.com",
	},
	{
		name: "Workshop on Python",
		description: "Learn Python with experts from the industry.",
		startDate: date("2023-05-28 13:00"),
		endDate: date("2023-05-28 14:00"),
		location: "E281",
	},
	{
		name: "Workshop on React",
		description: "Learn React with experts from the industry.",
		startDate: date("2023-07-28 13:00"),
		endDate: date("2023-07-28 14:00"),
		location: "E281",
	},
].sort((a, b) => b.startDate - a.startDate);

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
