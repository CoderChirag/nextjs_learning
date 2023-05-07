import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

import PostHeader from '../post-header/post-header.component';

const PostContent = ({ post }) => {
	const imagePath = `/images/posts/${post.slug}/${post.image}`;

	const customRenderers = {
		img({ src, alt }) {
			return (
				<Image
					src={`/images/posts/${post.slug}/${src}`}
					alt={alt}
					width={600}
					height={300}
				/>
			);
		},
		p({ node, children }) {
			if (node.children[0].tagName === 'img') {
				const image = node.children[0];
				return (
					<div className={classes.image}>
						<Image
							src={`/images/posts/${post.slug}/${image.properties.src}`}
							alt={image.properties.alt}
							width={600}
							height={300}
						/>
					</div>
				);
			}
			return <p>{children}</p>;
		},
		code({ className, inline, children }) {
			const match = /language-(\w+)/.exec(className || '');
			return !inline && match ? (
				<SyntaxHighlighter
					style={dracula}
					language={match[1]}
					children={children}
				/>
			) : (
				<code className={className}>{children}</code>
			);
		},
	};

	return (
		<article className={classes.content}>
			<PostHeader title={post.title} image={imagePath} />
			<ReactMarkdown components={customRenderers}>
				{post.content}
			</ReactMarkdown>
		</article>
	);
};

export default PostContent;
