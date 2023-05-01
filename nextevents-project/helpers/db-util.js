import { MongoClient } from 'mongodb';

export async function connectDatabase() {
	return await MongoClient.connect(process.env.MONGODB_BASE_URL);
}

export async function insertDocument(client, collection, document) {
	const db = client.db('nextevents', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		retryWrites: true,
		writeConcern: {
			w: 'majority',
			j: true,
			wtimeout: 1000,
		},
	});
	const result = await db.collection(collection).insertOne(document);
	return result;
}

export async function getAllDocuments(client, collection, filter, sort) {
	const db = client.db('nextevents', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		retryWrites: true,
		writeConcern: {
			w: 'majority',
			j: true,
			wtimeout: 1000,
		},
	});
	return await db
		.collection(collection)
		.find(filter || {})
		.sort(sort)
		.toArray();
}
