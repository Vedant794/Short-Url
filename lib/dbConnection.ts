import mongoose from "mongoose";

const connection: { isConnected?: number } = {};

const dbConnect = async (dbName: string) => {
  try {
    if (connection.isConnected) {
      console.log("Using existing database connection");
      return;
    }

    const uri = `mongodb://localhost:27017/${dbName}`; // Dynamically set the database name
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    const db = await mongoose.connect(uri);
    connection.isConnected = db.connections[0].readyState;
    console.log(`Database Connected: ${dbName}`);
  } catch (error) {
    console.error("Database Connection Failed:", error);
    throw new Error("Failed to connect to the database");
  }
};

export default dbConnect;
