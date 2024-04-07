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
      data: Buffer,
      contentType: String,
    },
    endImage: {
      data: Buffer,
      contentType: String,
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
