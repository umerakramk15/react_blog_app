import express from "express";
import {
  postLikeCheckController,
  postLikeCountController,
  postLikeDeleteController,
  postLikeSetController,
} from "../controller/postLikeController.js";

const router = express.Router();

router.post("/set-like/:postId/:userId", postLikeSetController);
router.get("/like-count/", postLikeCountController);
router.get("/check-like/:postId/:userId", postLikeCheckController);
router.delete("/unset-like/:postId/:userId", postLikeDeleteController);

export default router;
