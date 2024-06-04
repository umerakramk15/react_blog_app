import express from "express";
const router = express.Router();
import { upload } from "../middlewares/multer.js";
import { isAdmin, RequiresSignin } from "../middlewares/authMiddleware.js";
import {
  createBlogPostController,
  deleteleBlogPostController,
  getAllBlogPostController,
  getSingleBlogPostController,
  updateFeaturedImage,
  updateSingleBlogPostController,
} from "../controller/blogController.js";

// create post
router.post(
  "/create-post",
  RequiresSignin,
  isAdmin,
  upload.fields([
    { name: "featuredImage", maxCount: 1 },
    { name: "endImage", maxCount: 1 },
  ]),
  createBlogPostController
);

// get all posts
router.get("/posts", getAllBlogPostController);

// get single post
router.get("/post/:slug", getSingleBlogPostController);

// update single post
router.put(
  "/update-post/:id",
  upload.fields([
    { name: "featuredImage", maxCount: 1 },
    { name: "endImage", maxCount: 1 },
  ]),
  // RequiresSignin,
  // isAdmin,
  // formidable(),
  updateSingleBlogPostController
);

router.put(
  "/update-featured-image/:id",
  upload.fields([{ name: "featuredImage", maxCount: 1 }]),
  updateFeaturedImage
);

// delete  post
router.delete(
  "/delete-post/:id",
  RequiresSignin,
  isAdmin,
  deleteleBlogPostController
);

export default router;
