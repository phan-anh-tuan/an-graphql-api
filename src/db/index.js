import { MongoClient } from 'mongodb';

// const MONGO_URL = 'mongodb://localhost:27017/graphql';
export default function connect() {
  return MongoClient.connect(process.env.MONGO_URL);
}
