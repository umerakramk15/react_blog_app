import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const dbUrl = await mongoose.connect(process.env.MONGODB_URL);
    console.log("Database Connected");
  } catch (error) {
    console.log("Something Error in Connecting MOngodb");
  }
};

export default connectDB;
