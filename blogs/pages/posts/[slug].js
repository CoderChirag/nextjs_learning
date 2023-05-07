import { Fragment } from 'react';
import Head from 'next/head';

import { getPostData, getPostFiles } from '@/utils/posts.util';

import PostContent from '@/components/posts/post-content/post-content.component';

function PostDetailPage(props) {
	return (
		<Fragment>
			<Head>
				<title>{props.post.title}</title>
				<meta name='description' content={props.post.excerpt} />
			</Head>
			<PostContent post={props.post} />
		</Fragment>
	);
}

export function getStaticPaths() {
	const postFileNames = getPostFiles();

	const slugs = postFileNames.map(fileName => fileName.replace(/\.md$/, ''));

	return {
		paths: slugs.map(slug => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export function getStaticProps(context) {
	const { params } = context;

	const { slug } = params;

	const postData = getPostData(slug);

	return {
		props: {
			post: postData,
		},
		revalidate: 600,
	};
}

export default PostDetailPage;
