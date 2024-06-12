import express from "express";
import {
  AddPostCommentController,
  deletePostCommentController,
} from "../controller/postCommentController.js";

const router = express.Router();

router.post("/create-comment/:postId/:userId", AddPostCommentController);
router.delete("/delete-comment/:id", deletePostCommentController);

export default router;
