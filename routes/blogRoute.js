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
  getfeaturePhotoController,
  getEndPhotoController,
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
router.get("/posts", getAllBlogPostController);

// get single post
router.get("/posts/:slug", getSingleBlogPostController);

// update single post
router.put(
  "/update-post/:id",
  RequiresSignin,
  isAdmin,
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
router.get("/get-feature-photo/:id", getfeaturePhotoController);
router.get("/photos_end/:id", getEndPhotoController);

export default router;
