import { connectDatabase, insertDocument } from '@/utils/db.util';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const data = req.body;
		const { email, name, message } = data;
		if (!email?.includes('@') || !name?.trim() || !message?.trim()) {
			res.status(422).json({ message: 'Invalid input.' });
			return;
		}
		// Store it in a database
		const newMessage = {
			email: data.email,
			name: data.name,
			message: data.message,
		};

		let client;
		try {
			client = await connectDatabase();
		} catch (error) {
			console.log(error);
			res.status(500).json({
				message: 'Connecting to the database failed!',
			});
			return;
		}

		try {
			await insertDocument(client, 'messages', newMessage);
			client.close();
		} catch (error) {
			res.status(500).json({ message: 'Inserting data failed!' });
			return;
		}

		res.status(201).json({
			message: 'Successfully stored message!',
			data: newMessage,
		});
	}
}
