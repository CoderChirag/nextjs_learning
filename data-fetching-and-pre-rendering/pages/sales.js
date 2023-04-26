import useSWR from 'swr';

function SalesPage() {
	const fetcher = (...args) => fetch(...args).then(res => res.json());

	const { data, error, isLoading } = useSWR(
		'https://nextjs-course-4f1b7-default-rtdb.firebaseio.com/last-sales.json',
		fetcher
	);

	if (error || data?.error) return <div>Failed to load</div>;
	if (isLoading) return <div>Loading...</div>;
	return (
		<ul>
			{data.map(sale => (
				<li key={sale.id}>
					{sale.product} - {sale.price}
				</li>
			))}
		</ul>
	);
}

export default SalesPage;
