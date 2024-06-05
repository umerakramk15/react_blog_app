import mongoose from "mongoose";

const postCommentModel = new mongoose.Schema(
  {
    comment: {
      type: String,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blog",
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("comment", postCommentModel);
