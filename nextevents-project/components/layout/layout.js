import { Fragment, useContext } from 'react';
import NotificationContext from '@/store/notification-context';
import MainHeader from './main-header';
import Notification from '../ui/notification';

function Layout(props) {
	const notificationCtx = useContext(NotificationContext);

	const activeNotification = notificationCtx.notification;

	return (
		<Fragment>
			<MainHeader />
			<main>{props.children}</main>
			{activeNotification && (
				<Notification
					title={notificationCtx.notification.title}
					message={notificationCtx.notification.message}
					status={notificationCtx.notification.status}
				/>
			)}
			{/* <Notification
				title='Test'
				message='Test Message'
				status='success'
			/> */}
		</Fragment>
	);
}

export default Layout;
