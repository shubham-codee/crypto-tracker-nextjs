import { MongoClient } from "mongodb";


const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri, options);
  console.log("connecting to mongodb...");
  globalThis._mongoClientPromise = client.connect();
}

const clientPromise = globalThis._mongoClientPromise;

export default clientPromise;
