import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    // console.log("process.env.MONGODB_URI ", process.env.MONGODB_URI)
    // console.log("ABC ", process.env.ABC)
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB connected `);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
