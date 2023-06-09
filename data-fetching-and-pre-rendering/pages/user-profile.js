function UserProfilePage(props) {
	const { username } = props;

	return <h1>{username}</h1>;
}

export async function getServerSideProps(context) {
	const { params, req, res } = context;

	return {
		props: {
			username: 'coderchirag',
		},
	};
}

export default UserProfilePage;
