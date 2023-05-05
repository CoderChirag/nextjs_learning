import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src='/images/site/chirag.jpg'
					alt='An image showing Chirag'
					width={500}
					height={500}
					priority
				/>
			</div>
			<h1>Hi, I'm Chirag</h1>
			<p>
				I blog about web development - especially frontend frameworks
				like React.
			</p>
		</section>
	);
}

export default Hero;
