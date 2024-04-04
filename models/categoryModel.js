import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      unique: true,
    },
    slug: {
      type: String,
      required: [true, "title is required"],
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("category", categorySchema);
