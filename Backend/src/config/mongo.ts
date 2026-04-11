import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI as string;

    await mongoose.connect(uri);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
