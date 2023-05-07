import classes from './contact-form.module.css';
import { useRef, useContext } from 'react';

import NotificationContext from '@/store/notification.context';

const ContactForm = () => {
	const notificationCtx = useContext(NotificationContext);

	const nameInputRef = useRef();
	const emailInputRef = useRef();
	const messageInputRef = useRef();

	function sendMessageHandler(event) {
		event.preventDefault();
		// optional: add client-side validation
		const email = emailInputRef.current.value;
		const name = nameInputRef.current.value;
		const message = messageInputRef.current.value;

		notificationCtx.showNotification({
			title: 'Sending message...',
			message: 'Your message is on its way!',
			status: 'pending',
		});

		fetch('/api/contact', {
			method: 'POST',
			body: JSON.stringify({
				email,
				name,
				message,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				if (response.ok) {
					return response.json();
				}
				return response.json().then(data => {
					throw new Error(data.message || 'Something went wrong!');
				});
			})
			.then(data => {
				notificationCtx.showNotification({
					title: 'Success!',
					message: 'Message sent successfully!',
					status: 'success',
				});
			})
			.catch(error => {
				notificationCtx.showNotification({
					title: 'Error!',
					message: error.message || 'Something went wrong!',
					status: 'error',
				});
			});
	}

	return (
		<section className={classes.contact} onSubmit={sendMessageHandler}>
			<h1>How can I help you?</h1>
			<form className={classes.form}>
				<div className={classes.controls}>
					<div className={classes.control}>
						<label htmlFor='email'>Your Email</label>
						<input
							type='email'
							id='email'
							required
							ref={emailInputRef}
						/>
					</div>
					<div className={classes.control}>
						<label htmlFor='name'>Your Name</label>
						<input
							type='text'
							id='name'
							required
							ref={nameInputRef}
						/>
					</div>
				</div>
				<div className={classes.control}>
					<label htmlFor='message'>Your Message</label>
					<textarea
						id='message'
						rows='5'
						ref={messageInputRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Send Message</button>
				</div>
			</form>
		</section>
	);
};

export default ContactForm;
