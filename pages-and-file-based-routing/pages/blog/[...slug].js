import { useRouter } from 'next/router';

function BlogPostsPage() {
	const router = useRouter();

	return (
		<div>
			<h1>The Blog Posts Page</h1>
			<p>Pathname: {router.pathname}</p>
			<p>Query: {JSON.stringify(router.query)}</p>
		</div>
	);
}

export default BlogPostsPage;
