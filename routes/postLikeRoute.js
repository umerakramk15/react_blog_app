import express from "express";
import {
  postLikeCountController,
  postLikeDeleteController,
  postLikeSetController,
} from "../controller/postLikeController.js";

const router = express.Router();

router.post("/set-like/:postId/:userId", postLikeSetController);
router.delete("/unset-like/:postId/:userId", postLikeDeleteController);
router.get("/like-count/", postLikeCountController);

export default router;
