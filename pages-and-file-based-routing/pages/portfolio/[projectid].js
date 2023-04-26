import { useRouter } from 'next/router';

function PortfolioProjectPage() {
	const router = useRouter();

	return (
		<div>
			<h1>The Portfolio Project Page</h1>
			<p>Pathname: {router.pathname}</p>
			<p>Projectid: {router.query.projectid}</p>
		</div>
	);
}

export default PortfolioProjectPage;
