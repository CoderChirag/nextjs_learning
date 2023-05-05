import { getAllPosts } from '@/utils/posts.util';

import AllPosts from '@/components/posts/all-posts/all-posts.component';

function AllPostsPage(props) {
	return <AllPosts posts={props.posts} />;
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
