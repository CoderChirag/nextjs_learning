import {
	connectDatabase,
	insertDocument,
	getAllDocuments,
} from '@/utils/db-util';
import { hashPassword } from '@/utils/auth';

async function handler(req, res) {
	if (req.method !== 'POST') {
		return;
	}
	const data = req.body;

	const { email, password } = data;

	if (!email?.trim()?.includes('@') || password?.trim()?.length < 7) {
		res.status(422).json({ message: 'Invalid input.' });
		return;
	}

	let client;
	try {
		client = await connectDatabase();
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database failed!' });
		return;
	}

	const existingUser = await getAllDocuments(client, 'users', { email });

	if (existingUser.length > 0) {
		client.close();
		return res.status(422).json({ message: 'User exists already!' });
	}

	const hashedPassword = await hashPassword(password);

	const newUser = {
		email,
		password: hashedPassword,
	};

	let result;
	try {
		result = await insertDocument(client, 'users', newUser);
		newUser._id = result.insertedId;
	} catch (error) {
		res.status(500).json({ message: 'Inserting data failed!' });
		client.close();
		return;
	}

	client.close();
	res.status(201).json({ message: 'Created user!', user: newUser });
}

export default handler;
