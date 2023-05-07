import '@/styles/globals.css';
import Head from 'next/head';

import { NotificationContextProvider } from '@/store/notification.context';
import Layout from '@/components/layouts/layout/layout.component';

export default function App({ Component, pageProps }) {
	return (
		<NotificationContextProvider>
			<Layout>
				<Head>
					<meta
						name='viewport'
						content='width=device-width, initial-scale=1.0'
					/>
					<meta charSet='UTF-8' />
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<meta name='HandheldFriendly' content='true' />
					<meta name='MobileOptimized' content='320' />
					<meta name='theme-color' content='#000000' />
					<meta name='msapplication-TileColor' content='#000000' />
					<meta name='google' content='notranslate' />
					<meta
						name='referrer'
						content='no-referrer-when-downgrade'
					/>
					<meta
						name='title'
						content='Blogs website by Coder Chirag Jain'
					/>
					<meta
						name='description'
						content='Blogs website by Coder Chirag Jain'
					/>
					<meta
						name='keywords'
						content='Blogs, NextJS, ReactJS, JavaScript, HTML, CSS, TailwindCSS, NodeJS, ExpressJS, MongoDB, Mongoose, JWT, Authentication, Authorization, CRUD, REST API, API, Coder Chirag Jain'
					/>
					<meta name='author' content='Coder Chirag Jain' />
					<meta name='robots' content='index, follow' />
					<link rel='icon' href='/favicon.ico' />
				</Head>
				<Component {...pageProps} />
			</Layout>
		</NotificationContextProvider>
	);
}
