import { Fragment } from 'react';
import Head from 'next/head';

import { getFeaturedPosts } from '@/utils/posts.util';

import Hero from '@/components/home-page/hero/hero.component';
import FeaturedPosts from '@/components/home-page/featured-posts/featured-posts.component';

function HomePage(props) {
	return (
		<Fragment>
			<Head>
				<title>Chirag's Blog</title>
				<meta
					name='description'
					content='I post about prgramming and web development'
				/>
			</Head>
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
