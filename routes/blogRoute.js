import express from "express";
const router = express.Router();

import { isAdmin, RequiresSignin } from "../middlewares/authMiddleware.js";
import {
  createBlogPostController,
  deleteleBlogPostController,
  getAllBlogPostController,
  getSingleBlogPostController,
  updateSingleBlogPostController,
} from "../controller/blogController.js";

// create post
router.post("/create-post", createBlogPostController);

// get all posts
router.get("/all-post", getAllBlogPostController);

// get single post
router.get("/single-post/:id", getSingleBlogPostController);

// update single post
router.put("/update-post/:id", updateSingleBlogPostController);

// delete  post
router.delete("/delete-post/:id", deleteleBlogPostController);

export default router;