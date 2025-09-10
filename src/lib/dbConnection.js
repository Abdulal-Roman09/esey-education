import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
console.log(uri)

function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db(process.env.MONGODB_USER).collection(collectionName);
}

export default dbConnect;
