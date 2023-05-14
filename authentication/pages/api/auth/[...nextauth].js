import NextAuth from 'next-auth/next';
import Credentials from 'next-auth/providers/credentials';
import { connectDatabase, getAllDocuments } from '@/utils/db-util';
import { verifyPassword } from '@/utils/auth';

export default NextAuth({
	pages: {
		signIn: '/auth',
	},
	session: {
		strategy: 'jwt',
		maxAge: 2 * 60 * 60, // 2  hours
	},
	providers: [
		Credentials({
			async authorize(credentials) {
				let client;
				try {
					client = await connectDatabase();
				} catch (error) {
					throw new Error('Could not connect to database');
				}

				let user;
				try {
					user = await getAllDocuments(client, 'users', {
						email: credentials.email,
					});
				} catch (error) {
					client.close();
					throw new Error('Could not find user');
				}
				if (user?.length === 0) {
					client.close();
					throw new Error('No user found');
				}

				let validPassword;
				try {
					validPassword = await verifyPassword(
						credentials.password,
						user[0].password
					);
				} catch (error) {
					client.close();
					throw new Error('The password you entered is not valid');
				}
				if (!validPassword) {
					client.close();
					throw new Error('The password you entered is not valid');
				}

				client.close();
				return {
					id: user[0]._id,
					email: user[0].email,
				};
			},
		}),
	],
});
