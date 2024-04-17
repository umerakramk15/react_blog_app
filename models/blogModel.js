import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },
    slug: {
      type: String,
      required: [true, "title is required"],
      unique: true,
    },
    description1: {
      type: String,
      required: true,
    },
    quote: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    endImage: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "category",
    },
  },
  { timestamps: true }
);

export default mongoose.model("blog", blogSchema);
