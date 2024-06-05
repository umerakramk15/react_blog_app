import express from "express";
import { AddPostCommentController } from "../controller/postCommentController.js";

const router = express.Router();


router.post("/create-comment/:postId/:userId",AddPostCommentController)

export default router;
