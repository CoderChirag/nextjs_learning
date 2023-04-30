import { Fragment } from 'react';
import Head from 'next/head';
import { getAllEvents } from '@/helpers/api-util';
import { useRouter } from 'next/router';
import EventList from '@/components/events/event-list';
import EventsSearch from '@/components/events/events-search';

function AllEventsPage(props) {
	const router = useRouter();
	const allEvents = props.events;

	function findEventsHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	}

	return (
		<Fragment>
			<Head>
				<title>NextJS Events</title>
				<meta
					name='description'
					content='Find a lot of great events that allow you to evolve...'
				/>
			</Head>
			<EventsSearch onSearch={findEventsHandler} />
			<EventList items={allEvents} />
		</Fragment>
	);
}

export async function getStaticProps() {
	const allEvents = await getAllEvents();

	return {
		props: {
			events: allEvents,
		},
		revalidate: 60,
	};
}

export default AllEventsPage;
