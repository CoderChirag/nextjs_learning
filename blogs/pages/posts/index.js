import { Fragment } from 'react';
import Head from 'next/head';

import { getAllPosts } from '@/utils/posts.util';

import AllPosts from '@/components/posts/all-posts/all-posts.component';

function AllPostsPage(props) {
	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta
					name='description'
					content='A list of all programming-related tutorials and posts!'
				/>
			</Head>
			<AllPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const posts = getAllPosts();

	return {
		props: {
			posts,
		},
	};
}

export default AllPostsPage;
