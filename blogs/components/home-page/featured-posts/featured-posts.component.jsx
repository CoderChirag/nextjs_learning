import classes from './featured-posts.module.css';

import PostsGrid from '@/components/posts/posts-grid/posts-grid.component';

function FeaturedPosts(props) {
	return (
		<section className={classes.latest}>
			<h2>Featured Posts</h2>
			<PostsGrid posts={props.posts} />
		</section>
	);
}

export default FeaturedPosts;
