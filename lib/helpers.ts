import mongoose from "mongoose";

export default function getDb() {
  const db = mongoose.connection.db;
  if (!db) {
    throw new Error(
      "Database is not initialized. Ensure dbConnect() is called."
    );
  }
  return db;
}
