import { betterAuth } from "better-auth";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);
const db = client.db();
export const auth = betterAuth({
  // ... your existing config
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true
  }
});
