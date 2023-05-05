import '@/styles/globals.css';

import Layout from '@/components/layouts/layout/layout.component';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
