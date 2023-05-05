import { Fragment } from 'react';

import { getFeaturedPosts } from '@/utils/posts.util';

import Hero from '@/components/home-page/hero/hero.component';
import FeaturedPosts from '@/components/home-page/featured-posts/featured-posts.component';

function HomePage(props) {
	return (
		<Fragment>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();

	return {
		props: {
			posts: featuredPosts,
		},
	};
}

export default HomePage;
