import express from "express";
const router = express.Router();
import formidable from "express-formidable";

import { isAdmin, RequiresSignin } from "../middlewares/authMiddleware.js";
import {
  createBlogPostController,
  deleteleBlogPostController,
  getAllBlogPostController,
  getSingleBlogPostController,
  updateSingleBlogPostController,
  getPostPhotoController,
} from "../controller/blogController.js";

// create post
router.post(
  "/create-post",
  RequiresSignin,
  isAdmin,
  formidable(),
  createBlogPostController
);

// get all posts
router.get("/all-post", getAllBlogPostController);

// get single post
router.get("/single-post/:slug", getSingleBlogPostController);

// update single post
router.put(
  "/update-post/:id",
  // RequiresSignin,
  // isAdmin,
  formidable(),
  updateSingleBlogPostController
);

// delete  post
router.delete(
  "/delete-post/:id",
  RequiresSignin,
  isAdmin,
  deleteleBlogPostController
);
// get single iamge
router.get("/get-post-photo/:id", getPostPhotoController);

export default router;
