import { Fragment, useContext } from 'react';

import NotificationContext from '@/store/notification.context';

import Navigation from '../navigation/navigation.component';
import Notification from '@/components/ui/notification';

const Layout = props => {
	const notificationCtx = useContext(NotificationContext);

	return (
		<Fragment>
			<Navigation />
			<main>{props.children}</main>
			{notificationCtx.notification && (
				<Notification
					title={notificationCtx.notification.title}
					message={notificationCtx.notification.message}
					status={notificationCtx.notification.status}
				/>
			)}
		</Fragment>
	);
};

export default Layout;
