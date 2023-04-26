import { useEffect, useState } from 'react';

function LastSalesPage() {
	const [lastSales, setLastSales] = useState();
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		fetch(
			'https://nextjs-course-4f1b7-default-rtdb.firebaseio.com/last-sales.json'
		)
			.then(response => response.json())
			.then(data => {
				const lastSales = [];
				for (const key in data) {
					lastSales.push({
						id: key,
						username: data[key].username,
						volume: data[key].volume,
					});
				}
				console.log(lastSales);
				setLastSales(lastSales);
				setIsLoading(false);
			});
	}, []);

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (!lastSales) {
		return <p>No data yet.</p>;
	}

	return (
		<ul>
			{lastSales.map(sale => (
				<li key={sale.id}>
					{sale.username} - ${sale.volume}
				</li>
			))}
		</ul>
	);
}

export default LastSalesPage;
