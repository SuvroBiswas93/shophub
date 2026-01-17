// src/lib/mongodb.js
import { MongoClient } from "mongodb";

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
  // Avoid creating multiple connections in dev (hot reload)
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // Production
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
