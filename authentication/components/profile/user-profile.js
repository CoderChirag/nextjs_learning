import classes from './user-profile.module.css';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import ProfileForm from './profile-form';

function UserProfile() {
	// Redirect away if NOT auth
	const { data: session, status } = useSession();
	const router = useRouter();

	if (status === 'loading') {
		return <p className={classes.profile}>Loading...</p>;
	} else if (status === 'unauthenticated') {
		router.push('/auth');
	}
	return (
		<section className={classes.profile}>
			<h1>Your User Profile</h1>
			<ProfileForm />
		</section>
	);
}

export default UserProfile;
