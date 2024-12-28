import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.DATABASE_URL);

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development, use a global variable so the MongoClient is not constantly recreated during hot reloading
  if (global._mongoClientPromise) {
    clientPromise = global._mongoClientPromise;
  } else {
    global._mongoClientPromise = client.connect();
    clientPromise = global._mongoClientPromise;
  }
} else {
  // In production, it's safe to not use a global variable
  clientPromise = client.connect();
}

export default clientPromise;
